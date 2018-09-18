<template>
  <div id="app">
    <button @click="show=true">click</button>
    <vpay ref='pays' v-model='show' @close='close' @forget="forget" @input-end="inputEnd"></vpay>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  methods: {
    inputEnd(val) {
      setTimeout(() => {
        if (val === "111111") {
          this.$refs.pays.$success(true).then(res => {
            console.log("支付成功");
          });
        } else {
          this.$refs.pays.$fail("自定义支付错误");
        }
      }, 1000);
    },
    close() {
      console.log("close...");
    },
    forget() {
      console.log("forget...");
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
}
body {
  max-width: 750px;
  margin: 0 auto;
}
#app {
  min-height: 100vh;
  background: #f1f1f1;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
