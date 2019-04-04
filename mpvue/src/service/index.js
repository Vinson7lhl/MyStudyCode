const basic_domain_name = {
  product: 'product_domain',
  pre: 'pre_domain',
  dev: 'dev_domain'
}

const base_domain = basic_domain_name.dev

const api_obj = {
  test1: `${base_domain}/getProductList`,
  test2: `${base_domain}/loginUser`
}

export default api_obj
