<template>
  <div>
    <tabbat v-show="isShow"></tabbat>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import tabbat from "./components/tabbat";
import { mapState } from "vuex";

export default {
  components: {
    tabbat,
  },
  computed: {
    ...mapState("tabBatModule", ["isShow"]),
  },
};
</script>
<style>
section {
  margin-bottom: 50px;
}
</style>
