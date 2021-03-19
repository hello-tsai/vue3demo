<template>
  <div class="dropdown">
    <a href="" class="btn btn-outline-light my-2 dropdown-toggle"
       role="buttonMenu"
       @click.prevent="toggleOpen"
    >{{title}}
    </a>
    <ul class="dropdown-menu" style="display: block" v-if="isOpen">
      <li><a href="" class="dropdown-item">aaa</a></li>
      <li><a href="" class="dropdown-item">aaa</a></li>
      <li><a href="" class="dropdown-item">aaa</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'dropdown',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      toggleOpen,
    }
  },
})
</script>

<style scoped>

</style>
