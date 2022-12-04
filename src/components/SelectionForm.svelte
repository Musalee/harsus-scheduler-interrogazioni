<script lang="ts">
  import { Shuffle } from "../utils/shuffle"
  import { results, students } from "../utils/store"
  import Card from "./Card.svelte"

  let num = 1

  const selectStudents = () => {
    
    Shuffle.run()

    for (let i = 0; i < num; i++) {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * num)

        Shuffle.stop()        
        results.update((oldState) => [...oldState, $students.at(randomNum)])
        students.update((oldState) => oldState.filter((e, index) => index != randomNum))
        Shuffle.run()
      }, (i+1)*1000)
    }

    setTimeout(() => Shuffle.stop(), num*1300)

  }

</script>

<Card className="w-1/2">
  <h1 class="title">Inserisci numero studenti da estrarre</h1>
  <div class="form">
    <input type="number" id="name-input" min="0" bind:value={num} max="{$students.length}" placeholder="Inserisci numero" class="input input-bordered input-primary w-1/3" />
    <button class="btn btn-primary" on:click={selectStudents}>let's go</button>
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