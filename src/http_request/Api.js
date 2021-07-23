/*
* @Author: husong
* @Date:   2021-07-22 14:18:23
* @Last Modified by:   husong
* @Last Modified time: 2021-07-22 16:23:10
*/
import axios from 'axios';
import * as apiUrl from './ApiURL';
import {notification} from 'antd';

const key = 'keepOnlyOne';

/**
 *  接口请求数据时执行的方法
 *  接受参数为请求的路径apiUrl、请求接口配置参数configObj
 *
 * @param {String} apiUrl            用户传入的请求路径
 * @param {Object} configObj        用户传入的接口参数
 */
function getDataFromServer(apiUrl, configObj) {

    //用户传入的接口配置参数
    let {
        method = 'GET',
        params = {},
        data = {},
        timeout = 5000
    } = configObj;

    /**
     * 返回的Promise对象含有then、catch方法
     */
    return new Promise(function (resolve, reject) {
        axios({
            url: apiUrl,
            method: method,
            params: params,
            data: data,
            timeout: timeout,
            headers: {
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem('token') || ''
            }
        }).then(function (response) {
            if(response){
                if (response.data && response.data.code) {
                    resolve(response);
                }else {
                    notification.error({
                        key,
                        message: '操作失败',
                        description: '返回的数据格式有误'
                    });
                    resolve(response);
                }
            }else {
                //处理特殊的情况就是response返回什么也没有
                notification.error({
                    key,
                    message: '操作失败',
                    description: '服务器错误'
                });
                resolve(response);
            }
        }).catch(function (error) {
            notification.error({
                key,
                message: '操作失败',
                description: '网络异常,请稍后重试'
            });
            reject(error);
        })
    })
}


export function getStat(configObj) {
    return getDataFromServer(apiUrl.Stat, configObj);
}

export function getRecord(configObj) {
    return getDataFromServer(apiUrl.Record, configObj);
}
