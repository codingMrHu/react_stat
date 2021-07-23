import logo from './logo.svg';
// import 'antd/dist/antd.css';
import './App.css';
import * as Api from './http_request/Api';

import React,{useState,useEffect} from 'react';
import { Button, Radio } from "antd";
import TodoList from "./todo_list/list";

export default () => {
  let loginInfo = {
    method: 'get',
    data: {
    username: 'husong'
    }
    }
  const [dataList, setDataList] = useState([]);
  const [type,setTable] = useState('table');

  useEffect(() => {
    Api.getRecord(loginInfo).then((response) => {
      if(response.data.code){
        setDataList(response.data.data);
      }

    }).catch((error)=>{
      // error something
  })
  },[]);

  return (
    <div>
        <div className="Type-Radio" >
         <Radio.Group value={type} >
            <Radio.Button value="table" onClick={() => setTable("table")}>数据表格</Radio.Button>
            <Radio.Button value="increase" onClick={() => setTable("increase")} >增量图</Radio.Button>
            <Radio.Button value="all" onClick={() => setTable("all")}>全量图</Radio.Button>
          </Radio.Group>
        </div>

      <div>
        <TodoList dataList={dataList} graphType={type} ></TodoList>
      </div>

    </div>
    );
};
