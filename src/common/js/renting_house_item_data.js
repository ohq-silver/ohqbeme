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
    title: '有无电梯',
    content: '无'
  },
  {
    title: '房屋朝向',
    content: '北'
  },
  {
    title: '用水情况',
    content: '民水'
  },
  {
    title: '用电情况',
    content: '民电'
  }
]
const base_right_data = [
  {
    title: '所在楼层',
    content: '高楼层(共8层)'
  },
  {
    title: '房屋维护',
    content: '两天前'
  },
  {
    title: '房屋采暖',
    content: '暂无数据'
  },
  {
    title: '房屋租期',
    content: '暂无数据'
  },
  {
    title: '看房预约',
    content: '需提前预约'
  }
]
const transaction_middle_data = [
  {
    title: 'el-icon-s-platform', // el-icon-s-platform
    content: '电视'
  },
  {
    title: 'el-icon-ohqbingxiang',
    content: '冰箱'
  },
  {
    title: 'el-icon-ohqxiyiji',
    content: '洗衣机'
  },
  {
    title: 'el-icon-ohqkongtiao',
    content: '空调'
  },
  {
    title: 'el-icon-ohqyigui',
    content: '衣柜'
  }
]
const transaction_right_data = [
  {
    title: 'el-icon-ohqreshui',
    content: '热水器'
  },
  {
    title: 'el-icon-ohqchuang',
    content: '床'
  },
  {
    title: 'el-icon-ohqnuanqi',
    content: '暖气'
  },
  {
    title: 'el-icon-ohqwifi',
    content: '宽带'
  },
  {
    title: 'el-icon-ohqmeiqitianranqi',
    content: '天然气'
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
          href: '#around',
          content: '周边配套'
        }
      ]
export { tabContent_data, image_data, line_data, base_middle_data, base_right_data, transaction_middle_data, transaction_right_data, characteristic_data, detail_item_data, table_data, quarters_details_controduction_data }
