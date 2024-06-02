import {createStore} from 'vuex'

export default createStore({
    state: {
        abonementTypes:
            [
                {
                    id: 1,
                    type: "Большой",
                    cnt_activities: 16
                },
                {
                    id: 2,
                    type: "Маленький",
                    cnt_activities: 8
                },
                {
                    id: 3,
                    type: "Супер маленький",
                    cnt_activities: 1
                }
            ],
        users:
            [
                {
                    id: 1,
                    firstname: "Алексей",
                    lastname: "Оболонский",
                    patronymic: "Иванович",
                    user_abonements: [1]
                },
                {
                    id: 2,
                    firstname: "Петр",
                    lastname: "Нефедов",
                    patronymic: "Кириллович"
                },
            ],
        poolTypes:
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
                    patronymic: "Иванович",
                },
                {
                    id: 2,
                    firstname: "Петр",
                    lastname: "Нефедов",
                    patronymic: "Кириллович"
                },
            ],
        abonements: [
            {
                id: 1,
                user_id: 1,
                abonType: 3
            },
            {
                id: 2,
                user_id: 1,
                abonType: 3

            },

        ],
        activities: [
            {
                id: 3,
                abonementId: 1,
                user_id: 1,
                trainer: {
                    id: 1,
                    firstname: "Алексей",
                    lastname: "Оболонский",
                    patronymic: "Иванович",
                },
                poolType: {
                    type: "Большой",
                },
                date: "23 Jun 2024",
                start_time: "04:28 PM",
                end_time: "04:28 PM"
            }
        ]
    },
    getters: {
        ABONEMENTTYPES: state => {
            return state.abonementTypes
        },
        USERS: state => {
            return state.users
        },
        POOLTYPES: state => {
            return state.poolTypes
        },
        TRAINERS: state => {
            return state.trainers
        },
        MAX_ACTIVITIES_ID: state => {
            if(state.activities.at(-1).id == null){
                return 0
            }else {
                return state.activities.at(-1).id

            }
        },
        MAX_ABONEMENTS_ID: state => {
            if(state.abonements.at(-1).id == null){
                return 0
            }else {
                return state.abonements.at(-1).id

            }
        },
        ACTIVITIES: state => {
            return state.activities
        },
        ABONEMENTS: state => {
            return state.abonements
        },
    },
    mutations: {
        addAbonement(state, payload){
            state.abonements.push(payload.abonement)
            console.log(state.abonements)
        },
        addActivities(state, payload){
            state.activities.push(payload.activity)

        }
    },
    actions: {},
    modules: {}
})
