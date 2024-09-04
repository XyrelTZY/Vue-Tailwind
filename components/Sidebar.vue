<!-- src/components/Sidebar.vue -->
<template>
  <div :class="{'w-64': !isSidebarOpen, 'w-16': isSidebarOpen}" class="fixed top-0 left-0 h-screen bg-gray-800 text-white transition-all duration-300">
    <div class="p-4 flex items-center justify-between">
      <h2 v-if="!isSidebarOpen" class="text-lg font-semibold">Admin Panel</h2>
      <button @click="toggleSidebar" class="text-white">
        <template v-if="isSidebarOpen">
          <x-icon name="menu" />
        </template>
        <template v-else>
          <x-icon name="close" />
        </template>
      </button>
    </div>
    <ul class="mt-4 space-y-2">
      <li>
        <router-link :to="{ name: 'Dashboard' }" class="flex items-center p-4 hover:bg-gray-700">
          <x-icon name="home" class="w-5 h-5 mr-2" />
          <span v-if="isSidebarOpen">Dashboard</span>
        </router-link>
      </li>
      <li>
        <button @click="toggleUserManagement" class="flex items-center w-full p-4 text-left hover:bg-gray-700">
          <x-icon name="users" class="w-5 h-5 mr-2" />
          <span v-if="isSidebarOpen">Users</span>
        </button>
        <ul v-if="isUserManagementOpen" class="pl-4 space-y-2">
          <li><router-link :to="{ name: 'UserList' }" class="flex items-center p-2 hover:bg-gray-600"><x-icon name="user-group" class="w-4 h-4 mr-2" />User List</router-link></li>
          <li><router-link :to="{ name: 'TeacherList' }" class="flex items-center p-2 hover:bg-gray-600"><x-icon name="user-teacher" class="w-4 h-4 mr-2" />Teacher List</router-link></li>
          <li><router-link :to="{ name: 'StudentList' }" class="flex items-center p-2 hover:bg-gray-600"><x-icon name="user-student" class="w-4 h-4 mr-2" />Student List</router-link></li>
          <li><router-link :to="{ name: 'AdminList' }" class="flex items-center p-2 hover:bg-gray-600"><x-icon name="user-admin" class="w-4 h-4 mr-2" />Admin List</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MenuIcon, XIcon, HomeIcon } from '@heroicons/vue/24/outline';

const isSidebarOpen = ref(false);
const isUserManagementOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleUserManagement = () => {
  isUserManagementOpen.value = !isUserManagementOpen.value;
};
</script>

<!-- Add scoped styles here if needed -->
