<template>
    <div class="desktop">
        <div :class="`row ${project.category}`" v-for="(project, index) in filteredProjects" :key="index">
            <a-avatar :class="`avatar-${project.category}`"> {{ project.category }}</a-avatar>
            <p class="project"> {{ project.name }}</p>
            <p class='user'> {{ project.users }} users</p>
            <div class="dashboardsNumber">{{ project.dashboards }} dashboards</div>
            <div class="delete" @click="deleteproject(index)">
                <a-button type="text" danger>Delete</a-button>
            </div>
        </div>
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
};
</script>

<style scoped>

/* Generic row for desktop */
.row {
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    background: white;
    border-left: 15px solid gray;
    padding: 15px;

    margin-top: 15px;
    justify-content: space-evenly;
}

/* Hide numeration */
.row>* {
    list-style: none;
}


/* Color left side border */
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
