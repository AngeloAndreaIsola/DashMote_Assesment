<template>
  <div class="container">
    <!-- Heading -->
    <h2 class="text-center mt-5">My Vue Todo App</h2>

    <!-- Input -->
    <div class="d-flex mt-5">
      <input type="text" v-model="project" placeholder="Enter project" class="w-100 form-control" />
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
          <th scope="col" style="width: 120px">personal icon</th>
          <th scope="col" style="width: 120px">project #</th>
          <th scope="col" style="width: 120px">users</th>
          <th scope="col" style="width: 120px">dashboards</th>
          <th scope="col" style="width: 120px">delete</th>
          <!-- <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projects" :key="index">
          <!-- <td>
            <span :class="{ 'line-through': project.status === 'finished' }">
              {{ project.name }}
            </span>
          </td> -->
          <!-- <td>
            <span class="pointer noselect" @click="changeStatus(index)" :class="{
              'text-danger': project.status === 'to-do',
              'text-success': project.status === 'finished',
              'text-warning': project.status === 'in-progress',
            }">
              {{ capitalizeFirstChar(project.status) }}
            </span>
          </td> -->

          <td></td>

          <td>
            <p>Project #</p>
          </td>

          <td>
            <p>n users</p>
          </td>

          <td>m dashboards</td>

          <td class="text-center">
            <div @click="deleteproject(index)">
              <Button type="text" danger>Delete</Button>
            </div>
          </td>
          <td class="text-center">
            <div @click="editproject(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      project: "",
      editedproject: null,
      statuses: ["to-do", "in-progress", "finished"],
      /* Status could be: 'to-do' / 'in-progress' / 'finished' */
      projects: [
        {
          name: "Steal bananas from the supermarket.",
          status: "to-do",
        },
        {
          name: "Eat 1 kg chocolate in 1 hour.",
          status: "in-progress",
        },
        {
          name: "Create YouTube video.",
          status: "finished",
        },
      ],
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
     * Change status of project by index
     */
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.projects[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.projects[index].status = this.statuses[newIndex];
    },
    /**
     * Deletes project by index
     */
    deleteproject(index) {
      if (confirm("Do you really want to delete this project?")) {
        this.projects.splice(index, 1);
      }
    },
    /**
     * Edit project
     */
    editproject(index) {
      this.project = this.projects[index].name;
      this.editedproject = index;
    },
    /**
     * Add / Update project
     */
    submitproject() {
      if (this.project.length === 0) return;
      /* We need to update the project */
      if (this.editedproject != null) {
        this.projects[this.editedproject].name = this.project;
        this.editedproject = null;
      } else {
        /* We need to add new project */
        this.projects.push({
          name: this.project,
          status: "todo",
        });
      }
      this.project = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
