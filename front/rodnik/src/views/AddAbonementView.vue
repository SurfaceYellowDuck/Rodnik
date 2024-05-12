<template>

  <div class="add-abonement">
    <div class="nav-panel">
    <nav>
        <router-link style="line-height: unset" to="/abonements">Абонементы</router-link>
        |
        <router-link to="/clients">Клиенты</router-link>
        |
        <router-link to="/activities">Занятия</router-link>
    </nav>
    </div>

    <div class="content">

      <a class='dropdown-trigger btn'  data-target='dropdown1' ref="dropdown_trigger">Вид абонемента</a>
      <a class='dropdown-trigger btn'  data-target='dropdown2' ref="dropdown_trigger">Клиент</a>

      <ul id='dropdown1' class='dropdown-content'>
        <li v-for="el in abonements">
          <a @click="handleAbonementDropdownClick(el)">{{ el["type"] }}</a>
        </li>
      </ul>

      <ul id='dropdown2' class='dropdown-content'>
        <li v-for="el in users">
          <a @click="handleClientDropdownClick(el)">{{ el['firstname'] }} {{ el['patronymic'] }} {{ el['lastname'] }}</a>

        </li>
      </ul>
      <!--    <input ref="datepicker" type="text" class="datepicker">-->
      <p v-if="clientSelected">{{ clientObject['firstname'] }} {{ clientObject['patronymic'] }} {{ clientObject['lastname'] }} </p>

      <div class="row">
        <div v-if="abonSelected" class="abon-activities">
          <div v-for="el in abonObject['cnt_activities']" class="col s6">
            <div class="abon-datetime-input row" style="display:inline-block">

              <a class='dropdown-trigger btn'  data-target='dropdown3' ref="dropdown_trigger">Тренер</a>
              <a class='dropdown-trigger btn'  data-target='dropdown4' ref="dropdown_trigger">Бассейн</a>

              <ul id='dropdown3' class='dropdown-content'>
                <li v-for="el in trainers">
                  <a @click="handleTrainerDropdownClick(el)">{{ el['firstname'] }} {{ el['lastname'] }} {{ el['patronymic'] }}</a>
                </li>
              </ul>

              <ul id='dropdown4' class='dropdown-content'>
                <li v-for="el in pools">
                  <a @click="handlePoolDropdownClick(el)">{{ el['type'] }}</a>
                </li>
              </ul>

              <input style="width:unset" :placeholder="'Дата занятия' + ' ' + el" ref="datepicker" type="text" class="datepicker">
              <input style="width:unset" type="text" placeholder="Время занятия" class="timepicker">
              <p v-if="trainerSelected">{{ trainerObject['patronymic'] }}</p>
              <p v-if="poolSelected">{{ poolObject['type'] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form action="add_abonement">
      <button class="btn add-action">Продать</button>
    </form>


  </div>

</template>

<script setup>

import {onUpdated} from "vue";

onUpdated(() => {
  M.Timepicker.init(document.querySelectorAll(".timepicker"))
  M.Datepicker.init(document.querySelectorAll(".datepicker"))
  const options = {
    alignment: 'left',
    coverTrigger: false,
    isScrollable: true,
  };
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), options);
})

</script>

<script>
export default {
  mounted() {
    this.initDropdown();
    // M.Datepicker.init(document.querySelectorAll(".datepicker"))
  },
  computed: {
    abonements() {
      return this.$store.getters.ABONEMENTS
    },
    users() {
      return this.$store.getters.USERS
    },
    trainers() {
      return this.$store.getters.TRAINERS
    },
    pools() {
      return this.$store.getters.POOLS
    },
  },
  methods: {
    initDropdown() {
      const options = {
        alignment: 'left',
        coverTrigger: false,
        isScrollable: true,
      };
      M.Dropdown.init(this.$el.querySelectorAll('.dropdown-trigger'), options);
    },
    initDatePicker() {
      M.Datepicker.init(this.$refs.datepicker);
    },
    handleAbonementDropdownClick(item) {
      this.$data.abonSelected = true
      this.$data.abonObject = item
      // this.initDatePicker();
      // console.log('Выбран элемент:', item['type']);
    },
    handleClientDropdownClick(item) {
      this.$data.clientSelected = true
      this.$data.clientObject = item
      // this.initDatePicker();
      // console.log('Выбран элемент:', item['lastname']);
    },
    handleTrainerDropdownClick(item){
      this.$data.trainerSelected = true
      this.trainerObject = item
    },
    handlePoolDropdownClick(item){
      this.$data.poolSelected = true
      this.poolObject = item
    },

    // handleSaleClick(item){
    //
    // }
  },
  data() {
    return {
      abonSelected: false,
      abonObject: null,
      clientSelected: false,
      clientObject: null,
      saleObject:null,
      trainerSelected:false,
      trainerObject:null,
      poolSelected:false,
      poolObject: null,
    };
  }
}
// console.log(M.dropdown.)


</script>