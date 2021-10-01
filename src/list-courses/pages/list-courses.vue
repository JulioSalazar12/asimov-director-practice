<template>
  <div class="list-courses">
    <h1 class="text-center">My courses</h1>
    <div v-for="course in listCourses" :key="course.id" align="center">
      <v-col>
        <v-card width="800px" class="mx-auto">
          <v-card-title class="white--text blue accent-4">{{course.name}}</v-card-title>
          <v-card-text class="black--text" align="left">{{course.description}}</v-card-text>
          <v-dialog max-width="1500px" overlay-color="white" overlay-opacity="50">
            <template v-slot:activator="{on, attrs}">
              <v-btn text color="indigo accent-4" datk v-on="on" v-bind="attrs" @click="getCourse(course.id)">Learn More</v-btn>
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
                      Curso: {{courseSelected.name}}
                    </v-card-title>
                    <v-list-item three-line>
                      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-content>
                          Información detalla del curso:<br>
                          Description: {{courseSelected.description}} <br>
                        </v-list-item-content>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <!-- Unidades -->
                <v-col cols="8">
                  <v-container>
                    <h5 class="unit-bar-title">Items</h5>
                      <div v-for="item in courseSelected.items" :key="item.id">
                        <v-card class="mx-auto" max-width="344">

                          <v-card-title>{{ item.title }}</v-card-title>

                          <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

                          <v-card-actions>
                            <v-btn color="orange lighten-2" v-bind:href="item.conexion">Explore</v-btn>

                            <v-spacer></v-spacer>

                            <v-btn icon @click="show = !show">
                              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                          </v-card-actions>

                          <v-expand-transition>
                            <div v-show="show">
                              <v-divider></v-divider>

                              <v-card-text>
                                {{ item.resume }}
                              </v-card-text>
                            </div>
                          </v-expand-transition>
                        </v-card>
                      </div>

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
  </div>
</template>

<script>
import ListCoursesService from '../services/list-courses.service'

export default {
  name: "list-courses",
  data: () => ({
    show: false,
    listCourses: [],
    courseSelected: {
      id: '',
      name: '',
      description: '',
      items: [{
        ide: '',
        title: '',
        resume: '',
        conexion: ''
      }]
    }

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
        description: course.description,
        items: course.items
      };
    },
    getCourse(id){
      ListCoursesService.getById(id)
        .then((response) => {
          this.courseSelected = response.data;
          console.log(response.data);
        })
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