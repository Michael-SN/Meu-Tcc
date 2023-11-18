<template>
  <aside
    class="my-3 ms-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    id="sidenav-main"
    style="z-index: 999"
  >
    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <router-link class="m-0 navbar-brand" to="/patients/list">
        <img :src="logo" class="navbar-brand-img h-100" alt="main_logo" />
        <span class="ms-1 font-weight-bold">Sistema de Nutrição</span>
      </router-link>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :cardBg="customClass" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-nutrition.png";

export default {
  name: "index",
  components: {
    SidenavList,
  },
  data() {
    return {
      logo,
    };
  },
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
};
</script>
