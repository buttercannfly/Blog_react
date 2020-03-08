import {List,  Icon} from 'antd';
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import Md from './md';
import { Link } from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json';



const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
class List_blog extends Component{
  constructor(){
    super()
    this.state={
      totalData:'',
      listData:[],
      md:''
    }
  }
  handleclick(){
    fetch('./title.json', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
     
    })
    .then(response => response.json())//解析为Promise
    .then(data => {
    
    this.setState({totalData: data})  ////赋值到本地数据
    var list = [];
    for(let i=0; i<this.state.totalData['data'].length; i++){//自动获取
      list.push({
        title:this.state.totalData['data'][i],
        content:this.state.totalData['data'][i],
        order:i,
      });
    }
    this.setState({listData:list})
  })
  }
componentDidMount(){
  this.handleclick()
}
    render(){
        return(
            <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={this.state.listData}
            // footer={
            //   <div>
            //     <b>butter&bentleyoma</b> 
            //   </div>
            // }
            renderItem={item => (
              <Link to={'/article/'+item.order}>
              <List.Item 
                key={item.title}
              >
                <List.Item.Meta/>
                {item.title}
                {/* {item.content}s */}
              </List.Item>
              {/* <Route path='/article/:order_id' component={Md}/> */}
              </Link>
              
            )}
          /> 
        )
    }
    mountNode
}
export default List_blog 