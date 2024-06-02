<template :key="abonTypeObject">

  <div class="add-abonement">
    <div class="nav-panel">
      <nav>
        <router-link style="line-height: unset" to="/abonements">Абонементы</router-link>
        |
<!--        <router-link to="/clients">Клиенты</router-link>-->
        |
        <router-link to="/activities">Занятия</router-link>
      </nav>
    </div>

    <div class="content">

      <a class='dropdown-trigger btn' data-target='dropdown1' ref="dropdown_trigger">Вид абонемента</a>
      <a class='dropdown-trigger btn' data-target='dropdown2' ref="dropdown_trigger">Клиент</a>

      <ul id='dropdown1' class='dropdown-content'>
        <li v-for="el in abonementsTypes">
          <a @click="handleAbonementDropdownClick(el)">{{ el["type"] }}</a>
        </li>
      </ul>

      <ul id='dropdown2' class='dropdown-content'>
        <li v-for="el in users">
          <a @click="handleClientDropdownClick(el)">{{ el['firstname'] }} {{ el['patronymic'] }} {{
              el['lastname']
            }}</a>
        </li>
      </ul>
      <p v-if="clientSelected">{{ clientObject['firstname'] }} {{ clientObject['patronymic'] }}
        {{ clientObject['lastname'] }} </p>

      <div class="row">
        <div v-if="abonTypeSelected" v-for="el in abonTypeObject['cnt_activities']" class="col s6 abon-activities">
          <div class="abon-datetime-input row" style="display:inline-block">

            <a class='dropdown-trigger dt3 btn' :data-target="'dropdown3' + el">Тренер</a>

            <ul :id="'dropdown3' + el" class='dropdown-content trainers'>
              <li v-for="el1 in trainers">
                <a :id="el" @click="handleTrainerDropdownClick(el1, $event)">{{ el1['firstname'] }} {{
                    el1['lastname']
                  }} {{
                    el1['patronymic']
                  }}</a>
              </li>
            </ul>

            <a class='dropdown-trigger btn' :data-target="'dropdown4' + el">Бассейн</a>

            <ul :id="'dropdown4' + el" class='dropdown-content pools'>
              <li v-for="el1 in pools">
                <a :id="el" @click="handlePoolDropdownClick(el1, $event)">{{ el1['type'] }}</a>
              </li>
            </ul>
            <input :id="el" style="width:unset" :placeholder="'Дата занятия' + ' ' + el" ref="datepicker" type="text"
                   :class="'datepicker dp' + el">
            <input :id="el" style="width:unset" type="text" placeholder="Время начала занятия"
                   :class="'timepicker tps' + el">
            <input :id="el" style="width:unset" type="text" placeholder="Время окончания занятия"
                   :class="'timepicker tpe' + el">
            <div v-if="activities[maxActivityID + el ]['trainer'] != null">Тренер:
              {{ activities[maxActivityID + el]['trainer']['firstname'] }}
              {{ activities[maxActivityID + el]['trainer']['lastname'] }}
            </div>
            <div v-if="activities[maxActivityID + el ]['poolType'] != null">Бассейн:
              {{ activities[maxActivityID + el]['poolType']['type'] }}
            </div>

          </div>
        </div>
      </div>

    </div>
    <router-link style="line-height: unset" to="/abonements"><a @click="handleSellButtonClick()"
                                                                class="waves-effect waves-light btn">Продать</a>
    </router-link>


  </div>

</template>

<script>

export default {
  watch: {
    abonTypeObject: {
      handler() {
        this.$data.activities = this.initActivitiesDict(this.$data.abonTypeObject.cnt_activities,
            this.$data.maxActivityID)
        console.log(this.$data.abonTypeObject.cnt_activities)
        this.$nextTick(() => {
          M.Dropdown.init(this.$el.querySelectorAll('.dropdown-trigger'));
          for (let i = 1; i <= this.$data.abonTypeObject.cnt_activities; i++) {
            M.Datepicker.init(document.querySelector(".dp" + i.toString()),
                {
                  onClose: this.handleDatePickerSelect.bind(null,
                      document.querySelector(".dp" + i.toString())
                  ),
                })
            M.Timepicker.init(document.querySelector(".tps" + i.toString()),
                {
                  onCloseEnd: this.handleTimeStartPickerSelect.bind(null,
                      document.querySelector(".tps" + i.toString())
                  ),
                })
            M.Timepicker.init(document.querySelector(".tpe" + i.toString()),
                {
                  onCloseEnd: this.handleTimeEndPickerSelect.bind(null,
                      document.querySelector(".tpe" + i.toString())
                  ),
                })
          }
        })
      },
    }
  },

  mounted() {
    M.Dropdown.init(this.$el.querySelectorAll('.dropdown-trigger'));
    this.$data.activities = this.initActivitiesDict(1, this.$data.maxActivityID)
  },
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
    handleDatePickerSelect(item) {
      // console.log(this.maxActivityID + parseInt(item.id))

      this.$data.activities[this.$data.maxActivityID + parseInt(item.id)]['date'] = item.value
      // console.log(this.$data.activities[item.id - 1])

    },
    handleTimeStartPickerSelect(item) {
      this.$data.activities[this.$data.maxActivityID + parseInt(item.id)]['start_time'] = item.value
      // console.log(this.$data.activities[item.id - 1])

    },
    handleTimeEndPickerSelect(item) {
      console.log("sgfsfdg")
      this.$data.activities[this.$data.maxActivityID + parseInt(item.id)]['end_time'] = item.value
      // console.log(this.$data.activities[item.id - 1])

    },
    handleAbonementDropdownClick(item) {
      if (this.$data.abonTypeSelected !== true) {
        this.$data.abonTypeSelected = true
      }
      this.$data.abonTypeObject = item
    },
    handleClientDropdownClick(item) {
      this.$data.clientSelected = true
      this.$data.clientObject = item
    },
    handleTrainerDropdownClick(item, event) {
      this.$data.trainerSelected = true
      this.$data.trainerObject = item
      this.$data.activities[this.$data.maxActivityID + parseInt(event.target.id)]['trainer'] = item
      console.log(event)
    },
    handlePoolDropdownClick(item, event) {
      this.$data.poolTypeSelected = true
      this.$data.poolTypeObject = item
      this.$data.activities[this.$data.maxActivityID + parseInt(event.target.id)]['poolType'] = item
    },

    handleSellButtonClick() {
      this.saveAbonement()
    },

    initActivitiesDict(cnt, lastMaxActivityId) {
      const keys = [...Array(cnt).keys()].map(x => (lastMaxActivityId + 1 + x).toString()); // [1, 2, ..., 20]
      console.log(keys)
      const values = keys.map((x) => ({
        id: x,
        abonementId: this.$data.maxAbonementID,
        user_id: null,
        trainer: null,
        poolType: null,
        date: null,
        start_time: null,
        end_time: null
      }));
      console.log(values)
      return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
    },

    saveAbonement() {
      let id = this.$data.maxAbonementID + 1
      if (this.$data.clientSelected) {

        let newAbon = {
          id: id,
          user_id: this.$data.clientObject["id"],
          abonType: this.$data.abonTypeObject.id
        }
        this.$store.commit('addAbonement', {abonement: newAbon})

        for (let i = this.maxActivityID + 1;
             i < this.$data.maxActivityID + 1 + this.$data.abonTypeObject.cnt_activities; i++) {
          console.log(i)
          // if(this.$data.clientSelected){
          this.$data.activities[i]['user_id'] = this.$data.clientObject['id']
          this.$data.activities[i]['id'] = parseInt(this.$data.activities[i]['id'])

          this.$store.commit('addActivities', {activity: this.$data.activities[i]})
          // }

          // activities.push(this.$data.activities)
        }
        console.log(this.$store.getters.ACTIVITIES)
      }


      // keys.map((x) => ({
      //   id: x,
      //   abonementId: this.$data.maxAbonementID,
      //   user_id: null,
      //   trainer: null,
      //   poolType: null,
      //   date: null,
      //   start_time: null,
      //   end_time: null
      // }));


    },
  },


  // saveActivities(){
  //
  // },
  data() {
    return {
      maxActivityID: this.$store.getters.MAX_ACTIVITIES_ID,
      maxAbonementID: this.$store.getters.MAX_ABONEMENTS_ID,
      abonTypeSelected: false,
      abonTypeObject: null,
      clientSelected: false,
      clientObject: null,
      saleObject: null,
      trainerSelected: false,
      trainerObject: null,
      poolTypeSelected: false,
      poolTypeObject: null,
      activities: {},
      curChosenDate: "",
      curChosenDateElement: "",
    };
  }
}


</script>
