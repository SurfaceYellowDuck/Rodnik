<template>

  <div class="row">
    <form action="registration">
      <button class="btn">Регистрация</button>
    </form>

    <form class="col s12">
      <div class="row">
        <div class="input-field  inline">
          {{login}}
          <input v-model="login" id="first_name" type="text" class="validate login">
          <label for="first_name">Логин</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field  inline">
          <input id="password" type="password" class="validate password">
          <label for="password">Пароль</label>
        </div>
      </div>
    </form>
<!--    <form action="activities">-->
<!--      <button class="btn">Войти</button>-->
<!--    </form>-->
    <a @click="handleInputButtonClick()" class="waves-effect waves-light btn">Войти</a>
  </div>
  <router-view />

</template>

<script>

import {ref} from "vue";
import router from "@/router";

// let login;
export default {
  computed: {
    users() {
      return this.$store.getters.USERS
    }
  },
  methods:{
    handleInputButtonClick(){
      let login = document.querySelector(".login").value
      let password = document.querySelector(".password").value
      let authenticated = false
      let is_admin = false
      let cur_user;
      // console.log(login)
      // console.log(password)
      // console.log(this.$data.users)
      for(let user in this.$data.users){
        if (this.$data.users[user]['username'] === login){
          // console.log(login)
          // console.log(password)
          if(this.$data.users[user]['password'] === password){
            authenticated = true
            cur_user = this.$data.users[user]
            if(this.$data.users[user]['role'] === 'admin') is_admin = true
            this.$store.commit('setCurrentUser', {user: cur_user})
            break
          }
        }
      }
      if(authenticated){
        if (is_admin){
          // console.log('auth')
          router.push('/abonements');
        }
        else{
          router.push('/profile');
        }
      }
      // else{
      //   alert("Неверно введен логин/пароль")
      // }

    }
  },
  data() {
    return {
      users: this.$store.getters.USERS,
    };
  }
}
</script>
