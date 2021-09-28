<template>
  <v-row align="center" class="px-3 mx-auto">
    <v-col cols="12" md="4"><h1>List of Teachers</h1></v-col>
    <v-col cols="12" md="8"><v-spacer></v-spacer></v-col>
    <div v-for="teacher in teachers" :key="teacher.id">
      <v-col cols="12" sm="12">
        <v-card class="mx-auto" width="345" max-height="350">
          <v-card-text>
            <div>Docente</div>
            <p class="text-h4 text--primary">{{teacher.name}}</p>
            <div>{{ teacher.lastname }}</div>
            <p>{{teacher.age}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="indigo accent-4">Learn More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
  </v-row>
</template>

<script>
import TeachersService from '../services/teachers.service'

export default {
  name: "teachers",
  data:()=>({
    teachers: []
  }),
  created() {
    TeachersService.getAll()
        .then((response) => {
          this.teachers = response.data.map(this.getDisplayTeacher);
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