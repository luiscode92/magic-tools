<script setup>
import { computed } from 'vue';
import Sidebar from './components/Sidebar.vue';
import LoadFile from './components/LoadFile.vue';
import WaveSurfer from './components/WaveSurfer.vue';
import ExportingUI from './components/ExportingUI.vue';
import VideoDisplay from './components/VideoDisplay.vue';
import GlobalSettings from './components/GlobalSettings.vue';
import WaveSurferSettings from './components/WaveSurferSettings.vue';
import Login from './components/Login.vue'

import { useStore } from 'vuex';

const store = useStore();
const activeTheme = computed(() => store.getters['activeTheme']);
const activeSetting = computed(() => store.getters['activeSetting']);
const fileUrl = computed(() => store.getters['fileUrl']);
const showExportingUI = computed(() => store.getters['showExportingUI']);

const isLoged = true

const fileExists = () => fileUrl.value.length > 0;

console.log("app");
</script>
<template>
  <div :class="activeTheme">
    <div class="font-sans antialiased min-h-screen bg-primary text-secondary">
      <div v-if="showExportingUI">
        <div class="m-4 absolute top-0 bottom-0 left-0 right-0">
          <ExportingUI></ExportingUI>
        </div>
      </div>
      <div v-else-if="fileExists()">
        <div class="m-4 absolute top-0 bottom-72 left-0 right-0">
          <div class="absolute border top-0 bottom-0 left-0 right-96">
            <VideoDisplay></VideoDisplay>
          </div>
          <div class="absolute top-0 bottom-0 right-16 w-80 border">
            <div class="p-4 h-full">
              <GlobalSettings
                v-if="activeSetting === 'global-settings'"
              ></GlobalSettings>
              <WaveSurferSettings
                v-if="activeSetting === 'wave-surfer-settings'"
              ></WaveSurferSettings>
            </div>
          </div>
          <div class="absolute border top-0 bottom-0 right-0 w-16 text-3xl">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div class="m-4 absolute bottom-0 right-0 left-0 h-72 border">
          <WaveSurfer></WaveSurfer>
        </div>
      </div>
      <div v-else-if="isLoged">
        <Login></Login>
      </div>
      <div v-else>
        <div class="m-4 absolute top-0 bottom-0 left-0 right-0 border">
          <LoadFile></LoadFile>
        </div>
      </div>
    </div>
  </div>
</template>

