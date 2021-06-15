<template>
  <div>
    <label for="searchBar"></label>
    <input
      type="text"
      class="searchInput"
      @keyup.enter="getGitHubUsers"
      v-model="username"
      placeholder="Search GitHub user"
    />
  </div>
  <h3 v-if="errorMsg">{{ errorMsg }}</h3>
  <h3 v-else-if="submitted === true && !users.length"><NoResults /></h3>
  <div v-else v-for="(user, index) in users" :key="index">
    <p class="userWrapper">
      <img
        class="avatar"
        :style="{ backgroundImage: 'url(' + user.avatar_url + ')' }"
      />
      {{ user.login }}
    </p>
    <div v-for="(projectList, index) in projectListofLists" :key="index">
      <div v-for="(project, index) in projectList" :key="index">
        <div v-if="user.id === project.owner.id">
          <repo-card
            :name="project.name"
            :stars="project.stargazers_count"
            :fork="project.fork"
          ></repo-card>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import NoResults from "./NoResults.vue";
import RepoCard from "./RepoCard.vue";

export default {
  name: "UserSearch",
  components: {
    NoResults,
    RepoCard,
  },
  data() {
    return {
      username: "",
      users: [],
      errorMsg: "",
      submitted: false,
      projectListofLists: [],
    };
  },
  methods: {
    getGitHubUsers() {
      this.submitted = false;
      this.errorMsg = "";
      this.projectListofLists = [];
      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: this.username,
          },
        })
        .then((response) => {
          this.users = response.data.items;
          this.users.map((user) => {
            axios
              .get(`https://api.github.com/users/${user.login}/repos`)
              .then((response) => {
                this.projectListofLists.push(
                  JSON.parse(JSON.stringify(response.data))
                );
              })
              .catch((error) => {
                this.errorMsg = `Error retrieving data. ${error}`;
              });
          });
          this.submitted = true;
        })
        .catch((error) => {
          this.errorMsg = `Error retrieving data. ${error}`;
        });
    },
  },
};
</script>

<style>
.searchInput {
  border-radius: 3px;
  border-color: silver;
  border-width: thin;
  padding: 5px;
}
.avatar {
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
}
.userWrapper {
  text-align: left;
}
</style>