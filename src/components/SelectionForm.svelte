<script lang="ts">
  import { Shuffle } from "../utils/shuffle"
  import { results, shuffling, students } from "../utils/store"
  import Card from "./Card.svelte"

  let num = 1
  let inputValid = true
  let debounceTimer
  let numInputElement

  const selectStudents = () => {
    if ($shuffling) return

    validateInput()
    
    if (!inputValid) return

    clearTimeout(debounceTimer)
    
    shuffling.set(true)
    Shuffle.run()

    for (let i = 0; i < num; i++) {

      setTimeout(() => {
        Shuffle.stop()     

        let randomNum: number

        do {
          randomNum = Math.floor(Math.random() * num)
        } while (randomNum >= $students.length)

        results.update((oldState) => [...oldState, $students.at(randomNum)])
        students.update((oldState) => oldState.filter((e, index) => index != randomNum))

        Shuffle.run()
      }, (i+1)*1500)
    }

    setTimeout(() => { 
      Shuffle.stop()
      shuffling.set(false) 
      num = num > $students.length ? $students.length : num
    }, num*1750)
  }

  const validateInput = () => {
    if (num < 0 || num > $students.length) {
      inputValid = false
      numInputElement.focus()
      return
    }

    inputValid = true
  } 

  const debounce = () => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			validateInput()
		}, 300);
	}

</script>

<Card className="md:w-1/2">
  <h1 class="title">Inserisci numero studenti da estrarre</h1>
  <div class="form">
    <input type="number" 
           id="name-input" 
           on:change={debounce}
           on:keyup={(e) => e.key == "Enter" ? selectStudents() : debounce()}
           bind:value={num}
           bind:this={numInputElement}
           min="1" 
           max="{$students.length}"
           placeholder="Inserisci numero"
           class={`input input-bordered w-1/3 ${inputValid ? "input-primary" : "input-error invalid-number-input"}`} 
    />
    <button class={`btn btn-primary w-1/4 ${$shuffling ? "loading no-animation disabled text-center btn-square" : ""}`} on:click={selectStudents}>{$shuffling ? "" : "let's go"}</button>
  </div>
</Card>

<style>
  .title {
    @apply text-lg lg:text-xl mb-4 w-full text-center text-black;
  }

  .form {
    @apply flex flex-col lg:flex-row justify-center gap-2 lg:gap-4 px-8 lg:px-16;
  }

  input {
    @apply text-black w-full lg:w-3/5 text-center;
  }

  button {
    @apply md:text-sm xl:text-base w-full lg:w-2/5;
  }

  :global(.invalid-number-input) {
    @apply input-error;
    animation: wiggle 300ms linear 3;
  }

  @keyframes wiggle {
    0% {
      transform: translateX(0%)
    }

    25% {
      transform: translateX(2px)
    }

    75% {
      transform: translateX(-2px)
    }

    100% {
      transform: translateX(0%)
    }
  }
</style>