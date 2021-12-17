<template>
  <div id="app">
    <!-- <InputExample /> -->
    <!-- <InputExample2 /> -->
    <InputExample3 />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import InputExample from "@/components/InputExample.vue";
// import InputExample2 from "@/components/InputExample2.vue";
import InputExample3 from "@/components/InputExample3.vue";

export default Vue.extend({
  name: "App",
  components: {
    // InputExample,
    // InputExample2
    InputExample3,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
