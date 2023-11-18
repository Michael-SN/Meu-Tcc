import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

import patients from "../views/Patient/_store/index";
import anamnesis from "../views/Anamnesis/_store/index";
import measures from "../views/Measure/_store/index";
import user from "../views/Profile/_store/index";

const state = {
  hideConfigButton: false,
  isPinned: true,
  showConfig: false,
  isTransparent: "",
  color: "",
  isNavFixed: false,
  isAbsolute: false,
  showNavs: true,
  showSidenav: true,
  showNavbar: true,
  showFooter: true,
  showMain: true,
  navbarFixed:
    "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
  absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
  bootstrap,
};

const mutations = {
  toggleConfigurator(state) {
    state.showConfig = !state.showConfig;
  },
  navbarMinimize(state) {
    const sidenav_show = document.querySelector(".g-sidenav-show");
    if (sidenav_show.classList.contains("g-sidenav-hidden")) {
      sidenav_show.classList.remove("g-sidenav-hidden");
      sidenav_show.classList.add("g-sidenav-pinned");
      state.isPinned = true;
    } else {
      sidenav_show.classList.add("g-sidenav-hidden");
      sidenav_show.classList.remove("g-sidenav-pinned");
      state.isPinned = false;
    }
  },
  sidebarType(state, payload) {
    state.isTransparent = payload;
  },
  cardBackground(state, payload) {
    state.color = payload;
  },
  navbarFixed(state) {
    if (state.isNavFixed === false) {
      state.isNavFixed = true;
    } else {
      state.isNavFixed = false;
    }
  },
  toggleEveryDisplay(state) {
    state.showNavbar = !state.showNavbar;
    state.showSidenav = !state.showSidenav;
    state.showFooter = !state.showFooter;
  },
  toggleHideConfig(state) {
    state.hideConfigButton = !state.hideConfigButton;
  },
};

const actions = {
  toggleSidebarColor({ commit }, payload) {
    commit("sidebarType", payload);
  },
  setCardBackground({ commit }, payload) {
    commit("cardBackground", payload);
  },
};

const modules = {
  patients,
  measures,
  anamnesis,
  user,
};

export default createStore({
  state,
  mutations,
  actions,
  modules,
});
