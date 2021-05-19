<template>
  <div>
    <van-button type="warning">信息按钮</van-button>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="name"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
// 引入vant
import { Button, Form, Field } from "vant";
// 注册全局
Vue.use(Button).use(Form).use(Field);
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      axios
        .get("@/api/login.php", {
          name: values.name,
          password: values.password,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
