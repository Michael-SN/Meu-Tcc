<template>
  <div class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Welcome back
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start" @submit.prevent="handleSignIn">
                    <label>Email</label>
                    <soft-input
                      id="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      v-model:value="user.email"
                    />
                    <label>Password</label>
                    <soft-input
                      id="password"
                      type="password"
                      placeholder="Password"
                      name="password"
                      v-model:value="user.password"
                    />
                    <soft-switch
                      id="rememberMe"
                      name="rememberMe"
                      :checked="user.remember"
                      v-model:checked="user.remember"
                    >
                      Remember me
                    </soft-switch>
                    <div class="text-center">
                      <soft-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="success"
                        full-width
                        >Sign in
                      </soft-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="top-0 end-0 bottom-0 position-absolute w-50 h-100 d-md-block d-none me-n8"
              >
                <div
                  class="bg-cover position-absolute fixed-top h-100"
                  :style="{
                    backgroundImage:
                      'url(' + require('@/assets/img/sign-in/bg-signin.jpg') + ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import register from "@/views/SignIn/_store/register";
import SoftInput from "@/components/SoftInput.vue";
import SoftSwitch from "@/components/SoftSwitch.vue";
import SoftButton from "@/components/SoftButton.vue";
const body = document.getElementsByTagName("body")[0];

const { mapState, mapActions } = createNamespacedHelpers("auth");
import { mapMutations } from "vuex";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember: false,
      },
    };
  },
  watch: {
    "$store.state.auth.failure": function (newValue) {
      console.log(newValue);
      if (newValue) {
        Toastify({
          text: newValue,
        }).showToast();
      }
    },
    "$store.state.auth.success": function (newValue) {
      console.log("SUCCESS", newValue);
      if (newValue) this.$router.push("/dashboard");
    },
  },
  computed: {
    ...mapState(["success", "failure", "loading"]),
  },
  components: {
    SoftInput,
    SoftSwitch,
    SoftButton,
  },
  created() {
    register(this.$store);
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");

    const email_remember = localStorage.getItem("email_remember");

    if (email_remember) {
      this.user.email = email_remember;
      this.user.remember = true;
    }
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    ...mapActions(["signIn"]),

    handleSignIn() {
      this.signIn(this.user);
    },
  },
};
</script>
