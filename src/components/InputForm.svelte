<script lang="ts">

  import Card from "./Card.svelte"
  import { students } from "../utils/store";

  let input = ''

  const insertStudent = () => {
    students.update(oldState => [...oldState, { name: input }])
  }

</script>

<Card>
  <h1 class="title">Inserisci nuovo studente</h1>
  <div class="form">
    <input type="text" placeholder="Inserisci nome" class="input input-bordered input-primary w-1/3" bind:value={input}/>
    <button class="btn btn-primary" on:click={insertStudent}>Inserisci</button>
  </div>
</Card>

<style>
  .title {
    @apply text-xl mb-4 w-full text-center text-black;
  }

  .form {
    @apply flex justify-center gap-4;
  }
</style>