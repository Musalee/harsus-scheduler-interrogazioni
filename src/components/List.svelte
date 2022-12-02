<ul>
  <slot class="item"/>
</ul>

<style>
  ul {
    @apply w-full;
  }

  ul :global(li) {
    @apply p-2 border-1 border-gray-600 border-solid text-black h-10;
  }
</style>
