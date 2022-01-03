import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: process.env.MANAGEMENT_API + '/product',
    method: 'get',
    params: query
  })
}

export function fetchDetail(product_id) {
  return request({
    url: process.env.MANAGEMENT_API + '/product/' + product_id,
    method: 'get'
  })
}

export function create(isEdit, data) {
  const path = isEdit ? '/' + data.product_id : ''
  return request({
    url: process.env.MANAGEMENT_API + '/product' + path,
    method: isEdit ? 'put' : 'post',
    data: data
  })
}

export function deleteProduct(product_id) {
  return request({
    url: process.env.MANAGEMENT_API + '/product/delete/' + product_id,
    method: 'delete'
  })
}
