import request from '../utils/request'


export function getBillList(params) {
    return request({
      url: '/billService',
      method: 'get',
      params: params
    })
  }