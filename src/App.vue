<template>
  <div id="app" class="container">
    <div class="py-4">
      <h2></h2>
      <br />
      <agenda-input />
      <br />
    </div>
  </div>
</template>

<script>
import AgendaInput from "./components/AgendaInput.vue";

export default {
  name: "App",
  components: {
    AgendaInput,
  },
};
</script>
<style scoped></style>
