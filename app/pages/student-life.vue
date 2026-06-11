<script setup lang="ts">
useHead({ title: 'Student Life' })

import { onMounted, onUnmounted, ref } from 'vue'

const heroImgRef = ref<HTMLImageElement | null>(null)

function handleScroll() {
  const scroll = window.pageYOffset
  if (heroImgRef.value) {
    heroImgRef.value.style.transform = `translateY(${scroll * 0.4}px)`
  }
}

function addLeaderCardListeners() {
  const cards = document.querySelectorAll<HTMLElement>('.glass-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)'
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)'
    })
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  addLeaderCardListeners()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <main class="pt-24">
      <!-- Hero Section -->
      <section class="relative h-[614px] flex items-center px-margin-desktop mb-stack-lg overflow-hidden rounded-[2rem] mx-margin-desktop">
        <div class="absolute inset-0 z-0">
          <img
            ref="heroImgRef"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1hBDZZq8W2pLOmY3q7mo3mSoLCzna3Jg-HXV9Ygbgo7HxAP0nG5F0gCKylgdgbZO-FL-iNFt95JfZ62rtDRC6_FCLvnwg3fQc3545d0TLHL8nbWtGR-zz7e7eD9Cr_UmVlYDSiqETY0qRGpWmWDignz4AQWnEVNVKaUT2Wo4qMweOTNe4vkfk0RTr40PQTlE1cMuCXnVeXdgw63s83gGjpHyYQ1sbTdi-PksCkDXPbyN9YKq55RfAaTUYqtx1P5jAtThlJficc4"
            alt="A diverse group of high school students laughing and walking together through a sun-drenched, modern campus courtyard"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
        <div class="relative z-10 max-w-2xl text-white">
          <h1 class="font-display-lg text-display-lg mb-4">Discover Your Passion.</h1>
          <p class="font-body-lg text-body-lg mb-8 opacity-90">Beyond the classroom, life at BFHS is a vibrant tapestry of discovery, leadership, and community impact.</p>
          <div class="flex gap-4">
            <button class="px-8 py-3 bg-white text-primary rounded-xl font-bold hover:bg-surface-container transition-all">Explore Clubs</button>
            <button class="px-8 py-3 glass-card text-white rounded-xl font-bold border border-white/30">View Calendar</button>
          </div>
        </div>
      </section>

      <!-- Bento Grid: Clubs, Sports, Arts -->
      <section class="px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div class="mb-stack-md text-center">
          <span class="text-secondary font-label-md tracking-widest uppercase">The Pillars of Activity</span>
          <h2 class="font-headline-md text-display-lg-mobile md:text-headline-md text-primary mt-2">Where Ambition Meets Action</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          <!-- Clubs & Organizations (Large Bento) -->
          <div class="md:col-span-7 bg-white rounded-[2rem] shadow-sm border border-outline-variant/30 overflow-hidden bento-item flex flex-col">
            <div class="p-8 pb-0">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">groups</span>
                <h3 class="font-headline-md text-headline-sm">Clubs &amp; Organizations</h3>
              </div>
              <p class="text-on-surface-variant font-body-md mb-6">From Robotics to Debate, find your tribe among 40+ student-led organizations.</p>
            </div>
            <div class="flex-grow flex gap-4 p-8 pt-0 overflow-x-auto scroll-hide">
              <div class="flex-shrink-0 w-64 glass-card rounded-2xl p-6 border-secondary/10">
                <span class="material-symbols-outlined text-secondary mb-2">precision_manufacturing</span>
                <h4 class="font-headline-sm text-label-md font-bold mb-2">Robotics Elite</h4>
                <p class="text-body-sm opacity-80">Building the future, one circuit at a time.</p>
              </div>
              <div class="flex-shrink-0 w-64 glass-card rounded-2xl p-6 border-secondary/10">
                <span class="material-symbols-outlined text-secondary mb-2">public</span>
                <h4 class="font-headline-sm text-label-md font-bold mb-2">Model UN</h4>
                <p class="text-body-sm opacity-80">Diplomacy and global leadership sessions.</p>
              </div>
              <div class="flex-shrink-0 w-64 glass-card rounded-2xl p-6 border-secondary/10">
                <span class="material-symbols-outlined text-secondary mb-2">terminal</span>
                <h4 class="font-headline-sm text-label-md font-bold mb-2">Code Society</h4>
                <p class="text-body-sm opacity-80">Full-stack development and app creation.</p>
              </div>
            </div>
            <div class="h-48 overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBj2t2wlOJjvduPokzC98cYrZKV_0ixEWAjeoERsdBiFp1h0Ar1juopPCZcUO15dL_yARIklPrJ0TbBdYedvl-LltJtWzhgM5a2IJe7XtxR2HPhfJi7fJhZIbOJQez0yloGF-d7Mg6eloae-5mnNOeAil-lvPDEXUGEQ-cHZJCaCn49IXWg39TWDx4g38Q68MiOdMH47z_zVoRpQCWHaLLlpjN19NykJMFQFUX9o5npxbX6OPUqByECUMUIECp6ZvzqnajaMQPXkI"
                alt="A group of diverse teenagers collaborating in a high-tech makerspace, focused on a small electronic robot"
              >
            </div>
          </div>

          <!-- Sports Teams (Right Top) -->
          <div class="md:col-span-5 bg-primary-container text-white rounded-[2rem] p-8 bento-item relative overflow-hidden flex flex-col justify-between">
            <div class="relative z-10">
              <span class="material-symbols-outlined text-secondary-container text-4xl mb-4" style="font-variation-settings: 'FILL' 1;">sports_soccer</span>
              <h3 class="font-headline-md text-headline-md mb-2">Titan Athletics</h3>
              <p class="opacity-80 font-body-md">Home of the reigning regional champions. Competitive spirit and unmatched discipline.</p>
            </div>
            <div class="relative z-10 mt-8 grid grid-cols-2 gap-4">
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <p class="text-headline-sm font-bold">12</p>
                <p class="text-label-sm opacity-70">Varsity Teams</p>
              </div>
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <p class="text-headline-sm font-bold">100%</p>
                <p class="text-label-sm opacity-70">Dedication</p>
              </div>
            </div>
            <img
              class="absolute bottom-0 right-0 w-1/2 h-1/2 object-contain opacity-20 transform translate-x-10 translate-y-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfGAz6FZ7Sbezd0C1bZGNsNqMZAqlE4tOdMgmVdDONEWikW6D6tIQG4Ps2ZgeMJC2bVzT8ozb8kAFVniD9T3l_qawA3HGRJrkv6aTMoQa6Zy4S0LvflUSwRh3oXr5CzgIV5_pJfxN6SSkBFFTWymQRj6rnzc9EATw2f0Gf6IZynJqLCRcnn3j6OWCC-uW0A1Ez6nk4IP0YgIxhX0QEXEOdbiYaVPcEb0LOCiwP0QKARhTlhH0RWqy5yJW_iYkPlPHIcGK3AvThOgU"
              alt="A stylized, low-opacity graphic of a soccer ball and athletic gear"
            >
          </div>

          <!-- Arts & Music (Bottom Left) -->
          <div class="md:col-span-5 bg-secondary-container text-on-secondary-container rounded-[2rem] p-8 bento-item flex flex-col justify-between">
            <div>
              <h3 class="font-headline-md text-headline-md mb-2">Arts &amp; Music</h3>
              <p class="opacity-80 font-body-md">Expression through canvas and chord. Our theater and orchestra programs are world-class.</p>
            </div>
            <div class="flex -space-x-4 mt-6">
              <img
                class="w-12 h-12 rounded-full border-4 border-secondary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuUj1sfZVgC9jVyz6yQlpUW_l7JU9Zzpj3d7h3ouy-_qT1ufzSh_qukSC5PI4yjV6j-LiuO4QaZ88jWMAZLVYbRKjTUfH3cLV_uYFK8lWRXzX4lPBmdvLBLt2xqezuadQ9AZP_qD4MGGTS3q47SikpJpBLwcZunwkctTZp1RN_hQpTnlABYBGttWkBEUSRapNgKKhZRIowI0Ccq5dsE30CsiFnq7hyAf4HWijj05NM_ws5kCI7dbiaKnGTWWP1XsqoVsy14c7ay_8"
                alt="Close up headshot of a student musician smiling"
              >
              <img
                class="w-12 h-12 rounded-full border-4 border-secondary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZHYKAjvpMHSkDSZkvK25ytbPXbB0W-Wy0Ff2rjyK83vPRm-w8nhFEqXdTQGdcBy56Itn9o0p3OiODJHo9DokHN_NaAsjCnHMaWL2hcxQovfQKEGjrA7CHFWmJznI2K_n8HGVXw3ON2z47Cycln_Z27PM_luI-OOcyuwoXIfEzxLzxz_MfJnuCdtGG84JNb8vTN6KXEfmFcIpuzJNLIQCKwNsXhPhGN67auPKpAXQMeJ9XSMwmjascgqgIHEY6Tu3gOWLQ8axbA2I"
                alt="Close up headshot of a student artist with light paint splatters on their cheek"
              >
              <img
                class="w-12 h-12 rounded-full border-4 border-secondary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEetg9B-IulTj8IqtkgCwsQyns3wW9ovTuobxQn_zoiOSc7v9V00Y366zsTM7fhs4pqRpRKwx56q1e95UOoWDTu1kkxGyU-MZ8hLD1X5rk2O6x-xGHUk5ISwCQ4NIxZP-sLnJ7CF1tFFlTOZr-HMwx6umY9txAmx7fNLX65C5HJLMtBuMxTc2BOSOF_chHY0rZ0iJXWwg3kWPQz_jdu0DXhi7wsymcDoRQAz91JFtu4CDEBZrWQ0Xe_iEMuQaoauyhFuoZ-Gy1xCs"
                alt="Portrait of a young actor under stage lights, wearing theatrical costume"
              >
              <div class="w-12 h-12 rounded-full border-4 border-secondary-container bg-primary text-white flex items-center justify-center font-bold text-label-sm">+150</div>
            </div>
          </div>

          <!-- Featured Story (Bottom Right) -->
          <div class="md:col-span-7 bg-white rounded-[2rem] shadow-sm border border-outline-variant/30 overflow-hidden bento-item group cursor-pointer">
            <div class="flex flex-col md:flex-row h-full">
              <div class="p-8 md:w-1/2 flex flex-col justify-center">
                <span class="text-secondary font-label-sm mb-2 font-bold tracking-widest">SPOTLIGHT</span>
                <h3 class="font-headline-md text-headline-md mb-4 group-hover:text-secondary transition-colors">The Spring Conservatory</h3>
                <p class="text-on-surface-variant font-body-sm">Our annual arts exhibition returns this May. Experience the pinnacle of student creativity.</p>
              </div>
              <div class="md:w-1/2">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCziqeXwHt-pD1Mtk_veaskJMRVSLszFs1ONfq9v6D9bJtfENs3oy6IKPWxV5tp0FMc5XanKc7sbRQzcm09QTIzaqohH8RgtyQBUm4ulQN_X6PyM-kDUucQm6E5vA2XIPUcDWlOf6OvpYmKtqW4xhkIydVF_n80ce9WDSG8EeiRbSz7J6JsJrbzrfHfqhfdJlQEmdXW3XnhZ9IdIZAeTVa1UDF6UF_Yn2v5mVrsYnFD7plrvcEK-xH6JxSvwkd82ezgAKIx-4mORwM"
                  alt="A professional art studio filled with vibrant student paintings on easels"
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Student Leadership Highlights -->
      <section class="bg-primary py-24 text-white">
        <div class="px-margin-desktop max-w-container-max mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div class="max-w-xl">
              <h2 class="font-display-lg text-headline-md md:text-display-lg mb-4">Empowering the Next Generation</h2>
              <p class="opacity-80 font-body-lg">Our Student Council and House Captains aren't just representatives—they are decision-makers who shape the school's culture and future policies.</p>
            </div>
            <button class="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold flex items-center gap-2">
              Meet the Council <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Leader 1 -->
            <div class="glass-card bg-white/5 border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <img
                class="w-20 h-20 rounded-full mb-6 object-cover ring-4 ring-secondary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEXRN61rcwtmemIBhItjRIkLGZybJsZeXWPyQ_umVg2YJeUjC8U4VkmkpZPwjah5NrHXCZV9jqywfwL04EiAJXCGpWiOGme-8gKuWYlo_6362HgCcKSUeZhyuUKh733zvo9HnOqRpD0Ux1cWyS-6OGSHTRvhczZ_LugHAUOvZxZU8sQMeL9XJnS9-JbaNyYGfsGsA_g7PppiXF2kf9KTtryVoX_zhOF5JanQtqC98Tr01A0K5NOdxH0i9zuQEQazh2Aj994vM9Ca8"
                alt="Professional headshot of a confident young man in a school blazer, smiling warmly"
              >
              <h4 class="font-headline-md text-headline-sm mb-1">Alex Thompson</h4>
              <p class="text-secondary-container font-label-md mb-4 uppercase tracking-wider">Student Body President</p>
              <p class="opacity-70 font-body-sm leading-relaxed">"My goal is to bridge the gap between faculty and students through transparent communication and inclusive campus events."</p>
            </div>
            <!-- Leader 2 -->
            <div class="glass-card bg-white/5 border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <img
                class="w-20 h-20 rounded-full mb-6 object-cover ring-4 ring-secondary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JAvgbSRaNb2mmjeaaXXtdSXA_uTNGEioJ1cZBmhTiAWUsa2F55hsV3YkkevYUhmt4d4gIEZqQJnHE58cbYOfuhZPa8rh388u1f93xvSyrsydtLIJDCYvGNAG10xjKq50-1AbQaMFbAjpBOgpbtmKTblFoHzJgoHiefpXOsjekDrnHScGy21VcZjZe16MB_7uRcYKNJrZe0ujXVG65dmC0jXzCUd42ci2MHu0RIDH7_6WugnV5ayZcV0yRmi0bB6VQXjEl5l5TPg"
                alt="Close up portrait of a young woman with a bright, intelligent expression, wearing a navy school jumper"
              >
              <h4 class="font-headline-md text-headline-sm mb-1">Maya Chen</h4>
              <p class="text-secondary-container font-label-md mb-4 uppercase tracking-wider">Academics Liaison</p>
              <p class="opacity-70 font-body-sm leading-relaxed">"I advocate for peer tutoring programs and modern resource allocation to ensure every student has the tools to succeed."</p>
            </div>
            <!-- Leader 3 -->
            <div class="glass-card bg-white/5 border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <img
                class="w-20 h-20 rounded-full mb-6 object-cover ring-4 ring-secondary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKhbAcj6Jc7yEGWF9REcztiERSuJeszgQbXnLPSu4ySzM9hfQJIMP1QevyZiPewHtjrblFF574MOupcQhF3hf6YyGeqHyMnjEgpoXhkPH6FmJ7nvFQ104K6I9lEdmd0U5PAWjiv_z7kXKbfby5piMqNIpkyP7QtUZFayJUnMrZ25guRDKTmu02bHqotczjxd9SQcHJNe9fHe247zGiae9l9r00xIBV8VAntaLaSsKfwjOptxR0a0X5xnJNFKwaNNaWOg0CVJHD1g"
                alt="Portrait of a focused young student with glasses, standing in a library environment"
              >
              <h4 class="font-headline-md text-headline-sm mb-1">Jordan Lee</h4>
              <p class="text-secondary-container font-label-md mb-4 uppercase tracking-wider">Athletics Captain</p>
              <p class="opacity-70 font-body-sm leading-relaxed">"Leading the Titans is about more than winning trophies; it's about building a culture of discipline and mutual respect."</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Community Service Gallery -->
      <section class="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div class="mb-16">
          <h2 class="font-display-lg text-headline-md text-primary mb-4">Making a Difference</h2>
          <p class="text-on-surface-variant font-body-lg max-w-2xl">Excellence isn't just academic. Our students contribute over 10,000 hours of community service annually to local and global initiatives.</p>
        </div>
        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XutqEOtszUHzpJ4MWYh-wKJi8jYbDdAePFjXLZYpmelIPSa6IllHzxWwZ9q59QPoC9836VXdqq_nF17VPN2yzix4AKscj5HviqAJJdbawPBLz1u9QtO_ivr4fyfH2La3nXVR5IXFtOverR5skqSACPvmgd12EeBV_xknCGLZRwmaViW6uYYGCYIKBwR7P-ZwMMvpq1RYvFhtrV1yxfUGVcRCJDtF-Xrkhi-Zn0Oup4xYKAlRHxameBRkhZ2MkuX557y72akoqNs"
              alt="A group of smiling students in high-visibility vests planting young trees in a community park"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">Eco-Initiative</p>
                <p class="text-body-sm">Planted 500 trees in the local metro park.</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTCaPYEavukZQS2tlThTDPwi52k2spTd8fbneHbILiHe0BP57ZWiaH-4PdX8iOaRtitUmrzvJBYjIUG4Km-PecEpVtFgVEavz4Q7uhSfyVZplEyojjc1afBn2QNCmuxP6FLltbXaLdafcxFjxOoFw4aiE58NY_GItFQcXS7MbGepSA03BJdiXtWkoepFr1vUJesZvUUnjgEjTf_xXm0CuMqZ7tLjHs3jPgHXKX2zLyciN1GEw9atagTXobNc0xDHWcxrZcc8ZhGGo"
              alt="Teenagers volunteering at a food bank, organizing supplies and boxes with cheerful expressions"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">Food for All</p>
                <p class="text-body-sm">Weekly food drive supporting local shelters.</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZCeHgYBgGfSW2r-1YRnUWYQgNVdY596WWLqVyqR8rYRhlD7ProjIpqrE25ig2qnQ1cXXz84nhVUoWDTu1kkxGyU-MZ8hLD1X5rk2O6x-xGHUk5ISwCQ4NIxZP-sLnJ7CF1tFFlTOZr-HMwx6umY9txAmx7fNLX65C5HJLMtBuMxTc2BOSOF_chHY0rZ0iJXWwg3kWPQz_jdu0DXhi7wsymcDoRQAz91JFtu4CDEBZrWQ0Xe_iEMuQaoauyhFuoZ-Gy1xCs"
              alt="High school students tutoring younger children in a bright, modern library"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">Mentor Match</p>
                <p class="text-body-sm">Academic support for elementary schools.</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtuykvB5C8v9p5BkTLQjH2f0sgpwQ4Il22612RKYIB49Z3LcyRp8IZ68TA_JTnEv4DQA_riUK1ITwkoue1Cc3YtYZGSU3MatOzeBjQ55IIbKc1yXiIaHY7KbqW0rnAZiaJ7JqE7oDybJiNhe9cgxPwb0sppdaXVXcgDdJnOTm_mTK3P3K2SUmyM1DoAU2RZnu5UPb8OLpx55SAWVwZGkVO1DhBZuoTMWsr9jGaZxYDCHd88Bxn5y5_YbazniGRg47A3jRMPXyQfYo"
              alt="Students participating in a charity walk, wearing matching event t-shirts and walking together on a sunny city street"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">Charity Walk</p>
                <p class="text-body-sm">Annual 5K run for educational funding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mx-margin-desktop mb-24 px-8 py-16 bg-surface-container rounded-[2rem] text-center">
        <h2 class="font-display-lg text-headline-md text-primary mb-6">Ready to Join the Titan Family?</h2>
        <p class="text-on-surface-variant font-body-lg max-w-xl mx-auto mb-10">Experience a culture of excellence, innovation, and lifelong friendships.</p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <button class="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform">Schedule a Tour</button>
          <button class="px-8 py-4 bg-white text-primary border border-outline-variant rounded-2xl font-bold hover:bg-surface-container-low transition-colors">Apply Now</button>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.05);
}

.text-gradient {
  background: linear-gradient(135deg, #002045 0%, #1960a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bento-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bento-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(26, 54, 93, 0.1);
}

.scroll-hide::-webkit-scrollbar {
  display: none;
}
</style>
