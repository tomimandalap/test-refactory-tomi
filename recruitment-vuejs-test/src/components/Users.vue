<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      <span style="margin-top: 4px">{{ stateText }}</span>
    </div>
    <div
      v-if="loading"
      style="
        height: 430px;
        display: flex;
        justify-content: center;
        margin-top: 20vh;
      "
    >
      <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div>
    </div>
    <div v-else>
      <div
        v-if="statusCode"
        style="
          height: 360px;
          display: flex;
          justify-content: center;
          margin-top: 30vh;
        "
      >
        <h1>{{ statusCode }} Data not found!</h1>
      </div>
      <div v-else class="wrapper">
        <div v-for="user in users" :key="user.name" class="card">
          <div class="body-card">
            <div class="title">Name</div>
            <div class="name">{{ user.name }}</div>
            <div class="wrapper-card">
              <div class="left">
                <div class="title">Email</div>
                <div class="email">{{ user.email }}</div>
              </div>
              <div class="center">
                <div class="title">Phone</div>
                <div class="phone">{{ user.phone }}</div>
              </div>
              <div class="right">
                <div class="title">Website</div>
                <div class="website">{{ user.website }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  data: () => ({
    loading: true,
    statusCode: 0
  }),
  computed: {
    ...mapState({
      stateText: state => state.text
    }),
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setTimeout(() => {
          this.loading = false
          this.setData(response.data);
        }, 5000)
      })
      .catch((error) => {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.statusCode = error.response.status
        }, 3000)
      })
  },
  methods: {
    setData(data) {
      this.$store.dispatch("setData", data);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  overflow: hidden;
  box-sizing: border-box;
}
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  margin: 0 0 0 0;
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
.wrapper {
  content: "";
  display: table;
  clear: both;
}
.card {
  float: left;
  width: 48%;
  border: none;
  border-radius: 10px;
  margin: 10px 15px 10px 0;
  padding: 20px 20px;
  background: #fff;
}
/* .body-card {
  position: relative;
} */
.name {
  color: #646464;
  font-size: 26px;
  margin-bottom: 10px;
}
.title {
  color: #e1e1e7;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
}
.wrapper-card {
  flex-wrap: wrap;
  column-count: 3;
}
.center {
  float: right;
}
.right {
  float: right;
}
.website {
  color: #83dd8b;
}
/* style loading */
.sk-circle {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
/* end style loading */
@media (max-width: 991.98px) {
  .main-title {
    font-size: 20px;
  }
  .card {
    width: 47%;
  }
  .name {
    font-size: 16px;
  }
  .title {
    font-size: 13px;
  }
  .email,
  .phone,
  .website {
    font-size: 12px;
  }
}
@media (max-width: 575.98px) {
  .card {
    width: 80%;
  }
}
</style>
