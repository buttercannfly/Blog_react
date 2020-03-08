import React, {Component} from 'react';
import './App.css';
import codeblock from "./Codeblock";
// import Newmd from "./markdown/new.md";
import ReactMarkdown from 'react-markdown';
// import { Route } from 'react-router-dom';
class Md extends Component{
  // state = {
  //   markdown: '',
  // };
  constructor(){
    super()
    this.state={
      totalData:''
    }
  }
  init(){
    var index = this.props.match.params.order_id
    console.log(index)
    fetch('./data.json', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
     
    })
    .then(response => response.json())//解析为Promise
    .then(data => {
    this.setState({totalData: data['data'][index]})  ////赋值到本地数据
    console.log(this.state.totalData)
  }
    )}
  componentWillMount() {
    this.init();
  }
  render(){
    // const { markdown } = this.state.totalData;

    return(
      // <Route component={Md} path='/good'>
      <ReactMarkdown
        source={this.state.totalData}
        escapeHtml={false}
        renderers={{
        code:codeblock,
    }}
/>
// </Route>
    )
  }
}

export default Md;