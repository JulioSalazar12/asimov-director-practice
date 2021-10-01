<template>
  <div class="list-courses">
    <h1 class="text-center">My courses</h1>
    <div v-for="course in listCourses" :key="course.id" align="center">
      <v-col>
        <v-card width="800px" class="mx-auto">
          <v-card-title class="white--text blue accent-4">{{course.name}}</v-card-title>
          <v-card-text class="black--text" align="left">{{course.description}}</v-card-text>
          <v-card-actions>
            <v-btn text class="black white--text">see details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script>
import ListCoursesService from '../services/list-courses.service'

export default {
  name: "list-courses",
  data: () => ({
    listCourses: [],

  }),
  created() {
    ListCoursesService.getAll()
        .then((response) => {
          this.listCourses = response.data.map(this.getDisplayCourse);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods: {
    getDisplayCourse(course) {
      return {
        id: course.id,
        name: course.name,
        description: course.description
      };
    },
  }
}
</script>

<style scoped>

</style>