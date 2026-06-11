<script setup lang="ts">
definePageMeta({ layout: 'portal' })
useHead({ title: 'Teacher Portal' })

import { ref, onMounted } from 'vue'

// FAB quick-action menu toggle
const quickActionOpen = ref(false)

function toggleQuickAction() {
  quickActionOpen.value = !quickActionOpen.value
}

// Grade input micro-interaction: track which inputs have been changed
const changedInputs = ref<Set<number>>(new Set())

function onGradeChange(index: number) {
  changedInputs.value = new Set([...changedInputs.value, index])
  setTimeout(() => {
    const next = new Set(changedInputs.value)
    next.delete(index)
    changedInputs.value = next
  }, 2000)
}
</script>

<template>
  <div class="bg-surface text-on-surface font-body-md overflow-x-hidden">
    <div class="flex min-h-screen">
      <!-- Side Navigation Shell -->
      <aside class="hidden lg:flex flex-col h-screen w-64 bg-surface-container-low sticky top-0 shadow-md p-stack-md gap-stack-sm z-50">
        <div class="flex flex-col mb-8 px-2">
          <span class="font-display-lg text-headline-sm font-bold text-primary mb-1">BFHS Portal</span>
          <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest opacity-60">Academic Staff</span>
        </div>
        <nav class="flex flex-col gap-1 flex-1">
          <!-- Active Dashboard -->
          <a class="bg-secondary-container text-on-secondary-container rounded-lg font-bold flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1" href="#">
            <span class="material-symbols-outlined">dashboard</span>
            <span class="font-label-md text-label-md">Dashboard</span>
          </a>
          <a class="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1" href="#">
            <span class="material-symbols-outlined">person</span>
            <span class="font-label-md text-label-md">Profile</span>
          </a>
          <a class="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1" href="#">
            <span class="material-symbols-outlined">event_available</span>
            <span class="font-label-md text-label-md">Attendance</span>
          </a>
          <a class="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1" href="#">
            <span class="material-symbols-outlined">grade</span>
            <span class="font-label-md text-label-md">Grades</span>
          </a>
          <a class="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1" href="#">
            <span class="material-symbols-outlined">calendar_month</span>
            <span class="font-label-md text-label-md">Schedule</span>
          </a>
          <a class="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1" href="#">
            <span class="material-symbols-outlined">assignment</span>
            <span class="font-label-md text-label-md">Assignments</span>
          </a>
          <a class="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1" href="#">
            <span class="material-symbols-outlined">mail</span>
            <span class="font-label-md text-label-md">Messages</span>
          </a>
          <a class="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-4 py-3 transition-transform duration-200 hover:translate-x-1 mt-auto" href="#">
            <span class="material-symbols-outlined">settings</span>
            <span class="font-label-md text-label-md">Settings</span>
          </a>
        </nav>
        <div class="mt-8 p-4 bg-primary text-on-primary rounded-xl flex flex-col gap-2 shadow-sm">
          <span class="font-label-md">Need Assistance?</span>
          <p class="text-[11px] opacity-80 leading-tight">Contact IT for portal login issues or hardware requests.</p>
          <button class="mt-2 py-2 px-4 bg-on-primary text-primary rounded-lg font-bold text-[12px] hover:opacity-90 transition-opacity">Help Desk</button>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col min-w-0 bg-surface">
        <!-- Top App Bar -->
        <header class="flex justify-between items-center px-8 py-4 sticky top-0 z-40 bg-surface/70 backdrop-blur-2xl border-b border-white/10 shadow-sm">
          <div class="flex items-center gap-4 flex-1">
            <div class="relative w-full max-w-md">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input class="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-sm focus:ring-2 focus:ring-secondary transition-all" placeholder="Search students, courses, or records..." type="text">
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <button class="relative p-2 text-on-surface-variant hover:bg-primary-container/10 rounded-full transition-colors">
                <span class="material-symbols-outlined">notifications</span>
                <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button class="p-2 text-on-surface-variant hover:bg-primary-container/10 rounded-full transition-colors">
                <span class="material-symbols-outlined">apps</span>
              </button>
            </div>
            <div class="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
              <div class="text-right hidden sm:block">
                <p class="font-label-md text-on-surface leading-none">Prof. Elena Rodriguez</p>
                <p class="text-[12px] text-on-surface-variant">Advanced Physics Dept.</p>
              </div>
              <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary/20">
                <img class="w-full h-full object-cover" alt="Prof. Elena Rodriguez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhHlqEWrrAEeYjdeyXWvqcPsdNIb2v1XPVhu5KVM-HTdA4-YylJylwqG6nlv_R_Fw8ROchuC7WkOU9WH1-FjuVUm2PxVKHLdtADOrNDsKRBFvkm8b1oFB9WfMHgNumm96sjRNOyAmS67KfOSl-S0Y2q4voyTJZ11y93X339zWdhR1PcU6LeNiovDRkFihPuca3oJ4tUlaaC8KNPSUFLsUcBTOkD1-Z3KHVxcWfPfH3Val4hneeJ1xgODB8yc3SNMfkKIKGMY3gy-A">
              </div>
            </div>
          </div>
        </header>

        <!-- Dashboard Content -->
        <div class="p-8 space-y-stack-lg max-w-container-max mx-auto w-full">
          <!-- Performance Analytics Hero (Bento Grid Start) -->
          <section class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div class="lg:col-span-8 glass-panel rounded-[2rem] p-8 shadow-sm flex flex-col justify-between overflow-hidden relative group">
              <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h2 class="font-headline-md text-headline-md text-primary">Class Performance Analytics</h2>
                    <p class="text-on-surface-variant">Real-time engagement and grade distribution for Grade 12 Physics.</p>
                  </div>
                  <div class="flex gap-2">
                    <select class="bg-surface border-none rounded-lg text-body-sm py-1 px-3 focus:ring-secondary cursor-pointer">
                      <option>Weekly View</option>
                      <option>Monthly View</option>
                    </select>
                  </div>
                </div>
                <!-- Simulated Chart Area -->
                <div class="h-64 flex items-end justify-between gap-4 py-4">
                  <div class="flex-1 bg-primary/10 rounded-t-xl relative group h-[70%] hover:bg-primary/20 transition-colors">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded">78%</div>
                  </div>
                  <div class="flex-1 bg-primary/10 rounded-t-xl relative group h-[85%] hover:bg-primary/20 transition-colors">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded">92%</div>
                  </div>
                  <div class="flex-1 bg-secondary rounded-t-xl relative group h-[60%] hover:bg-secondary/80 transition-colors shadow-lg">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded">65%</div>
                  </div>
                  <div class="flex-1 bg-primary/10 rounded-t-xl relative group h-[80%] hover:bg-primary/20 transition-colors">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded">82%</div>
                  </div>
                  <div class="flex-1 bg-primary/10 rounded-t-xl relative group h-[75%] hover:bg-primary/20 transition-colors">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded">79%</div>
                  </div>
                  <div class="flex-1 bg-primary/10 rounded-t-xl relative group h-[90%] hover:bg-primary/20 transition-colors">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded">95%</div>
                  </div>
                </div>
                <div class="flex justify-between text-[11px] text-on-surface-variant font-bold px-1 mt-2">
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                </div>
              </div>
              <!-- Background Accent Decoration -->
              <div class="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-0"></div>
            </div>
            <div class="lg:col-span-4 space-y-gutter">
              <div class="bg-primary text-on-primary rounded-[2rem] p-8 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                <div class="relative z-10">
                  <span class="material-symbols-outlined text-secondary-container text-4xl mb-4">auto_graph</span>
                  <h3 class="font-headline-sm text-headline-sm mb-2">Class Average</h3>
                  <div class="text-5xl font-extrabold mb-1 tracking-tighter">84.5%</div>
                  <p class="text-body-sm opacity-70">+2.4% from mid-term</p>
                </div>
                <button class="mt-6 w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-secondary-container transition-colors z-10">View Full Report</button>
                <!-- Visual Pattern -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              </div>
            </div>
          </section>

          <!-- Class & Grade Management Section -->
          <section class="grid grid-cols-1 xl:grid-cols-12 gap-gutter">
            <!-- Student Roster & Grade Management -->
            <div class="xl:col-span-8 bg-surface-container-lowest rounded-[2rem] border border-outline-variant/20 shadow-sm overflow-hidden flex flex-col">
              <div class="px-8 py-6 border-b border-outline-variant/20 flex justify-between items-center">
                <div>
                  <h3 class="font-headline-sm text-headline-sm text-primary">Student List &amp; Quick Grades</h3>
                  <p class="text-body-sm text-on-surface-variant">Manage students and update assignment scores instantly.</p>
                </div>
                <div class="flex gap-2">
                  <button class="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-high transition-colors">
                    <span class="material-symbols-outlined text-on-surface-variant">filter_list</span>
                  </button>
                  <button class="px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md hover:opacity-90 transition-opacity">Export CSV</button>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left">
                  <thead class="bg-surface-container-low text-on-surface-variant uppercase text-[10px] font-bold tracking-widest">
                    <tr>
                      <th class="px-8 py-4">Student</th>
                      <th class="px-4 py-4">Status</th>
                      <th class="px-4 py-4">Avg. Grade</th>
                      <th class="px-4 py-4">Last Score</th>
                      <th class="px-4 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-outline-variant/10">
                    <!-- Student Row 1 -->
                    <tr class="hover:bg-surface-container/30 transition-colors group">
                      <td class="px-8 py-4">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-[12px]">AW</div>
                          <div>
                            <p class="font-label-md text-on-surface">Alex Whittaker</p>
                            <p class="text-[11px] text-on-surface-variant">ID: 2024-0421</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4">
                        <span class="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">On Track</span>
                      </td>
                      <td class="px-4 py-4 font-label-md">92%</td>
                      <td class="px-4 py-4">
                        <input
                          :class="['w-12 border-none rounded py-1 px-2 text-center text-body-sm focus:ring-1 focus:ring-secondary transition-all', changedInputs.has(0) ? 'bg-green-50 ring-1 ring-green-300' : 'bg-surface-container-low']"
                          type="text"
                          value="95"
                          @change="onGradeChange(0)"
                        >
                      </td>
                      <td class="px-4 py-4 text-right">
                        <button class="text-on-surface-variant hover:text-primary transition-colors">
                          <span class="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <!-- Student Row 2 -->
                    <tr class="hover:bg-surface-container/30 transition-colors group">
                      <td class="px-8 py-4">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-[12px]">SM</div>
                          <div>
                            <p class="font-label-md text-on-surface">Sarah Miller</p>
                            <p class="text-[11px] text-on-surface-variant">ID: 2024-0392</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4">
                        <span class="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider">At Risk</span>
                      </td>
                      <td class="px-4 py-4 font-label-md">68%</td>
                      <td class="px-4 py-4">
                        <input
                          :class="['w-12 border-none rounded py-1 px-2 text-center text-body-sm focus:ring-1 focus:ring-secondary transition-all', changedInputs.has(1) ? 'bg-green-50 ring-1 ring-green-300' : 'bg-surface-container-low']"
                          type="text"
                          value="72"
                          @change="onGradeChange(1)"
                        >
                      </td>
                      <td class="px-4 py-4 text-right">
                        <button class="text-on-surface-variant hover:text-primary transition-colors">
                          <span class="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <!-- Student Row 3 -->
                    <tr class="hover:bg-surface-container/30 transition-colors group">
                      <td class="px-8 py-4">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-[12px]">JS</div>
                          <div>
                            <p class="font-label-md text-on-surface">Jordan Smith</p>
                            <p class="text-[11px] text-on-surface-variant">ID: 2024-0511</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4">
                        <span class="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">On Track</span>
                      </td>
                      <td class="px-4 py-4 font-label-md">88%</td>
                      <td class="px-4 py-4">
                        <input
                          :class="['w-12 border-none rounded py-1 px-2 text-center text-body-sm focus:ring-1 focus:ring-secondary transition-all', changedInputs.has(2) ? 'bg-green-50 ring-1 ring-green-300' : 'bg-surface-container-low']"
                          type="text"
                          value="84"
                          @change="onGradeChange(2)"
                        >
                      </td>
                      <td class="px-4 py-4 text-right">
                        <button class="text-on-surface-variant hover:text-primary transition-colors">
                          <span class="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                    <!-- Student Row 4 -->
                    <tr class="hover:bg-surface-container/30 transition-colors group">
                      <td class="px-8 py-4">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-[12px]">LC</div>
                          <div>
                            <p class="font-label-md text-on-surface">Leo Chang</p>
                            <p class="text-[11px] text-on-surface-variant">ID: 2024-0445</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-4">
                        <span class="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">Excelled</span>
                      </td>
                      <td class="px-4 py-4 font-label-md">96%</td>
                      <td class="px-4 py-4">
                        <input
                          :class="['w-12 border-none rounded py-1 px-2 text-center text-body-sm focus:ring-1 focus:ring-secondary transition-all', changedInputs.has(3) ? 'bg-green-50 ring-1 ring-green-300' : 'bg-surface-container-low']"
                          type="text"
                          value="98"
                          @change="onGradeChange(3)"
                        >
                      </td>
                      <td class="px-4 py-4 text-right">
                        <button class="text-on-surface-variant hover:text-primary transition-colors">
                          <span class="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-auto px-8 py-4 border-t border-outline-variant/20 flex justify-between items-center text-body-sm text-on-surface-variant">
                <span>Showing 4 of 28 students</span>
                <div class="flex gap-2">
                  <button class="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">Prev</button>
                  <button class="px-3 py-1 bg-primary text-on-primary rounded hover:opacity-90 transition-opacity">Next</button>
                </div>
              </div>
            </div>

            <!-- Messaging Center (Right Panel) -->
            <div class="xl:col-span-4 flex flex-col gap-gutter">
              <div class="bg-surface-container-lowest rounded-[2rem] border border-outline-variant/20 shadow-sm p-8 flex-1 min-h-[500px] flex flex-col">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-secondary/10 rounded-xl">
                    <span class="material-symbols-outlined text-secondary">chat_bubble</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-primary">Parent Inbox</h3>
                  <div class="ml-auto flex items-center justify-center w-6 h-6 bg-error text-white text-[10px] font-bold rounded-full">3</div>
                </div>
                <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                  <!-- Message 1 -->
                  <button class="w-full text-left p-4 rounded-2xl hover:bg-surface-container-low transition-all group border border-transparent hover:border-outline-variant/20">
                    <div class="flex justify-between items-start mb-1">
                      <span class="font-label-md text-on-surface">Mrs. Linda Smith</span>
                      <span class="text-[10px] text-on-surface-variant">10:45 AM</span>
                    </div>
                    <p class="text-body-sm text-on-surface font-semibold mb-1 truncate">Question regarding the lab...</p>
                    <p class="text-[12px] text-on-surface-variant line-clamp-2">Hi Professor, Jordan was wondering if the final report for the mechanics lab is due this Friday or next?</p>
                  </button>
                  <!-- Message 2 -->
                  <button class="w-full text-left p-4 rounded-2xl hover:bg-surface-container-low transition-all group border border-transparent hover:border-outline-variant/20">
                    <div class="flex justify-between items-start mb-1">
                      <span class="font-label-md text-on-surface">Mr. David Miller</span>
                      <span class="text-[10px] text-on-surface-variant">Yesterday</span>
                    </div>
                    <p class="text-body-sm text-on-surface-variant mb-1 truncate">Meeting request for next...</p>
                    <p class="text-[12px] text-on-surface-variant line-clamp-2">We'd like to schedule a quick call to discuss Sarah's recent exam results and how we can support her.</p>
                  </button>
                  <!-- Message 3 -->
                  <button class="w-full text-left p-4 rounded-2xl bg-primary-container/5 border border-primary-container/10">
                    <div class="flex justify-between items-start mb-1">
                      <span class="font-label-md text-on-surface">Elena Rodriguez (You)</span>
                      <span class="text-[10px] text-on-surface-variant">2 days ago</span>
                    </div>
                    <p class="text-body-sm text-on-surface-variant mb-1 truncate">RE: Attendance check-in</p>
                    <p class="text-[12px] text-on-surface-variant line-clamp-2">Thank you for letting me know. I've marked Leo's absence as excused for the dental appointment.</p>
                  </button>
                </div>
                <div class="mt-6 pt-4 border-t border-outline-variant/20">
                  <button class="w-full py-3 bg-secondary text-on-secondary rounded-xl font-bold hover:bg-primary transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">edit_square</span>
                    Compose New
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- Class Management Grid -->
          <section>
            <div class="flex items-center gap-4 mb-stack-md">
              <h3 class="font-headline-sm text-headline-sm text-primary">Assigned Courses</h3>
              <div class="h-[1px] flex-1 bg-outline-variant/20"></div>
              <button class="text-secondary font-label-md hover:underline">Manage All</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              <!-- Course Card 1 -->
              <div class="group bg-surface-container-low rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg hover:bg-surface-container-high transition-all">
                <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-on-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined">rocket_launch</span>
                </div>
                <h4 class="font-headline-sm text-on-surface mb-1">AP Physics C</h4>
                <p class="text-body-sm text-on-surface-variant mb-4">Mechanics &amp; Electromagnetism</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                  <div class="flex -space-x-2">
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-surface-variant text-[8px] flex items-center justify-center font-bold">JD</div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-secondary-container text-[8px] flex items-center justify-center font-bold">AL</div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-primary-fixed text-[8px] flex items-center justify-center font-bold">+26</div>
                  </div>
                  <span class="text-[11px] font-bold text-secondary uppercase">28 Students</span>
                </div>
              </div>
              <!-- Course Card 2 -->
              <div class="group bg-surface-container-low rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg hover:bg-surface-container-high transition-all">
                <div class="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-on-secondary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined">science</span>
                </div>
                <h4 class="font-headline-sm text-on-surface mb-1">Honors Physics</h4>
                <p class="text-body-sm text-on-surface-variant mb-4">Core Principles &amp; Application</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                  <div class="flex -space-x-2">
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-primary-fixed text-[8px] flex items-center justify-center font-bold">MS</div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-surface-variant text-[8px] flex items-center justify-center font-bold">RK</div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-secondary-container text-[8px] flex items-center justify-center font-bold">+22</div>
                  </div>
                  <span class="text-[11px] font-bold text-secondary uppercase">24 Students</span>
                </div>
              </div>
              <!-- Course Card 3 -->
              <div class="group bg-surface-container-low rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg hover:bg-surface-container-high transition-all">
                <div class="w-12 h-12 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <span class="material-symbols-outlined">biotech</span>
                </div>
                <h4 class="font-headline-sm text-on-surface mb-1">Astrophysics Lab</h4>
                <p class="text-body-sm text-on-surface-variant mb-4">Observational Research elective</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
                  <div class="flex -space-x-2">
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-secondary-container text-[8px] flex items-center justify-center font-bold">TC</div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-primary-fixed text-[8px] flex items-center justify-center font-bold">BL</div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface bg-surface-variant text-[8px] flex items-center justify-center font-bold">+12</div>
                  </div>
                  <span class="text-[11px] font-bold text-secondary uppercase">14 Students</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Global Footer Shell -->
        <footer class="w-full py-stack-lg px-8 grid grid-cols-1 md:grid-cols-3 gap-gutter bg-primary text-on-primary border-t border-white/10 mt-12">
          <div class="space-y-4">
            <span class="font-display-lg text-headline-md text-white">BFHS Portal</span>
            <p class="text-body-sm opacity-70">Excellence in education and digital transparency. Our portal connects educators, students, and parents for a unified learning journey.</p>
          </div>
          <div class="flex flex-col gap-2">
            <h5 class="font-label-md uppercase tracking-widest mb-2">Portal Links</h5>
            <a class="text-surface-variant/80 hover:text-white transition-opacity text-body-sm" href="#">Privacy Policy</a>
            <a class="text-surface-variant/80 hover:text-white transition-opacity text-body-sm" href="#">Terms of Service</a>
            <a class="text-surface-variant/80 hover:text-white transition-opacity text-body-sm" href="#">Accessibility</a>
          </div>
          <div class="flex flex-col gap-2">
            <h5 class="font-label-md uppercase tracking-widest mb-2">Connect</h5>
            <a class="text-surface-variant/80 hover:text-white transition-opacity text-body-sm" href="#">Contact Support</a>
            <a class="text-surface-variant/80 hover:text-white transition-opacity text-body-sm" href="#">Faculty Directory</a>
            <p class="text-body-sm mt-4 opacity-50">&#169; 2024 Bright Future High School.</p>
          </div>
        </footer>
      </main>
    </div>

    <!-- Interactive FAB (Contextual for Dashboard Actions) -->
    <div class="fixed bottom-8 right-8 z-50">
      <button
        class="w-16 h-16 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        @click="toggleQuickAction"
      >
        <span class="material-symbols-outlined text-3xl">{{ quickActionOpen ? 'close' : 'add' }}</span>
      </button>
      <!-- Quick Action Menu -->
      <div v-show="quickActionOpen" class="absolute bottom-20 right-0 flex flex-col gap-3">
        <button class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-outline-variant/20 hover:bg-surface-container transition-colors">
          <span class="material-symbols-outlined text-primary">assignment_add</span>
          <span class="text-label-md text-primary">New Assignment</span>
        </button>
        <button class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-outline-variant/20 hover:bg-surface-container transition-colors">
          <span class="material-symbols-outlined text-primary">mail</span>
          <span class="text-label-md text-primary">Broadcast Message</span>
        </button>
        <button class="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-outline-variant/20 hover:bg-surface-container transition-colors">
          <span class="material-symbols-outlined text-primary">person_add</span>
          <span class="text-label-md text-primary">Enroll Student</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
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
</style>
