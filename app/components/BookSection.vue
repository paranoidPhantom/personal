<script setup lang="ts">
import Book from "~/assets/graphics/book.svg?raw";

const { data } = useFetch("/api/books")

</script>

<template>
  <div class="flex flex-col gap-4 py-16">
      <div class="relative">
          <img class="absolute top-12 left-12 blur-[90px] w-52 h-56 rounded-xl" :src="data.cover" :alt="data.title">
          <img class="blur-[4px] absolute top-[40px] left-[86px] w-28 h-[174px]" style="transform: skewY(-11deg) scale(110%);" :src="data.cover" :alt="data.title">
          <!-- Real image -->
          <img class="absolute top-[40px] left-[86px] w-28 h-[174px]" style="transform: skewY(-11deg);" :src="data.cover" :alt="data.title">
          <NuxtLink target="_blank" :to="`https://literal.club/book/${data.slug}`" >
              <div class="absolute left-0 top-0 opacity-50" v-html="Book" />
          </NuxtLink>
      </div>
      <div class="relative min-h-[300px] pt-[300px] md:pl-[300px] md:pt-0 space-y-2">
          <h3 class="opacity-50">{{ $t("reading") }}</h3>
          <h3 class="text-2xl"> {{ data.title }} <span class="opacity-50">by {{ data.authors.map((author) => author.name).join(', ') }}</span></h3>
          <p class="opacity-80">{{ data.description }}
          </p>
          <div class="flex justify-end">
              <NuxtLink class="mt-4 flex items-center gap-2" target="_blank" :to="`https://literal.club/book/${data.slug}`">
                  {{ $t("fetched_from_literal") }}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Simple Icons by Simple Icons Collaborators - https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md --><path fill="currentColor" d="m11.148 5.719l.128-1.798l3.234.223l-1.52-2.902l1.63-.836L16.176 3.4L18.142.65l1.495 1.05l-1.916 2.665l3.212.221l-.128 1.797l-3.167-.217l1.498 2.878l-1.628.836l-1.578-3.017l-1.99 2.771l-1.495-1.05L14.36 5.94zm-8.129 9.513L5.197 0l2.569.355l-1.817 12.708l5.978.825l-.361 2.525zM20.981 21.7L4.328 24l-.36-2.524l16.652-2.3z"/></svg>
              </NuxtLink>
          </div>
      </div>
    </div>
</template>
