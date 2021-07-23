import React, { useEffect,useState } from "react";
import { List,Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import TodoItem from "../item";


export default function TodoList(props) {
  const { dataList,graphType} = props;
  console.log('ddddddddddd------',dataList);
  // const [dataList, setDataList] = useState([]);
  // const [current, setTable] = useState('increase');
  // useEffect(() => {
  //     setTable(current);
  // },[]);

  return (
    <div>

      <List size="large"
        bordered
        dataSource={dataList}
        renderItem={(item) => (
          <List.Item>
            <TodoItem
              item={item}
              type={graphType}
            ></TodoItem>
          </List.Item>
        )}/>

    </div>
  );
}
