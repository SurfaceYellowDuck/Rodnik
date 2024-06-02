<template>
  <div class="actions">
    <nav>
      <router-link to="/abonements">Абонементы</router-link>
      |
<!--      <router-link to="/clients">Клиенты</router-link>-->
      |
      <router-link to="/activities">Занятия</router-link>
    </nav>

<!--    <input type="text" class="datepicker" ref="datepicker">-->


<!--    <form action="add_action">-->
<!--      <button class="btn add-action">Добавить занятие</button>-->
<!--    </form>-->
    <table>
      <thead>
      <tr>
        <th>Номер</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Дата</th>
        <th>Время начала</th>
        <th>Время окончания</th>
        <th>Имя тренера</th>
        <th>Тип бассейна</th>
<!--        <th>Номер абонемента</th>-->
      </tr>
      </thead>

      <tbody>
      <tr v-for="el in activities">
        <td>{{el['id']}}</td>
        <td>{{users[el["user_id"] - 1]["firstname"]}}</td>
        <td>{{users[el["user_id"] - 1]["lastname"]}}</td>
        <td>{{el['date']}}</td>
        <td>{{el['start_time']}}</td>
        <td>{{el['end_time']}}</td>
        <td>{{el['trainer']['firstname']}}</td>
        <td>{{el['poolType']['type']}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   M.Datepicker.init(this.$refs.datepicker)
  //   document.addEventListener('DOMContentLoaded', function() {
  //     // document.querySelectorAll('.datepicker');
  //     // M.Datepicker.init(this.$refs.datepicker, options);
  //   });
  // }

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