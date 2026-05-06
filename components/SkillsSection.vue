<script setup lang="ts">
const { skills } = useData()
</script>

<template>
  <section id="skills" class="py-24 px-6 bg-gray-50/70 dark:bg-gray-900/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center space-y-3 mb-16">
        <p class="text-brand-500 font-medium text-sm uppercase tracking-widest">Expertise</p>
        <h2 class="font-display font-bold text-4xl sm:text-5xl">
          Skills & Technologies
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          A curated set of tools and technologies I work with to build modern web experiences.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon :name="skill.icon" class="w-5 h-5" />
              </div>
              <span class="font-medium text-sm text-gray-800 dark:text-gray-200">{{ skill.name }}</span>
            </div>
            <span class="text-xs font-semibold text-brand-500">{{ skill.level }}%</span>
          </div>

          <!-- Progress bar -->
          <div class="h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-700 ease-out"
              :style="{ width: skill.level + '%' }"
            />
          </div>
        </div>
      </div>

      <!-- Tag cloud -->
      <div class="mt-14 text-center">
        <p class="text-xs uppercase tracking-widest text-gray-400 mb-5">Also comfortable with</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="tag in ['TypeScript', 'TailwindCSS', 'REST APIs', 'Git', 'Figma', 'Vite', 'Node.js', 'MySQL']"
            :key="tag"
            class="px-4 py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-default"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
