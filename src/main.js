import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Hangover', genre: 'Comedy'},
      { id: 2, title: 'I Love You Man', genre: 'Comedy' },
      { id: 3, title: 'RED', genre: 'Comedy' },
      { id: 4, title: 'Cars', genre: 'Family' },
      { id: 5, title: 'Toy Story', genre: 'Family' },
      { id: 6, title: 'Bumblebee', genre: 'Family' }
    ]
  },
  // more stuff will go here later
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
