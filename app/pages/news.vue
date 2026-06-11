<script setup lang="ts">
useHead({ title: 'News & Events' })

const categories = ['All Updates', 'Academic News', 'Athletics', 'Arts & Culture']
const activeCategory = ref('All Updates')

function setCategory(cat: string) {
  activeCategory.value = cat
}
</script>

<template>
  <div>
    <main class="pt-24">
      <!-- Featured Hero Section -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-md group">
          <img
            alt="Featured News"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb56ot56JgA0e2_58F45IwSglxx6OcOaAWz9OsJ6BZavrqheoBml9WTOdw3xp9JKQtlYEHK6QRCLZPO183y6uOk01JRx5NgwKry4cYA_b1GLBSqjvT2WVlWshdSaYrBdpjs0xzEkQH0liFpDBZx93CU3p88tbqyFNm96RO-7_F-iqObci4ojDGYnYFVDbRLwf5KrtsrRjm9mCcTDQuxZ6HkRq_O3uYBgzd_RRRyjHvQFA83c2Iw4tnN7pB5BU_E2JFaUgptkK2UXg"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-12">
            <span class="bg-secondary text-white px-4 py-1 rounded-full text-label-sm w-fit mb-4">Featured Announcement</span>
            <h1 class="font-display-lg text-display-lg text-white max-w-3xl mb-4 leading-tight">State-of-the-Art Science Wing Opening This Fall</h1>
            <p class="text-surface-variant text-body-lg max-w-2xl mb-8">Redefining STEM education with five new specialized labs, advanced robotics centers, and sustainable architecture.</p>
            <div class="flex gap-4">
              <button class="bg-white text-primary px-8 py-3 rounded-xl font-label-md hover:bg-surface-container-high transition-colors active:scale-95">Read Full Story</button>
              <button class="glass-effect text-white px-8 py-3 rounded-xl font-label-md hover:bg-white/20 transition-colors active:scale-95">View Gallery</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Search & Filter Bar -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
          <div class="flex gap-2">
            <button
              v-for="cat in categories"
              :key="cat"
              :class="activeCategory === cat
                ? 'bg-primary text-white px-4 py-2 rounded-lg text-label-md'
                : 'text-on-surface-variant hover:bg-surface-container-high px-4 py-2 rounded-lg text-label-md transition-colors'"
              @click="setCategory(cat)"
            >{{ cat }}</button>
          </div>
          <div class="relative w-full md:w-80">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              class="w-full pl-10 pr-4 py-2 bg-white border-none rounded-xl focus:ring-2 focus:ring-secondary text-body-sm shadow-sm"
              placeholder="Search news and events..."
              type="text"
            >
          </div>
        </div>
      </section>

      <!-- News Masonry Grid -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="masonry-grid">

          <!-- Item 1: Sports -->
          <div class="masonry-item bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10 group">
            <img
              alt="Sports News"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT7XG3JPcUSmcmc2bFi7FegvJxJCYQYapU7_PX19qrIRfSzyphrU57mYJ8kJ8M5Tdnhsqqo2XQ36mvLLFI7WTYI9HqI0n8eldfmnyUAfJ5Z48z-T22U0OqB_biVgeELD0XI-sSluy35__W6VJhtqkigT-_mhikVx4azYWUQ4qmK7hPvSRYf8yFhfaAUeX1pAZkNPTW9-lwuoUDYl2e-M_V3AFcSnKWg_zjw3TmQLGX_Opvm66TXgMKsXnaTNFNqqnUmie-mCauL4k"
            >
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <span class="text-secondary font-label-md">Athletics</span>
                <span class="text-on-surface-variant text-label-sm">Oct 24, 2024</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">Varsity Basketball Regional Finals Announced</h3>
              <p class="text-on-surface-variant text-body-sm mb-4">The Falcons are headed to the championships after a historic season. Join us this Saturday at the Grand Arena.</p>
              <a class="flex items-center text-primary font-label-md gap-2 hover:translate-x-1 transition-transform" href="#">Get Tickets <span class="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>

          <!-- Item 2: Celebration (Calendar Highlight) -->
          <div class="masonry-item bg-primary text-white rounded-[2rem] p-8 shadow-md">
            <span class="material-symbols-outlined text-4xl mb-6">celebration</span>
            <h3 class="font-headline-md text-headline-md mb-4 leading-snug">Annual Founder's Day Gala: Tickets Now Available</h3>
            <p class="text-surface-variant text-body-md mb-8">Celebrating 75 years of academic excellence and community impact. An evening of music, dinner, and legacy.</p>
            <div class="flex items-center gap-4">
              <div class="flex -space-x-3">
                <img
                  class="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4eW_n5tVv-pg0BtOAL4oZ0R29NFSKO1ky8C3w4XMl6HwGG2KIa2wv8663xUUsByFLCsR2nr4mwV4idKvydvl3Dbm12mdKUU0ThW45pnKUhlTjKk-Y5n0xby88_qhnEGrekDI_o-TN_CxKWk7Fa0cu2xNKV94hi0c7Wl6Xv1IybT-IIbMVlahkJR5PtJrvDyNgy0GiiKYYl67R2wTp832sVMwTVfkbti6MOiIKT2yUurtUHfYg-vAkB_TbBtCZO2-ZmSgDMPmiKhg"
                  alt=""
                >
                <img
                  class="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAneXRKO9V60Y1fx3gmxD-InhBqFtpRyEsBv5O0MhCxKsig0agJY1qquRfxUYv7f_31TLGucOmh-SSrpxd58oG1hEGW4aKG5Bb5Wd5jt_7dUz1V5dudTD95ZRuysaEzmnaDmHf_zTxbO7C6hDmnt8sM3T3nzjIyj_xz26IBepEbVPb14LoTfBKvsado6bRtMJteSbLexd7Z2zO5BrPPvoFwOy5sz3zQQTyBxdkdpyvuif15OFmVTR0vjqDXbB4ZpNCaNAH5I4LDWTY"
                  alt=""
                >
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-label-sm">+40</div>
              </div>
              <span class="text-label-sm">Join 200+ Alumni</span>
            </div>
          </div>

          <!-- Item 3: Academic -->
          <div class="masonry-item bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10 group">
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <span class="text-secondary font-label-md">Academics</span>
                <span class="text-on-surface-variant text-label-sm">Oct 22, 2024</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">National Merit Scholarship Semifinalists</h3>
              <p class="text-on-surface-variant text-body-sm">We are proud to announce that twelve BFHS seniors have been named semifinalists in the 2024 scholarship program.</p>
            </div>
            <img
              alt="Student Merit"
              class="w-full h-56 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgo3ljRNHXw8jdkqWTeg_V6OsInv5vr-LM0Kqw0JyxHeQfSpmpDSGugQDMfAnz2h9VJb5s1uJ0YX9AnzlWFJIMhxDhnlCJB8uFcyDQQJbpb2ZrOqDcrvMlWOc0A75Zbx1savE-MVlyNzY1hy0zLpW_2ml27A0gVYFAmld95BgC-3hic_ipW_e0_KCo8jisdX_fsoOq-lZF8cGg3SLXRNbtPwF9T2CVYiuO2CiW-zlub_qx0Uoeh2q0j7FLxC2vPNs6lAUAJlX1yO0"
            >
          </div>

          <!-- Item 4: Competition -->
          <div class="masonry-item bg-surface-container-high rounded-[2rem] p-6 border border-white/50 group">
            <div class="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span class="material-symbols-outlined text-primary">robot</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm mb-2">Robotics Team Wins "Innovation Award"</h3>
            <p class="text-on-surface-variant text-body-sm mb-6">Our 'Circuit Breakers' team took home top honors at the Regional STEM Expo for their autonomous environmental drone project.</p>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-outline">event</span>
              <span class="text-label-sm text-on-surface-variant">Next Match: Nov 12</span>
            </div>
          </div>

          <!-- Item 5: Arts -->
          <div class="masonry-item bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10 group">
            <img
              alt="Theatre News"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZl1PsJ0Qzg5crZH8ELb7Rrse_31OD2-WhigKCtXnGjRh6-Tr6TnB5w0Xl2f4grL3sMIovhAWHlogJlyiviPvhm_O4ifeoFQ8eUPV6AfWOIgXqSv5xPcZiITMSaTEW6ZnhHejXQvV7t_O4yF2OdylluuSC-OFCmOh5v0yAvdzHv3A1uY7Y26O83A5qerS8Q9LO4Q3izlMxvDfbbRaQCAPdgUJ0d63Z3UB5divfJoNKrY9YhU8FC4IVAsZMfdnlnhXYt1qsSaPrmO8"
            >
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <span class="text-secondary font-label-md">Arts &amp; Culture</span>
                <span class="text-on-surface-variant text-label-sm">Oct 18, 2024</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">Winter Production: "The Glass Menagerie"</h3>
              <p class="text-on-surface-variant text-body-sm mb-4">Auditions are now open for the senior theatre production. All students are encouraged to participate in crew and cast.</p>
              <button class="text-primary font-label-md border-b border-primary/20 pb-0.5 active:scale-95">Audition Details</button>
            </div>
          </div>

          <!-- Item 6: Community -->
          <div class="masonry-item bg-white rounded-[2rem] p-6 border border-outline-variant/10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span class="material-symbols-outlined text-secondary">volunteer_activism</span>
              </div>
              <div>
                <h4 class="font-label-md text-primary">Service Saturday</h4>
                <p class="text-label-sm text-on-surface-variant">Community Outreach</p>
              </div>
            </div>
            <p class="text-body-sm text-on-surface-variant mb-6 italic">"Giving back to the city that supports our growth. Join us this Saturday for the local park restoration project."</p>
            <button class="w-full py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-label-md hover:bg-surface-container-high transition-colors active:scale-95">Sign Up to Volunteer</button>
          </div>

        </div>
      </section>

      <!-- Monthly Calendar View -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="bg-white rounded-[2rem] shadow-md overflow-hidden border border-outline-variant/10">
          <div class="bg-primary p-8 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 class="font-display-lg text-headline-md text-white">Academic Calendar</h2>
              <p class="text-surface-variant text-body-sm">November 2024 - Important dates and school events</p>
            </div>
            <div class="flex gap-4 mt-6 md:mt-0">
              <button class="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors active:scale-95">
                <span class="material-symbols-outlined">chevron_left</span>
              </button>
              <span class="text-white font-label-md self-center">November 2024</span>
              <button class="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors active:scale-95">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div class="p-4 md:p-8">
            <div class="grid grid-cols-7 gap-px bg-outline-variant/20 border border-outline-variant/20 rounded-xl overflow-hidden">
              <!-- Header -->
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">SUN</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">MON</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">TUE</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">WED</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">THU</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">FRI</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">SAT</div>
              <!-- Days (October overflow) -->
              <div class="bg-white h-32 p-3 opacity-30">27</div>
              <div class="bg-white h-32 p-3 opacity-30">28</div>
              <div class="bg-white h-32 p-3 opacity-30">29</div>
              <div class="bg-white h-32 p-3 opacity-30">30</div>
              <div class="bg-white h-32 p-3 opacity-30">31</div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">1</span>
                <div class="mt-2 text-[10px] bg-secondary-container/30 text-secondary p-1 rounded">Pep Rally</div>
              </div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">2</span>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">3</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">4</span></div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">5</span>
                <div class="mt-2 text-[10px] bg-error-container text-on-error-container p-1 rounded">Midterm Exams</div>
              </div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">6</span>
                <div class="mt-2 text-[10px] bg-error-container text-on-error-container p-1 rounded">Midterm Exams</div>
              </div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">7</span>
                <div class="mt-2 text-[10px] bg-error-container text-on-error-container p-1 rounded">Midterm Exams</div>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">8</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">9</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">10</span></div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">11</span>
                <div class="mt-2 text-[10px] bg-primary text-white p-1 rounded">Vet's Day (No School)</div>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">12</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">13</span></div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">14</span>
                <div class="mt-2 text-[10px] bg-secondary text-white p-1 rounded">Fall Concert</div>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">15</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">16</span></div>
            </div>
          </div>
          <div class="px-8 pb-8 flex flex-wrap gap-4">
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-secondary-container"></span> School Activity</div>
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-error-container"></span> Academic Deadline</div>
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-primary"></span> Public Holiday</div>
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-secondary"></span> Special Event</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.masonry-grid {
  column-count: 1;
  column-gap: 24px;
}
@media (min-width: 768px) {
  .masonry-grid {
    column-count: 2;
  }
}
@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}
.masonry-item {
  break-inside: avoid;
  margin-bottom: 24px;
}
</style>
