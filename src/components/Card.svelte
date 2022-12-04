<script lang="ts">
  export let className: string = ""
</script>

<div class={`card ${className}`} >
  <slot />
</div>

<style>
  .card {
    @apply rounded-md bg-indigo-50 shadow-md p-4 m-4 h-fit;
  }
</style>