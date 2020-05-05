import sample from './sample.js';
import '../stylesheets/main.scss';
import Vue from 'vue';
import Vue1 from './Vue1.vue';
import App2 from './react1.jsx';
import add from './add.ts';

sample();
App2();
console.log(add(134,3415));
new Vue({
  el: '#root2',
  render: (h) => h(Vue1),
})
