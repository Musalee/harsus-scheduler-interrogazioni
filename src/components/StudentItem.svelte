<script lang="ts">
  import removeIcon from "../assets/removeIcon.png"

  export let name

  let hovered = false
  let divHiding = false

  const onMouseEnter = () => {
    hovered = true
  }

  const onMouseLeave = (e) => {
    const target = e.target as HTMLDivElement

    divHiding = true

    setTimeout(() => {
      hovered = false
      divHiding = false
    }, 200)
  }
</script>

<li on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
  <span>{name}</span>
  {#if hovered}
  <button class={divHiding ? "hide" : ""}>
    <img src={removeIcon} alt="remove">
  </button>
  {/if}
</li>

<style>
  img {
    @apply h-8;
  }

  li {
    @apply flex justify-between items-center overflow-hidden;
  }

  button {
    @apply opacity-0;
    animation: slide-in .2s ease-in-out forwards;
  }

  .hide {
    animation: slide-out .2s ease-in-out;
  }
  
  @keyframes slide-in {
    0% {
      transform: translateX(200%);
      @apply opacity-100;
    }

    100% {
      transform: translateX(0%);
      @apply opacity-100;
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0%);
      @apply opacity-100;
    }

    100% {
      transform: translateX(200%);
      @apply opacity-100;
    }
  }
</style>