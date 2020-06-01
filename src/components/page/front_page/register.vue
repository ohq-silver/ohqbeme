<template>
  <div class="reg-back">
    <div style="opacity: 0">1</div>
    <div class="reg-form">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               status-icon
               label-width="100px"
               class="demo-ruleForm"
               style="padding-top: 50px">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="ruleForm.username"
                    style="width: 360px"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="ruleForm.password"
                    type="password"
                    style="width: 360px"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="passwordConfirm">
          <el-input v-model="ruleForm.passwordConfirm"
                    type="password"
                    style="width: 360px"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户类型"
                      prop="userType">
          <el-select v-model="ruleForm.userType"
                     placeholder="请选择用户类型">
            <el-option label="房东用户"
                       value="fangdong"></el-option>
            <el-option label="租客用户"
                       value="zuke"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.passwordConfirm !== "") {
          this.$refs.ruleForm.validateField("passwordConfirm");
        }
        callback();
      }
    };
    var validatePasswordConfirm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateType = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请选择用户类型"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        passwordConfirm: "",
        userType: ""
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        passwordConfirm: [
          { validator: validatePasswordConfirm, trigger: "blur" }
        ],
        userType: [{ validator: validateType, trigger: "blur" }]
      }
    };
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    },
    // register(formName) {},
    submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("submit");
          const _this = this;
          axios
            .post("http://localhost:8181/user/save", this.ruleForm)
            .then(function(resp) {
              if (resp.data === "success") {
                //   alert('添加成功')
                _this.$alert("注册成功", "消息", {
                  confirmButtonText: "确定",
                  callback: action => {
                    _this.$router.push({
                      name: "login"
                    });
                  }
                });
              } else if (resp.data === "error") {
                _this.$alert("该用户已存在", "注册失败", {
                  confirmButtonText: "确定"
                });
              }
            });
        } else {
          console.log("error submit!!");
          console.log(valid);
          return false;
        }
      });
    },
    // submitForm(formName) {
    //   // const _this = this;
    //   // axios
    //   //   .post("http://localhost:8181/user/save", this.ruleForm)
    //   //   .then(function(resp) {
    //   //     if (resp.data === "success") {
    //   //       //   alert('添加成功')
    //   //       _this.$alert("注册成功", "消息", {
    //   //         confirmButtonText: "确定",
    //   //         callback: action => {
    //   //           _this.$router.push("/login");
    //   //         }
    //   //       });
    //   //     }
    //   //   });
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       console.log(valid);
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.reg-back {
  position: relative;
  width: 100%;
  height: 752px;
  background-size: cover;
  background-image: url("../../../common/images/topbgimage2.jpg");
}
.reg-back .reg-form {
  width: 500px;
  height: 380px;
  margin: 150px auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}
</style>
