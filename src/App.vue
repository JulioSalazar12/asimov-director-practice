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
            <v-btn plain to="/home" color="black" class="white--text">
              General summary
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/lista-docentes" color="black" class="white--text">
              Teachers
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/ads" color="black" class="white--text">
              Create ad
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/" color="black" class="white--text">
              Competences
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/" color="black" class="white--text">
              Top
            </v-btn>
          </v-list-item>
          <p>---------------------------------------------</p>
          <v-list-item>
            <v-btn plain to="/list-courses" color="black" class="white--text">
              Units
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/" color="black" class="white--text">
              advertisements
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/" color="black" class="white--text">
              average progress
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain to="/" color="black" class="white--text">
              competences
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer padless class="mt-5" color="black">
      <v-col class="text-center white--text" cols="12">
        © {{ new Date().getFullYear() }} — <strong>CyberSoft  Co., Ltd. All Rights Reserved.</strong>
      </v-col>
    </v-footer>
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