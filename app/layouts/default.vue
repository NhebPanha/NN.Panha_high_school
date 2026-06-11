<template>
  <div class="bg-surface font-body-md text-on-surface min-h-screen flex flex-col">
    <TopNavBar />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
