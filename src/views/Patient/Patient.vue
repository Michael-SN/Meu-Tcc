<template>
  <div>
    <router-view></router-view>
    <router-view name="patient-list"></router-view>
  </div>
</template>

<script>
import registerPatient from "@/views/Patient/_store/register";
import registerMeasure from "@/views/Measure/_store/register";

export default {
  created() {
    registerPatient(this.$store);
    registerMeasure(this.$store);
  },
};
</script>
