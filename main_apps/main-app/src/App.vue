<template>
  <div class="menu-con">
    <Sidebar />
  </div>
  <div class="router-con">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import Sidebar from "./components/Sidebar.vue";
/* import { useRouter } from "vue-router"; */

/* const activeIndex = ref("/react16/");
const { currentRoute } = useRouter();
watch(currentRoute, (newVal, oldVal) => {
  activeIndex.value = currentRoute.value.fullPath;
}); */
</script>

<style>
@import "https://at.alicdn.com/t/font_686932_ot71hemgox.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
}

.menu-con {
  width: 200px;
  height: 100%;
  position: fixed;
  background: #3c3d41;
}

.router-con {
  flex: 1;
  margin-left: 224px;
}

body {
  margin: 0;
}

.b-flex {
  display: box; /* OLD - Android 4.4- */
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex;
}
.b-justify-center {
  /* 09版 */
  -webkit-box-pack: center;
  /* 12版 */
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
}
.b-justify-between {
  /* 09版 */
  -webkit-box-pack: space-between;
  /* 12版 */
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
}
.b-justify-end {
  /* 09版 */
  -webkit-box-pack: flex-end;
  /* 12版 */
  -webkit-justify-content: flex-end;
  -moz-justify-content: flex-end;
  -ms-justify-content: flex-end;
  -o-justify-content: flex-end;
  justify-content: flex-end;
}

.b-justify-start {
  /* 09版 */
  -webkit-box-pack: start;
  /* 12版 */
  -webkit-justify-content: flex-start;
  -moz-justify-content: flex-start;
  -ms-justify-content: flex-start;
  -o-justify-content: flex-start;
  justify-content: flex-start;
}

.b-align-centenr {
  /* 09版 */
  -webkit-box-align: center;
  /* 12版 */
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
}
.b-align-start {
  /* 09版 */
  -webkit-box-align: start;
  /* 12版 */
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
}

.b-align-end {
  /* 09版 */
  -webkit-box-align: end;
  /* 12版 */
  -webkit-align-items: flex-end;
  -moz-align-items: flex-end;
  -ms-align-items: flex-end;
  -o-align-items: flex-end;
  align-items: flex-end;
}

.b-flex-row {
  /* 09版 */
  -webkit-box-orient: horizontal;
  /* 12版 */
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  -o-flex-direction: row;
  flex-direction: row;
}

.b-flex-column {
  /* 09版 */
  -webkit-box-orient: vertical;
  /* 12版 */
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
}

.b-flex-bettwen {
  /* 09版 */
  -webkit-box-pack: space-between;
  /* 12版 */
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  -ms-justify-content: space-between;
  -o-justify-content: space-between;
  justify-content: space-between;
}

.b-flex-warp {
  /* 09版 */
  /*-webkit-box-lines: multiple;*/
  /* 12版 */
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -o-flex-wrap: wrap;
  flex-wrap: wrap;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
