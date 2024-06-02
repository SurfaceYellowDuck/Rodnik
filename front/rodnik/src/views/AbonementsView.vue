<template>
  <div class="abonements">
    <nav>
      <router-link to="/abonements">Абонементы</router-link>
      |
<!--      <router-link to="/clients">Клиенты</router-link>-->
      |
      <router-link to="/activities">Занятия</router-link>
    </nav>
    <table>
      <thead>
      <tr>
        <th>Номер</th>
        <th>Имя клиента</th>
        <th>Фамилия клиента</th>
        <th>Наименование абонемента</th>
        <th>Количество занятий</th>
      </tr>
      </thead>

      <tbody>

      <tr v-for="el in abonements">
        <td><router-link to="/abonement_info">{{el["id"]}}</router-link></td>
        <td><router-link to="/client">{{users[el["user_id"] - 1]["firstname"]}}</router-link></td>
        <td>{{users[el["user_id"] - 1]["lastname"]}}</td>
        <td>{{abonementsTypes[el["abonType"]- 1]["type"]}}</td>
        <td>{{abonementsTypes[el["abonType"]- 1]["cnt_activities"]}}</td>
      </tr>
      </tbody>
    </table>
    <router-link style="line-height: unset" to="/add_abonement"><a
        class="waves-effect waves-light btn">Продать абонемент</a>
    </router-link>
  </div>
</template>


<script>
export default {
  computed: {
    abonementsTypes() {
      return this.$store.getters.ABONEMENTTYPES
    },
    users() {
      return this.$store.getters.USERS
    },
    trainers() {
      return this.$store.getters.TRAINERS
    },
    pools() {
      return this.$store.getters.POOLTYPES
    },
    abonements(){
      return this.$store.getters.ABONEMENTS
    },
    activities(){
      return this.$store.getters.ACTIVITIES
    }
  }
}

</script>