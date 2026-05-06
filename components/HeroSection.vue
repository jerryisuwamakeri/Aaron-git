<script setup lang="ts">
const { stats } = useData()
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
  >
    <!-- Gradient orbs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-400/10 dark:bg-brand-500/10 blur-3xl animate-pulse-slow"
      />
      <div
        class="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-400/10 dark:bg-violet-500/10 blur-3xl animate-pulse-slow"
        style="animation-delay: 2s"
      />
    </div>

    <!-- Grid pattern -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
    />

    <div class="relative z-10 max-w-4xl mx-auto text-center space-y-8">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-950/50 animate-fade-in">
        <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
        <span class="text-xs font-medium text-brand-700 dark:text-brand-300 uppercase tracking-widest">
          Available for opportunities
        </span>
      </div>

      <!-- Name -->
      <div class="space-y-2 animate-fade-up" style="animation-delay: 0.1s">
        <h1 class="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight">
          Aaron Haruna
          <span class="block text-brand-500">Narara</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light">
          Frontend Developer
        </p>
      </div>

      <!-- Description -->
      <p
        class="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-up"
        style="animation-delay: 0.2s"
      >
        Detail-oriented developer building responsive, high-performance web applications
        with <span class="text-brand-500 font-medium">JavaScript, React, Vue.js</span> and modern
        frameworks. Passionate about clean code and seamless user experiences.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
        style="animation-delay: 0.3s"
      >
        <a
          href="#experience"
          class="px-7 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
        >
          View My Work
        </a>
        <a
          href="#contact"
          class="px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-brand-400 dark:hover:border-brand-600 text-gray-700 dark:text-gray-300 font-semibold text-sm transition-all hover:scale-105"
        >
          Get In Touch
        </a>
        <a
          href="/resume.pdf"
          download="Aaron_Haruna_Narara_Resume.pdf"
          class="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-brand-400 dark:hover:border-brand-600 text-gray-700 dark:text-gray-300 font-semibold text-sm transition-all hover:scale-105"
        >
          <Icon name="heroicons:arrow-down-tray" class="w-4 h-4" />
          Resume
        </a>
      </div>

      <!-- Stats -->
      <div
        class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 animate-fade-up"
        style="animation-delay: 0.4s"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col items-center gap-1"
        >
          <span class="font-display font-bold text-3xl text-brand-500">{{ stat.value }}</span>
          <span class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
      <a href="#about" class="flex flex-col items-center gap-2 text-gray-400 hover:text-brand-500 transition-colors">
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <Icon name="heroicons:chevron-down" class="w-5 h-5" />
      </a>
    </div>
  </section>
</template>
