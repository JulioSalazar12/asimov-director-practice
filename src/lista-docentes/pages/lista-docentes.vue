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
            <v-card-actions>
              <v-btn text color="indigo accent-4" to="/teachers">Learn More</v-btn>
            </v-card-actions>
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
    listadocentes: []
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
    }
  }
}
</script>

<style scoped>

</style>