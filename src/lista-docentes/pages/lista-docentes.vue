<template>
  <div class="lista-docentes">
    <v-row align="center" class="px-3 mx-auto">
      <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
      <v-col cols="12" md="12"><h1>List of Teachers</h1></v-col>
      <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
      <div v-for="teacher in listadocentes" :key="teacher.id">
        <v-col cols="12" sm="12">
          <v-card class="mx-auto" width="345" max-height="350">
            <v-card-text>
              <div>Teacher</div>
              <p id="nomTeacher" class="text-h4 text--primary">{{teacher.name}}</p>
              <div>{{ teacher.lastname }}</div>
              <p>Edad: {{teacher.age}}</p>
            </v-card-text>
            <v-dialog max-width="1500px" overlay-color="white" overlay-opacity="50">
              <template v-slot:activator="{on, attrs}">
                <v-btn text color="indigo accent-4" datk v-on="on" v-bind="attrs" @click="getTeacher(teacher.id)">Learn More</v-btn>
              </template>
              <v-container>
                <v-row>
                  <!--  -->
                  <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
                  <v-col cols="12" sm="6" md="8">
                    <h1 class="font-weight-bold">Información del docente</h1>
                    <v-col cols="12" md="12"><v-spacer></v-spacer></v-col>
                    <v-card class="mx-auto" max-width="1010">
                      <v-card-title class="text-h5 mb-1 teacher-profile-name font-weight-bold white--text">
                        Docente: {{teacherSelected.name}} {{teacherSelected.lastname}}
                      </v-card-title>
                      <v-list-item three-line>
                        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-content>
                            Información personal:<br>
                            Nombre(s): {{teacherSelected.name}}<br>
                            Apellidos: {{teacherSelected.lastname}}<br>
                            Edad: {{teacherSelected.age}} <br>
                          </v-list-item-content>
                        </v-list-item-content>


                      </v-list-item>
                    </v-card>
                  </v-col>

                  <!-- Progreso del docente -->
                  <v-col cols="6" md="4">
                    <v-container class="ml-3">
                      <h5 class="font-weight-bold mb-3">Progreso total del docente</h5>
                      <p class="display-3 font-weight-bold">25%</p>
                    </v-container>
                  </v-col>
                </v-row>
                <v-row>
                  <!-- Unidades -->
                  <v-col cols="8">
                    <v-container>
                      <h5 class="unit-bar-title">Puntos obtenidos por progreso</h5>
                      <v-card class="mx-auto mt-1 mb-5">
                        <v-list-item>
                          <figure class="mr-4">
                            <v-icon large color="black">mdi-chart-box</v-icon>
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
                          <figure class="mr-4">
                            <v-icon large color="black">mdi-file-document</v-icon>
                          </figure>

                          <v-list-item-content class="unit-bar-text">
                            <h4>(Unidad 01)</h4>
                            <p>Descripción de la unidad</p>
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
                            <h4>(Unidad 02)</h4>
                            <p>Descripción de la unidad</p>
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
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 1</v-btn>
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 2</v-btn>
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 3</v-btn>
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 4</v-btn>
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 5</v-btn>
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 6</v-btn>
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 7</v-btn>
                            <v-btn rounded x-small class="white--text mt-1 mb-1" color="black accent-4">Competencia 8</v-btn>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-dialog>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </div>
</template>

<script>
import ListaDocentesService from '../services/lista-docentes.service'

export default {
  name: "lista-docentes",
  data: () => ({
    listadocentes: [],
    teacherSelected: {
      id: '',
      name: '',
      lastname: '',
      age: ''
    }
  }),
  created() {
    ListaDocentesService.getAll()
        .then((response) => {
          this.listadocentes = response.data.map(this.getDisplayTeacher);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods: {
    getDisplayTeacher(teacher) {
      return {
        id: teacher.id,
        name: teacher.name,
        lastname: teacher.lastname,
        age: teacher.age
      };
    },
    getTeacher(id){
      ListaDocentesService.getById(id)
          .then((response) => {
            this.teacherSelected = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
}
</script>

<style scoped>
v-container {
  background-color: #ECEBE9;
}

/* Teacher's profile */
.teacher-profile-name {
  background-color: #2C53C9;
}


/* Unity bars*/
.unit-bar-title {
  font-weight: bold;
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