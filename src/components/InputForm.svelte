<script lang="ts">

  import Card from "./Card.svelte"
  import { shuffling, students } from "../utils/store";
  import { StudentKey } from "../utils/keyScheduler"

  let input = ''
  let index = 0

  const insertStudent = () => {
    if ($shuffling || validateInput) return

    students.update(oldState => [...oldState, { name: input, id: StudentKey.new(), index: index++}])
    input = ''
  }

  const validateInput = (): boolean => {
    if (input.length == 0) return false
    
    return true
  } 

</script>

<Card className="w-1/2">
  <h1 class="title">Inserisci nuovo studente</h1>
  <div class="form">
    <input type="text" on:keydown={(e) => e.key == "Enter" && insertStudent()} placeholder="Inserisci nome" class="input input-bordered input-primary w-2/5" bind:value={input}/>
    <button class={`btn btn-primary w-1/4 ${$shuffling ? "loading no-animation disabled text-center" : ""}`} on:click={insertStudent}>Inserisci</button>
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