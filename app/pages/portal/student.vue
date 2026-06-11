<script setup lang="ts">
definePageMeta({ layout: 'portal' })
useHead({ title: 'Student Portal' })

import { ref, onMounted } from 'vue'

const chatOpen = ref(false)
const attendanceCircleRef = ref<SVGCircleElement | null>(null)

function toggleChat() {
  chatOpen.value = !chatOpen.value
}

function closeChat() {
  chatOpen.value = false
}

onMounted(() => {
  if (attendanceCircleRef.value) {
    attendanceCircleRef.value.style.transition = 'stroke-dashoffset 1s ease-out'
    attendanceCircleRef.value.style.strokeDashoffset = '44'
  }
})
</script>

<template>
  <div class="flex min-h-screen text-on-surface">
    <!-- Side Navigation Shell -->
    <aside class="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low p-stack-md gap-stack-sm z-30 shadow-md">
      <div class="mb-stack-lg px-4">
        <span class="font-display-lg text-headline-sm font-bold text-primary">BFHS Portal</span>
      </div>
      <div class="flex flex-col gap-2 flex-grow overflow-y-auto pr-1">
        <!-- Dashboard Active -->
        <a class="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold transition-transform duration-200 active-nav-shadow" href="#">
          <span class="material-symbols-outlined">dashboard</span>
          <span class="font-label-md text-label-md">Dashboard</span>
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">person</span>
          <span class="font-label-md text-label-md">Profile</span>
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">event_available</span>
          <span class="font-label-md text-label-md">Attendance</span>
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">grade</span>
          <span class="font-label-md text-label-md">Grades</span>
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">calendar_month</span>
          <span class="font-label-md text-label-md">Schedule</span>
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">assignment</span>
          <span class="font-label-md text-label-md">Assignments</span>
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">settings</span>
          <span class="font-label-md text-label-md">Settings</span>
        </a>
      </div>
      <div class="mt-auto p-4 glass-panel rounded-2xl flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center overflow-hidden">
            <img
              alt="User Avatar"
              class="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMCpeBGRysOo2pQlk1fMHnXp9YKm7RXqUzVOBLpBZ-DViPcMJbtKe0mMYPsPqpx8jh31ysU7BvWBrA9SAPwDjsFqe5B56Re_fSNX5DOKuof2Omco5bC5grpMzl1DPfvZX_44vfAzMRF9D-ZXmQmGK-K_HIgAhl3rTjoNHxBQfanB59CIeECxB9URazaOjxijab5kgZIF383dYx42ZdNiI9WByqoN7-E4tnbcqwImXeY-F2XjwOj-UYBR1jukAsA37Lfg4eJUrQJg"
            >
          </div>
          <div>
            <p class="font-label-md text-on-surface font-bold">Welcome Back</p>
            <p class="text-xs text-on-surface-variant">Portal Access</p>
          </div>
        </div>
        <button class="w-full py-2 bg-primary text-white font-label-md rounded-lg hover:opacity-90 transition-opacity">
          Help Desk
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-grow lg:ml-64 p-margin-mobile md:p-margin-desktop bg-surface min-h-screen">
      <!-- Top App Bar -->
      <header class="flex justify-between items-center mb-stack-lg sticky top-0 z-40 bg-surface/70 backdrop-blur-2xl py-2 -mx-margin-mobile md:-mx-margin-desktop px-margin-mobile md:px-margin-desktop border-b border-outline-variant/10">
        <div class="flex items-center gap-4">
          <button class="lg:hidden p-2 text-on-surface-variant">
            <span class="material-symbols-outlined">menu</span>
          </button>
          <h1 class="font-headline-sm text-headline-sm font-black text-primary">BFHS Portal</h1>
        </div>
        <div class="flex items-center gap-gutter">
          <!-- Search Bar -->
          <div class="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30 w-64 group focus-within:ring-2 focus-within:ring-secondary transition-all">
            <span class="material-symbols-outlined text-on-surface-variant text-body-md">search</span>
            <input class="bg-transparent border-none focus:ring-0 text-body-sm w-full placeholder:text-on-surface-variant/60 ml-2" placeholder="Search Portal..." type="text">
          </div>
          <div class="flex items-center gap-2">
            <button class="p-2 text-on-surface-variant hover:bg-primary-container/20 rounded-full transition-colors relative">
              <span class="material-symbols-outlined">notifications</span>
              <span class="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
            </button>
            <button class="p-2 text-on-surface-variant hover:bg-primary-container/20 rounded-full transition-colors">
              <span class="material-symbols-outlined">apps</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Dashboard Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <!-- Profile Overview (Left Top) -->
        <section class="md:col-span-8 glass-panel rounded-[2rem] p-stack-lg flex flex-col md:flex-row gap-stack-lg items-center md:items-start relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] bg-surface-container-highest overflow-hidden border-4 border-white shadow-md z-10">
            <img
              alt="User Profile"
              class="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4rSeKjbp132qCpqbaR1sd9uMiHN2zdW4M77dj0YnygUpaTgDRQtqnWxtEiOjbTZcJkkCA6cPcOa7G-f_Uw2MRQotvRRKXzLLfOreGVzrdR7KX_ZcU2xp-EPxk18afXhOjwC1Kpizq9KP0hY7Ds7IxjfKmD2ehtQnQ-hwprA-ErmOj3B6GI1mpzye5yiX6hb61OxWV7No9k9mNKQ6BOhLs7Plm1Y8_jM5hXNRcPs74pB1rgBbDwIfUTuCmo8tPZCZnbLFWmqhR9y4"
            >
          </div>
          <div class="flex-grow z-10 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 class="font-headline-md text-headline-md text-primary">Alex Sterling</h2>
                <p class="font-body-md text-on-surface-variant">Class of 2025 &bull; Grade 11-A</p>
              </div>
              <span class="px-4 py-1.5 bg-secondary/10 text-secondary text-label-md rounded-full font-bold border border-secondary/20">Active Student</span>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-surface/50 p-4 rounded-2xl border border-white/50 text-center">
                <p class="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">GPA</p>
                <p class="font-display-lg text-headline-sm text-primary">3.85</p>
              </div>
              <div class="bg-surface/50 p-4 rounded-2xl border border-white/50 text-center">
                <p class="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Rank</p>
                <p class="font-display-lg text-headline-sm text-primary">12/140</p>
              </div>
              <div class="bg-surface/50 p-4 rounded-2xl border border-white/50 text-center">
                <p class="text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">Credits</p>
                <p class="font-display-lg text-headline-sm text-primary">42</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Attendance Widget (Right Top) -->
        <section class="md:col-span-4 glass-panel rounded-[2rem] p-stack-lg flex flex-col items-center justify-center text-center">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-stack-md w-full text-left">Attendance</h3>
          <div class="relative w-40 h-40 flex items-center justify-center">
            <!-- Simulated SVG Ring -->
            <svg class="w-full h-full transform -rotate-90">
              <circle class="text-surface-container-highest" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-width="12"></circle>
              <circle
                ref="attendanceCircleRef"
                class="text-secondary"
                cx="80"
                cy="80"
                fill="transparent"
                r="70"
                stroke="currentColor"
                stroke-dasharray="440"
                stroke-dashoffset="44"
                stroke-width="12"
              ></circle>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="font-display-lg text-headline-md text-primary">94%</span>
              <span class="text-xs font-label-md text-on-surface-variant">Present</span>
            </div>
          </div>
          <p class="mt-stack-md text-body-sm text-on-surface-variant">2 days missed this semester</p>
        </section>

        <!-- Schedule List (Left Middle) -->
        <section class="md:col-span-5 glass-panel rounded-[2rem] p-stack-lg">
          <div class="flex justify-between items-center mb-stack-md">
            <h3 class="font-headline-sm text-headline-sm text-primary">Today's Schedule</h3>
            <span class="material-symbols-outlined text-secondary">calendar_today</span>
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-4 p-3 hover:bg-surface-container/50 rounded-2xl transition-colors border-l-4 border-secondary">
              <div class="text-center w-16">
                <p class="font-bold text-primary">08:30</p>
                <p class="text-xs text-on-surface-variant">AM</p>
              </div>
              <div>
                <p class="font-label-md text-on-surface font-bold">Advanced Mathematics</p>
                <p class="text-xs text-on-surface-variant">Room 302 &bull; Dr. Aris</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-3 hover:bg-surface-container/50 rounded-2xl transition-colors border-l-4 border-outline-variant">
              <div class="text-center w-16">
                <p class="font-bold text-primary">10:15</p>
                <p class="text-xs text-on-surface-variant">AM</p>
              </div>
              <div>
                <p class="font-label-md text-on-surface font-bold">World History</p>
                <p class="text-xs text-on-surface-variant">Room 105 &bull; Ms. Vance</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-3 hover:bg-surface-container/50 rounded-2xl transition-colors border-l-4 border-secondary-container">
              <div class="text-center w-16">
                <p class="font-bold text-primary">01:00</p>
                <p class="text-xs text-on-surface-variant">PM</p>
              </div>
              <div>
                <p class="font-label-md text-on-surface font-bold">Physics Lab</p>
                <p class="text-xs text-on-surface-variant">Lab B &bull; Mr. Sterling</p>
              </div>
            </div>
          </div>
          <button class="w-full mt-stack-md text-secondary font-label-md hover:underline">View Full Week</button>
        </section>

        <!-- Recent Assignments (Middle Middle) -->
        <section class="md:col-span-7 glass-panel rounded-[2rem] p-stack-lg">
          <div class="flex justify-between items-center mb-stack-md">
            <h3 class="font-headline-sm text-headline-sm text-primary">Recent Assignments</h3>
            <button class="text-body-sm text-secondary font-semibold">Mark All Done</button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 bg-white/40 rounded-2xl border border-outline-variant/20 hover:shadow-md transition-shadow">
              <div class="flex justify-between items-start mb-2">
                <span class="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] font-bold rounded uppercase">Critical</span>
                <p class="text-xs text-on-surface-variant font-medium">Due: 2h</p>
              </div>
              <h4 class="font-label-md text-on-surface font-bold line-clamp-1">Calculus: Integral Calculus Practice</h4>
              <p class="text-xs text-on-surface-variant mt-1">Math &bull; Unit 4</p>
            </div>
            <div class="p-4 bg-white/40 rounded-2xl border border-outline-variant/20 hover:shadow-md transition-shadow">
              <div class="flex justify-between items-start mb-2">
                <span class="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded uppercase">Upcoming</span>
                <p class="text-xs text-on-surface-variant font-medium">Due: 2 days</p>
              </div>
              <h4 class="font-label-md text-on-surface font-bold line-clamp-1">French Revolution Essay</h4>
              <p class="text-xs text-on-surface-variant mt-1">History &bull; Term 2</p>
            </div>
            <div class="p-4 bg-white/40 rounded-2xl border border-outline-variant/20 hover:shadow-md transition-shadow">
              <div class="flex justify-between items-start mb-2">
                <span class="px-2 py-0.5 bg-secondary-container/20 text-secondary text-[10px] font-bold rounded uppercase">Draft</span>
                <p class="text-xs text-on-surface-variant font-medium">Due: 4 days</p>
              </div>
              <h4 class="font-label-md text-on-surface font-bold line-clamp-1">Newtonian Dynamics Lab Report</h4>
              <p class="text-xs text-on-surface-variant mt-1">Physics &bull; Module 2</p>
            </div>
            <div class="p-4 bg-secondary-container/10 border-2 border-dashed border-secondary-container rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-secondary-container/20 transition-colors">
              <span class="material-symbols-outlined text-secondary">add_circle</span>
              <p class="text-xs font-bold text-secondary mt-1">Submit New</p>
            </div>
          </div>
        </section>

        <!-- Exam Results (Bottom Left) -->
        <section class="md:col-span-6 lg:col-span-8 glass-panel rounded-[2rem] p-stack-lg">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-stack-md">Semester Exam Results</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="border-b border-outline-variant/20">
                <tr>
                  <th class="py-3 font-label-md text-on-surface-variant">Subject</th>
                  <th class="py-3 font-label-md text-on-surface-variant text-center">Score</th>
                  <th class="py-3 font-label-md text-on-surface-variant text-center">Grade</th>
                  <th class="py-3 font-label-md text-on-surface-variant">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant/10">
                <tr class="hover:bg-surface-container/30 transition-colors group">
                  <td class="py-4 font-body-sm font-semibold">Computer Science II</td>
                  <td class="py-4 text-center font-body-sm">98 / 100</td>
                  <td class="py-4 text-center font-bold text-secondary">A+</td>
                  <td class="py-4"><span class="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Excelled</span></td>
                </tr>
                <tr class="hover:bg-surface-container/30 transition-colors group">
                  <td class="py-4 font-body-sm font-semibold">Organic Chemistry</td>
                  <td class="py-4 text-center font-body-sm">82 / 100</td>
                  <td class="py-4 text-center font-bold text-on-surface-variant">B</td>
                  <td class="py-4"><span class="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-bold">Passed</span></td>
                </tr>
                <tr class="hover:bg-surface-container/30 transition-colors group">
                  <td class="py-4 font-body-sm font-semibold">Macroeconomics</td>
                  <td class="py-4 text-center font-body-sm">91 / 100</td>
                  <td class="py-4 text-center font-bold text-secondary">A</td>
                  <td class="py-4"><span class="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold">Excelled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Notifications Card (Bottom Right) -->
        <section class="md:col-span-6 lg:col-span-4 glass-panel rounded-[2rem] p-stack-lg flex flex-col">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-stack-md">Notifications</h3>
          <div class="space-y-4 flex-grow">
            <div class="flex gap-3 p-3 rounded-2xl bg-primary/5 border-l-4 border-primary">
              <span class="material-symbols-outlined text-primary">info</span>
              <div>
                <p class="text-xs font-bold text-on-surface">Annual Sports Day rescheduled</p>
                <p class="text-[10px] text-on-surface-variant">2 hours ago</p>
              </div>
            </div>
            <div class="flex gap-3 p-3 rounded-2xl bg-secondary-container/10 border-l-4 border-secondary-container">
              <span class="material-symbols-outlined text-secondary">new_releases</span>
              <div>
                <p class="text-xs font-bold text-on-surface">Library fine of $5.00 overdue</p>
                <p class="text-[10px] text-on-surface-variant">Yesterday</p>
              </div>
            </div>
            <div class="flex gap-3 p-3 rounded-2xl bg-surface-container-highest/20 border-l-4 border-outline-variant">
              <span class="material-symbols-outlined text-on-surface-variant">campaign</span>
              <div>
                <p class="text-xs font-bold text-on-surface">Club registrations are now open</p>
                <p class="text-[10px] text-on-surface-variant">2 days ago</p>
              </div>
            </div>
          </div>
          <button class="mt-stack-md text-label-md text-on-surface-variant hover:text-primary flex items-center justify-center gap-1 transition-colors">
            Clear All <span class="material-symbols-outlined text-body-sm">delete</span>
          </button>
        </section>
      </div>

      <!-- Footer -->
      <footer class="mt-margin-desktop pt-stack-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant">
        <p class="font-body-sm text-body-sm">&copy; 2024 Bright Future High School. Excellence in Education.</p>
        <div class="flex gap-gutter">
          <a class="font-body-sm text-body-sm hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a class="font-body-sm text-body-sm hover:text-primary transition-colors" href="#">Accessibility</a>
          <a class="font-body-sm text-body-sm hover:text-primary transition-colors" href="#">Contact Us</a>
        </div>
      </footer>
    </main>

    <!-- AI Chatbot Widget -->
    <div class="fixed bottom-6 right-6 z-50">
      <!-- Chat Bubble -->
      <button
        class="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        @click="toggleChat"
      >
        <span class="material-symbols-outlined text-headline-sm">smart_toy</span>
        <div class="absolute -top-1 -right-1 w-4 h-4 bg-error rounded-full border-2 border-surface animate-pulse"></div>
      </button>
      <!-- Chat Window -->
      <div
        v-show="chatOpen"
        class="absolute bottom-20 right-0 w-80 md:w-96 glass-panel rounded-[2rem] overflow-hidden flex flex-col shadow-2xl"
      >
        <div class="bg-primary p-4 text-white flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined">auto_awesome</span>
            <span class="font-headline-sm text-body-lg font-bold">Portal Assistant</span>
          </div>
          <button class="hover:bg-white/20 rounded-full p-1 transition-colors" @click="closeChat">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="h-64 overflow-y-auto p-4 space-y-4 bg-surface/50">
          <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
              <span class="material-symbols-outlined text-xs">smart_toy</span>
            </div>
            <div class="bg-white p-3 rounded-2xl rounded-tl-none border border-outline-variant/10 shadow-sm max-w-[80%]">
              <p class="text-xs text-on-surface">Hello Alex! How can I help you with your studies today?</p>
            </div>
          </div>
          <div class="flex gap-2 flex-row-reverse">
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">AS</div>
            <div class="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
              <p class="text-xs">When is my next assignment due?</p>
            </div>
          </div>
          <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
              <span class="material-symbols-outlined text-xs">smart_toy</span>
            </div>
            <div class="bg-white p-3 rounded-2xl rounded-tl-none border border-outline-variant/10 shadow-sm max-w-[80%]">
              <p class="text-xs text-on-surface">Your <strong>Integral Calculus Practice</strong> is due in 2 hours. Would you like me to open the resource page?</p>
            </div>
          </div>
        </div>
        <div class="p-4 bg-white border-t border-outline-variant/20 flex gap-2">
          <input class="flex-grow bg-surface-container-low border-none rounded-full px-4 text-xs focus:ring-2 focus:ring-primary" placeholder="Type a message..." type="text">
          <button class="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors">
            <span class="material-symbols-outlined text-body-sm">send</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.active-nav-shadow {
  box-shadow: 0 8px 15px -3px rgba(125, 182, 255, 0.3);
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #d3e4fe;
  border-radius: 10px;
}
</style>
