<!--<template>-->
<!--  <div v-for="el1 in 10">-->
<!--    <button @click="handleClick(el1)">Нажмите на внутренний элемент {{ el1 }}</button>-->
<!--    <span v-for="el2 in 5" :ref="'el2-' + el2">{{ el2 }}</span>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { ref } from 'vue';-->

<!--export default {-->
<!--  methods: {-->
<!--    handleClick(el1) {-->
<!--      // Получить ссылку на внешний элемент с помощью рефа-->
<!--      const el2 = this.$refs['el2-' + el1];-->

<!--      // Получить значение внешнего элемента-->
<!--      console.log(el2.textContent);-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->