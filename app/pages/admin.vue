<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({ layout: 'portal' })
useHead({ title: 'Admin Dashboard' })

// Glass-panel hover lift state: keyed by index
const panelLifted = ref<Record<number, boolean>>({})
function onPanelEnter(idx: number) { panelLifted.value[idx] = true }
function onPanelLeave(idx: number) { panelLifted.value[idx] = false }

// Chart bar entry animation
const barHeights = ref<string[]>([])
const targetHeights = ['40%', '55%', '45%', '70%', '65%', '85%', '95%']

onMounted(() => {
  // Start bars at 0, then animate to target heights staggered
  barHeights.value = targetHeights.map(() => '0px')
  targetHeights.forEach((h, i) => {
    setTimeout(() => {
      barHeights.value[i] = h
    }, i * 100)
  })
})
</script>

<template>
  <div class="bg-background text-on-background font-body-md min-h-screen flex overflow-hidden">

    <!-- SideNavBar -->
    <aside class="hidden lg:flex flex-col h-full p-stack-md gap-stack-sm bg-surface-container-low dark:bg-primary docked left-0 h-screen w-64 shadow-lg dark:shadow-none fixed z-50">
      <div class="mb-stack-lg px-2">
        <h1 class="font-display-lg text-headline-sm font-bold text-primary">BFHS Portal</h1>
      </div>
      <div class="flex flex-col gap-2 flex-grow overflow-y-auto custom-scrollbar">
        <!-- Dashboard is active -->
        <a class="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold font-label-md text-label-md" href="#">
          <span class="material-symbols-outlined">dashboard</span>
          Dashboard
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">person</span>
          Profile
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">event_available</span>
          Attendance
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">grade</span>
          Grades
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">calendar_month</span>
          Schedule
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">assignment</span>
          Assignments
        </a>
        <a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-transform duration-200 hover:translate-x-1" href="#">
          <span class="material-symbols-outlined">settings</span>
          Settings
        </a>
      </div>
      <div class="mt-auto pt-stack-md border-t border-outline-variant/20">
        <div class="flex items-center gap-3 px-2 mb-4">
          <div class="w-10 h-10 rounded-full bg-primary overflow-hidden border-2 border-white shadow-sm">
            <img
              alt="User Profile Picture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFveIG3--bUdFMDWJTSm4_B1AOHt9o-4EFvrXou2dqY6sWi14C-xIP5ooKoSJnpunv8KnavR9LNJwepIA3yrM_sNh42VcMWceV4ULs3u5DIE23dm__LFOAoCOGpSxb3XPmbdCxVP1moFdTLmH3DmjuS6LDxexkdYW3Lf_rE-Z0XypXB6Y-jmO8wqJQhmrZyYx7uf5Mk9PSbR2H7VPPMBOsXbOPKdEWJXsy_bhOTRZQk9ddQmnkNtF9D9UwosMwynirhPicDb5xrLs"
            >
          </div>
          <div>
            <p class="font-label-md text-on-surface font-bold">Welcome Back</p>
            <p class="text-xs text-on-surface-variant">Portal Access</p>
          </div>
        </div>
        <button class="w-full py-2 bg-primary text-white rounded-lg font-label-md hover:bg-primary/90 transition-colors">Help Desk</button>
      </div>
    </aside>

    <!-- Main Content Canvas -->
    <main class="flex-grow lg:ml-64 h-screen overflow-y-auto custom-scrollbar bg-surface relative">

      <!-- TopNavBar -->
      <header class="flex justify-between items-center px-gutter py-2 sticky top-0 z-40 bg-surface/70 backdrop-blur-2xl dark:bg-primary-container/70 border-b border-white/10 shadow-sm">
        <div class="flex items-center gap-gutter">
          <h2 class="font-headline-sm text-headline-sm font-black text-primary dark:text-primary-fixed">BFHS Portal</h2>
          <div class="hidden md:flex relative group">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input
              class="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-body-sm w-64 focus:ring-2 focus:ring-secondary transition-all"
              placeholder="Search school records..."
              type="text"
            >
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="p-2 hover:bg-primary-container/20 rounded-full transition-all text-on-surface-variant">
            <span class="material-symbols-outlined">notifications</span>
          </button>
          <button class="p-2 hover:bg-primary-container/20 rounded-full transition-all text-on-surface-variant">
            <span class="material-symbols-outlined">apps</span>
          </button>
          <div class="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img
              alt="User Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1kClWU9O-DEi95xvVhp7fH4OcQdPDsyB--3c1D-01c0byCfjfyIAfSdmuVv6BmCiq82sdFCJXYgevKmdBqSNT4dSQxr7YFjBlW8WBXe97fq3pzCkEv4zc4AGgYhLDz6I_LBcI_TQZOjzxrpNcnVP6xRLCLWEVx_pSEzLnL8q6Mar7jIGueTX3jTMx8bt7pF_sAgTgVKEH4l4qvtbT2ekwOlbtyKmtocUykBWXdqkPb41Ua3-SKV2asKGtajJutnBq097z9lM4S3s"
            >
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="p-margin-desktop space-y-stack-lg max-w-container-max mx-auto">

        <!-- Page Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 class="font-display-lg text-display-lg font-bold text-primary">Academic Analytics</h3>
            <p class="font-body-md text-on-surface-variant">Overview of Bright Future High School's performance and operations.</p>
          </div>
          <div class="flex gap-stack-sm">
            <button class="px-4 py-2 border border-secondary text-secondary rounded-xl font-label-md flex items-center gap-2 hover:bg-secondary/5 transition-all">
              <span class="material-symbols-outlined text-sm">download</span> Export Report
            </button>
            <button class="px-4 py-2 bg-primary text-white rounded-xl font-label-md flex items-center gap-2 hover:shadow-lg transition-all">
              <span class="material-symbols-outlined text-sm">add</span> New Entry
            </button>
          </div>
        </div>

        <!-- KPI Cards - Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

          <!-- KPI 1 -->
          <div
            class="glass-panel p-stack-md rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
            :style="panelLifted[0] ? 'transform: translateY(-4px)' : 'transform: translateY(0)'"
            @mouseenter="onPanelEnter(0)"
            @mouseleave="onPanelLeave(0)"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-primary-fixed rounded-2xl text-primary-container">
                <span class="material-symbols-outlined">school</span>
              </div>
              <span class="text-xs font-bold text-secondary bg-secondary-fixed px-2 py-1 rounded-full">+4.2%</span>
            </div>
            <p class="text-on-surface-variant font-label-md">Total Students</p>
            <p class="text-headline-md font-bold text-primary">2,482</p>
            <div class="w-full bg-surface-container h-1 mt-4 rounded-full overflow-hidden">
              <div class="bg-primary h-full w-3/4 rounded-full"></div>
            </div>
          </div>

          <!-- KPI 2 -->
          <div
            class="glass-panel p-stack-md rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
            :style="panelLifted[1] ? 'transform: translateY(-4px)' : 'transform: translateY(0)'"
            @mouseenter="onPanelEnter(1)"
            @mouseleave="onPanelLeave(1)"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-secondary-fixed rounded-2xl text-on-secondary-container">
                <span class="material-symbols-outlined">groups</span>
              </div>
              <span class="text-xs font-bold text-on-error-container bg-error-container px-2 py-1 rounded-full">-1.2%</span>
            </div>
            <p class="text-on-surface-variant font-label-md">Active Staff</p>
            <p class="text-headline-md font-bold text-primary">156</p>
            <div class="w-full bg-surface-container h-1 mt-4 rounded-full overflow-hidden">
              <div class="bg-secondary h-full w-2/3 rounded-full"></div>
            </div>
          </div>

          <!-- KPI 3 -->
          <div
            class="glass-panel p-stack-md rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
            :style="panelLifted[2] ? 'transform: translateY(-4px)' : 'transform: translateY(0)'"
            @mouseenter="onPanelEnter(2)"
            @mouseleave="onPanelLeave(2)"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-tertiary-fixed rounded-2xl text-tertiary-container">
                <span class="material-symbols-outlined">check_circle</span>
              </div>
              <span class="text-xs font-bold text-primary bg-primary-fixed px-2 py-1 rounded-full">+2.1%</span>
            </div>
            <p class="text-on-surface-variant font-label-md">Daily Attendance</p>
            <p class="text-headline-md font-bold text-primary">94.8%</p>
            <div class="w-full bg-surface-container h-1 mt-4 rounded-full overflow-hidden">
              <div class="bg-tertiary h-full w-[94.8%] rounded-full"></div>
            </div>
          </div>

          <!-- KPI 4 -->
          <div
            class="glass-panel p-stack-md rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
            :style="panelLifted[3] ? 'transform: translateY(-4px)' : 'transform: translateY(0)'"
            @mouseenter="onPanelEnter(3)"
            @mouseleave="onPanelLeave(3)"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-primary-container rounded-2xl text-on-primary-container">
                <span class="material-symbols-outlined">payments</span>
              </div>
              <span class="text-xs font-bold text-secondary bg-secondary-fixed px-2 py-1 rounded-full">+12.5%</span>
            </div>
            <p class="text-on-surface-variant font-label-md">Revenue (MTD)</p>
            <p class="text-headline-md font-bold text-primary">$420.5k</p>
            <div class="w-full bg-surface-container h-1 mt-4 rounded-full overflow-hidden">
              <div class="bg-primary-container h-full w-1/2 rounded-full"></div>
            </div>
          </div>

        </div>

        <!-- Financials & Analytics Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">

          <!-- Financial Line Chart (Mockup) -->
          <div
            class="lg:col-span-2 glass-panel p-stack-lg rounded-[2rem] shadow-sm"
            :style="panelLifted[4] ? 'transform: translateY(-4px)' : 'transform: translateY(0)'"
            @mouseenter="onPanelEnter(4)"
            @mouseleave="onPanelLeave(4)"
          >
            <div class="flex justify-between items-center mb-6">
              <h4 class="font-headline-sm text-primary">Financial Trends</h4>
              <div class="flex gap-2">
                <button class="px-3 py-1 bg-surface-container rounded-full text-xs font-bold">Income</button>
                <button class="px-3 py-1 text-xs text-on-surface-variant">Expense</button>
              </div>
            </div>
            <div class="h-64 flex items-end justify-between gap-2 px-4 relative">
              <!-- Background Grid Lines -->
              <div class="absolute inset-0 flex flex-col justify-between opacity-5 pointer-events-none p-4">
                <div class="border-b border-on-surface w-full"></div>
                <div class="border-b border-on-surface w-full"></div>
                <div class="border-b border-on-surface w-full"></div>
                <div class="border-b border-on-surface w-full"></div>
              </div>
              <!-- Bar Mockup -->
              <div class="flex-grow flex items-end justify-around h-full pt-10">
                <div
                  v-for="(h, i) in barHeights"
                  :key="i"
                  class="w-8 bg-primary rounded-t-lg chart-bar hover:bg-secondary cursor-pointer"
                  :style="{ height: h }"
                ></div>
              </div>
            </div>
            <div class="flex justify-between px-8 mt-4 text-xs font-bold text-on-surface-variant">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span>
            </div>
          </div>

          <!-- Campus Tour Management -->
          <div
            class="glass-panel p-stack-lg rounded-[2rem] shadow-sm flex flex-col"
            :style="panelLifted[5] ? 'transform: translateY(-4px)' : 'transform: translateY(0)'"
            @mouseenter="onPanelEnter(5)"
            @mouseleave="onPanelLeave(5)"
          >
            <h4 class="font-headline-sm text-primary mb-4">Campus Tours</h4>
            <div class="flex-grow space-y-4">
              <div class="relative rounded-2xl overflow-hidden h-32 mb-4">
                <img
                  alt="Campus Preview"
                  class="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpi0q0ESCfuPmdAAJszM4wEFkEyK2wZRRCDcShHJMkt4SSpx-khBDogmg8-yErYaGgGl48BNF4_N0IJ43M2SdxPueOoIA1uOiOYCpLw4-NQJ0Q5N-ABietJmWfb0RlnfZ0C95CfsQgtgn9HZidwxr2aRTaAkbubgzIRox8gsLA1-0lvl56RbqihTB7XFeEd697pd_cmGJnkK8rHYTbL0wfr_-ZsutI5fWUkggbuxbV94_TXZeDwRDn7l_jcrclNWfbT7dltw2C-w"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span class="text-white text-xs font-bold flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm">visibility</span> 12 Slots Available
                  </span>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <div>
                    <p class="font-label-md text-primary">Science Wing Tour</p>
                    <p class="text-[10px] text-on-surface-variant">Tomorrow, 10:00 AM</p>
                  </div>
                  <button class="text-secondary"><span class="material-symbols-outlined">chevron_right</span></button>
                </div>
                <div class="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <div>
                    <p class="font-label-md text-primary">Athletic Center Prep</p>
                    <p class="text-[10px] text-on-surface-variant">Wed, 2:30 PM</p>
                  </div>
                  <button class="text-secondary"><span class="material-symbols-outlined">chevron_right</span></button>
                </div>
              </div>
            </div>
            <button class="w-full mt-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold font-label-md hover:bg-secondary-container/80 transition-all">Manage Calendar</button>
          </div>

        </div>

        <!-- User Management Table -->
        <div
          class="glass-panel rounded-[2rem] overflow-hidden shadow-sm"
          :style="panelLifted[6] ? 'transform: translateY(-4px)' : 'transform: translateY(0)'"
          @mouseenter="onPanelEnter(6)"
          @mouseleave="onPanelLeave(6)"
        >
          <div class="px-stack-lg py-stack-md flex justify-between items-center border-b border-outline-variant/20">
            <h4 class="font-headline-sm text-primary">User Management</h4>
            <div class="flex gap-4">
              <div class="hidden sm:flex border border-outline-variant/30 rounded-full px-4 py-1 items-center gap-2">
                <span class="material-symbols-outlined text-sm">filter_list</span>
                <select class="bg-transparent border-none text-xs font-bold focus:ring-0 cursor-pointer">
                  <option>All Users</option>
                  <option>Students</option>
                  <option>Teachers</option>
                  <option>Staff</option>
                </select>
              </div>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-surface-container-low/50">
                <tr>
                  <th class="px-6 py-4 font-label-md text-on-surface-variant uppercase tracking-wider">User</th>
                  <th class="px-6 py-4 font-label-md text-on-surface-variant uppercase tracking-wider">Role</th>
                  <th class="px-6 py-4 font-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th class="px-6 py-4 font-label-md text-on-surface-variant uppercase tracking-wider">Joined</th>
                  <th class="px-6 py-4 font-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant/10">
                <!-- Row 1 -->
                <tr class="hover:bg-surface-container-low transition-colors group">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center font-bold text-primary">JS</div>
                      <div>
                        <p class="font-bold text-on-surface">Julian Smith</p>
                        <p class="text-xs text-on-surface-variant">julian.s@bfhs.edu</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <span class="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold">Student</span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-1 text-green-600 font-bold text-xs">
                      <span class="w-2 h-2 rounded-full bg-green-500"></span> Active
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm text-on-surface-variant">Sept 2023</td>
                  <td class="px-6 py-4 text-right">
                    <button class="p-2 hover:bg-surface-container-highest rounded-full transition-all">
                      <span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </button>
                  </td>
                </tr>
                <!-- Row 2 -->
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary">LM</div>
                      <div>
                        <p class="font-bold text-on-surface">Laura Mendez</p>
                        <p class="text-xs text-on-surface-variant">l.mendez@bfhs.edu</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <span class="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-bold">Faculty</span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-1 text-green-600 font-bold text-xs">
                      <span class="w-2 h-2 rounded-full bg-green-500"></span> Active
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm text-on-surface-variant">Aug 2021</td>
                  <td class="px-6 py-4 text-right">
                    <button class="p-2 hover:bg-surface-container-highest rounded-full transition-all">
                      <span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </button>
                  </td>
                </tr>
                <!-- Row 3 -->
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-error-container flex items-center justify-center font-bold text-error">RT</div>
                      <div>
                        <p class="font-bold text-on-surface">Robert Taylor</p>
                        <p class="text-xs text-on-surface-variant">r.taylor@bfhs.edu</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <span class="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-bold">Admin Staff</span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-1 text-on-surface-variant font-bold text-xs">
                      <span class="w-2 h-2 rounded-full bg-outline"></span> On Leave
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm text-on-surface-variant">Jan 2022</td>
                  <td class="px-6 py-4 text-right">
                    <button class="p-2 hover:bg-surface-container-highest rounded-full transition-all">
                      <span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-surface-container-low/30 border-t border-outline-variant/10 flex justify-between items-center">
            <p class="text-xs text-on-surface-variant">Showing 1-10 of 1,245 users</p>
            <div class="flex gap-2">
              <button class="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-all">
                <span class="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button class="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-all">
                <span class="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

      </div><!-- /Dashboard Content -->

      <!-- Footer Shell -->
      <footer class="w-full py-stack-lg px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter bg-primary text-on-primary mt-stack-lg">
        <div>
          <h4 class="font-display-lg text-headline-md text-white mb-4">Bright Future High School</h4>
          <p class="font-body-sm text-surface-variant/80">Leading academic excellence through innovation and technology.</p>
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="font-label-md text-secondary-container uppercase tracking-widest mb-2">Navigation</h5>
          <a class="text-body-sm text-surface-variant/80 hover:text-white transition-opacity" href="#">School Policy</a>
          <a class="text-body-sm text-surface-variant/80 hover:text-white transition-opacity" href="#">Campus Safety</a>
          <a class="text-body-sm text-surface-variant/80 hover:text-white transition-opacity" href="#">Directory</a>
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="font-label-md text-secondary-container uppercase tracking-widest mb-2">Legal</h5>
          <a class="text-body-sm text-surface-variant/80 hover:text-white transition-opacity" href="#">Privacy Policy</a>
          <a class="text-body-sm text-surface-variant/80 hover:text-white transition-opacity" href="#">Terms of Service</a>
          <p class="mt-4 text-[10px] text-surface-variant/60">© 2024 Bright Future High School. Excellence in Education.</p>
        </div>
      </footer>

    </main>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.chart-bar {
  transition: height 1s ease-in-out;
}
</style>
