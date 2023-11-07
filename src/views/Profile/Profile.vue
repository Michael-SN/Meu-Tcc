<template>
  <div>
    <router-view></router-view>
    <router-view name="profile-info"></router-view>
  </div>
</template>

<script>
import register from "./_store/register";

export default {
  created() {
    register(this.$store);
  },
};
</script>
