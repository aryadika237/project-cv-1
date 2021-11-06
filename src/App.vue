<template>
  <div id="app" class="container">
    <div class="py-4">
      <h2></h2>
      <br />
      <agenda-input />
      <br />
      <agenda-show />
    </div>
  </div>
</template>

<script>
import AgendaInput from "./components/AgendaInput.vue";
import AgendaShow from "./components/AgendaShow.vue";

export default {
  name: "App",
  components: {
    AgendaInput,
    AgendaShow,
  },
};
</script>
<style scoped></style>
