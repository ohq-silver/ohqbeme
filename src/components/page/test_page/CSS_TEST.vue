<template>
  <div class="father">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nick_name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
        <el-button @click="test()">test</el-button>
      </el-form-item>
    </el-form>
    <div class="img-list">
      <div class="img-content"
           v-for="(item,index) in imagelist"
           :key="index">
        <img :src="item.url">
        <div class="name">
          <div>{{ item.name }}</div>
          <el-button type="text"
                     @click="handleFileName(item,key)">修改名字</el-button>
        </div>
        <!-- 删除icon -->
        <div class="del">
          <i @click="handleFileRemove(item,key)"
             class="el-icon-delete2"></i>
        </div>
        <!-- 放大icon -->
        <div class="layer"
             @click="handleFileEnlarge(item.url)">
          <i class="el-icon-view"></i>
        </div>
      </div>
    </div>
    <div class="img-upload">
      <el-upload class="uploader"
                 accept="image/*"
                 ref="upload"
                 list-type="picture-card"
                 :auto-upload="false"
                 :show-file-list="false"
                 :action="params.action"
                 :data="params.data"
                 :on-change="uploadOnChange"
                 :on-success="uploadOnSuccess"
                 :on-error="uploadOnError"
                 :on-progress="uploadOnProgress">
        <el-button type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  data() {
    return {
      form: {
        name: "",
        nick_name: ""
      },
      imagelist: [
        {
          url:
            "http://img.hb.aicdn.com/723f8754f412debce188626d09cc0a1b2be6b7a6751a3-ICEp1E_fw658",
          name: "lemon"
        },
        {
          url:
            "http://img.hb.aicdn.com/38ab9e558bcba041be979f03bfd31bd67bf1e6f35815a-8PD8Eo_fw658",
          name: "lemon2"
        },
        {
          url:
            "http://img.hb.aicdn.com/0cd0dcc93f5b918e191dd84791101435136c7f9811e31-LRzYAQ_fw658",
          name: "lemon3"
        }
      ],
      params: {
        action: "http://jsonplaceholder.typicode.com/posts/",
        data: {}
      }
    };
  },
  methods: {
    onSubmit() {
      const _this = this;
      axios
        .post("http://localhost:8181/sys_user/save", this.form)
        .then(function(resp) {
          if (resp.data === "success") {
            //   alert('添加成功')
            _this.$alert("《" + _this.form.name + "》添加成功", "消息", {
              confirmButtonText: "确定",
              callback: action => {
                _this.$router.push("/User");
              }
            });
          }
        });
    },
    test() {
      console.log(this.form);
    },
    handleChange(res, file) {
      // 未上传，但是选择了文件触发
      let status = null;
      status = this.wenjian(res.name);
      this.FileList.push({
        name: res.name.substring(0, res.name.lastIndexOf(".")),
        status: status
      });
      console.log(this.FileList);
    },
    handleFileEnlarge(_url) {
      // 放大图片
      console.log(_url);
    },
    handleFileName(file, i) {
      // 修改名字
      console.log(file, i);
    },
    handleFileRemove(file, i) {
      // 删除图片
      console.log(file, i);
    },
    uploadOnProgress(e, file) {
      // 开始上传
      console.log(e.percent, file);
    },
    uploadOnChange(file) {
      console.log("——————————change——————————");
      // console.log(file)
      if (file.status === "ready") {
        console.log("ready");
      } else if (file.status === "fail") {
        this.$message.error("图片上传出错，请刷新重试！");
      }
    },
    uploadOnSuccess(e, file) {
      // 上传附件
      console.log("——————————success——————————");
      this.$message.success("上传成功");
      this.pass = true;
      this.$message.success("上传成功");
      this.imagelist.push({
        url: file.url,
        name: "新增图片"
      });
    },
    uploadOnError(e, file) {
      console.log("——————————error——————————");
      console.log(e);
      this.pass = false;
    }
  }
};
</script>

<style>
/* @import "../../common/css/css_test.css"; */
.img-list {
  overflow: hidden;
  width: 100%;
}
.img-list .img-content {
  float: left;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 270px;
  padding: 5px;
  margin: 5px 20px 20px 0;
  border: 1px solid #d1dbe5;
  border-radius: 4px;
  transition: all 0.3s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.img-list .img-content img {
  display: block;
  width: 100%;
  height: 190px;
  margin: 0 auto;
  border-radius: 4px;
}
.img-list .img-content .name {
  margin-top: 10px;
}
.img-list .img-content .name > div {
  width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 25px;
  line-height: 25px;
}
.img-list .img-content:hover .del,
.img-list .img-content:hover .layer {
  opacity: 1;
}
.img-list .img-content .del,
.img-list .img-content .layer {
  opacity: 0;
  transition: all 0.3s;
}
.img-list .img-content .del {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #8492a6;
  cursor: pointer;
  font-size: 1.1em;
}
.img-list .img-content .layer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 200px;
  color: #fff;
  text-align: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
}
.img-list .img-content .layer i {
  font-size: 1.6em;
  margin-top: 80px;
}
</style>
