<template>
  <!-- <SPA /> -->
  <h1>Mission Control 2021</h1>
  <!-- <h1 class="current-mode">{{ mode }}</h1> -->
  <!-- <img src="./assets/logo.png" alt="Robotics Logo"> -->
  <SPA :mode="mode" />
  <div class="module-array">
    <button @click="onClick">MC Test</button>
    <button @click="onClick">XHR</button>
    <button @click="onDriveClick">Drive</button>
    <button @click="onClick">Power</button>
    <button @click="onClick">Science</button>
    <button @click="onClick">Settings</button>
  </div>
</template>

<script>
import SPA from "./components/SPA.vue";

export default {
  name: "App",
  components: { SPA },
  data() {
    return {
      mode: "Home",
    };
  },
  methods: {
    async onDriveClick(e) {
      console.log("Drive button clicked");
        const rawResponse = await fetch("http://localhost:5000/drive", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_operational: 1,
            drive_mode: "B",
            speed: 20,
            angle: 10,
          }),
        });
        const content = await rawResponse.json();

        console.log(content);
    },
    onClick(e) {
      this.mode = e.srcElement.innerText.replace(/ /g, "");
      console.log(this.mode);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
  height: 80%;
}
h1 {
  color: white;
}
button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: transparent;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 20px;
  width: 150px;
  height: 50px;
  font-size: 24px;
}
button:hover {
  background-color: white;
  color: rgb(76, 76, 150);
}
button:active {
  background-color: lightgray;
  border-color: lightgray;
}
.current-mode {
  color: lightgray;
  margin-top: 50px;
}
.module-array {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
}
/* img {
  position: absolute;
  top: 0;
  bottom: 70px;
  left: 0;
  right: 0;
  margin: auto;
} */
</style>
