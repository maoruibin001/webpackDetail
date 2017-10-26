/**
 * Created by lenovo on 2017/10/26.
 */
import template from './index.tpl';
import Vue from 'vue';
import $ from 'jquery';
import './index.css';
new Vue({
  el: '#app',
  template,
  mounted() {
    $('h1').on('click', function() {
      console.log(33333);
      console.log(4444)
    })
  },
  data() {
    return {
      msg: 'hello world'
    }
  }
})