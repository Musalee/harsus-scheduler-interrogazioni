<script lang="ts">
  import { slide } from "svelte/transition"
	import {crossfade} from '../utils/crossfade';
	const [send, receive] = crossfade;

  import removeIcon from "../assets/removeIcon.png"
  import { students } from "../utils/store"

  export let name: string
  export let key: number

  let hovered = false
  let divHiding = false

  const onMouseEnter = () => {
    hovered = true
  }

  const onMouseLeave = () => {
    divHiding = true

    setTimeout(() => {
      hovered = false
      divHiding = false
    }, 200)
  }

  const deleteItem = () => students.update(oldState => oldState.filter(e => e.id != key))
  
</script>

<div in:receive={{key: key}} out:send={{key: key}}>
  <li on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave} transition:slide|local>
    <span>{name}</span>
    {#if hovered}
    <button on:click={deleteItem} class={divHiding ? "hide" : ""}>
      <img src={removeIcon} alt="remove">
    </button>
    {/if}
  </li>
</div>

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