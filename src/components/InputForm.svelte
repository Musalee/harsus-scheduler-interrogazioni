<script lang="ts">

  import Card from "./Card.svelte"
  import { students } from "../utils/store";
  import { StudentKey } from "../utils/keyScheduler"

  let input = ''
  let index = 0

  const insertStudent = () => {
    students.update(oldState => [...oldState, { name: input, id: StudentKey.new(), index}])
    input = ''
  }

</script>

<Card className="w-1/2">
  <h1 class="title">Inserisci nuovo studente</h1>
  <div class="form">
    <input type="text" placeholder="Inserisci nome" class="input input-bordered input-primary w-2/5" bind:value={input}/>
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