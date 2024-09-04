// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/Profile.vue';
import AddStudent from '../views/AddStudent.vue';
import RemoveStudent from '../views/RemoveStudent.vue';

import UserList from '../views/User/UserList.vue';
import UserProfile from '../views/User/UserProfile.vue';

import TeacherList from '../views/Teacher/TeacherList.vue';
import TeacherProfile from '../views/Teacher/TeacherProfile.vue';

import StudentList from '../views/Student/StudentList.vue';
import StudentProfile from '../views/Student/StudentProfile.vue';

import AdminList from '../views/Admin/AdminList.vue';
import AdminProfile from '../views/Admin/AdminProfile.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/add-student', name: 'AddStudent', component: AddStudent },
  { path: '/remove-student', name: 'RemoveStudent', component: RemoveStudent },

  { path: '/users', name: 'UserList', component: UserList },
  { path: '/users/:id', name: 'UserProfile', component: UserProfile, props: true },

  { path: '/teachers', name: 'TeacherList', component: TeacherList },
  { path: '/teachers/:id', name: 'TeacherProfile', component: TeacherProfile, props: true },

  { path: '/students', name: 'StudentList', component: StudentList },
  { path: '/students/:id', name: 'StudentProfile', component: StudentProfile, props: true },

  { path: '/admins', name: 'AdminList', component: AdminList },
  { path: '/admins/:id', name: 'AdminProfile', component: AdminProfile, props: true },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
