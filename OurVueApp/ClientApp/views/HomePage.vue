<template>
  <div class="container-fluid" id="home-page">
    <div class="row">
      <div class="offset-md-3 col-12 col-md-6 text-center">
        <p>{{ JSON.stringify(data) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios, { AxiosResponse } from "axios";

export default defineComponent({
  async setup() {
    const dataFetch = async (): Promise<AxiosResponse> => {
      return await axios.get(
        "https://api2.splinterlands.com/battle/history?player=farpetrad"
      );
    };
    const data = (await dataFetch()).data;

    return { data };
  },
});
</script>
