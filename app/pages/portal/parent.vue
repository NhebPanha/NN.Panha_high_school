<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'auth' })
useHead({ title: 'Parent Portal' })

import { ref, onMounted } from 'vue'

const searchFocused = ref(false)

onMounted(() => {
  // Glass-panel hover micro-interactions
  const panels = document.querySelectorAll<HTMLElement>('.glass-panel')
  panels.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)'
      card.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)'
    })
  })
})
</script>

<template>
  <!-- Parent Portal Main Layout -->
  <div class="flex min-h-screen overflow-hidden bg-surface text-on-surface font-body-md overflow-x-hidden">
    <!-- Sidebar Navigation -->
    <aside class="hidden lg:flex flex-col h-screen w-64 bg-surface-container-low p-stack-md gap-stack-sm sticky top-0 border-r border-outline-variant/20">
      <div class="mb-8 px-2">
        <span class="font-display-lg text-headline-sm font-bold text-primary">BFHS Portal</span>
        <p class="font-label-md text-label-md text-on-surface-variant/70 mt-1">Parent Access</p>
      </div>
      <nav class="flex-1 space-y-2">
        <!-- Dashboard is active for this view -->
        <a class="flex items-center gap-4 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold transition-transform duration-200" href="#">
          <span class="material-symbols-outlined">dashboard</span>
          <span class="font-label-md">Dashboard</span>
        </a>
        <a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:translate-x-1 transition-transform duration-200" href="#">
          <span class="material-symbols-outlined">person</span>
          <span class="font-label-md">Profile</span>
        </a>
        <a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:translate-x-1 transition-transform duration-200" href="#">
          <span class="material-symbols-outlined">event_available</span>
          <span class="font-label-md">Attendance</span>
        </a>
        <a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:translate-x-1 transition-transform duration-200" href="#">
          <span class="material-symbols-outlined">grade</span>
          <span class="font-label-md">Grades</span>
        </a>
        <a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:translate-x-1 transition-transform duration-200" href="#">
          <span class="material-symbols-outlined">calendar_month</span>
          <span class="font-label-md">Schedule</span>
        </a>
        <a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:translate-x-1 transition-transform duration-200" href="#">
          <span class="material-symbols-outlined">assignment</span>
          <span class="font-label-md">Assignments</span>
        </a>
        <a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg hover:translate-x-1 transition-transform duration-200" href="#">
          <span class="material-symbols-outlined">settings</span>
          <span class="font-label-md">Settings</span>
        </a>
      </nav>
      <div class="mt-auto p-4 bg-primary rounded-2xl text-white">
        <p class="font-label-md mb-2">Need assistance?</p>
        <button class="w-full py-2 bg-secondary text-white rounded-lg font-bold hover:bg-secondary-container transition-colors">Help Desk</button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 flex flex-col min-w-0">
      <!-- Top Header -->
      <header class="flex justify-between items-center px-6 py-4 sticky top-0 z-40 bg-surface/70 backdrop-blur-2xl border-b border-outline-variant/20 shadow-sm">
        <div class="flex items-center gap-6">
          <h1 class="font-headline-sm text-headline-sm font-black text-primary">Parent Portal</h1>
          <div
            class="hidden md:flex items-center bg-surface-container px-4 py-2 rounded-full min-w-[300px]"
            :class="searchFocused ? 'ring-2 ring-secondary bg-white' : ''"
          >
            <span class="material-symbols-outlined text-on-surface-variant">search</span>
            <input
              class="bg-transparent border-none focus:ring-0 text-body-sm w-full"
              placeholder="Search resources..."
              type="text"
              @focus="searchFocused = true"
              @blur="searchFocused = false"
            >
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="p-2 hover:bg-primary-container/20 rounded-full transition-colors relative">
            <span class="material-symbols-outlined">notifications</span>
            <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button class="p-2 hover:bg-primary-container/20 rounded-full transition-colors">
            <span class="material-symbols-outlined">apps</span>
          </button>
          <div class="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-fixed">
            <img
              alt="User Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxRChAnHakzgeoRF-XtQOcwGctH4lJbczc-MJ-Yg9Y8kX9pS2uAhkXNWJ4Xmvy4Geza8IbXoj1uUrjrXDnamKJ3l9l0QWgeq3Odn0b8rIbA_YAmbSdtkx8WOg1XJNWwdoOPEVOkudDDA5YrlHi5-TUxLgD9i80zozTMvFqGNXC9OnItUnugIBxhR99Sipchs14cXYqfDtzxG5GyG3hYf_4lskDRFegM4dZoM6ZjV--vBAh2pzrdIZ__QrY05FBzk7DVKtPue6lZAU"
            >
          </div>
        </div>
      </header>

      <!-- Scrollable Content Canvas -->
      <div class="flex-1 overflow-y-auto p-6 md:p-margin-desktop space-y-stack-lg max-w-container-max mx-auto w-full">

        <!-- Welcome Section & Quick Stats -->
        <section class="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
          <div class="lg:col-span-2 glass-panel p-8 rounded-[2rem] flex flex-col justify-center relative overflow-hidden">
            <div class="relative z-10">
              <h2 class="font-headline-md text-headline-md text-primary mb-2">Welcome Back, Sarah</h2>
              <p class="text-on-surface-variant font-body-md">Monitoring Alex's progress for Semester 2, 2024.</p>
            </div>
            <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl"></div>
          </div>
          <!-- Quick Stats Bento -->
          <div class="glass-panel p-6 rounded-[2rem] flex flex-col items-center justify-center text-center">
            <span class="text-display-lg text-primary font-bold">96%</span>
            <p class="text-label-md uppercase tracking-wider text-on-surface-variant">Attendance</p>
          </div>
          <div class="glass-panel p-6 rounded-[2rem] flex flex-col items-center justify-center text-center border-b-4 border-secondary">
            <span class="text-display-lg text-secondary font-bold">3.8</span>
            <p class="text-label-md uppercase tracking-wider text-on-surface-variant">Current GPA</p>
          </div>
        </section>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-gutter">

          <!-- Left/Middle: Academics & Finance -->
          <div class="xl:col-span-2 space-y-stack-lg">

            <!-- Grades & Feedback Section -->
            <div class="glass-panel rounded-[2rem] overflow-hidden">
              <div class="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                <h3 class="font-headline-sm text-primary flex items-center gap-2">
                  <span class="material-symbols-outlined">grade</span>
                  Academic Snapshot
                </h3>
                <button class="text-secondary font-bold text-label-md">View Report Card</button>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div class="flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors group">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span class="material-symbols-outlined">functions</span>
                      </div>
                      <div>
                        <p class="font-bold text-primary">Advanced Mathematics</p>
                        <p class="text-body-sm text-on-surface-variant">Teacher: Dr. Aris Thorne</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <span class="text-headline-sm font-bold text-primary">A-</span>
                      <p class="text-label-sm text-secondary">Excellent improvement</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors group">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                        <span class="material-symbols-outlined">science</span>
                      </div>
                      <div>
                        <p class="font-bold text-primary">Molecular Physics</p>
                        <p class="text-body-sm text-on-surface-variant">Teacher: Prof. Elena Glass</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <span class="text-headline-sm font-bold text-primary">B+</span>
                      <p class="text-label-sm text-secondary">Strong Lab Performance</p>
                    </div>
                  </div>
                  <!-- Teacher Notes -->
                  <div class="mt-6 bg-surface-container-highest/20 p-4 rounded-xl border-l-4 border-primary">
                    <p class="font-label-md text-primary flex items-center gap-2 mb-2">
                      <span class="material-symbols-outlined text-sm">chat_bubble</span>
                      LATEST TEACHER NOTE (History)
                    </p>
                    <p class="text-body-sm italic">"Alex's recent essay on Renaissance Economics showed exceptional critical thinking. Encouraged him to join the Debate Society." &mdash; Mr. Henderson</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fee Payment Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div class="glass-panel p-8 rounded-[2rem] bg-primary text-white">
                <h3 class="font-headline-sm mb-4">Account Balance</h3>
                <p class="text-display-lg font-bold mb-2">$1,240.00</p>
                <p class="text-primary-fixed-dim text-body-sm mb-6">Next payment due: Oct 15, 2024</p>
                <button class="w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold hover:bg-white transition-colors">Pay Outstanding Fees</button>
              </div>
              <div class="glass-panel p-8 rounded-[2rem]">
                <h3 class="font-headline-sm text-primary mb-4">Payment History</h3>
                <ul class="space-y-3">
                  <li class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
                    <span class="text-body-sm">Term 1 Tuition</span>
                    <span class="font-bold text-secondary">$4,500</span>
                  </li>
                  <li class="flex justify-between items-center pb-3 border-b border-outline-variant/20">
                    <span class="text-body-sm">Laboratory Fees</span>
                    <span class="font-bold text-secondary">$200</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-body-sm">Sports Kit</span>
                    <span class="font-bold text-secondary">$150</span>
                  </li>
                </ul>
                <button class="mt-4 text-on-surface-variant text-label-md flex items-center gap-2">
                  <span class="material-symbols-outlined text-sm">download</span>
                  Download Full Report
                </button>
              </div>
            </div>

          </div>

          <!-- Right Column: Announcements & Communication -->
          <div class="space-y-stack-lg">

            <!-- Direct Communication -->
            <div class="glass-panel p-6 rounded-[2rem]">
              <h3 class="font-headline-sm text-primary mb-6 flex items-center gap-2">
                <span class="material-symbols-outlined">mail</span>
                Faculty Connect
              </h3>
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-3 hover:bg-surface-container rounded-2xl cursor-pointer transition-colors border border-transparent hover:border-outline-variant/20">
                  <div class="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span class="material-symbols-outlined">person_search</span>
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-sm">Counseling Office</p>
                    <p class="text-xs text-on-surface-variant truncate">Session availability for next week...</p>
                  </div>
                  <div class="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <div class="flex items-center gap-4 p-3 hover:bg-surface-container rounded-2xl cursor-pointer transition-colors">
                  <img
                    class="w-12 h-12 rounded-full object-cover"
                    alt="Ms. Sarah Jenkins"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANY82zATsINqZtP8FzGGr9k6eQa4lWzFZkeK7pv89VnL44sDl2ZegTXRqPagbGqiyozz5gTwjLTOfr6ydOlhUAogyQnudzqzoJ0V2AiAKMSzFkN5C4L8HFtFCV7rNG0Y-UN662Syvq0dofNnfX5U6yN7umrcLgkeNVsVKi2RkVq3thlvZK9aMfCNSNQs1MeAK4OQ0MgSmfl8Iq4zT7kS1aTSxdbOXBUnNFT3cltBPKcWUXnx0NvuqK2a7_6dwq_LmhRKCX7x131_o"
                  >
                  <div class="flex-1">
                    <p class="font-bold text-sm">Ms. Sarah Jenkins</p>
                    <p class="text-xs text-on-surface-variant">Class Mentor</p>
                  </div>
                  <span class="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                </div>
                <button class="w-full py-3 border-2 border-secondary text-secondary rounded-xl font-bold mt-2 hover:bg-secondary/10 transition-colors">Compose New Message</button>
              </div>
            </div>

            <!-- Announcements Feed -->
            <div class="glass-panel p-6 rounded-[2rem] bg-surface-container-high/50">
              <h3 class="font-headline-sm text-primary mb-6 flex items-center gap-2">
                <span class="material-symbols-outlined">campaign</span>
                School Bulletins
              </h3>
              <div class="space-y-6">
                <div class="relative pl-6 border-l-2 border-secondary">
                  <p class="text-label-sm text-secondary font-bold uppercase mb-1">Today, 09:00 AM</p>
                  <p class="font-bold text-primary mb-1">Annual Science Fair Schedule</p>
                  <p class="text-body-sm text-on-surface-variant">Detailed itinerary for the upcoming Science Fair is now available for download.</p>
                </div>
                <div class="relative pl-6 border-l-2 border-outline-variant">
                  <p class="text-label-sm text-on-surface-variant font-bold uppercase mb-1">Yesterday</p>
                  <p class="font-bold text-primary mb-1">Parent-Teacher Meeting</p>
                  <p class="text-body-sm text-on-surface-variant">Booking slots for the end-of-term meetings are now open in the Portal.</p>
                </div>
                <div class="relative pl-6 border-l-2 border-outline-variant">
                  <p class="text-label-sm text-on-surface-variant font-bold uppercase mb-1">Oct 1, 2024</p>
                  <p class="font-bold text-primary mb-1">Spring Break Dates</p>
                  <p class="text-body-sm text-on-surface-variant">The school will remain closed from April 12th to April 19th.</p>
                </div>
              </div>
              <button class="w-full mt-6 text-primary font-bold text-label-md hover:underline transition-all">View All Announcements</button>
            </div>

          </div>
        </div>

        <!-- Footer Section -->
        <footer class="w-full py-stack-lg px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter bg-primary text-on-primary">
          <div>
            <h4 class="font-display-lg text-headline-md text-white mb-4">Bright Future</h4>
            <p class="font-body-sm text-surface-variant/80">&copy; 2024 Bright Future High School. Excellence in Education.</p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-bold mb-2">Resources</p>
            <a class="text-surface-variant/80 hover:text-white transition-opacity font-body-sm" href="#">Privacy Policy</a>
            <a class="text-surface-variant/80 hover:text-white transition-opacity font-body-sm" href="#">Terms of Service</a>
          </div>
          <div class="flex flex-col gap-2">
            <p class="font-bold mb-2">Support</p>
            <a class="text-surface-variant/80 hover:text-white transition-opacity font-body-sm" href="#">Accessibility</a>
            <a class="text-surface-variant/80 hover:text-white transition-opacity font-body-sm" href="#">Contact Us</a>
          </div>
        </footer>

      </div>
    </main>
  </div>
</template>

<style>
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
.sidebar-active {
  background-color: #7db6ff;
  color: #00477f;
  font-weight: 700;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
