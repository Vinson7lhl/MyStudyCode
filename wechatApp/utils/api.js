const BASE_DOMAIN = {
    'test': 'https://test/',
    'dev': 'https://dev/',
    'pre': 'https://pre/',
    'rel': 'https://rel/'
}

const CURRENT_DOMAIN = BASE_DOMAIN.test

const SERVER_API = {
    // 获取产品列表
    'get_proudct_list': CURRENT_DOMAIN + 'getAllProductList',
    // 获取产品详情
    'get_proudct_detail': CURRENT_DOMAIN + 'getProductDetail',
    // 登录请求
    'post_login': CURRENT_DOMAIN + 'postLogin',
    // 推出登录请求
    'post_login_out': CURRENT_DOMAIN + 'postLoginOut'
}

module.exports = SERVER_API