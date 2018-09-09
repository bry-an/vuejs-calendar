import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC'); //this is important to have time consistency across the world

export default new Vuex.Store({
    //state properties
    state: {
        currentYear: 2018,
        currentMonth: 9,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events:
            [
                { description: 'Random event 1', date: moment('2018-09-12', 'YYYY-MM-DD') },
                { description: 'Random event 2', date: moment('2018-09-13', 'YYYY-MM-DD') },
                { description: 'Random event 3', date: moment('2018-10-16', 'YYYY-MM-DD') }
            ],
        eventFormDate: null,
    },
    mutations: {
        setCurrentMonth(state, payload) { //mutations always have these two properties
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push({
                description: payload,
                date: state.eventFormDate
            })
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
})