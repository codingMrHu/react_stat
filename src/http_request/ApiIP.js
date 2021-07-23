/*
* @Author: husong
* @Date:   2021-07-22 14:15:59
* @Last Modified by:   husong
* @Last Modified time: 2021-07-22 15:19:42
*/
//获取当前的URL中的地址，同时携带端口号,不携带http://
let projectAddrass = window.location.host;
let projectAddrassNoPort = window.location.hostname;
//返回当前的URL协议,既http协议还是https协议
export const ApiIP = 'http://192.168.101.16:5051/';