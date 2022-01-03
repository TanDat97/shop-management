import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: process.env.MANAGEMENT_API + '/product',
    method: 'get',
    params: query
  })
}

export function fetchDetail(id) {
  return request({
    url: process.env.MANAGEMENT_API + '/product/' + id,
    method: 'get'
  })
}

export function create(isEdit, data) {
  const path = isEdit ? '/' + data.id : ''
  return request({
    url: process.env.MANAGEMENT_API + '/product' + path,
    method: isEdit ? 'put' : 'post',
    data: data
  })
}

export function deleteProduct(id) {
  return request({
    url: process.env.MANAGEMENT_API + '/product/delete/' + id,
    method: 'delete'
  })
}
