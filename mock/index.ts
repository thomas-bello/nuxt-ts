interface MockData {
  [key: string]: any
}

export default {
  '/i18n/en': {
    icpNumber: 'ICP 17165430号',
    companyName: 'SHENZHEN XXXXX',
    phone: '(0755) 8657 6905',
    email: 'bello@belloai.com',
    address: 'SHENZHEN XXXXX address',
  },
  '/i18n/zh': {
    icpNumber: '粤ICP备17165430号',
    companyName: '深圳呗佬智能有限公司',
    phone: '(0755) 8657 6905',
    email: 'bello@belloai.com',
    address: '深圳市 南山区 华润大厦2楼 202',
  },
  '/i18n/zh-hk': {
    icpNumber: 'HK 粤ICP备17165430号',
    companyName: 'HK 深圳呗佬智能有限公司',
    phone: '(0755) 8657 6905',
    email: 'bello@belloai.com',
    address: 'HK 深圳市 南山区 华润大厦2楼 202',
  },
} as MockData
