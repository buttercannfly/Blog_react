import React, {Component} from 'react';
import './App.css';
// import { connnect } from 'dva';
// import codeblock from "./Codeblock";
import List_blog from './List';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route,Redirect} from 'react-router-dom';
// import axios from 'axios';
// import mock from './Data';
// console.log(mock.mock.toString)
const { Header, Content } = Layout;

// class App extends Component {
  
//   render(){
//     constructor(){
//       super()
//       this.state={
//         totalData:''
//       }
//     }
    
//     handleclick(){
//       fetch('./data.json', {
//         method: "GET",
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//           },
       
//       })
//       .then(response => response.json())//解析为Promise
//       .then(data => {
      
//       this.setState({totalData: data})  ////赋值到本地数据
//       console.log(this.state.totalData)
  
//     })
//     }
//   componentDidMount(){
//     this.handleclick()
//   }
//     return (
//       <Layout className="layout">
//     <Header>
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={['2']}
//         style={{ lineHeight: '64px' }}
//       >
//         <Menu.Item key="1" onClick={this.getData.bind(this)}>主页</Menu.Item>
//         <Menu.Item key="2">文章列表</Menu.Item>
//         <Menu.Item key="3">图库</Menu.Item>
//       </Menu>
//     </Header> 
//     <Content style={{ padding: '0 50px' }}>
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item href="https://www.baidu.com"><Icon type="home"/></Breadcrumb.Item>
//         <Breadcrumb.Item>博客</Breadcrumb.Item>
//         {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
//       </Breadcrumb>
//       <div style={{ background: '#fff', padding: 24, minHeight: 580 }}><List_blog/></div>
//     </Content>
//     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//   </Layout>
//     )
//   }
//   mountNode
// }
class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       totalData:''
//     }
//   }
   
  
//   handleclick(){
//     fetch('./data.json', {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//         },
     
//     })
//     .then(response => response.json())//解析为Promise
//     .then(data => {
    
//     this.setState({totalData: data})  ////赋值到本地数据
//     console.log(this.state.totalData)
//     console.log(this.state.totalData['data'])

//   })
//   }
// componentDidMount(){
//   this.handleclick()}
render(){
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {/* <Menu.Item key="1">主页</Menu.Item>
        <Menu.Item key="2">文章列表</Menu.Item>
        <Menu.Item key="3">图库</Menu.Item> */}
      </Menu>
    </Header>
    <Route path='/home'>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item href="https://www.baidu.com"><Icon type="home"/></Breadcrumb.Item>
        <Breadcrumb.Item>博客</Breadcrumb.Item>
        {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 580 }}><List_blog ></List_blog></div>
    </Content></Route> 
    {/* <Route path="/new">New</Route>   */}
    {/* <Footer style={{ textAlign: 'center' }}>blog ©2020 Created by Zwk</Footer> */}
    <Redirect to='/home' from='/'/>
  </Layout>
  
  );
}
mountNode
}
export default App;
