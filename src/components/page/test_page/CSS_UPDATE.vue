<template>
  <div class="father">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="ID">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nick_name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">修改</el-button>
        <el-button>取消</el-button>
        <el-button @click="test()">test</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default {
  data() {
    return {
      form: {
        id: "",
        name: "",
        nick_name: ""
      },
      action: "https://jsonplaceholder.typicode.com/posts/",
      fileData: [],
      imageUrl: "",
      showImage: false
    };
  },
  methods: {
    onSubmit() {
      const _this = this;
      axios
        .post("http://localhost:8181/sys_user/update", this.form)
        .then(function(resp) {
          if (resp.data === "success") {
            //   alert('添加成功')
            _this.$alert("《" + _this.form.name + "》修改成功", "消息", {
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
    }
  },
  created() {
    const _this = this;
    // console.log(this.$route.query.id)
    axios
      .get("http://localhost:8181/sys_user/findById/" + this.$route.query.id)
      .then(function(resp) {
        _this.form = resp.data;
      });
  }
};
</script>

<style>
/* .box2 {
  position: absolute;
  left: 95px;
  width: 1275px;
}
.box2 ul {
  overflow: hidden;
}
.box2 ul li {
  width: 25%;
  height: 30px;
  float: left;
  padding-left: 10px;
  box-sizing: border-box;
}
.box2 ul li .com .del {
  display: none;
  float: right;
  margin-top: 2px;
  margin-right: 60px;
}
.box2 ul li:hover .com .del {
  display: inline;
} */
</style>
