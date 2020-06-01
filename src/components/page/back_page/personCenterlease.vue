<template>
  <div class="personCenterlease">
    <el-card shadow="always">
      <div class="title">出租房源管理面板</div>
      <div class="lease-button">
        <el-input placeholder="请输入用户名">
              <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button @click="dialogFormVisible = true" plain>房源信息录入</el-button>
        <el-button type="primary" plain>无效房源查询</el-button>
        <el-button @click="dialogFormVisibleTwo = true" type="success" plain>房源打印</el-button>
        <!-- <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>-->
      </div>
      <el-table :data="tableData" style="width: 100%" height="332">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="附近交通">
                <span>{{ props.row.traffic }}</span>
              </el-form-item>
              <el-form-item label="房源所有人">
                <span>{{ props.row.people }}</span>
              </el-form-item>
              <el-form-item label="户型">
                <span>{{ props.row.houseType }}</span>
              </el-form-item>
              <el-form-item label="楼层">
                <span>{{ props.row.floor }}</span>
              </el-form-item>
              <el-form-item label="面积">
                <span>{{ props.row.area }}</span>
              </el-form-item>
              <el-form-item label="租金">
                <span>{{ props.row.price }}</span>
              </el-form-item>
              <el-form-item label="房源地址">
                <span>{{ props.row.houseAddress }}</span>
              </el-form-item>
              <el-form-item label="房源状态">
                <span>{{ props.row.houseStatus }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="房源所有人" prop="people"></el-table-column>
        <el-table-column label="联系电话" prop="phone"></el-table-column>
        <el-table-column label="房源地址" prop="houseAddress"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="sell(scope.row)" type="text" size="small">出租</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="lease-page" background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>

    <el-dialog title="房源信息录入" :visible.sync="dialogFormVisible" class="input-house-message">
      <el-form :model="form">
        <div class="left-dialog" style="float: left">
          <el-form-item label="附近交通" :label-width="formLabelWidth">
            <el-input v-model="form.traffic" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源楼层" :label-width="formLabelWidth">
            <el-input v-model="form.floor" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源面积" :label-width="formLabelWidth">
            <el-input v-model="form.area" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源地址" :label-width="formLabelWidth">
            <el-input v-model="form.houseAdress" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源户型" :label-width="formLabelWidth">
            <el-input v-model="form.houseAdress" autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="right-dialog" style="float: right; margin-right: 80px">
          <el-form-item label="联系人" :label-width="formLabelWidth">
            <el-input v-model="form.people" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="租金" :label-width="formLabelWidth">
            <el-input v-model="form.price" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="房源图片" :label-width="formLabelWidth">
            <el-button type="primary" plain>点击上传房源图片(限五张)</el-button>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="房源打印" :visible.sync="dialogFormVisibleTwo" class="print-house-message">
      <el-form :model="formTwo">
        <el-form-item label="选择房源" :label-width="formLabelWidth">
          <el-select v-model="formTwo.region" placeholder="请选择房源">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="pref-show">
        <div class="pref-title">预览</div>
        <div class="pref-content">
          <div class="left-message">
            <h1>万达公馆北区</h1>
            <div class="pref-box">
              <div class="pref-detail-message" v-for="(item,index) in prefMessages" :key="index">
                <span class="pref-detail-title">{{item.prefTitle}}</span>
                <span class="pref-detail-data">{{item.prefData}}</span>
              </div>
            </div>
            <div class="pref-contact">
              <span>联系人:</span>
              <span>陈先生</span>
              <h3>13760849826</h3>
            </div>
          </div>
          <div class="right-message">
            <img :src="url" alt="房源图片" />
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleTwo = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleTwo = false">打 印</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'perosonCenterlease',
  data () {
    return {
      url: require('../../../common/images/cat.jpg'),
      prefMessages: [
        { prefTitle: '附近交通:', prefData: '地铁房' },
        { prefTitle: '租金:', prefData: '1300元/月' },
        { prefTitle: '面积:', prefData: '76m²' },
        { prefTitle: '户型:', prefData: '2室 1厅 1卫 1阳' },
        { prefTitle: '楼层:', prefData: '11层/共30层' },
        { prefTitle: '装修:', prefData: '普装' }
      ],
      tableData: [
        {
          people: '陈先生',
          phone: '17765602714',
          traffic: '地铁房',
          houseAddress: '上海市普陀区真北路',
          houseType: '2室 1厅 1卫 1阳',
          floor: '11层/共30层',
          area: '76m²',
          price: '1300元/月',
          houseStatus: '在售'
        },
        {
          people: '陈先生',
          phone: '17765602714',
          traffic: '地铁房',
          houseAddress: '上海市普陀区真北路',
          houseType: '2室 1厅 1卫 1阳',
          floor: '11层/共30层',
          area: '76m²',
          price: '1300元/月',
          houseStatus: '未售'
        },
        {
          people: '陈先生',
          phone: '17765602714',
          traffic: '地铁房',
          houseAddress: '上海市普陀区真北路',
          houseType: '2室 1厅 1卫 1阳',
          floor: '11层/共30层',
          area: '76m²',
          price: '1300元/月',
          houseStatus: '未售'
        },
        {
          people: '陈先生',
          phone: '17765602714',
          traffic: '地铁房',
          houseAddress: '上海市普陀区真北路',
          houseType: '2室 1厅 1卫 1阳',
          floor: '11层/共30层',
          area: '76m²',
          price: '1300元/月',
          houseStatus: '已售'
        },
        {
          people: '陈先生',
          phone: '17765602714',
          traffic: '地铁房',
          houseAddress: '上海市普陀区真北路',
          houseType: '2室 1厅 1卫 1阳',
          floor: '11层/共30层',
          area: '76m²',
          price: '1300元/月',
          houseStatus: '未售'
        }
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogFormVisibleTwo: false,
      formTwo: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>

<style>
@import "../../../common/css/back_css/personCenterlease.css";
</style>
