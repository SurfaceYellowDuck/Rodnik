<template>

  <div class="row">
    <form action="registration">
      <button class="btn">Регистрация</button>
    </form>

    <form class="col s12">
      <div class="row">
        <div class="input-field  inline">
          <input id="first_name" type="text" class="validate">
          <label for="first_name">Логин</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field  inline">
          <input id="password" type="password" class="validate">
          <label for="password">Пароль</label>
        </div>
      </div>
    </form>
    <form action="activities">
      <button class="btn">Войти</button>
    </form>
  </div>
  <router-view />

</template>
