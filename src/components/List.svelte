<script lang="ts">
  export let name
</script>

<h1 class="title">{name}</h1>
<ul>
  <slot class="item"/>
</ul>

<style>
  
  .title {
    @apply text-black text-lg text-center mb-2;
  }

  ul {
    @apply w-full;
  }

  ul :global(li) {
    @apply p-2 border-1 border-gray-600 border-opacity-50 border-solid my-1 bg-indigo-100 shadow-lg  text-black h-10 rounded-md;
  }
</style>
