<script setup lang="ts">
const contactLinks = [
  {
    icon: 'heroicons:envelope-solid',
    label: 'Email',
    value: 'narara.dev@gmail.com',
    href: 'mailto:narara.dev@gmail.com',
  },
  {
    icon: 'mdi:linkedin',
    label: 'LinkedIn',
    value: 'Aaron Haruna Narara',
    href: 'https://ng.linkedin.com/in/aaron-narara-958865318',
  },
]
</script>

<template>
  <section id="contact" class="py-24 px-6 bg-gray-50/70 dark:bg-gray-900/50">
    <div class="max-w-3xl mx-auto">
      <div class="text-center space-y-3 mb-16">
        <p class="text-brand-500 font-medium text-sm uppercase tracking-widest">Contact</p>
        <h2 class="font-display font-bold text-4xl sm:text-5xl">
          Let's Work Together
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Have a project in mind? I'm always open to discussing new opportunities and ideas.
        </p>
      </div>

      <div class="space-y-6">
        <div class="mb-8">
          <h3 class="font-semibold text-xl text-gray-900 dark:text-white mb-2 text-center">
            Ready to build something great?
          </h3>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed text-center">
            Whether you need a pixel-perfect UI, a complex React application, or help
            integrating an API — I've got you covered. Let's turn ideas into code.
          </p>
        </div>

        <!-- Resume download -->
        <a
          href="/resume.pdf"
          download="Aaron_Haruna_Narara_Resume.pdf"
          class="flex items-center gap-4 p-5 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-950/40 hover:border-brand-400 dark:hover:border-brand-600 group transition-all"
        >
          <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon name="heroicons:document-arrow-down-solid" class="w-5 h-5 text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <p class="text-xs text-gray-400 uppercase tracking-wider">Resume</p>
            <p class="text-sm font-medium text-gray-800 dark:text-gray-200">Download PDF</p>
          </div>
          <Icon name="heroicons:arrow-down-tray" class="w-4 h-4 text-brand-500 ml-auto" />
        </a>

        <div class="grid sm:grid-cols-2 gap-4">
          <a
            v-for="link in contactLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-brand-300 dark:hover:border-brand-700 group transition-all"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon :name="link.icon" class="w-5 h-5 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-wider">{{ link.label }}</p>
              <p class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ link.value }}</p>
            </div>
            <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4 text-gray-400 ml-auto" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
