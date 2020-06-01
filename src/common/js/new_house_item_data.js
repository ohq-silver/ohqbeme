/* eslint-disable camelcase */
const image_data = [
  {
    imageUrl: require('../../common/images/house20.jpg')
  },
  {
    imageUrl: require('../../common/images/house21.jpg')
  },
  {
    imageUrl: require('../../common/images/house22.jpg')
  },
  {
    imageUrl: require('../../common/images/house23.jpg')
  }
]
const line_data = [
  {
    name: '小区名称',
    data: '晓园新村晓园新'
  },
  {
    name: '所在区域',
    data: '海珠  昌岗'
  },
  {
    name: '看房时间',
    data: '可看时间请咨询经纪人'
  },
  {
    name: '房屋编号',
    data: '19111117510100131027'
  }
]
const base_middle_data = [
  {
    title: '房屋户型',
    content: '2室1厅1卫'
  },
  {
    title: '建筑面积',
    content: '56.04㎡'
  },
  {
    title: '套内面积',
    content: '53.1㎡'
  },
  {
    title: '房屋朝向',
    content: '北'
  },
  {
    title: '装修情况',
    content: '简装'
  },
  {
    title: '产权权限',
    content: '70年'
  }
]
const base_right_data = [
  {
    title: '所在楼层',
    content: '高楼层(共8层)'
  },
  {
    title: '户型结构',
    content: '平层'
  },
  {
    title: '建筑类型',
    content: '塔楼'
  },
  {
    title: '建筑结构',
    content: '钢混结构'
  },
  {
    title: '梯户比例',
    content: '一梯四户'
  }
]
const transaction_middle_data = [
  {
    title: '挂牌时间',
    content: '2019年11月11日'
  },
  {
    title: '上次交易',
    content: '暂无数据'
  },
  {
    title: '房屋年限',
    content: '暂无数据'
  },
  {
    title: '抵押信息',
    content: '暂无数据'
  }
]
const transaction_right_data = [
  {
    title: '交易权属',
    content: '商品房'
  },
  {
    title: '房屋用途',
    content: '普通住宅'
  },
  {
    title: '产权所属',
    content: '共有'
  },
  {
    title: '房本备件',
    content: '已上传房本照片'
  }
]
const characteristic_data = [
  {
    title: '核心卖点',
    content: '北向采光好 楼梯低楼层 户型方正实用'
  },
  {
    title: '周边配套',
    content: '配套齐全 配套有礼岗（省口腔医院）公交站，昌岗地铁站，走路五百米即可到达泰宁菜市场，步行八百米到达万科里广场广医二院、广东省口腔科医院、珠江医院。购物商圈成熟，江南西、香江家居、万科里、燕汇广场（华润万家）泰宁市场等'
  },
  {
    title: '交通出行',
    content: '地铁：700米到达广州地铁二号线昌岗站，广州地铁八号线昌岗站，公交：400米省口腔医院站186路，244路，244a路，530路.780路.B9路等等'
  },
  {
    title: '税费解析',
    content: '此房产权过五年，如果是首套购房需要1%契税，如果是二套购房需要3%契税'
  }
]
const detail_item_data = [
  {
    title: '客厅',
    place: '18.03平米',
    position: '北',
    window: '普通窗'
  },
  {
    title: '卧室A',
    place: '10.58平米',
    position: '南',
    window: '普通窗'
  },
  {
    title: '卧室B',
    place: '9.17平米',
    position: '北',
    window: '普通窗'
  },
  {
    title: '厨房',
    place: '2.54平米',
    position: '东',
    window: '普通窗'
  },
  {
    title: '卫',
    place: '2.78平米',
    position: '北',
    window: '普通窗'
  },
  {
    title: '阳台',
    place: '3.12平米',
    position: '东北',
    window: '普通窗'
  }
]
const table_data = [
  {
    time: '2019-12-10',
    name: '张建',
    ask: '4008255776转71607',
    totalNum: '1次'
  },
  {
    time: '2019-12-09',
    name: '李文博',
    ask: '4008255776转97880',
    totalNum: '1次'
  },
  {
    time: '2019-12-02',
    name: '邓珠勤',
    ask: '4008313196转46008',
    totalNum: '1次'
  },
  {
    time: '2019-12-10',
    name: '张建',
    ask: '4008255776转71607',
    totalNum: '1次'
  },
  {
    time: '2019-12-09',
    name: '李文博',
    ask: '4008255776转97880',
    totalNum: '1次'
  },
  {
    time: '2019-12-02',
    name: '邓珠勤',
    ask: '4008313196转46008',
    totalNum: '1次'
  }
]
const quarters_details_controduction_data =
    [
      {
        title: '小区均价',
        content: '29439 元/㎡'
      },
      {
        title: '建筑年代',
        content: '2019年建成'
      },
      {
        title: '建筑类型',
        content: '塔楼'
      },
      {
        title: '楼栋总数',
        content: '51栋'
      }
    ]
const money_type_data =
    [
      {
        title: '净首付',
        content: '556,000',
        classNum: 'one'
      },
      {
        title: '税费合计',
        content: '91,000',
        classNum: 'two'
      },
      {
        title: '增值税',
        content: '0',
        classNum: 'three'
      },
      {
        title: '增值税附加',
        content: '0',
        classNum: 'four'
      },
      {
        title: '契税',
        content: '15770',
        classNum: 'five'
      },
      {
        title: '个人所得税',
        content: '75400',
        classNum: 'six'
      }
    ]
const monthly_supply_data =
    [
      {
        title: '月供（等额本息）',
        content: '3882'
      },
      {
        title: '月供（等额本金）',
        content: '5019'
      }
    ]
const proportionOfCommercialLoans_data =
    [
      {
        label: '70%',
        value: '70%'
      },
      {
        label: '65%',
        value: '65%'
      },
      {
        label: '60%',
        value: '60%'
      },
      {
        label: '55%',
        value: '55%'
      },
      {
        label: '50%',
        value: '50%'
      },
      {
        label: '45%',
        value: '45%'
      },
      {
        label: '40%',
        value: '40%'
      },
      {
        label: '35%',
        value: '35%'
      },
      {
        label: '30%',
        value: '30%'
      },
      {
        label: '25%',
        value: '25%'
      },
      {
        label: '20%',
        value: '20%'
      },
      {
        label: '15%',
        value: '15%'
      },
      {
        label: '10%',
        value: '10%'
      },
      {
        label: '5%',
        value: '5%'
      }
    ]
const businesscreditAge_data =
    [
      {
        label: '30年',
        value: '30年'
      },
      {
        label: '29年',
        value: '29年'
      },
      {
        label: '28年',
        value: '28年'
      },
      {
        label: '27年',
        value: '27年'
      },
      {
        label: '26年',
        value: '26年'
      },
      {
        label: '25年',
        value: '25年'
      },
      {
        label: '24年',
        value: '24年'
      },
      {
        label: '23年',
        value: '23年'
      },
      {
        label: '22%',
        value: '22%'
      },
      {
        label: '21年',
        value: '21年'
      },
      {
        label: '20年',
        value: '20年'
      },
      {
        label: '19年',
        value: '19年'
      },
      {
        label: '18年',
        value: '18年'
      },
      {
        label: '17年',
        value: '17年'
      },
      {
        label: '16年',
        value: '16年'
      },
      {
        label: '15年',
        value: '15年'
      },
      {
        label: '14年',
        value: '14年'
      },
      {
        label: '13年',
        value: '13年'
      },
      {
        label: '12年',
        value: '12年'
      },
      {
        label: '11年',
        value: '11年'
      },
      {
        label: '10年',
        value: '10年'
      },
      {
        label: '9年',
        value: '9年'
      },
      {
        label: '8年',
        value: '8年'
      },
      {
        label: '7年',
        value: '7年'
      },
      {
        label: '6年',
        value: '6年'
      },
      {
        label: '5年',
        value: '5年'
      },
      {
        label: '4年',
        value: '4年'
      },
      {
        label: '3年',
        value: '3年'
      },
      {
        label: '2年',
        value: '2年'
      },
      {
        label: '1年',
        value: '1年'
      }
    ]
const commercialLendingRate_data =
    [
      {
        label: '基准利率(4.9%)',
        value: '4.9%'
      },
      {
        label: '基准利率9折(4.41%)',
        value: '4.41%'
      },
      {
        label: '基准利率95折(4.655%)',
        value: '4.655%'
      },
      {
        label: '基准利率上浮5%(5.145%)',
        value: '5.145%'
      },
      {
        label: '基准利率上浮10%(5.39%)',
        value: '5.39%'
      },
      {
        label: '基准利率上浮15%(5.635%)',
        value: '5.635%'
      },
      {
        label: '基准利率上浮20%(5.88%)',
        value: '5.88%'
      },
      {
        label: '基准利率上浮25%(6.125%)',
        value: '6.125%'
      },
      {
        label: '基准利率上浮30%(6.37%)',
        value: '6.37%'
      },
      {
        label: '基准利率上浮35%(6.615%)',
        value: '6.615%'
      },
      {
        label: '基准利率上浮40%(6.86%)',
        value: '6.86%'
      }
    ]
const accumulationFundYears_data =
    [
      {
        label: '30年',
        value: '30年'
      },
      {
        label: '29年',
        value: '29年'
      },
      {
        label: '28年',
        value: '28年'
      },
      {
        label: '27年',
        value: '27年'
      },
      {
        label: '26年',
        value: '26年'
      },
      {
        label: '25年',
        value: '25年'
      },
      {
        label: '24年',
        value: '24年'
      },
      {
        label: '23年',
        value: '23年'
      },
      {
        label: '22%',
        value: '22%'
      },
      {
        label: '21年',
        value: '21年'
      },
      {
        label: '20年',
        value: '20年'
      },
      {
        label: '19年',
        value: '19年'
      },
      {
        label: '18年',
        value: '18年'
      },
      {
        label: '17年',
        value: '17年'
      },
      {
        label: '16年',
        value: '16年'
      },
      {
        label: '15年',
        value: '15年'
      },
      {
        label: '14年',
        value: '14年'
      },
      {
        label: '13年',
        value: '13年'
      },
      {
        label: '12年',
        value: '12年'
      },
      {
        label: '11年',
        value: '11年'
      },
      {
        label: '10年',
        value: '10年'
      },
      {
        label: '9年',
        value: '9年'
      },
      {
        label: '8年',
        value: '8年'
      },
      {
        label: '7年',
        value: '7年'
      },
      {
        label: '6年',
        value: '6年'
      },
      {
        label: '5年',
        value: '5年'
      },
      {
        label: '4年',
        value: '4年'
      },
      {
        label: '3年',
        value: '3年'
      },
      {
        label: '2年',
        value: '2年'
      },
      {
        label: '1年',
        value: '1年'
      }
    ]
const providentFundInterestRate_data =
    [
      {
        label: '基准利率(3.25%)',
        value: '3.25%'
      },
      {
        label: '基准利率上浮10%(3.575%)',
        value: '3.575%'
      }
    ]
const tabContent_data =
    [
      {
        href: '#introduction',
        content: '房源信息介绍'
      },
      {
        href: '#layout',
        content: '户型分间'
      },
      {
        href: '#record',
        content: '看房记录'
      },
      {
        href: '#resblockCardContainer',
        content: '小区简介'
      },
      {
        href: '#calculator',
        content: '税费贷款'
      },
      {
        href: '#around',
        content: '周边配套'
      }
    ]
export { tabContent_data, providentFundInterestRate_data, accumulationFundYears_data, commercialLendingRate_data, businesscreditAge_data, proportionOfCommercialLoans_data, image_data, line_data, base_middle_data, base_right_data, transaction_middle_data, transaction_right_data, characteristic_data, detail_item_data, table_data, quarters_details_controduction_data, money_type_data, monthly_supply_data }
