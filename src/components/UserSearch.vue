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
  <div v-for="user in users" :key="user.id">
    <p>
      {{ user.login }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserSearch",
  data() {
    return {
      username: "",
      users: [],
      errorMsg: "",
    };
  },
  methods: {
    getGitHubUsers() {
      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: this.username,
          },
        })
        .then((response) => {
          this.users = response.data.items;
        })
        .catch(() => {
          this.errorMsg = `Error retrieving data`;
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
</style>