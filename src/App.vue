<template>
  <v-app>
    <v-app-bar app color="black white--text">
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Asimov Logo"
          class="shrink mr-2"
          contain
          src="../images/graduation.png"
          transition="scale-transition"
          width="40"
        />

        <v-app-bar-title>
          <span class="display-1">Asimov</span>
          <v-divider inset vertical class="mx-1"></v-divider>
        </v-app-bar-title>
      </div>
      <v-spacer></v-spacer>
      <span class="mr-1">Perfil</span>
      <v-icon color="white">{{ icons.mdiAccount }}</v-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary color="black">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="white--text text--accent-4">
          <v-list-item>
            <v-btn @click.stop="drawer = !drawer">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/teachers" color="black" class="white--text">
              Resumen general
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/about" color="black" class="white--text">
              Profesores
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/lista-docentes" color="black" class="white--text">
              Crear Anuncio
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/lista-docentes" color="black" class="white--text">
              Competencias
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/lista-docentes" color="black" class="white--text">
              Top
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>

    </v-main>
  </v-app>
</template>

<script>
import { mdiAccount } from '@mdi/js';

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    icons: {
      mdiAccount,
    },
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>