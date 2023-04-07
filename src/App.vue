<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Roadmap from './components/Roadmap.vue'
import Potential from './components/Potential.vue'
import Dashboard from './components/Dashboard.vue'
import VideoBackground from 'vue-responsive-video-background-player'
import { Plugin } from 'vue-responsive-video-background-player'






export default {
  components: {
    NavBar,
    HelloWorld,
    Potential,
    VideoBackground,
    Plugin,
    Footer,
    Roadmap,
    Dashboard
  }
}


</script>

<template>
 <div class="bg-center bg-cover bg-no-repeat bg-[url('./assets/finalback.png')] backdrop">

<div id="navbar">
  <NavBar />
</div>
<div id="potential">
  <Potential />
</div>
<div id="roadmtext" class="flex">
<div id='roadmap' class="flex-1 w-80 " >
  <Roadmap />
</div>
<div class="flex-1 w-20 " >
  <p class="tracking-wide text-gray-300 md:text-lg dark:text-gray-400">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  </p>
 
</div>
</div>

<h2 class="text-4xl font-extrabold text-gray-300 dark:text-white">The applications</h2>


<div class="flex my-10">
  <div class="flex-auto flex-column px-30">
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Dashboard</button>
 
  </div>
  
  <div class="flex-auto flex-column px-30">
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Buy token</button>
 
  </div>
  <div class="flex-auto flex-column px-30">
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Hajitoken staking</button>

  </div>
  <div class="flex-auto flex-column px-30">
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple to Pink</button>

  </div>  

</div>
<div>
  <Dashboard />
</div>


</div>
  
<div class="clear"></div>
<div id="footer"><Footer /></div>

  

</template>

<style>
.clear { clear: both; height: 20px; }

#app{
  height: 100vh;
  width: 100%;
} 





#text1{
width: 50%;
}
#text2{
  width: 50%;
}
#roadmtext{
  margin-top: 20%;
  margin-bottom:20%;
}
#newtext{
  margin-top: 20%;
}

.button{
  font-size: 40px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
