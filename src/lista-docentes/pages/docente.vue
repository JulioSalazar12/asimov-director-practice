<template>
  <div class="docente">
    <v-container>
      <v-row>
        <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
        <v-col cols="12" sm="6" md="8">
          <h1 class="font-weight-bold">Teacher's information</h1>
          <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
          <v-card class="mx-auto" max-width="1010">
            <v-card-title class="text-h5 mb-1 teacher-profile-name font-weight-bold white--text">
              Teacher : {{teacherSelected.name}} {{teacherSelected.lastname}}
            </v-card-title>
            <v-list-item three-line>
              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-content>
                  Personal information:<br>
                  Name(s): {{teacherSelected.name}}<br>
                  Last name: {{teacherSelected.lastname}}<br>
                  age: {{teacherSelected.age}} <br>
                </v-list-item-content>
              </v-list-item-content>


            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="6" md="4">
          <v-container class="ml-3">
            <h5 class="font-weight-bold mb-3">Teacher progress</h5>
            <p class="display-3 font-weight-bold">25%</p>
          </v-container>
        </v-col>
      </v-row>
      <v-row>

        <v-col cols="8">
          <v-container>
            <h5 class="unit-bar-title">Point for progress</h5>
            <v-card class="mx-auto mt-1 mb-5">
              <v-list-item>
                <figure class="mr-4">
                  <v-icon large color="black">mdi-chart-box</v-icon>
                </figure>

                <v-list-item-content class="unit-bar-text">
                  <h4>Sum of points</h4>
                  <p>Total points</p>
                </v-list-item-content>

                <v-spacer></v-spacer>
                <p class="unit-bar-value">985 points</p>
              </v-list-item>

            </v-card>

            <h5 class="unit-bar-title">Units in progress and completed</h5>
            <v-card class="mx-auto mt-3 mb-2">
              <v-list-item>
                <figure class="mr-4">
                  <v-icon large color="black">mdi-file-document</v-icon>
                </figure>

                <v-list-item-content class="unit-bar-text">
                  <h4>(Unit 01)</h4>
                  <p>Unit description</p>
                </v-list-item-content>

                <v-spacer></v-spacer>
                <p class="unit-bar-value">95%</p>
              </v-list-item>
            </v-card>

            <v-card class="mx-auto mt-2 mb-2">
              <v-list-item>
                <figure class="mr-4">
                  <v-icon large color="black">mdi-file-document</v-icon>
                </figure>

                <v-list-item-content class="unit-bar-text">
                  <h4>(Unit 02)</h4>
                  <p>Unit description</p>
                </v-list-item-content>

                <v-spacer></v-spacer>
                <p class="unit-bar-value">Pending</p>
              </v-list-item>
            </v-card>

          </v-container>

        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="220">
            <v-card-title class="justify-center white--text title-competences">
              <h4>Competences</h4>
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
  </div>
</template>

<script>
import ListaDocentesService from '../services/lista-docentes.service'

export default {
  name: "docente",
  data: ()=>({
    teacherSelected: {
      id: '',
      name: '',
      lastname: '',
      age: ''
    }
  }),
  created() {
    ListaDocentesService.getById(this.$route.params.id)
        .then((response) => {
          this.teacherSelected = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods: {

  }
}
</script>

<style scoped>

</style>