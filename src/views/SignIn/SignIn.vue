<template>
  <div class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-lg-5 col-md-6 d-flex flex-column">
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
                        :disabled="request.loading"
                        >Sign in
                      </soft-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import register from "@/views/SignIn/_store/register";
import SoftInput from "@/components/SoftInput.vue";
import SoftSwitch from "@/components/SoftSwitch.vue";
import SoftButton from "@/components/SoftButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";

import { onToastify } from "@/helpers";

import axiosInstance from "@/axios";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember: false,
      },
      request: {
        loading: false,
      },
    };
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

    async handleSignIn() {
      this.request.loading = true;

      try {
        const { data } = await axiosInstance.post("/auth/login", {
          email: this.user.email,
          password: this.user.password,
          remember: this.user.remember,
        });

        localStorage.setItem("token", `Bearer ${data.token}`);

        if (this.user.remember) localStorage.setItem("email_remember", this.user.email);
        else localStorage.removeItem("email_remember");

        this.$router.push("/dashboard");
      } catch ({ response: { data: message } }) {
        onToastify(message);
      }

      this.request.loading = false;
    },
  },
};
</script>
