<script setup>

</script>
<template>

<nav class="bg-gray-800 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-800 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://openclipart.org/download/321177/goldbitcoin.svg" class="h-8 mr-3" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HajiToken</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-grey-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#"  class="block py-2 pl-3 pr-4 text-gray-900 bg-gray-200 rounded md:bg-transparent md:text-gray-200 md:p-0 md:dark:text-blue-500" aria-current="page"> Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 bg-gray-200 rounded md:bg-transparent md:text-gray-300 md:p-0 md:dark:text-blue-500" aria-current="page">About HajiToken</a>
      </li>
      <li>
        <a href="#roadmap" class="block py-2 pl-3 pr-4 text-gray-900 bg-gray-200 rounded md:bg-transparent md:text-gray-300 md:p-0 md:dark:text-blue-500" aria-current="page">Roadmap</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 bg-gray-200 rounded md:bg-transparent md:text-gray-300 md:p-0 md:dark:text-blue-500" aria-current="page">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

</template>

<style>
#navbar{
  cursor: move;
}
</style>