<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="min-h-[60vh]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
