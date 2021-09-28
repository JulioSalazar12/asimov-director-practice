<template>
  <v-app>
    <v-app-bar app color="primary white--text">
      <v-app-bar-title>
        <span class="display-1"></span>
        <v-divider inset vertical class="mx-1"></v-divider>
        <span>Asimov</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn plain style="text-transform: capitalize" to="/home" color="white">Home</v-btn>
      <v-btn plain style="text-transform: capitalize" to="/teachers" color="white">Teachers</v-btn>
      <v-btn plain style="text-transform: capitalize" to="/about" color="white">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>
