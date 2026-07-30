<script setup lang="ts">
useHead({ title: 'Student Life' })

const { t } = useI18n({
  en: {
    // Hero
    heroAlt: 'A diverse group of high school students laughing and walking together through a sun-drenched, modern campus courtyard',
    heroHeading: 'Discover Your Passion.',
    heroSubheading: 'Beyond the classroom, life at BFHS is a vibrant tapestry of discovery, leadership, and community impact.',
    heroEyebrow: 'Student Life',
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

    // Arts bento
    artsHeading: 'Arts & Music',
    artsSubheading: 'Expression through canvas and chord. Our theater and orchestra programs are world-class.',
    artsAlt1: 'Close up headshot of a student musician smiling',
    artsAlt2: 'Close up headshot of a student artist with light paint splatters on their cheek',
    artsAlt3: 'Portrait of a young actor under stage lights, wearing theatrical costume',
    artsMembers: 'students enrolled',

    // Featured Story bento
    spotlightLabel: 'Spotlight',
    spotlightHeading: 'The Spring Conservatory',
    spotlightDesc: 'Our annual arts exhibition returns this May. Experience the pinnacle of student creativity.',
    spotlightAlt: 'A professional art studio filled with vibrant student paintings on easels',

    // Leadership section
    leadershipHeading: 'Empowering the Next Generation',
    leadershipSubheading: "Our Student Council and House Captains aren't just representatives—they are decision-makers who shape the school's culture and future policies.",
    meetCouncilBtn: 'Meet the Council',

    leader1Alt: 'Professional headshot of a confident young man in a school blazer, smiling warmly',
    leader1Role: 'Student Body President',
    leader1Quote: 'My goal is to bridge the gap between faculty and students through transparent communication and inclusive campus events.',

    leader2Alt: 'Close up portrait of a young woman with a bright, intelligent expression, wearing a navy school jumper',
    leader2Role: 'Academics Liaison',
    leader2Quote: 'I advocate for peer tutoring programs and modern resource allocation to ensure every student has the tools to succeed.',

    leader3Alt: 'Portrait of a focused young student with glasses, standing in a library environment',
    leader3Role: 'Athletics Captain',
    leader3Quote: "Leading the Titans is about more than winning trophies; it's about building a culture of discipline and mutual respect.",

    // Community Service section
    serviceHeading: 'Making a Difference',
    serviceSubheading: "Excellence isn't just academic. Our students contribute over 10,000 hours of community service annually to local and global initiatives.",

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
    heroEyebrow: 'ជីវិតសិស្ស',
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

    // Arts bento
    artsHeading: 'សិល្បៈ និងតន្ត្រី',
    artsSubheading: 'ការបញ្ចេញមតិតាមរយៈក្រចក និងស្នូរ។ កម្មវិធីល្ខោននិងអង្គការតន្ត្រីរបស់យើងមានកម្រិតពិភពលោក។',
    artsAlt1: 'រូបថតកៀងលម្អិតរបស់សិស្សសិល្បករ​ចាហ្វ្រែ',
    artsAlt2: 'រូបថតកៀងលម្អិតរបស់សិស្សចម្លាក់ ដែលមានស្នាមថ្នាំបន្តិចលើថ្ពាល់',
    artsAlt3: 'រូបថតសិស្សតារាល្ខោននៅក្រោមពន្លឺឆាក ពាក់សំលៀកបំពាក់ល្ខោន',
    artsMembers: 'សិស្សបានចុះឈ្មោះ',

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
    leader1Quote: 'គោលដៅរបស់ខ្ញុំគឺផ្ដសំណូមពររវាងសាស្ត្រាចារ្យ និងសិស្ស តាមរយៈការទំនាក់ទំនងប្រកបដោយតម្លាភាព និងព្រឹត្តិការណ៍ប្រជាប្រិយ​ក្នុងសាលា។',

    leader2Alt: 'រូបថតកៀងរបស់យុវវ័យ​ស្រ្តី ដែលមានទឹកមុខឆ្លាតវៃ ពាក់ឯករូបសាលាពណ៌ខៀវ',
    leader2Role: 'ទំនាក់ទំនងផ្នែកសិក្សា',
    leader2Quote: 'ខ្ញុំតស៊ូមតិសម្រាប់កម្មវិធីបង្រៀនដោយមិត្តភ័ក្ត្រ និងការបែងចែកធនធានទំនើប ដើម្បីធានាថាសិស្សគ្រប់រូបមានឧបករណ៍ចំបាច់ដើម្បីជោគជ័យ។',

    leader3Alt: 'រូបថតសិស្សសព្វចិត្ត ពាក់វ៉ែនតា ឈរក្នុងបន្ទប់បណ្ណាល័យ',
    leader3Role: 'នាយករឹង​កីឡា',
    leader3Quote: 'ការដឹកនាំ Titans មិនមែនគ្រាន់តែអំពីការឈ្នះពាន់ប្រជែងទេ — វាជាការកសាងវប្បធម៌នៃវិន័យ និងការគោរពគ្នាទៅវិញទៅមក។',

    // Community Service section
    serviceHeading: 'ធ្វើការផ្លាស់ប្ដូរ',
    serviceSubheading: 'ភាពឆ្នើមមិនមែនគ្រាន់តែជាសិក្សាទេ។ សិស្សរបស់យើងចូលរួមស្ម័គ្រចិត្តជាង ១០.០០០ ម៉ោង ក្នុងមួយឆ្នាំ ដល់គំនិតផ្ដួចផ្ដើមក្នុងស្រុក និងសកល។',

    galleryAlt1: 'ក្រុមសិស្សសប្បាយ កំពុងដាំដើមឈើ​វ័យក្មេងក្នុងឧទ្យានសហគមន៍',
    gallery1Title: 'គំនិតផ្ដួចផ្ដើមបរិស្ថាន',
    gallery1Desc: 'ដាំដើមឈើ ៥០០ ដើម​ក្នុងឧទ្យានក្រុង។',

    galleryAlt2: 'ក្មេងជំទង់ ស្ម័គ្រចិត្ត​នៅ food bank កំពុងរៀបចំស្ដុក​ផ្គត់ផ្គង់ ដោយទឹកមុខរីករាយ',
    gallery2Title: 'អាហារសម្រាប់មនុស្សទាំងអស់',
    gallery2Desc: 'ការប្រមូលអាហារប្រចាំសប្ដាហ៍ ដើម្បីគាំទ្រការសន្ទោចក្នុងតំបន់។',

    galleryAlt3: 'សិស្សសវិទ្យាល័យ​បង្រៀនក្មេងតូចក្នុងបណ្ណាល័យទំនើប',
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

const clubs = computed(() => [
  { icon: 'precision_manufacturing', name: t('roboticsName'), desc: t('roboticsDesc') },
  { icon: 'public', name: t('modelUnName'), desc: t('modelUnDesc') },
  { icon: 'terminal', name: t('codeSocietyName'), desc: t('codeSocietyDesc') },
])

const artists = computed(() => [
  { alt: t('artsAlt1'), src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuUj1sfZVgC9jVyz6yQlpUW_l7JU9Zzpj3d7h3ouy-_qT1ufzSh_qukSC5PI4yjV6j-LiuO4QaZ88jWMAZLVYbRKjTUfH3cLV_uYFK8lWRXzX4lPBmdvLBLt2xqezuadQ9AZP_qD4MGGTS3q47SikpJpBLwcZunwkctTZp1RN_hQpTnlABYBGttWkBEUSRapNgKKhZRIowI0Ccq5dsE30CsiFnq7hyAf4HWijj05NM_ws5kCI7dbiaKnGTWWP1XsqoVsy14c7ay_8' },
  { alt: t('artsAlt2'), src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZHYKAjvpMHSkDSZkvK25ytbPXbB0W-Wy0Ff2rjyK83vPRm-w8nhFEqXdTQGdcBy56Itn9o0p3OiODJHo9DokHN_NaAsjCnHFWmJznI2K_n8HGVXw3ON2z47Cycln_Z27PM_luI-OOcyuwoXIfEzxLzxz_MfJnuCdtGG84JNb8vTN6KXEfmFcIpuzJNLIQCKwNsXhPhGN67auPKpAXQMeJ9XSMwmjascgqgIHEY6Tu3gOWLQ8axbA2I' },
  { alt: t('artsAlt3'), src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEetg9B-IulTj8IqtkgCwsQyns3wW9ovTuobxQn_zoiOSc7v9V00Y366zsTM7fhs4pqRpRKwx56q1e95UOoWDTu1kkxGyU-MZ8hLD1X5rk2O6x-xGHUk5ISwCQ4NIxZP-sLnJ7CF1tFFlTOZr-HMwx6umY9txAmx7fNLX65C5HJLMtBuMxTc2BOSOF_chHY0rZ0iJXWwg3kWPQz_jdu0DXhi7wsymcDoRQAz91JFtu4CDEBZrWQ0Xe_iEMuQaoauyhFuoZ-Gy1xCs' },
])

const leaders = computed(() => [
  {
    name: 'Alex Thompson', role: t('leader1Role'), quote: t('leader1Quote'), alt: t('leader1Alt'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEXRN61rcwtmemIBhItjRIkLGZybJsZeXWPyQ_umVg2YJeUjC8U4VkmkpZPwjah5NrHXCZV9jqywfwL04EiAJXCGpWiOGme-8gKuWYlo_6362HgCcKSUeZhyuUKh733zvo9HnOqRpD0Ux1cWyS-6OGSHTRvhczZ_LugHAUOvZxZU8sQMeL9XJnS9-JbaNyYGfsGsA_g7PppiXF2kf9KTtryVoX_zhOF5JanQtqC98Tr01A0K5NOdxH0i9zuQEQazh2Aj994vM9Ca8',
  },
  {
    name: 'Maya Chen', role: t('leader2Role'), quote: t('leader2Quote'), alt: t('leader2Alt'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0JAvgbSRaNb2mmjeaaXXtdSXA_uTNGEioJ1cZBmhTiAWUsa2F55hsV3YkkevYUhmt4d4gIEZqQJnHE58cbYOfuhZPa8rh388u1f93xvSyrsydtLIJDCYvGNAG10xjKq50-1AbQaMFbAjpBOgpbtmKTblFoHzJgoHiefpXOsjekDrnHScGy21VcZjZe16MB_7uRcYKNJrZe0ujXVG65dmC0jXzCUd42ci2MHu0RIDH7_6WugnV5ayZcV0yRmi0bB6VQXjEl5l5TPg',
  },
  {
    name: 'Jordan Lee', role: t('leader3Role'), quote: t('leader3Quote'), alt: t('leader3Alt'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCKhbAcj6Jc7yEGWF9REcztiERSuJeszgQbXnLPSu4ySzM9hfQJIMP1QevyZiPewHtjrblFF574MOupcQhF3hf6YyGeqHyMnjEgpoXhkPH6FmJ7nvFQ104K6I9lEdmd0U5PAWjiv_z7kXKbfby5piMqNIpkyP7QtUZFayJUnMrZ25guRDKTmu02bHqotczjxd9SQcHJNe9fHe247zGiae9l9r00xIBV8VAntaLaSsKfwjOptxR0a0X5xnJNFKwaNNaWOg0CVJHD1g',
  },
])

const gallery = computed(() => [
  {
    title: t('gallery1Title'), desc: t('gallery1Desc'), alt: t('galleryAlt1'),
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XutqEOtszUHzpJ4MWYh-wKJi8jYbDdAePFjXLZYpmelIPSa6IllHzxWwZ9q59QPoC9836VXdqq_nF17VPN2yzix4AKscj5HviqAJJdbawPBLz1u9QtO_ivr4fyfH2La3nXVR5IXFtOverR5skqSACPvmgd12EeBV_xknCGLZRwmaViW6uYYGCYIKBwR7P-ZwMMvpq1RYvFhtrV1yxfUGVcRCJDtF-Xrkhi-Zn0Oup4xYKAlRHxameBRkhZ2MkuX557y72akoqNs',
  },
  {
    title: t('gallery2Title'), desc: t('gallery2Desc'), alt: t('galleryAlt2'),
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTCaPYEavukZQS2tlThTDPwi52k2spTd8fbneHbILiHe0BP57ZWiaH-4PdX8iOaRtitUmrzvJBYjIUG4Km-PecEpVtFgVEavz4Q7uhSfyVZplEyojjc1afBn2QNCmuxP6FLltbXaLdafcxFjxOoFw4aiE58NY_GItFQcXS7MbGepSA03BJdiXtWkoepFr1vUJesZvUUnjgEjTf_xXm0CuMqZ7tLjHs3jPgHXKX2zLyciN1GEw9atagTXobNc0xDHWcxrZcc8ZhGGo',
  },
  {
    title: t('gallery3Title'), desc: t('gallery3Desc'), alt: t('galleryAlt3'),
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZCeHgYBgGfSW2r-1YRnUWYQgNVdY596WWLqVyqR8rYRhlD7ProjIpqrE25ig2qnQ1cXXz84nhVUoWDTu1kkxGyU-MZ8hLD1X5rk2O6x-xGHUk5ISwCQ4NIxZP-sLnJ7CF1tFFlTOZr-HMwx6umY9txAmx7fNLX65C5HJLMtBuMxTc2BOSOF_chHY0rZ0iJXWwg3kWPQz_jdu0DXhi7wsymcDoRQAz91JFtu4CDEBZrWQ0Xe_iEMuQaoauyhFuoZ-Gy1xCs',
  },
  {
    title: t('gallery4Title'), desc: t('gallery4Desc'), alt: t('galleryAlt4'),
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtuykvB5C8v9p5BkTLQjH2f0sgpwQ4Il22612RKYIB49Z3LcyRp8IZ68TA_JTnEv4DQA_riUK1ITwkoue1Cc3YtYZGSU3MatOzeBjQ55IIbKc1yXiIaHY7KbqW0rnAZiaJ7JqE7oDybJiNhe9cgxPwb0sppdaXVXcgDdJnOTm_mTK3P3K2SUmyM1DoAU2RZnu5UPb8OLpx55SAWVwZGkVO1DhBZuoTMWsr9jGaZxYDCHd88Bxn5y5_YbazniGRg47A3jRMPXyQfYo',
  },
])
</script>

<template>
  <div>
    <PageHeader
      :eyebrow="t('heroEyebrow')"
      :title="t('heroHeading')"
      :lede="t('heroSubheading')"
      :image-alt="t('heroAlt')"
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1hBDZZq8W2pLOmY3q7mo3mSoLCzna3Jg-HXV9Ygbgo7HxAP0nG5F0gCKylgdgbZO-FL-iNFt95JfZ62rtDRC6_FCLvnwg3fQc3545d0TLHL8nbWtGR-zz7e7eD9Cr_UmVlYDSiqETY0qRGpWmWDignz4AQWnEVNVKaUT2Wo4qMweOTNe4vkfk0RTr40PQTlE1cMuCXnVeXdgw63s83gGjpHyYQ1sbTdi-PksCkDXPbyN9YKq55RfAaTUYqtx1P5jAtThlJficc4"
    >
      <div class="flex flex-col gap-3 sm:flex-row">
        <UiButton variant="inverse" size="lg">{{ t('heroExploreClubs') }}</UiButton>
        <UiButton to="/news" variant="ghost" size="lg" class="border border-on-dark/25 text-on-dark hover:bg-on-dark/10">
          {{ t('heroViewCalendar') }}
        </UiButton>
      </div>
    </PageHeader>

    <!-- ── Pillars ──────────────────────────────────────────────────────── -->
    <UiSection>
      <UiSectionHead
        :eyebrow="t('bentoPillarsLabel')"
        :title="t('bentoHeading')"
        align="center"
        size="display"
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-12">
        <!-- Clubs -->
        <article class="flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card lg:col-span-7">
          <div class="p-8">
            <div class="flex items-center gap-2.5">
              <UiIcon name="groups" :size="20" :filled="true" class="text-accent" />
              <h3 class="font-display text-title-2 text-fg">{{ t('clubsHeading') }}</h3>
            </div>
            <p class="mt-3 max-w-lg text-copy text-fg-muted">{{ t('clubsSubheading') }}</p>

            <ul class="mt-7 grid gap-3 sm:grid-cols-3">
              <li
                v-for="club in clubs" :key="club.name"
                class="rounded-lg border border-line bg-surface-2 p-4 transition-colors hover:border-line-strong hover:bg-surface-3"
              >
                <UiIcon :name="club.icon" :size="19" class="text-accent" />
                <p class="mt-3 text-label font-semibold text-fg">{{ club.name }}</p>
                <p class="mt-1 text-label-sm text-fg-muted">{{ club.desc }}</p>
              </li>
            </ul>
          </div>

          <div class="mt-auto aspect-[21/9] overflow-hidden bg-surface-3">
            <img
              :alt="t('clubsAlt')" loading="lazy" class="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBj2t2wlOJjvduPokzC98cYrZKV_0ixEWAjeoERsdBiFp1h0Ar1juopPCZcUO15dL_yARIklPrJ0TbBdYedvl-LltJtWzhgM5a2IJe7XtxR2HPhfJi7fJhZIbOJQez0yloGF-d7Mg6eloae-5mnNOeAil-lvPDEXUGEQ-cHZJCaCn49IXWg39TWDx4g38Q68MiOdMH47z_zVoRpQCWHaLLlpjN19NykJMFQFUX9o5npxbX6OPUqByECUMUIECp6ZvzqnajaMQPXkI"
            >
          </div>
        </article>

        <!-- Athletics -->
        <article class="flex flex-col justify-between rounded-xl border border-brand bg-brand p-8 lg:col-span-5">
          <div>
            <UiIcon name="sports_soccer" :size="26" :filled="true" class="text-accent" />
            <h3 class="mt-5 font-display text-title-2 text-on-dark">{{ t('athleticsHeading') }}</h3>
            <p class="mt-3 text-copy text-on-dark-muted">{{ t('athleticsSubheading') }}</p>
          </div>
          <dl class="mt-8 grid grid-cols-2 gap-4">
            <div class="rounded-lg border border-on-dark/15 bg-on-dark/[0.06] p-4">
              <dd class="font-display text-title-1 tabular-nums text-on-dark">12</dd>
              <dt class="mt-1 text-label-sm text-on-dark-muted">{{ t('athleticsVarsityLabel') }}</dt>
            </div>
            <div class="rounded-lg border border-on-dark/15 bg-on-dark/[0.06] p-4">
              <dd class="font-display text-title-1 tabular-nums text-on-dark">100%</dd>
              <dt class="mt-1 text-label-sm text-on-dark-muted">{{ t('athleticsDedicationLabel') }}</dt>
            </div>
          </dl>
        </article>

        <!-- Arts -->
        <article class="flex flex-col justify-between rounded-xl border border-accent/25 bg-accent-tint p-8 lg:col-span-5">
          <div>
            <UiIcon name="palette" :size="26" :filled="true" class="text-on-accent-tint" />
            <h3 class="mt-5 font-display text-title-2 text-on-accent-tint">{{ t('artsHeading') }}</h3>
            <p class="mt-3 text-copy text-on-accent-tint/85">{{ t('artsSubheading') }}</p>
          </div>
          <div class="mt-8 flex items-center gap-3">
            <div class="flex -space-x-3">
              <img
                v-for="artist in artists" :key="artist.alt"
                :src="artist.src" :alt="artist.alt" loading="lazy"
                class="h-11 w-11 rounded-full border-2 border-accent-tint object-cover"
              >
              <span class="grid h-11 w-11 place-items-center rounded-full border-2 border-accent-tint bg-brand text-label-sm font-semibold text-on-brand">
                +150
              </span>
            </div>
            <span class="text-label-sm text-on-accent-tint/80">{{ t('artsMembers') }}</span>
          </div>
        </article>

        <!-- Spotlight -->
        <article class="group grid overflow-hidden rounded-xl border border-line bg-surface shadow-card sm:grid-cols-2 lg:col-span-7">
          <div class="flex flex-col justify-center p-8">
            <p class="text-eyebrow uppercase text-accent">{{ t('spotlightLabel') }}</p>
            <h3 class="mt-4 font-display text-title-2 text-fg">{{ t('spotlightHeading') }}</h3>
            <p class="mt-3 text-copy-sm text-fg-muted">{{ t('spotlightDesc') }}</p>
            <a href="#" class="mt-6 inline-flex items-center gap-1.5 text-label font-medium text-fg transition-colors group-hover:text-accent">
              {{ t('heroViewCalendar') }}
              <UiIcon name="arrow_forward" :size="16" class="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div class="min-h-[220px] overflow-hidden bg-surface-3">
            <img
              :alt="t('spotlightAlt')" loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCziqeXwHt-pD1Mtk_veaskJMRVSLszFs1ONfq9v6D9bJtfENs3oy6IKPWxV5tp0FMc5XanKc7sbRQzcm09QTIzaqohH8RgtyQBUm4ulQN_X6PyM-kDUucQm6E5vA2XIPUcDWlOf6OvpYmKtqW4xhkIydVF_n80ce9WDSG8EeiRbSz7J6JsJrbzrfHfqhfdJlQEmdXW3XnhZ9IdIZAeTVa1UDF6UF_Yn2v5mVrsYnFD7plrvcEK-xH6JxSvwkd82ezgAKIx-4mORwM"
            >
          </div>
        </article>
      </div>
    </UiSection>

    <!-- ── Leadership ───────────────────────────────────────────────────── -->
    <UiSection tone="brand">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <UiSectionHead
          :title="t('leadershipHeading')"
          :lede="t('leadershipSubheading')"
          tone="inverse"
          size="display"
        />
        <UiButton variant="inverse" size="lg" icon-trailing="arrow_forward" class="shrink-0">
          {{ t('meetCouncilBtn') }}
        </UiButton>
      </div>

      <ul class="mt-12 grid gap-6 md:grid-cols-3">
        <li
          v-for="leader in leaders" :key="leader.name"
          class="rounded-xl border border-on-dark/15 bg-on-dark/[0.04] p-7 transition-colors duration-200 hover:bg-on-dark/[0.08]"
        >
          <img
            :src="leader.img" :alt="leader.alt" loading="lazy"
            class="h-16 w-16 rounded-full object-cover ring-2 ring-accent ring-offset-2 ring-offset-brand"
          >
          <h3 class="mt-6 font-display text-title-3 text-on-dark">{{ leader.name }}</h3>
          <p class="mt-1 text-label-sm uppercase tracking-wide text-accent">{{ leader.role }}</p>
          <blockquote class="mt-4 text-copy-sm leading-relaxed text-on-dark-muted">{{ leader.quote }}</blockquote>
        </li>
      </ul>
    </UiSection>

    <!-- ── Community service ────────────────────────────────────────────── -->
    <UiSection>
      <UiSectionHead :eyebrow="t('serviceHeading')" :title="t('serviceSubheading')" size="display" />

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="item in gallery" :key="item.title" class="group relative overflow-hidden rounded-xl border border-line">
          <img
            :src="item.src" :alt="item.alt" loading="lazy"
            class="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          >
          <div class="scrim-b absolute inset-x-0 bottom-0 h-3/5" />
          <div class="absolute inset-x-0 bottom-0 p-5">
            <p class="font-display text-title-4 text-on-dark">{{ item.title }}</p>
            <p class="mt-1 text-label-sm text-on-dark-muted">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </UiSection>

    <!-- ── CTA ──────────────────────────────────────────────────────────── -->
    <UiSection tone="muted" compact>
      <div class="rounded-xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
        <h2 class="mx-auto max-w-2xl font-display text-display-2 text-balance text-fg">{{ t('ctaHeading') }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-lead text-pretty text-fg-muted">{{ t('ctaSubheading') }}</p>
        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <UiButton to="/admissions" size="lg" icon-trailing="arrow_forward">{{ t('ctaApply') }}</UiButton>
          <UiButton to="/about" variant="outline" size="lg" icon="tour">{{ t('ctaTour') }}</UiButton>
        </div>
      </div>
    </UiSection>
  </div>
</template>
