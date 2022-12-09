<script lang="ts">
  import { slide } from "svelte/transition"
  
  import removeIcon from "../assets/removeIcon.png"
  import { students } from "../utils/store"
  
  export let name: string
  export let key: number

  const deleteItem = () => students.update(oldState => oldState.filter(e => e.id != key))
  
</script>

<div>
  <li transition:slide|local>
    <span>{name}</span>
    <button tabindex="-1" on:click={deleteItem}>
      <img src={removeIcon} alt="remove">
    </button>
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
    transform: translateX(200%);
    transition: transform .5s ease-in;
  }

  li:hover button {
    transform: translateX(0%);
  }
</style>