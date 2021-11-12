<template>
  <div id="app">
    <notifications />
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  background-color: #e5e5e5;
}

* {
  box-sizing: border-box;
}
</style>
