<!-- src/components/Header.vue -->
<template>
    <header class="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md">
      <div class="flex items-center">
        <h1 class="text-xl font-semibold">Admin Panel</h1>
      </div>
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="Search..." class="p-2 bg-gray-700 rounded-lg focus:outline-none" />
        <div class="relative">
          <button @click="toggleProfileMenu" class="flex items-center">
            <img src="#" alt="Profile" class="w-8 h-8 rounded-full border border-gray-600" />
          </button>
          <div v-if="isProfileMenuOpen" class="absolute right-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg w-48">
            <ul>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="changePassword">Change Password</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="addUser">Add User</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-200" @click="logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isProfileMenuOpen = ref(false);
  
  const toggleProfileMenu = () => {
    isProfileMenuOpen.value = !isProfileMenuOpen.value;
  };
  
  const changePassword = () => {
    // Handle change password logic
  };
  
  const addUser = () => {
    // Handle add user logic
  };
  
  const logout = () => {
    // Handle logout logic
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here if needed */
  </style>
  