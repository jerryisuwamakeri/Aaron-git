<template>
  <footer class="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Aaron Haruna Narara.
      </p>
      <div class="flex items-center gap-4">
        <a
          href="mailto:narara.dev@gmail.com"
          class="text-gray-400 hover:text-brand-500 transition-colors"
          aria-label="Email"
        >
          <Icon name="heroicons:envelope-solid" class="w-4 h-4" />
        </a>
        <a
          href="https://ng.linkedin.com/in/aaron-narara-958865318"
          target="_blank"
          rel="noopener"
          class="text-gray-400 hover:text-brand-500 transition-colors"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
