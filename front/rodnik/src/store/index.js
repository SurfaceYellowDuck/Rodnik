import { createStore } from 'vuex'

export default createStore({
  state: {
    abonements:
    [
      {
        type: "Большой",
        cnt_activities: 16
      },
      {
        type: "Маленький",
        cnt_activities: 8
      }
],
    users:
        [
          {
            id: 1,
            firstname: "Алексей",
            lastname: "Оболонский",
            patronymic: "Иванович"
          },
          {
            id: 2,
            firstname: "Петр",
            lastname: "Нефедов",
            patronymic: "Кириллович"
          },
        ],
    pools:
        [
          {
            type: "Большой",
          },
          {
            type: "Маленький",
          }
        ],
    trainers:
        [
          {
            id: 1,
            firstname: "Алексей",
            lastname: "Оболонский",
            patronymic: "Иванович"
          },
          {
            id: 2,
            firstname: "Петр",
            lastname: "Нефедов",
            patronymic: "Кириллович"
          },
        ],
  },
  getters: {
    ABONEMENTS: state => {return state.abonements},
    USERS: state => {return state.users},
    POOLS: state => {return state.pools},
    TRAINERS: state => {return state.trainers}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
