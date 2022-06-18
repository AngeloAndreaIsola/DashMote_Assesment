<template>
  <div class="container">
    <!-- Heading -->
    <h2 class="text-center mt-5">Project dashboards overview</h2>

    <!-- Input -->
    <div class="d-flex mt-5">
      <input type="text" v-model="search" placeholder="Search for a keyword" class="w-100 form-control" />
      <button class="btn btn-warning rounded-0" @click="submitproject">
        SUBMIT
      </button>
    </div>

    <!-- project table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <!-- <th scope="col">project</th> -->
          <!-- <th scope="col" style="width: 120px">Status</th> -->
          <th scope="col" style="width: 120px">category</th>
          <th scope="col" style="width: 120px">project #</th>
          <th scope="col" style="width: 120px">users</th>
          <th scope="col" style="width: 120px">dashboards</th>
          <th scope="col" style="width: 120px">delete</th>
          <!-- <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in filteredProjects" :key="index">
          <td>
            <a-avatar class=""> {{ project.category }}</a-avatar>
          </td>

          <td>
            <p> {{ project.name }}</p>
          </td>

          <td>
            <p> {{ project.users }} users</p>
          </td>

          <td>
            <div class="dashboardsNumber">{{ project.dashboards }} dashboards</div>
          </td>

          <td class="text-center">
            <div @click="deleteproject(index)">
              <a-button type="text" danger>Delete</a-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import json from '../assets/data.json'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      projects: json,
      search: ''
    };
  },
  methods: {
    /**
     * Capitalize first character
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * Deletes project by index
     */
    deleteproject(index) {
      if (confirm("Do you really want to delete this project?")) {
        this.projects.splice(index, 1);
      }
    }
  },

  computed: {
    filteredProjects: function () {
      return this.projects.filter((project) => {
        return project.name.match(this.search)
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
