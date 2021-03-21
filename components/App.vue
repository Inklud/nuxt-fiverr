<template>
  <div class="relative flex flex-no-wrap min-h-screen">
    <div
      tabindex="0"
      role="link"
      clickable
      @click="focusMain()"
      @keydown.enter="focusMain()"
      class="skiplink bg-lipscore-red"
    >
      Skip to Content
    </div>
    <div class="w-full min-h-full bg-gray-200">
      <Navbar />
      <Nuxt ref="pageContent" tabindex="-1" style="outline: none" />
    </div>
  </div>
</template>

<style>
.skiplink {
  left: -999px;
  position: absolute;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -999;
}
.skiplink:focus,
.skiplink:active {
  color: #fff;
  left: auto;
  top: auto;
  width: 30%;
  height: auto;
  overflow: auto;
  margin: 15px 35%;
  padding: 7.5px 5px 7.5px 5px;
  border-radius: 15px;
  border: 0px solid #a32c40;
  font-weight: 500;
  text-align: center;
  font-size: 1.1em;
  z-index: 999;
}
</style>
