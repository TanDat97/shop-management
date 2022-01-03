import request from '@/utils/request'

export function fetchListCommonCategory() {
  return request({
    url: process.env.MANAGEMENT_API + '/category/list-common',
    method: 'get',
  })
}