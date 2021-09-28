<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        Información del docente
        <v-card class="mx-auto" max-width="1010" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                <div class="d-block pa-2 blue accent-4 font-weight-bold white--text">
                  Docente: {teachers.name} {teachers.lastName}
                </div>
              </v-list-item-title>
              <v-list-item-content>
                Información personal:<br>
                Nombre(s): {teachers.name}<br>
                Apellidos: {teachers.lastName}<br>
                Edad: {teachers.age} <br>
              </v-list-item-content>
            </v-list-item-content>


          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        Pogreso total del docente
        <v-card class="pa-2" outlined tile>
          <h1>25%</h1>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- Unidades -->
      <v-col cols="8">
        <v-container>
          <h5 class="unit-bar-title">Puntos obtenidos por progreso</h5>
          <v-card class="mx-auto mt-1 mb-5">
            <v-list-item>
              <figure class="mr-4 unit-bar-icons">
                <v-icon small color="white">mdi-assessment</v-icon>
              </figure>

              <v-list-item-content class="unit-bar-text">
                <h4>Suma de puntos hasta ahora</h4>
                <p>Los puntos totales que tiene actualmente</p>
              </v-list-item-content>

              <v-spacer></v-spacer>
              <p class="unit-bar-value">985 puntos</p>
            </v-list-item>

          </v-card>

          <h5 class="unit-bar-title">Unidades en progreso y culminadas</h5>
          <v-card class="mx-auto mt-3 mb-2">
            <v-list-item>
              <figure class="mr-4 unit-bar-icons">
                <v-icon small color="white" mdi-article></v-icon>
              </figure>

              <v-list-item-content class="unit-bar-text">
                <h4>(Unidad 1)</h4>
                <p>adjective</p>
              </v-list-item-content>

              <v-spacer></v-spacer>
              <p class="unit-bar-value">95%</p>
            </v-list-item>
          </v-card>

          <v-card class="mx-auto mt-2 mb-2">
            <v-list-item>
              <figure class="mr-4 unit-bar-icons">
                <v-icon small color="white">mdi-article</v-icon>
              </figure>

              <v-list-item-content class="unit-bar-text">
                <h4>(Unidad 2)</h4>
                <p>adjective</p>
              </v-list-item-content>

              <v-spacer></v-spacer>
              <p class="unit-bar-value">Por comenzar</p>
            </v-list-item>
          </v-card>

        </v-container>

      </v-col>
      <!-- Competencias -->
      <v-col cols="4">
        <v-card class="mx-auto" max-width="220">
            <v-card-title class="justify-center white--text title-competences">
              <h4>Competencias</h4>
            </v-card-title>
          <v-card-actions>
            <v-list-item>
              <v-list-item-content>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 1</v-btn>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 2</v-btn>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 3</v-btn>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 4</v-btn>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 5</v-btn>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 6</v-btn>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 7</v-btn>
                <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competence 8</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiAccount } from '@mdi/js';

export default {
  name: "teachers",
  data: () => ({
    icons: {
      mdiAccount
    }
  })
}
</script>

<style scoped>
  v-container {
    background-color: #ECEBE9;
  }
  /* Unity bars*/
  .unit-bar-title {
    font-weight: bold;
  }
  .unit-bar-icons {
    background-color: black;
  }
  .unit-bar-text {
    font-size: 14px;
  }
  .unit-bar-value {
    font-weight: bold;
  }

  /* Competences Card */
  .title-competences {
    background-color: #2C53C9;
  }
</style>