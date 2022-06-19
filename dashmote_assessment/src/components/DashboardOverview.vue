<template>
  <div class="container">
    <!-- Heading -->
    <nav>
      <!-- <BellOutlined />
      <p>Sarah Green</p>
      <a-avatar src="https://joeschmoe.io/api/v1/random" /> -->


      <a-page-header class="site-page-header">
        <template #extra>
          <BellOutlined :style="{ fontSize: '20px' }" />
          <h1 style="fontSize: 14px; line-height: 22px; display: inline-block;">Sarah Green</h1>
          <a-avatar src="https://joeschmoe.io/api/v1/random" />
        </template>
      </a-page-header>
    </nav>


    <!-- Input -->
    <div class="d-flex mt-5">

      <div class="ant-transfer-list-body-search-wrapper">
        <span class="ant-input-affix-wrapper ant-transfer-list-search" style="border-radius: 5px 5px 5px 5px;">
          <span class="ant-input-prefix"><span role="img" aria-label="search" class="anticon anticon-search">
              <svg focusable="false" class="" data-icon="search" width="1em" height="1em" fill="currentColor"
                aria-hidden="true" viewBox="64 64 896 896">
                <path
                  d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                </path>
              </svg></span></span><input v-model="search" placeholder="Search for a keyword" type="text" class="ant-input"><span
            class="ant-input-suffix"><span role="button" aria-label="close-circle" tabindex="-1"
              class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon-has-suffix ant-input-clear-icon"><svg
                focusable="false" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor"
                aria-hidden="true" viewBox="64 64 896 896">
                <path
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z">
                </path>
              </svg></span>
            <!---->
          </span></span>
      </div>

      <!-- <input type="text" v-model="search" placeholder="Search for a keyword" class="w-100 form-control" />
      <button class="btn btn-warning rounded-0" @click="submitproject">
        SUBMIT
      </button> -->
    </div>

    <div style="width:800px; margin:0 auto; overflow-y: scroll; height:400px;">
      <!-- project table -->
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <!-- <th scope="col">project</th> -->
            <!-- <th scope="col" style="width: 120px">Status</th> -->
            <!-- <th scope="col" style="width: 120px">category</th>
            <th scope="col" style="width: 120px">project #</th>
            <th scope="col" style="width: 120px">users</th>
            <th scope="col" style="width: 120px">dashboards</th>
            <th scope="col" style="width: 120px">delete</th> -->
            <!-- <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in filteredProjects" :key="index">
            <div :class="`side-${project.category}`"></div>
            <td>
              <a-avatar :class="`${project.category}`"> {{ project.category }}</a-avatar>
            </td>

            <td>
              <p class="project"> {{ project.name }}</p>
            </td>

            <td>
              <p class='user'> {{ project.users }} users</p>
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


  </div>
</template>

<script>
import json from '../assets/data.json'
import { BellOutlined } from '@ant-design/icons-vue';


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      projects: json,
      search: '',
      theme: 'blue-theme',
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

  //TODO: make it not case sensitive
  computed: {
    filteredProjects: function () {
      return this.projects.filter((project) => {
        return project.name.match(this.search)
      });
    }
  },

  components: {
    BellOutlined,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
