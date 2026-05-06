<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleDark() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  })
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a
        href="#hero"
        class="font-display font-bold text-lg text-brand-500 tracking-tight"
      >
        AHN<span class="text-gray-400">.</span>
      </a>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <!-- Theme Toggle -->
        <button
          @click="toggleDark"
          class="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Icon
            :name="isDark ? 'heroicons:sun-solid' : 'heroicons:moon-solid'"
            class="w-4 h-4 text-gray-600 dark:text-gray-300"
          />
        </button>

        <!-- Mobile toggle -->
        <button
          class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <Icon
            :name="mobileOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
            class="w-5 h-5 text-gray-600 dark:text-gray-300"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-6 py-4"
      >
        <ul class="flex flex-col gap-4">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
