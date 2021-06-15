<template>
  <div class="project">
    <p>{{ name }}</p>
    <p>
      <fa class="icon" icon="star" /> {{ stars }}
      <fa class="icon" icon="code-branch" />
      {{ fork ? "yes" : "no" }}
    </p>
  </div>
</template>

<script>
export default {
  name: "RepoCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    fork: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.project {
  width: 70%;
  border: 1px solid silver;
  margin: 4px;
  padding-left: 15px;
  text-align: left;
}
.icon {
  padding-left: 5px;
  padding-right: 5px;
}
</style>