<template>
  <div class="container-fluid" id="home-page">
    <div class="row">
      <div class="offset-md-3 col-12 col-md-6 text-center">
        <p>{{ JSON.stringify(data.data) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  async setup() {
    const data = await axios.get(
      "https://api2.splinterlands.com/battle/history?player=farpetrad"
    );

    return { data };
  },
});
</script>
