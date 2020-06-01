
<template>
  <div>
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column prop="id"
                       label="id"
                       width="120"></el-table-column>
      <el-table-column prop="nick_name"
                       label="全名"
                       width="120"></el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="120"></el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)"
                     type="text"
                     size="small">编辑</el-button>
          <el-button @click="del(scope.row)"
                     type="text"
                     size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="add()"
               type="text"
               size="small">添加</el-button>
    <!-- <div v-for=''></div> -->
    <ul>
      <li v-for="(site,index) in sites"
          :key="index">
        <div :class="'house-'+site.classNUM">
          <el-image :src="site.src_house"></el-image>
          <h3>{{site.area}}</h3>
          <h3>{{site.area_name}}</h3>
          <h5 class="room">{{site.place}}</h5>
          <h3 class="price">{{site.price}}</h3>
        </div>
      </li>
    </ul>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
        <el-dropdown-item command="b">狮子头</el-dropdown-item>
        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
        <el-dropdown-item command="d"
                          disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item command="e"
                          divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 按钮 -->
    <el-upload class="upload"
               action
               :multiple="false"
               :show-file-list="false"
               accept="csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
               :http-request="httpRequest">
      <el-button size="small"
                 type="primary">上传</el-button>
    </el-upload>
    <!-- 按钮 end -->
    <!-- 列表 -->
    <el-table :data="tableData1"
              border
              style="width: 100%">
      <el-table-column v-for="(item,index) in accountingTableColumns"
                       :key="index"
                       :prop="item.column"
                       :label="item.chinese"
                       style="text-align: center"></el-table-column>
    </el-table>
    <!-- 列表 end -->

    <div class="box">
      <input type="file"
             id='input'>
      <div class="wrap"
           id='wrap'>
        <div class="children"
             id='children'>
        </div>
        <p id='percent'>0</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-v-for-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import XLSX from "xlsx";
export default {
  name: "User",
  data() {
    return {
      // 表格字段数据
      accountingTableColumns: [
        { column: "order_number", chinese: "序号" },
        { column: "city_net", chinese: "本地网" },
        { column: "branch_office", chinese: "分局" },
        { column: "branch_post_office", chinese: "支局" },
        { column: "responsibility_zone", chinese: "责任区" },
        { column: "engineer", chinese: "工程师" },
        { column: "worksheet_number", chinese: "工单号" },
        { column: "more", chinese: "....." },
        { column: "reason", chinese: "剔除原因" }
      ],
      tableData1: [],
      tableData: [
        {
          id: "1",
          name: "wangxiaohu",
          nick_name: "王小虎"
        },
        {
          id: "1",
          name: "wangxiaohu",
          nick_name: "王小虎"
        },
        {
          id: "1",
          name: "wangxiaohu",
          nick_name: "王小虎"
        },
        {
          id: "1",
          name: "wangxiaohu",
          nick_name: "王小虎"
        }
      ],
      sites: [{}]
    };
  },
  created() {
    const _this = this;
    // axios.get('http://localhost:8181/sys_user/findAll').then(function (resp) {
    //   _this.tableData = resp.data
    //   console.log(resp.data)
    // })
    axios.get("http://localhost:8181/secondHouse/findAll").then(function(resp) {
      _this.sites = resp.data;
      console.log(resp.data);
    });
  },
  methods: {
    edit(row) {
      // row.id
      this.$router.push({
        path: "/CSS_UPDATE",
        query: {
          id: row.id
        }
      });
    },
    del(row) {
      const _this = this;
      axios
        .delete("http://localhost:8181/sys_user/deleteById/" + row.id)
        .then(function(resp) {
          _this.$alert("《" + row.name + "》删除成功", "消息", {
            confirmButtonText: "确定",
            callback: action => {
              window.location.reload();
            }
          });
        });
    },
    add() {
      this.$router.push("/CSS_TEST");
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    // 处理Excel文件上传及读取数据
    httpRequest(e) {
      let file = e.file; // 文件信息
      // console.log("e: ", e);
      // console.log("file: ", e.file);

      // 没有文件
      if (!file) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
        // 定义上传xls文件的正则表达式
        this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }

      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary" // 以字符编码的方式解析
          });
          const exlname = workbook.SheetNames[0]; // 取第一张表
          const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]); // 生成json表格内容
          // console.log(exl);
          // 将 JSON 数据挂到 data 里
          this.tableData1 = exl;
          // console.log(data);
          console.log(exl);
          console.log(this.tableData);
          // document.getElementsByName('file')[0].value = '' // 根据自己需求，可重置上传value为空，允许重复上传同一文件
        } catch (e) {
          console.log("出错了：：");
          return false;
        }
      };
      fileReader.readAsBinaryString(file);
    }
  }
};
</script>

<style scoped>
.box {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
}

.wrap {
  width: 300px;
  height: 20px;
  box-shadow: 0 0 10px pink inset;
  border-radius: 10px;
  border: 2px solid #eee;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  position: relative;
  display: none;
}
.children {
  width: 0;
  height: 20px;
  box-shadow: 0 0 5px #eee outset;
  border-radius: 10px;
  background: -webkit-linear-gradient(
    left,
    #ff34b3 0%,
    #ff7256 50%,
    yellow 100%
  );
}
#percent {
  position: absolute;
  top: 0px;
  left: 0;
  margin: 0;
}
</style>
