<script setup lang="ts">
const { experience } = useData()

const colorMap: Record<string, string> = {
  brand: 'bg-brand-500 ring-brand-100 dark:ring-brand-900',
  violet: 'bg-violet-500 ring-violet-100 dark:ring-violet-900',
  sky: 'bg-sky-500 ring-sky-100 dark:ring-sky-900',
}

const borderMap: Record<string, string> = {
  brand: 'border-brand-200 dark:border-brand-800 hover:border-brand-400 dark:hover:border-brand-600',
  violet: 'border-violet-200 dark:border-violet-800 hover:border-violet-400 dark:hover:border-violet-600',
  sky: 'border-sky-200 dark:border-sky-800 hover:border-sky-400 dark:hover:border-sky-600',
}

const dotColorMap: Record<string, string> = {
  brand: 'text-brand-500',
  violet: 'text-violet-500',
  sky: 'text-sky-500',
}
</script>

<template>
  <section id="experience" class="py-24 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center space-y-3 mb-16">
        <p class="text-brand-500 font-medium text-sm uppercase tracking-widest">Career</p>
        <h2 class="font-display font-bold text-4xl sm:text-5xl">
          Work Experience
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          4+ years building impactful web experiences across industries.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400 via-violet-400 to-sky-400 opacity-20 hidden sm:block" />

        <div class="space-y-8">
          <div
            v-for="(exp, i) in experience"
            :key="exp.company"
            class="relative sm:pl-16"
          >
            <!-- Timeline dot -->
            <div
              :class="[
                'absolute left-4 top-6 w-4 h-4 rounded-full ring-4 hidden sm:block',
                colorMap[exp.color],
              ]"
            />

            <div
              :class="[
                'rounded-2xl border p-6 bg-white dark:bg-gray-950 transition-all duration-300',
                borderMap[exp.color],
              ]"
            >
              <!-- Header -->
              <div class="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <h3 class="font-display font-semibold text-lg text-gray-900 dark:text-white">
                      {{ exp.role }}
                    </h3>
                    <span
                      v-if="exp.current"
                      class="px-2 py-0.5 text-xs rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 font-medium"
                    >
                      Current
                    </span>
                  </div>
                  <p class="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                    {{ exp.company }} &middot; {{ exp.location }}
                  </p>
                </div>
                <span
                  class="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 whitespace-nowrap"
                >
                  {{ exp.period }}
                </span>
              </div>

              <!-- Achievements -->
              <ul class="space-y-2.5">
                <li
                  v-for="achievement in exp.achievements"
                  :key="achievement"
                  class="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                >
                  <Icon
                    name="heroicons:check-circle-solid"
                    :class="['w-4 h-4 mt-0.5 flex-shrink-0', dotColorMap[exp.color]]"
                  />
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
