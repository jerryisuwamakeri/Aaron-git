export const useData = () => {
  const skills = [
    { name: 'JavaScript ES6+', level: 95, icon: 'logos:javascript' },
    { name: 'React', level: 90, icon: 'logos:react' },
    { name: 'Vue.js', level: 88, icon: 'logos:vue' },
    { name: 'Next.js', level: 85, icon: 'logos:nextjs-icon' },
    { name: 'AngularJS', level: 75, icon: 'logos:angular-icon' },
    { name: 'Laravel', level: 72, icon: 'logos:laravel' },
    { name: 'PHP', level: 70, icon: 'logos:php' },
    { name: 'WordPress', level: 80, icon: 'logos:wordpress-icon' },
    { name: 'State Management', level: 85, icon: 'carbon:data-share' },
    { name: 'API Integration', level: 90, icon: 'carbon:api' },
    { name: 'Responsive Design', level: 92, icon: 'carbon:devices' },
    { name: 'Debugging', level: 88, icon: 'carbon:debug' },
  ]

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'Farm with Coco',
      location: 'Nigeria',
      period: 'Mar 2025 — Mar 2026',
      current: true,
      color: 'brand',
      achievements: [
        'Integrated analytics tools providing insights that drove strategic decisions',
        'Streamlined codebase resulting in a 20% reduction in maintenance costs',
        'Collaborated with cross-functional teams to deliver projects ahead of schedule',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Makeri Weblinks',
      location: 'Nigeria',
      period: 'Apr 2023 — Feb 2025',
      current: false,
      color: 'violet',
      achievements: [
        'Streamlined codebase resulting in a 20% reduction in maintenance costs',
        'Integrated APIs seamlessly, enhancing functionality and user experience',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Nigerian Breweries',
      location: 'Nigeria',
      period: 'Nov 2021 — Mar 2023',
      current: false,
      color: 'sky',
      achievements: [
        'Crafted responsive web designs that boosted user engagement by 30%',
        'Collaborated with cross-functional teams, driving project success',
        'Delivered projects ahead of schedule across multiple initiatives',
      ],
    },
  ]

  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '3', label: 'Companies' },
    { value: '30%', label: 'Engagement Boost' },
    { value: '20%', label: 'Cost Reduction' },
  ]

  return { skills, experience, stats }
}
