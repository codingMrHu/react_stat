import React, { useState } from "react";
import ReactECharts from 'echarts-for-react';
import { Button, Modal } from "antd";
import { Table, Tag, Space } from 'antd';


const Page: React.FC = (props) => {
  const { item,type } = props;
  console.log('pppppppppp---',item);
  const x_data = [];
  const y_increse = [];
  const y_all = [];
  for (var i = 0;i <= item.project_list.length - 1; i++) {
    x_data.push(item.project_list[i].stat_date);
    y_increse.push(item.project_list[i].count_increase);
    y_all.push(item.project_list[i].count_all);

  }
  let y_data = []
  if(type=='increase'){
    y_data = y_increse;
  }else if(type=='all'){
    y_data = y_all;
  }
  const options = {
    title: {
        text: item.project_name+"--"+item.username,
        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
   tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: x_data,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '数量',
            type: 'bar',
            barWidth: '60%',
            label: {
                show: true,
                position: 'inside'
            },
            data: y_data
        }
    ]
  };
  return(
    <div>
      <ReactECharts option={options} />
    </div>
    );
};

const Page2 = (props) =>{
  const { item,type } = props;
  const columns = [
    {
      title: '日期',
      dataIndex: 'stat_date',
      key: 'stat_date',
    },
    {
      title: '增量',
      dataIndex: 'count_increase',
      key: 'count_increase',
    },
    {
      title: '全量',
      dataIndex: 'count_all',
      key: 'count_all',
    }
  ];

return(
  <div>
  <h4>{item.project_name+"--"+item.username}</h4>
  <Table columns={columns} dataSource={item.project_list} />
  </div>)

}

export default function TodoItem(props) {
  const { item,type } = props;
  const project_list = item.project_list;
  if(type!='table'){
    return (
      <Page item={item} type={type}></Page>
    );
  }else{
    return (
      <Page2 item={item} type={type}></Page2>
    );
  }
}
