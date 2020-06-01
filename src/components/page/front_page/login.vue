<template>
  <div class="log-back">
    <div style="opacity: 0">1</div>
    <div class="log-form">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm"
               style="padding-top: 70px">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="ruleForm.username"
                    style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="ruleForm.password"
                    type="password"
                    style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="login()">登录</el-button>
          <el-button @click="register()"
                     style="float: right; margin-right: 40px">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      userType: "",
      userGrade: ""
    };
  },
  created() {
    // const _this = this;
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    },
    login() {
      const _this = this;
      // 点击登录时发送登录表单给后台验证
      axios
        .post("http://localhost:8181/user/login", _this.ruleForm)
        .then(function(resp) {
          console.log("data:" + resp.data);
          console.log("resp: " + resp.status);
          // 验证成功则返回信息并且根据用户名查找用户的用户类型和信用积分
          if (resp.status === 200) {
            axios
              .get(
                "http://localhost:8181/user/findByUsername/" +
                  _this.ruleForm.username
              )
              .then(function(respdata) {
                if (respdata.status === 200) {
                  console.log(respdata);
                  _this.$router.push({
                    name: "index",
                    params: {
                      username: _this.ruleForm.username,
                      userType: respdata.data[0].userType,
                      userGrade: respdata.data[0].grade
                    }
                  });
                  // console.log(respdata.data);
                  // console.log(_this.userGrade);
                }
              });
          } else {
            _this.$alert("用户名或密码错误", "登录失败", {
              confirmButtonText: "确定"
            });
          }
        });
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style>
.log-back {
  position: relative;
  width: 100%;
  height: 752px;
  background-size: cover;
  background-image: url("../../../common/images/topbgimage2.jpg");
}
.log-back .log-form {
  width: 500px;
  height: 300px;
  margin: 200px auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}
</style>
