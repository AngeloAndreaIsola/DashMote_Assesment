<template>
  <div class="mobile">
    <h3>My projects:</h3>
    <details :class="`warning row ${project.category}`" v-for="(project, index) in filteredProjects" :key="index">
      <summary>
        <a-avatar :class="`avatar-${project.category}`"> {{ project.category }}</a-avatar>
        {{ project.name }}
      </summary>
      <p></p>
      <p class='user'> {{ project.users }} users</p>
      <div class="dashboardsNumber">{{ project.dashboards }} dashboards</div>
      <div class="delete">
        <a-button type="text" danger  @click="deleteproject(index)">Delete</a-button>
      </div>
    </details>

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
      search: '',
    };
  },
  methods: {
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
};
</script>

<style scoped>
.mobile {
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 4px;
  max-width: 30em;
  width: 100%;

  /* Set font for "My projects" and projects name */
  /* Header 3 */

  font-family: 'Roboto';
  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */


  /* Dark Blue */

  color: #223273;
}

/* Hide arrow marker on the side */
details>summary {
  list-style: none;
}

details>summary::-webkit-details-marker {
  display: none;
}

details {
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  background: white;
  padding: 15px;
}

details {
  margin-top: 15px;

}

/* Center dashboards in mobile */
details.warning div {
  justify-content: center;
}

/* Center delete button */
.delete{
  margin: auto;
  text-align: center;
}

/* Hide numeration for elemntes in warning */
details.warning p {
  list-style-type: none;
  margin: auto;
  text-align: center;
}


summary::-webkit-details-marker,
p::-webkit-details-marker {
  display: none;
}


p {
  display: list-item;
  cursor: default;
  margin-left: 3rem;
  /* list-style-type: corona; */
}

summary::before {
  cursor: pointer;
  position: absolute;
  display: inline-flex;
  width: 1rem;
  height: 1rem;
  left: 0rem;
  margin-right: .5rem;
  content: url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.6066 12H1.3934' stroke='%23202842' stroke-width='1.875' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 1.39343V22.6066' stroke='%23202842' stroke-width='1.875' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

[open] summary {
  font-weight: 700;
}

[open] summary::before {
  transform: rotate(45deg);
  content: url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.6066 12H1.3934' stroke='%23202842' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 1.39343V22.6066' stroke='%23202842' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}


/* Define colors for left border */
.F {
  border-left: 10px solid #b37feb;
}

.C {
  border-left: 10px solid #00CC74;
}

.D {
  border-left: 10px solid #1c90ff;
}
</style>
