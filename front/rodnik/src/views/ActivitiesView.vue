<template>
  <div class="actions">
    <nav>
      <router-link to="/abonements">Абонементы</router-link>
      |
      <router-link to="/clients">Клиенты</router-link>
      |
      <router-link to="/activities">Занятия</router-link>
    </nav>

    <input type="text" class="datepicker" ref="datepicker">


<!--    <form action="add_action">-->
<!--      <button class="btn add-action">Добавить занятие</button>-->
<!--    </form>-->
    <table>
      <thead>
      <tr>
        <th>Номер</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Время начала</th>
        <th>Время окончания</th>
        <th>Имя тренера</th>
        <th>Тип бассейна</th>
        <th>Номер абонемента</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>Алексей</td>
        <td>Оболонский</td>
        <td>10:00</td>
        <td>10:40</td>
        <td>Александр</td>

        <td>Большой бассейн</td>
        <td>1</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted() {
    M.Datepicker.init(this.$refs.datepicker)
    document.addEventListener('DOMContentLoaded', function() {
      // document.querySelectorAll('.datepicker');
      M.Datepicker.init(this.$refs.datepicker, options);
    });
  }
}

</script>