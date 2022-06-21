<template>
  <div class="mobile">
    <div>My projects:</div>
    <details :class="`warning row ${project.category}`" v-for="(project, index) in filteredProjects" :key="index">
      <summary>
        <a-avatar :class="`avatar-${project.category}`"> {{ project.category }}</a-avatar>{{ project.name }}
      </summary>
      <p class='user'> {{ project.users }} users</p>
      <div class="dashboardsNumber">{{ project.dashboards }} dashboards</div>
      <div class="delete" @click="deleteproject(index)">
        <a-button type="text" danger>Delete</a-button>
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
/*
Native <details> element styling
AUTHOR: https://codepen.io/nicolasjengler 

+ replaced list-item styling with flex and pseudo-element content on summary => vertically aligned sign with summary content
+ added selection and focus outline matching detail style
+ addede custom list-style-type
  - corona-warning  
  - corona-info
  - corona-alert
+ fix body height –> min-height: 
  allow scroll on all details opened
*/

/* 
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap'); */

/* :root {
  --color-bg: #EEEDEB;
  --color-title: #0E1C4E;

  --color-summary-1: #FFF6EE;
  --color-summary-2: #FAFAFF;
  --color-summary-3: #FFF0F3;

  --color-summary-C-highlight: #00CC74;
  --color-summary-D-highlight: #1c90ff;
  --color-summary-F-highlight: #b37feb;


  --font-ibm-plex-sans: 'IBM Plex Sans', sans-serif;
} */

/* html,
body {
  overflow: auto;
  min-height: 100vh;
  width: 100%;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
} */

.mobile {
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 4px;
  max-width: 30em;
  width: 100%;
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
  border-left: 15px solid gray;
  padding: 15px;
}

details {
  margin-top: 15px;
}

/* details.warning {
  --highlight: var(--color-summary-C-highlight);
  background: var(--color-summary-C);
  border-left-color: var(--color-summary-C-highlight);
} */

/* Hide numeration for elemntes in warning */
details.warning p {
  list-style-type: none;
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
  border-left: 15px solid #b37feb;
}

.C {
  border-left: 15px solid #00CC74;
}

.D {
  border-left: 15px solid #1c90ff;
}
</style>
