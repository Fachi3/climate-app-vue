<template>
  <div id="app">
    <div class="header-app">
      <b-img :src="require('./assets/logo.png')" fluid alt="Sun"/>
      <h2>Climate app</h2>
    </div>
    <b-container fluid>
      <GridElements/>
    </b-container>
  </div>
</template>

<script>
import GridElements from './components/GridElements.vue'

export default {
  name: 'app',
  components: {
    GridElements
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.header-app{
  width: 60%;
  margin: 0 auto;
}

.header-app > img{
  width: 50%;
}

.button-search{
  margin: 0 28%;
}

.hover {
  width: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hover .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}

.hover h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
}

.hover button.info {
  display: inline-block;
  text-decoration: none;
  padding: 7px 14px;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #dc3545;
  margin: 50px 0 0 0;
  border-radius: 0px;
  background-color: #dc3545;
  cursor: pointer;
}

.hover button.info:hover {
  box-shadow: 0 0 5px #fff;
}

/* styling to remove box shadow and border from buttons for last few effects */

.hover button.nullbutton {
  border: none;
  padding: 0px;
  margin: 0px;
}

.hover button.nullbutton:hover {
  box-shadow: none;
}

/* effect hover 2 */
 
.ehover2 img {
  transition: all 0.2s ease-in;
}

.ehover2 .overlay {
  background-color: rgba(0,0,0,0.6);
  opacity: 0;
  transform: translate(460px, -100px) rotate(180deg);
  transition: all 0.2s 0.4s ease-in-out;
}

.ehover2 button.info {
  transform: translateY(-200px);
  transition: all 0.2s ease-in-out;
}

.ehover2:hover .overlay {
  opacity: 1;
  transition-delay: 0s;
  transform: translate(0px, 0px);
}

.ehover2:hover h2 {
  transform: translateY(0px);
  transition-delay: 0.5s;
}

.ehover2:hover button.info {
  transform: translateY(0px);
  transition-delay: 0.3s;
}
</style>
