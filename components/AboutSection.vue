<script setup lang="ts">
const cards = [
  {
    icon: 'carbon:code',
    title: 'Clean Code',
    desc: 'Writing scalable, maintainable code is at the core of my practice. Every line has intent.',
  },
  {
    icon: 'carbon:accessibility',
    title: 'User Focus',
    desc: 'I build with the end user in mind — performance, accessibility, and delightful interactions.',
  },
  {
    icon: 'carbon:collaborate',
    title: 'Team Player',
    desc: 'Cross-functional collaboration is my strong suit. Great products are built by great teams.',
  },
]
</script>

<template>
  <section id="about" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div class="space-y-6">
          <div class="space-y-2">
            <p class="text-brand-500 font-medium text-sm uppercase tracking-widest">About Me</p>
            <h2 class="font-display font-bold text-4xl sm:text-5xl leading-tight">
              Building the web,<br />
              <span class="text-brand-500">one component</span> at a time.
            </h2>
          </div>

          <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I'm a frontend developer with over 4 years of hands-on experience crafting
              responsive, high-performance web applications. My journey spans from enterprise
              giants like <strong class="text-gray-800 dark:text-gray-200">Nigerian Breweries</strong>
              to agile startups.
            </p>
            <p>
              My toolkit revolves around modern JavaScript — primarily
              <strong class="text-gray-800 dark:text-gray-200">React</strong>,
              <strong class="text-gray-800 dark:text-gray-200">Vue.js</strong>, and
              <strong class="text-gray-800 dark:text-gray-200">Next.js</strong> — with a firm grasp of
              state management patterns, API integration, and performance optimization.
            </p>
            <p>
              Beyond the screen, you'll find me strategizing over a chess board or losing
              myself in good music.
            </p>
          </div>

          <div class="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:narara.dev@gmail.com"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium transition-all hover:scale-105"
            >
              <Icon name="heroicons:envelope-solid" class="w-4 h-4" />
              narara.dev@gmail.com
            </a>
            <a
              href="https://ng.linkedin.com/in/aaron-narara-958865318"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-brand-400 dark:hover:border-brand-600 transition-all hover:scale-105"
            >
              <Icon name="mdi:linkedin" class="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Right: Cards -->
        <div class="space-y-4">
          <div
            v-for="card in cards"
            :key="card.title"
            class="group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-brand-300 dark:hover:border-brand-700 hover:bg-brand-50/50 dark:hover:bg-brand-950/30 transition-all duration-300"
          >
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon :name="card.icon" class="w-5 h-5 text-brand-600 dark:text-brand-400" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ card.title }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ card.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Education card -->
          <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center flex-shrink-0">
                <Icon name="carbon:education" class="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Education</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Nigerian Certificate in Education (N.C.E)
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Kaduna State College Of Education, Gidan Waya · 2013–2016
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
