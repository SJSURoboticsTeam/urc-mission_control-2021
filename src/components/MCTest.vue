<template>
    <form :action="post" method="post" class="test-form">
      <h2>Drive</h2>
      <div class="label-group">
        <label for="is_operational">is_operational</label>
        <input type="number" name="is_operational" value="1" />
      </div>
      <div class="label-group">
        <label for="drive_mode">drive_mode</label>
        <input type="text" name="drive_mode" value="D" />
      </div>
      <div class="label-group">
        <label for="speed">speed</label>
        <input type="number" name="speed" />
      </div>
      <div class="label-group">
        <label for="angle">angle</label>
        <input type="number" name="angle" />
      </div>
      <input type="submit" name="drive-button" value="drive-post" />
    </form>
</template>

<script>
import { serverPort } from "../vars.js";

export default {
  computed: {
    post() {
      return serverPort + '/drive';
    }
  }
}
</script>

<style scoped>
label {
    color: white;
}
h2 {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   color: white;
}
.test-form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* flex-basis: auto; */
    width: 20%;
    padding: 20px 10px;
    margin: auto;
    border: 2px solid white;
    border-radius: 5px;
}
.label-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
input[type=text], input[type=number] {
    width: 50%;
}
input[type=submit] {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: transparent;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 20px;
  width: 70%;
  height: 50px;
  font-size: 24px;
  margin-top: 20px;
}
input[type=submit]:hover {
  background-color: white;
  color: rgb(76, 76, 150);
}
input[type=submit]:active {
  background-color: lightgray;
  border-color: lightgray;
}
</style>