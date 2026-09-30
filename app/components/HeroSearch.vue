<template>
  <form
    class="mx-auto flex max-w-2xl flex-col gap-2 rounded-[28px] bg-white p-2.5 shadow-2xl shadow-pine-950/30 sm:flex-row sm:items-center sm:rounded-full sm:pl-7"
    @submit.prevent="go"
  >
    <label for="hero-search" class="sr-only">คุณกำลังมองหาบริการอะไร?</label>
    <span class="hidden text-xl sm:block" aria-hidden="true">🔍</span>
    <input
      id="hero-search"
      v-model="q"
      type="search"
      placeholder="คุณกำลังมองหาบริการอะไร?"
      class="w-full flex-1 bg-transparent px-5 py-3.5 text-lg text-ink outline-none placeholder:text-ink/40 sm:px-2"
    />
    <button
      type="submit"
      class="rounded-3xl bg-pine-900 px-8 py-3.5 text-base font-bold text-white transition hover:bg-pine-800 sm:rounded-full"
    >
      ค้นหา
    </button>
  </form>
</template>

<script setup lang="ts">
const q = ref('')
const router = useRouter()
function go() {
  router.push({ path: '/search', query: q.value ? { q: q.value } : {} })
}
</script>
