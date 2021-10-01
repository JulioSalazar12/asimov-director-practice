<template>
  <div>
    <form>
      <v-row align="center" class="px-3 mx-auto">
        <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
        <v-col cols="12" md="12">
          <h1>Ads for teachers</h1>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field v-model="title" label="Main input"  :rules="rules"  hide-details="auto"></v-text-field>
          <v-text-field v-model="description" label="Another input" :rules="rules" hide-details="auto"></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn  class="mr-4"  @click="createNewAd">Submit</v-btn>
        </v-col>
      </v-row>
    </form>
    <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
    <v-col cols="12" md="12">
      <h1>Ads confirmed</h1>
    </v-col>
    <v-col cols="12" md="12">
      <div v-for="ad in ads" :key="ad.id">
        <v-card class="mx-auto mb-2" elevation="2">
          <v-card-title>{{ad.title}}</v-card-title>
          <v-card-text>{{ad.description}}</v-card-text>
        </v-card>
      </div>
    </v-col>


  </div>
</template>

<script>

import AdsService from '../services/ads.service';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "ads",
  data: () => ({
    ads: [],
    id: '',
    title: '',
    description: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
  created() {
    this.refreshList()
  },
  methods: {
    getDisplayAd(ad){
      return {
        id: ad.id,
        title: ad.title,
        description: ad.description
      };
    },
    refreshList (){
      AdsService.getAll()
      .then((response) => {
        this.ads = response.data.map(this.getDisplayAd);
        console.log(response.data);
      })
    },
    createNewAd () {
      const ad = {
        id: uuidv4(),
        title: this.title,
        description: this.description
      }
      AdsService.create(ad)
        .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
    }
  }
}
</script>

<style scoped>

</style>