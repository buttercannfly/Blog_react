# 存储和缓冲管理  
## 实验目的  
实现一个简易的存储和缓冲管理器   
***
### 缓冲区和页面  
缓冲区Buffer代表了在主存中的空间  
缓冲区由frame组成  
frame由下面的数据结构表示
```cpp
#define FRAMESIZE 4096
    struct bFrame{
        Char field[FRAMESIZE];
    };
```  
缓冲区buffer数组(array)会存储一系列frame(存储已装载的page)，这个array如下所示：  
```cpp
    #define DEFBUFSIZE 1024
    bFrame buf[DEFBUFSIZE]
```  
***  
### 页面Page格式  
在这个项目中，我们不需要提及page的具体结构。只关心页面id和页面大小，所以不需要设计页面格式。  
### 文件File格式  
我们建议使用基于目录的结构区组织数据库文件。每个文件都有一个起始页(它包含了指向文件所有页的指针)，使用基于目录的好处在于当指定某一个特定页面时，这样更加快捷。  
### 缓冲技术(Buffer Technique)  
我们选择LRU作唯一的置换算法，好处自然不必多说  
### 哈希技术(Hashing Technique)  
对于缓冲中的每个frame，都必须要有一个BCB被保存(buffer control block)。它包含了一个page_id,frame_id,fix_count,dirty_bit.  
两个哈希表需要被保存，第一个是page_id对应frame_id和BCB,第二个是frame_id对应page_id.  
我们建议使用简单的静态哈希技术。  
哈希函数会像是  
H(K)=(page_id)%buffer_size  
对于page_id到BCB的哈希表会像是：BCB hTable[BufferSize]  
对于frame_id到page_id的哈希表会像是：int hTable[BufferSize]  
```cpp
struct BCB{
    BCB();
    int page_id;
    int frame_id;
    int count;
    int dirty;
    BCB *next;
};
```  
***
### 文件存储  
在此项目中，我们只需要磁盘上的一个物理文件，所有数据库中的数据都会存在这一个文件中，命名为data.dbf.  
### 类设计  
#### <font color="green">数据存储管理类</font>  
```cpp
class DSMgr{
    public:
        DSMgr();
        int OpenFile(String filename);
        int CloseFile();
        bFrame ReadPage(int page_id);
        int WritePage(int frame_id, bFrame frm);
        int Seek(int offset, int pos);
        FILE * GetFile();
        void IncNumPages();
        int GetNumPages();
        void SetUse(int index, int use_bit);
        int GetUse(int index);
    private:
        FILE *currFile;
        int numPages;
        int Pages[MAXPAGES];
}
``` 
#### <font color="green">缓冲区管理</font>  
```cpp
class BMgr{
    public:
        BMgr();
        int FixPage(int page_id, int prot);
        void NewPage FixNewPage();
        int UnfixPage(int page_id);
        int NumFreeFrames();
        int SelectVictim();
        int Hash(int page_id);
        void RemoveBCB(BCB * ptr,int page_id);
        void RemoveLRUEle(int frid);
        void SetDirty(int frame_id);
        void UnsetDirty(int frame_id);
        void WriteDirtys();
        PrintFrame(int frame_id);
    private:
        int ftop[DEFBUFSIZE];
        BCB * ptof[DEFBUFSIZE];
}
```  
***
## 对类中函数的解释(顶奥)  
## 缓冲类接口函数
* FixPage(int page_id,int prot)  
   > 原型FixPage(Page_id,protection)，返回一个frame_id.这个函数是为了判断页面是否存在于缓冲区，并返回对应的frame_id；如果这个页面并不在缓冲区内，它会选择一个victim page(牺牲页？)，如果需要的话，将它载入。
* FixNewPage()  
  >原型FixNewPage()，返回一个page_id和frame_id。这个函数在插入(索引分割、对象创建)时，需要一个新页面。这个函数会找到一个空页面供上层使用。
* UnfixPage(int page_id)
  > 原型UnfixPage(int page_id)，返回一个frame_id.这个函数是前两个函数的补足。这个函数会消耗frame上的fix count，如果count减少至0，如果被选中的话这个frame可以被移除，page_id 变换成frame_id，并且可以被选成牺牲页，如果该页面上的count已经降低至0.
* NumFreeFrames()
  >这个函数查看缓冲区，返回缓冲区中可以被使用的页面的个数
* SelectVictim()
    > 这个函数选择一个frame被取代。如果被选择frame的dirty位已经被置，那么这个页面需要被写回磁盘。
* Hash(int page_id)
  > 返回frame_id
* RemoveBCB(BCB *ptr, int page_id)
  > 这个函数根据page_id从数组中移除BCB。仅当SelectVictim()函数需要替换一个frame。
* RemoveLRUEle(int frid)
  > 从列表中移除LRU元素？？？
* SetDirty(int frame_id)
  > 设置frame_id的脏位。脏位是用来知道是否要将frame写出。bit=1->will be written,otherwise will not be written
* UnsetDirty(int frame_id)
  > 设置frame_id的脏位为0.当setDirty函数被调用，但是该页面在当前还有联系，在这种情况下，该页面不需要被写回，因为他不想现在被保存。
* WriteDirtys()
  > 这个函数只有当系统关机时调用，这个函数将会把所有脏位为1的页面写回内存
* PrintFrame(int frame_id)
  > 根据frame_id打印frame内容
***
## 数据存储类接口函数
* OpenFile(string filename)
    >任何时间，当一个文件需要被读或者写，根据文件名打开文件
* CloseFile()
    >当数据文件需要被关闭调用
* ReadPage(int page_id)
    >被缓冲区管理的FixPage调用，返回他已经读到的内容。这个函数调用fseek()和fread()去从一个文件中获取数据
* WritePage(int frame_id, bFrame frm)
    >每当一个页面从缓冲区中调出，这个函数就会被调用。返回已经写了多少字节，这个函数采用fseek和fwrite往file里写文件
* Seek(int offset, int pos)
    >移动文件指针
* GetFile()
    >获取当前文件
* IncNumPages()
    > 增加page计数
* GetNumPages()
    >返回page计数
* SetUse(int page_id, int use_bit)
  > 有个数组保存被使用的页面，这个函数设置指定页面的被使用位
* GetUse(int page_id)
    >返回指定page_id的使用位
***
![alt ](草图.png)
