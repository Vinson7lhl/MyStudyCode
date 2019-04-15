import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()
// 超时限制
fly.config.timeout = 5000

// 基本域名
const basic_domain_name = {
  product: 'product_domain',
  pre: 'pre_domain',
  dev: 'dev_domain'
}
// 切换域名
const base_domain = basic_domain_name.dev

console.log('当下环境：')
console.log(process.env.BASIC_DOMAIN)

const api_obj = {
  test1: `${base_domain}/getProductList`,
  test2: `${base_domain}/loginUser`
}

export default function baseHttpRequest (url, type, param = {}) {
  switch (type) {
    case 'get':
      fly.get(url, param)
        .then(function (response) {
          console.log(response)
          return response
        })
        .catch(function (error) {
          console.log(error)
        })
      break
    case 'post':
      fly.post(url, param)
        .then(function (response) {
          console.log(response)
          return response
        })
        .catch(function (error) {
          console.log(error)
        })
      break
  }
}
// export default api_obj
