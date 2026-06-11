<script setup lang="ts">
useHead({ title: 'Student Life' })

import { computed, onMounted, onUnmounted, ref } from 'vue'

const { t } = useI18n({
  en: {
    // Hero
    heroAlt: 'A diverse group of high school students laughing and walking together through a sun-drenched, modern campus courtyard',
    heroHeading: 'Discover Your Passion.',
    heroSubheading: 'Beyond the classroom, life at BFHS is a vibrant tapestry of discovery, leadership, and community impact.',
    heroExploreClubs: 'Explore Clubs',
    heroViewCalendar: 'View Calendar',

    // Bento section header
    bentoPillarsLabel: 'The Pillars of Activity',
    bentoHeading: 'Where Ambition Meets Action',

    // Clubs bento
    clubsHeading: 'Clubs & Organizations',
    clubsSubheading: 'From Robotics to Debate, find your tribe among 40+ student-led organizations.',
    clubsAlt: 'A group of diverse teenagers collaborating in a high-tech makerspace, focused on a small electronic robot',

    roboticsName: 'Robotics Elite',
    roboticsDesc: 'Building the future, one circuit at a time.',
    modelUnName: 'Model UN',
    modelUnDesc: 'Diplomacy and global leadership sessions.',
    codeSocietyName: 'Code Society',
    codeSocietyDesc: 'Full-stack development and app creation.',

    // Athletics bento
    athleticsHeading: 'Titan Athletics',
    athleticsSubheading: 'Home of the reigning regional champions. Competitive spirit and unmatched discipline.',
    athleticsVarsityLabel: 'Varsity Teams',
    athleticsDedicationLabel: 'Dedication',
    athleticsAlt: 'A stylized, low-opacity graphic of a soccer ball and athletic gear',

    // Arts bento
    artsHeading: 'Arts & Music',
    artsSubheading: 'Expression through canvas and chord. Our theater and orchestra programs are world-class.',
    artsAlt1: 'Close up headshot of a student musician smiling',
    artsAlt2: 'Close up headshot of a student artist with light paint splatters on their cheek',
    artsAlt3: 'Portrait of a young actor under stage lights, wearing theatrical costume',

    // Featured Story bento
    spotlightLabel: 'SPOTLIGHT',
    spotlightHeading: 'The Spring Conservatory',
    spotlightDesc: 'Our annual arts exhibition returns this May. Experience the pinnacle of student creativity.',
    spotlightAlt: 'A professional art studio filled with vibrant student paintings on easels',

    // Leadership section
    leadershipHeading: 'Empowering the Next Generation',
    leadershipSubheading: "Our Student Council and House Captains aren't just representatives—they are decision-makers who shape the school's culture and future policies.",
    meetCouncilBtn: 'Meet the Council',

    leader1Alt: 'Professional headshot of a confident young man in a school blazer, smiling warmly',
    leader1Role: 'Student Body President',
    leader1Quote: '"My goal is to bridge the gap between faculty and students through transparent communication and inclusive campus events."',

    leader2Alt: 'Close up portrait of a young woman with a bright, intelligent expression, wearing a navy school jumper',
    leader2Role: 'Academics Liaison',
    leader2Quote: '"I advocate for peer tutoring programs and modern resource allocation to ensure every student has the tools to succeed."',

    leader3Alt: 'Portrait of a focused young student with glasses, standing in a library environment',
    leader3Role: 'Athletics Captain',
    leader3Quote: '"Leading the Titans is about more than winning trophies; it\'s about building a culture of discipline and mutual respect."',

    // Community Service section
    serviceHeading: 'Making a Difference',
    serviceSubheading: 'Excellence isn\'t just academic. Our students contribute over 10,000 hours of community service annually to local and global initiatives.',

    galleryAlt1: 'A group of smiling students in high-visibility vests planting young trees in a community park',
    gallery1Title: 'Eco-Initiative',
    gallery1Desc: 'Planted 500 trees in the local metro park.',

    galleryAlt2: 'Teenagers volunteering at a food bank, organizing supplies and boxes with cheerful expressions',
    gallery2Title: 'Food for All',
    gallery2Desc: 'Weekly food drive supporting local shelters.',

    galleryAlt3: 'High school students tutoring younger children in a bright, modern library',
    gallery3Title: 'Mentor Match',
    gallery3Desc: 'Academic support for elementary schools.',

    galleryAlt4: 'Students participating in a charity walk, wearing matching event t-shirts and walking together on a sunny city street',
    gallery4Title: 'Charity Walk',
    gallery4Desc: 'Annual 5K run for educational funding.',

    // CTA section
    ctaHeading: 'Ready to Join the Titan Family?',
    ctaSubheading: 'Experience a culture of excellence, innovation, and lifelong friendships.',
    ctaTour: 'Schedule a Tour',
    ctaApply: 'Apply Now',
  },
  km: {
    // Hero
    heroAlt: 'ក្រុមសិស្សវិទ្យាល័យចម្រុះ កំពុងសើចនិងដើរជាមួយគ្នានៅក្នុងវិហារសាលាទំនើបដ៏ស្រស់ស្អាត',
    heroHeading: 'រកឃើញចំណង់ចំណូលចិត្តរបស់អ្នក។',
    heroSubheading: 'ក្រៅពីថ្នាក់រៀន ជីវិតនៅ BFHS គឺជាផ្ទាំងដ៏រស់រវើកនៃការស្វែងរក ភាពជាអ្នកដឹកនាំ និងការចូលរួមចំណែកដល់សហគមន៍។',
    heroExploreClubs: 'ស្វែងរកក្លឹប',
    heroViewCalendar: 'មើលប្រតិទិន',

    // Bento section header
    bentoPillarsLabel: 'សសរស្ដម្ភនៃសកម្មភាព',
    bentoHeading: 'ទីដែលមហ្គតិ​ជួបនឹងសកម្មភាព',

    // Clubs bento
    clubsHeading: 'ក្លឹបនិងអង្គការ',
    clubsSubheading: 'ចាប់ពី Robotics រហូតដល់ Debate រកឃើញក្រុមរបស់អ្នកក្នុងចំណោមអង្គការដឹកនាំដោយសិស្សជាង ៤០។',
    clubsAlt: 'ក្រុមក្មេងជំទង់ចម្រុះ កំពុងសហការក្នុងបន្ទប់បច្ចេកវិទ្យាទំនើប ផ្ដោតលើរូបយន្ត​ស្វ័យប្រវត្តិ',

    roboticsName: 'Robotics Elite',
    roboticsDesc: 'សាងសង់អនាគត ម្ដងតែមួយតំណភ្ជាប់។',
    modelUnName: 'Model UN',
    modelUnDesc: 'វគ្គការទូតនិងភាពជាអ្នកដឹកនាំសកល។',
    codeSocietyName: 'ក្លឹបសរសេរកូដ',
    codeSocietyDesc: 'ការអភិវឌ្ឍ Full-stack និងការបង្កើតកម្មវិធី។',

    // Athletics bento
    athleticsHeading: 'កីឡា Titan',
    athleticsSubheading: 'ទីស្នាក់ការរបស់ពួកយើងគឺជាអ្នកឈ្នះជើងឯកក្នុងតំបន់។ ស្មារតីប្រកួតប្រជែងនិងវិន័យឥតខ្ចោះ។',
    athleticsVarsityLabel: 'ក្រុម Varsity',
    athleticsDedicationLabel: 'ការឧទ្ទិស',
    athleticsAlt: 'ក្រាហ្វិចពណ៌ស្ដើងនៃបាល់축球និងឧបករណ៍កីឡា',

    // Arts bento
    artsHeading: 'សិល្បៈ និងតន្ត្រី',
    artsSubheading: 'ការបញ្ចេញមតិតាមរយៈក្រចក និងស្នូរ។ កម្មវិធីល្ខោននិងអង្គការតន្ត្រីរបស់យើងមានកម្រិតពិភពលោក។',
    artsAlt1: 'រូបថតកៀងលម្អិតរបស់សិស្សសិល្បករ​ចាហ្វ្រែ',
    artsAlt2: 'រូបថតកៀងលម្អិតរបស់សិស្សចម្លាក់ ដែលមានស្នាមថ្នាំបន្តិចលើថ្ពាល់',
    artsAlt3: 'រូបថតសិស្សតារាល្ខោននៅក្រោមពន្លឺឆាក ពាក់សំលៀកបំពាក់ល្ខោន',

    // Featured Story bento
    spotlightLabel: 'ចំណាំពិសេស',
    spotlightHeading: 'មហោស្រពប្រចាំរដូវវស្សា',
    spotlightDesc: 'ពិព័រណ៍សិល្បៈប្រចាំឆ្នាំរបស់យើងនឹងត្រលប់មកវិញក្នុងខែឧសភា។ ចូលរួមបទពិសោធន៍កំពូលនៃភាពច្នៃប្រឌិតរបស់សិស្ស។',
    spotlightAlt: 'ស្ទូឌីយ៉ូសិល្បៈប្រកបដោយវិជ្ជាជីវៈ ពោរពេញដោយគំនូរចម្រុះពណ៌របស់សិស្សសូន្យ',

    // Leadership section
    leadershipHeading: 'ពង្រឹងអ្នកដឹកនាំជំនាន់ក្រោយ',
    leadershipSubheading: 'ក្រុមប្រឹក្សាសិស្ស និងអ្នកដឹកនាំផ្ទះ មិនមែនជាតំណាងតែប៉ុណ្ណោះទេ — ពួកគេជាអ្នកសម្រេចចិត្ត ដែលកំណត់វប្បធម៌ និងគោលនយោបាយអនាគតរបស់សាលា។',
    meetCouncilBtn: 'ជួបក្រុមប្រឹក្សា',

    leader1Alt: 'រូបថតវិជ្ជាជីវៈរបស់យុវបុរសសម្បូរទំនុកចិត្ត ពាក់ឯករូបសាលា ញញឹមកក្ដៅ',
    leader1Role: 'ប្រធានសភាសិស្ស',
    leader1Quote: '"គោលដៅរបស់ខ្ញុំគឺផ្ដសំណូមពររវាងសាស្ត្រាចារ្យ និងសិស្ស តាមរយៈការទំនាក់ទំនងប្រកបដោយតម្លាភាព និងព្រឹត្តិការណ៍ប្រជាប្រិយ​ក្នុងសាលា។"',

    leader2Alt: 'រូបថតកៀងរបស់យុវវ័យ​ស្រ្តី ដែលមានទឹកមុខឆ្លាតវៃ ពាក់ឯករូបសាលាពណ៌ខៀវ',
    leader2Role: 'ទំនាក់ទំនងផ្នែកសិក្សា',
    leader2Quote: '"ខ្ញុំតស៊ូមតិសម្រាប់កម្មវិធីបង្រៀនដោយមិត្តភ័ក្ត្រ និងការបែងចែកធនធានទំនើប ដើម្បីធានាថាសិស្សគ្រប់រូបមានឧបករណ៍ចំបាច់ដើម្បីជោគជ័យ។"',

    leader3Alt: 'រូបថតសិស្សសព្វចិត្ត ពាក់វ៉ែនតា ឈរក្នុងបន្ទប់បណ្ណាល័យ',
    leader3Role: 'នាយករឹង​កីឡា',
    leader3Quote: '"ការដឹកនាំ Titans មិនមែនគ្រាន់តែអំពីការឈ្នះពាន់ប្រជែងទេ — វាជាការកសាងវប្បធម៌នៃវិន័យ និងការគោរពគ្នាទៅវិញទៅមក។"',

    // Community Service section
    serviceHeading: 'ធ្វើការផ្លាស់ប្ដូរ',
    serviceSubheading: 'ភាពឆ្នើមមិនមែនគ្រាន់តែជាសិក្សាទេ។ សិស្សរបស់យើងចូលរួមស្ម័គ្រចិត្តជាង ១០.០០០ ម៉ោង ក្នុងមួយឆ្នាំ ដល់គំនិតផ្ដួចផ្ដើមក្នុងស្រុក និងសកល។',

    galleryAlt1: 'ក្រុមសិស្សសប្បាយ ពាក់ខ្សែអន្ទង់ reflected កំពុងដាំដើមឈើ​វ័យក្មេងក្នុងឧទ្យានសហគមន៍',
    gallery1Title: 'គំនិតផ្ដួចផ្ដើមបរិស្ថាន',
    gallery1Desc: 'ដាំដើមឈើ ៥០០ ដើម​ក្នុងឧទ្យានក្រុង។',

    galleryAlt2: 'ក្មេងជំទង់ ស្ម័គ្រចិត្ត​នៅ food bank កំពុងរៀបចំស្ដុក​ផ្គត់ផ្គង់ ដោយទឹកមុខរីករាយ',
    gallery2Title: 'អាហារសម្រាប់មនុស្សទាំងអស់',
    gallery2Desc: 'ការប្រមូលអាហារប្រចាំសប្ដាហ៍ ដើម្បីគាំទ្រការសន្ទោចក្នុងតំបន់។',

    galleryAlt3: 'សិស្សសវិទ្យាល័យ​បង្រៀនក្មេងតូចក្នុងបណ្ណាល័យ​ចិញ្ចឹម​ និងទំនើប',
    gallery3Title: 'ការប្រកួតជំនួយការ',
    gallery3Desc: 'ការគាំទ្រផ្នែកសិក្សាសម្រាប់សាលាបឋមសិក្សា។',

    galleryAlt4: 'សិស្សចូលរួមដើរបុណ្យ ពាក់អាវព្រឹត្តិការណ៍ស្រប ដើរជាមួយគ្នាតាមផ្លូវក្រុងដ៏ភ្លឺ',
    gallery4Title: 'ដើរដំណើរសប្បុរសធម៌',
    gallery4Desc: 'ការប្រណាំង ៥ គ.ម ប្រចាំឆ្នាំ ដើម្បីរកប្រាក់ទុនអប់រំ។',

    // CTA section
    ctaHeading: 'ត្រៀមខ្លួនចូលរួមគ្រួសារ Titan?',
    ctaSubheading: 'ស្ទង់មើលវប្បធម៌នៃភាពឆ្នើម ការច្នៃប្រឌិត និងមិត្តភាពអស់មួយជីវិត។',
    ctaTour: 'ណាត់ជួបទស្សនា',
    ctaApply: 'ដាក់ពាក្យឥឡូវ',
  },
})

const heroImgRef = ref<HTMLImageElement | null>(null)

// rAF-throttled parallax: the image overflows its container (110% tall, shifted up),
// so translating it on scroll never reveals an empty strip, and it stays buttery.
let ticking = false
function handleScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    if (heroImgRef.value) {
      heroImgRef.value.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0)`
    }
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
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
            class="absolute -top-[5%] left-0 w-full h-[110%] object-cover will-change-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1hBDZZq8W2pLOmY3q7mo3mSoLCzna3Jg-HXV9Ygbgo7HxAP0nG5F0gCKylgdgbZO-FL-iNFt95JfZ62rtDRC6_FCLvnwg3fQc3545d0TLHL8nbWtGR-zz7e7eD9Cr_UmVlYDSiqETY0qRGpWmWDignz4AQWnEVNVKaUT2Wo4qMweOTNe4vkfk0RTr40PQTlE1cMuCXnVeXdgw63s83gGjpHyYQ1sbTdi-PksCkDXPbyN9YKq55RfAaTUYqtx1P5jAtThlJficc4"
            :alt="t('heroAlt')"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
        <div class="relative z-10 max-w-2xl text-white">
          <h1 class="font-display-lg text-display-lg mb-4">{{ t('heroHeading') }}</h1>
          <p class="font-body-lg text-body-lg mb-8 opacity-90">{{ t('heroSubheading') }}</p>
          <div class="flex gap-4">
            <button class="px-8 py-3 bg-white text-primary rounded-xl font-bold hover:bg-surface-container transition-all">{{ t('heroExploreClubs') }}</button>
            <button class="px-8 py-3 glass-card text-white rounded-xl font-bold border border-white/30">{{ t('heroViewCalendar') }}</button>
          </div>
        </div>
      </section>

      <!-- Bento Grid: Clubs, Sports, Arts -->
      <section class="px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div class="mb-stack-md text-center">
          <span class="text-secondary font-label-md tracking-widest uppercase">{{ t('bentoPillarsLabel') }}</span>
          <h2 class="font-headline-md text-display-lg-mobile md:text-headline-md text-primary mt-2">{{ t('bentoHeading') }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          <!-- Clubs & Organizations (Large Bento) -->
          <div class="md:col-span-7 bg-white rounded-[2rem] shadow-sm border border-outline-variant/30 overflow-hidden bento-item flex flex-col">
            <div class="p-8 pb-0">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">groups</span>
                <h3 class="font-headline-md text-headline-sm">{{ t('clubsHeading') }}</h3>
              </div>
              <p class="text-on-surface-variant font-body-md mb-6">{{ t('clubsSubheading') }}</p>
            </div>
            <div class="flex-grow flex gap-4 p-8 pt-0 overflow-x-auto scroll-hide">
              <div class="flex-shrink-0 w-64 glass-card rounded-2xl p-6 border-secondary/10 hover:-translate-y-1">
                <span class="material-symbols-outlined text-secondary mb-2">precision_manufacturing</span>
                <h4 class="font-headline-sm text-label-md font-bold mb-2">{{ t('roboticsName') }}</h4>
                <p class="text-body-sm opacity-80">{{ t('roboticsDesc') }}</p>
              </div>
              <div class="flex-shrink-0 w-64 glass-card rounded-2xl p-6 border-secondary/10 hover:-translate-y-1">
                <span class="material-symbols-outlined text-secondary mb-2">public</span>
                <h4 class="font-headline-sm text-label-md font-bold mb-2">{{ t('modelUnName') }}</h4>
                <p class="text-body-sm opacity-80">{{ t('modelUnDesc') }}</p>
              </div>
              <div class="flex-shrink-0 w-64 glass-card rounded-2xl p-6 border-secondary/10 hover:-translate-y-1">
                <span class="material-symbols-outlined text-secondary mb-2">terminal</span>
                <h4 class="font-headline-sm text-label-md font-bold mb-2">{{ t('codeSocietyName') }}</h4>
                <p class="text-body-sm opacity-80">{{ t('codeSocietyDesc') }}</p>
              </div>
            </div>
            <div class="h-48 overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBj2t2wlOJjvduPokzC98cYrZKV_0ixEWAjeoERsdBiFp1h0Ar1juopPCZcUO15dL_yARIklPrJ0TbBdYedvl-LltJtWzhgM5a2IJe7XtxR2HPhfJi7fJhZIbOJQez0yloGF-d7Mg6eloae-5mnNOeAil-lvPDEXUGEQ-cHZJCaCn49IXWg39TWDx4g38Q68MiOdMH47z_zVoRpQCWHaLLlpjN19NykJMFQFUX9o5npxbX6OPUqByECUMUIECp6ZvzqnajaMQPXkI"
                :alt="t('clubsAlt')"
              >
            </div>
          </div>

          <!-- Sports Teams (Right Top) -->
          <div class="md:col-span-5 bg-primary-container text-white rounded-[2rem] p-8 bento-item relative overflow-hidden flex flex-col justify-between">
            <div class="relative z-10">
              <span class="material-symbols-outlined text-secondary-container text-4xl mb-4" style="font-variation-settings: 'FILL' 1;">sports_soccer</span>
              <h3 class="font-headline-md text-headline-md mb-2">{{ t('athleticsHeading') }}</h3>
              <p class="opacity-80 font-body-md">{{ t('athleticsSubheading') }}</p>
            </div>
            <div class="relative z-10 mt-8 grid grid-cols-2 gap-4">
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <p class="text-headline-sm font-bold">12</p>
                <p class="text-label-sm opacity-70">{{ t('athleticsVarsityLabel') }}</p>
              </div>
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <p class="text-headline-sm font-bold">100%</p>
                <p class="text-label-sm opacity-70">{{ t('athleticsDedicationLabel') }}</p>
              </div>
            </div>
            <img
              class="absolute bottom-0 right-0 w-1/2 h-1/2 object-contain opacity-20 transform translate-x-10 translate-y-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfGAz6FZ7Sbezd0C1bZGNsNqMZAqlE4tOdMgmVdDONEWikW6D6tIQG4Ps2ZgeMJC2bVzT8ozb8kAFVniD9T3l_qawA3HGRJrkv6aTMoQa6Zy4S0LvflUSwRh3oXr5CzgIV5_pJfxN6SSkBFFTWymQRj6rnzc9EATw2f0Gf6IZynJqLCRcnn3j6OWCC-uW0A1Ez6nk4IP0YgIxhX0QEXEOdbiYaVPcEb0LOCiwP0QKARhTlhH0RWqy5yJW_iYkPlPHIcGK3AvThOgU"
              :alt="t('athleticsAlt')"
            >
          </div>

          <!-- Arts & Music (Bottom Left) -->
          <div class="md:col-span-5 bg-secondary-container text-on-secondary-container rounded-[2rem] p-8 bento-item flex flex-col justify-between">
            <div>
              <h3 class="font-headline-md text-headline-md mb-2">{{ t('artsHeading') }}</h3>
              <p class="opacity-80 font-body-md">{{ t('artsSubheading') }}</p>
            </div>
            <div class="flex -space-x-4 mt-6">
              <img
                class="w-12 h-12 rounded-full border-4 border-secondary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuUj1sfZVgC9jVyz6yQlpUW_l7JU9Zzpj3d7h3ouy-_qT1ufzSh_qukSC5PI4yjV6j-LiuO4QaZ88jWMAZLVYbRKjTUfH3cLV_uYFK8lWRXzX4lPBmdvLBLt2xqezuadQ9AZP_qD4MGGTS3q47SikpJpBLwcZunwkctTZp1RN_hQpTnlABYBGttWkBEUSRapNgKKhZRIowI0Ccq5dsE30CsiFnq7hyAf4HWijj05NM_ws5kCI7dbiaKnGTWWP1XsqoVsy14c7ay_8"
                :alt="t('artsAlt1')"
              >
              <img
                class="w-12 h-12 rounded-full border-4 border-secondary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZHYKAjvpMHSkDSZkvK25ytbPXbB0W-Wy0Ff2rjyK83vPRm-w8nhFEqXdTQGdcBy56Itn9o0p3OiODJHo9DokHN_NaAsjCnHFWmJznI2K_n8HGVXw3ON2z47Cycln_Z27PM_luI-OOcyuwoXIfEzxLzxz_MfJnuCdtGG84JNb8vTN6KXEfmFcIpuzJNLIQCKwNsXhPhGN67auPKpAXQMeJ9XSMwmjascgqgIHEY6Tu3gOWLQ8axbA2I"
                :alt="t('artsAlt2')"
              >
              <img
                class="w-12 h-12 rounded-full border-4 border-secondary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEetg9B-IulTj8IqtkgCwsQyns3wW9ovTuobxQn_zoiOSc7v9V00Y366zsTM7fhs4pqRpRKwx56q1e95UOoWDTu1kkxGyU-MZ8hLD1X5rk2O6x-xGHUk5ISwCQ4NIxZP-sLnJ7CF1tFFlTOZr-HMwx6umY9txAmx7fNLX65C5HJLMtBuMxTc2BOSOF_chHY0rZ0iJXWwg3kWPQz_jdu0DXhi7wsymcDoRQAz91JFtu4CDEBZrWQ0Xe_iEMuQaoauyhFuoZ-Gy1xCs"
                :alt="t('artsAlt3')"
              >
              <div class="w-12 h-12 rounded-full border-4 border-secondary-container bg-primary text-white flex items-center justify-center font-bold text-label-sm">+150</div>
            </div>
          </div>

          <!-- Featured Story (Bottom Right) -->
          <div class="md:col-span-7 bg-white rounded-[2rem] shadow-sm border border-outline-variant/30 overflow-hidden bento-item group cursor-pointer">
            <div class="flex flex-col md:flex-row h-full">
              <div class="p-8 md:w-1/2 flex flex-col justify-center">
                <span class="text-secondary font-label-sm mb-2 font-bold tracking-widest">{{ t('spotlightLabel') }}</span>
                <h3 class="font-headline-md text-headline-md mb-4 group-hover:text-secondary transition-colors">{{ t('spotlightHeading') }}</h3>
                <p class="text-on-surface-variant font-body-sm">{{ t('spotlightDesc') }}</p>
              </div>
              <div class="md:w-1/2">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCziqeXwHt-pD1Mtk_veaskJMRVSLszFs1ONfq9v6D9bJtfENs3oy6IKPWxV5tp0FMc5XanKc7sbRQzcm09QTIzaqohH8RgtyQBUm4ulQN_X6PyM-kDUucQm6E5vA2XIPUcDWlOf6OvpYmKtqW4xhkIydVF_n80ce9WDSG8EeiRbSz7J6JsJrbzrfHfqhfdJlQEmdXW3XnhZ9IdIZAeTVa1UDF6UF_Yn2v5mVrsYnFD7plrvcEK-xH6JxSvwkd82ezgAKIx-4mORwM"
                  :alt="t('spotlightAlt')"
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
              <h2 class="font-display-lg text-headline-md md:text-display-lg mb-4">{{ t('leadershipHeading') }}</h2>
              <p class="opacity-80 font-body-lg">{{ t('leadershipSubheading') }}</p>
            </div>
            <button class="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold flex items-center gap-2">
              {{ t('meetCouncilBtn') }} <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Leader 1 -->
            <div class="glass-card bg-white/5 border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <img
                class="w-20 h-20 rounded-full mb-6 object-cover ring-4 ring-secondary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEXRN61rcwtmemIBhItjRIkLGZybJsZeXWPyQ_umVg2YJeUjC8U4VkmkpZPwjah5NrHXCZV9jqywfwL04EiAJXCGpWiOGme-8gKuWYlo_6362HgCcKSUeZhyuUKh733zvo9HnOqRpD0Ux1cWyS-6OGSHTRvhczZ_LugHAUOvZxZU8sQMeL9XJnS9-JbaNyYGfsGsA_g7PppiXF2kf9KTtryVoX_zhOF5JanQtqC98Tr01A0K5NOdxH0i9zuQEQazh2Aj994vM9Ca8"
                :alt="t('leader1Alt')"
              >
              <h4 class="font-headline-md text-headline-sm mb-1">Alex Thompson</h4>
              <p class="text-secondary-container font-label-md mb-4 uppercase tracking-wider">{{ t('leader1Role') }}</p>
              <p class="opacity-70 font-body-sm leading-relaxed">{{ t('leader1Quote') }}</p>
            </div>
            <!-- Leader 2 -->
            <div class="glass-card bg-white/5 border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <img
                class="w-20 h-20 rounded-full mb-6 object-cover ring-4 ring-secondary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JAvgbSRaNb2mmjeaaXXtdSXA_uTNGEioJ1cZBmhTiAWUsa2F55hsV3YkkevYUhmt4d4gIEZqQJnHE58cbYOfuhZPa8rh388u1f93xvSyrsydtLIJDCYvGNAG10xjKq50-1AbQaMFbAjpBOgpbtmKTblFoHzJgoHiefpXOsjekDrnHScGy21VcZjZe16MB_7uRcYKNJrZe0ujXVG65dmC0jXzCUd42ci2MHu0RIDH7_6WugnV5ayZcV0yRmi0bB6VQXjEl5l5TPg"
                :alt="t('leader2Alt')"
              >
              <h4 class="font-headline-md text-headline-sm mb-1">Maya Chen</h4>
              <p class="text-secondary-container font-label-md mb-4 uppercase tracking-wider">{{ t('leader2Role') }}</p>
              <p class="opacity-70 font-body-sm leading-relaxed">{{ t('leader2Quote') }}</p>
            </div>
            <!-- Leader 3 -->
            <div class="glass-card bg-white/5 border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <img
                class="w-20 h-20 rounded-full mb-6 object-cover ring-4 ring-secondary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKhbAcj6Jc7yEGWF9REcztiERSuJeszgQbXnLPSu4ySzM9hfQJIMP1QevyZiPewHtjrblFF574MOupcQhF3hf6YyGeqHyMnjEgpoXhkPH6FmJ7nvFQ104K6I9lEdmd0U5PAWjiv_z7kXKbfby5piMqNIpkyP7QtUZFayJUnMrZ25guRDKTmu02bHqotczjxd9SQcHJNe9fHe247zGiae9l9r00xIBV8VAntaLaSsKfwjOptxR0a0X5xnJNFKwaNNaWOg0CVJHD1g"
                :alt="t('leader3Alt')"
              >
              <h4 class="font-headline-md text-headline-sm mb-1">Jordan Lee</h4>
              <p class="text-secondary-container font-label-md mb-4 uppercase tracking-wider">{{ t('leader3Role') }}</p>
              <p class="opacity-70 font-body-sm leading-relaxed">{{ t('leader3Quote') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Community Service Gallery -->
      <section class="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div class="mb-16">
          <h2 class="font-display-lg text-headline-md text-primary mb-4">{{ t('serviceHeading') }}</h2>
          <p class="text-on-surface-variant font-body-lg max-w-2xl">{{ t('serviceSubheading') }}</p>
        </div>
        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XutqEOtszUHzpJ4MWYh-wKJi8jYbDdAePFjXLZYpmelIPSa6IllHzxWwZ9q59QPoC9836VXdqq_nF17VPN2yzix4AKscj5HviqAJJdbawPBLz1u9QtO_ivr4fyfH2La3nXVR5IXFtOverR5skqSACPvmgd12EeBV_xknCGLZRwmaViW6uYYGCYIKBwR7P-ZwMMvpq1RYvFhtrV1yxfUGVcRCJDtF-Xrkhi-Zn0Oup4xYKAlRHxameBRkhZ2MkuX557y72akoqNs"
              :alt="t('galleryAlt1')"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">{{ t('gallery1Title') }}</p>
                <p class="text-body-sm">{{ t('gallery1Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTCaPYEavukZQS2tlThTDPwi52k2spTd8fbneHbILiHe0BP57ZWiaH-4PdX8iOaRtitUmrzvJBYjIUG4Km-PecEpVtFgVEavz4Q7uhSfyVZplEyojjc1afBn2QNCmuxP6FLltbXaLdafcxFjxOoFw4aiE58NY_GItFQcXS7MbGepSA03BJdiXtWkoepFr1vUJesZvUUnjgEjTf_xXm0CuMqZ7tLjHs3jPgHXKX2zLyciN1GEw9atagTXobNc0xDHWcxrZcc8ZhGGo"
              :alt="t('galleryAlt2')"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">{{ t('gallery2Title') }}</p>
                <p class="text-body-sm">{{ t('gallery2Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZCeHgYBgGfSW2r-1YRnUWYQgNVdY596WWLqVyqR8rYRhlD7ProjIpqrE25ig2qnQ1cXXz84nhVUoWDTu1kkxGyU-MZ8hLD1X5rk2O6x-xGHUk5ISwCQ4NIxZP-sLnJ7CF1tFFlTOZr-HMwx6umY9txAmx7fNLX65C5HJLMtBuMxTc2BOSOF_chHY0rZ0iJXWwg3kWPQz_jdu0DXhi7wsymcDoRQAz91JFtu4CDEBZrWQ0Xe_iEMuQaoauyhFuoZ-Gy1xCs"
              :alt="t('galleryAlt3')"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">{{ t('gallery3Title') }}</p>
                <p class="text-body-sm">{{ t('gallery3Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-3xl group">
            <img
              class="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtuykvB5C8v9p5BkTLQjH2f0sgpwQ4Il22612RKYIB49Z3LcyRp8IZ68TA_JTnEv4DQA_riUK1ITwkoue1Cc3YtYZGSU3MatOzeBjQ55IIbKc1yXiIaHY7KbqW0rnAZiaJ7JqE7oDybJiNhe9cgxPwb0sppdaXVXcgDdJnOTm_mTK3P3K2SUmyM1DoAU2RZnu5UPb8OLpx55SAWVwZGkVO1DhBZuoTMWsr9jGaZxYDCHd88Bxn5y5_YbazniGRg47A3jRMPXyQfYo"
              :alt="t('galleryAlt4')"
            >
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <div class="text-white">
                <p class="font-bold text-headline-sm">{{ t('gallery4Title') }}</p>
                <p class="text-body-sm">{{ t('gallery4Desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="mx-margin-desktop mb-24 px-8 py-16 bg-surface-container rounded-[2rem] text-center">
        <h2 class="font-display-lg text-headline-md text-primary mb-6">{{ t('ctaHeading') }}</h2>
        <p class="text-on-surface-variant font-body-lg max-w-xl mx-auto mb-10">{{ t('ctaSubheading') }}</p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <button class="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform">{{ t('ctaTour') }}</button>
          <button class="px-8 py-4 bg-white text-primary border border-outline-variant rounded-2xl font-bold hover:bg-surface-container-low transition-colors">{{ t('ctaApply') }}</button>
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
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s ease, color 0.3s ease;
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
