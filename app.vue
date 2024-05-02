<template>
<!--  <div>-->
<!--&lt;!&ndash;    <Head>&ndash;&gt;-->
<!--&lt;!&ndash;      <Title>{{ title }}</Title>&ndash;&gt;-->
<!--&lt;!&ndash;      <Meta name="description" :content="title" />&ndash;&gt;-->
<!--&lt;!&ndash;      <Style type="text/css" children="body { background-color: green; }" ></Style>&ndash;&gt;-->
<!--&lt;!&ndash;    </Head>&ndash;&gt;-->
<!--&lt;!&ndash;    <h1>{{ title }}</h1>&ndash;&gt;-->
<!--    <NuxtLayout>-->
<!--      <NuxtPage />-->
<!--&lt;!&ndash;        :transition="{&ndash;&gt;-->
<!--&lt;!&ndash;          name: 'bounce',&ndash;&gt;-->
<!--&lt;!&ndash;          mode: 'out-in'&ndash;&gt;-->
<!--&lt;!&ndash;        }"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--    </NuxtLayout>-->
<!--  </div>-->
  <UContainer>
    <UHeader>
      <AppHeader />
    </UHeader>
    <UContent>
      <Nuxt />
    </UContent>
    <UFooter>
      <AppFooter />
    </UFooter>
  </UContainer>
</template>
<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const title = ref('Hello World')
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>