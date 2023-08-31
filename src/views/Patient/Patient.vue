<template>
  <div>
    <router-view></router-view>
    <router-view name="patient-list"></router-view>
  </div>
</template>

<script>
import register from "@/views/Patient/_store/register";

export default {
  created() {
    register(this.$store);
  },
};
</script>
