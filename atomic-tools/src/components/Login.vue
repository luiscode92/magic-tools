<template>
    <div class="login-container">
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-actions">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  
  const submitLogin = () => {
    // Here you would typically send the username and password to your authentication service.
    console.log('Login submitted:', username.value, password.value);
    // You could also include error handling, redirection, etc.
  };
  </script>
  
  <style>
  .login-container {
    width: 300px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
  }
  </style>
  