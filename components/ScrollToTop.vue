<script setup lang="ts">
const visible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    visible.value = window.scrollY > 400
  })
})

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-75"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-75"
  >
    <button
      v-if="visible"
      @click="scrollTop"
      class="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl bg-brand-500 hover:bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 hover:scale-110 transition-all"
      aria-label="Scroll to top"
    >
      <Icon name="heroicons:arrow-up" class="w-5 h-5" />
    </button>
  </Transition>
</template>
