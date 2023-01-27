<script lang="ts">

  import Card from "./Card.svelte"
  import { shuffling, students } from "../utils/store";
  import { StudentKey } from "../utils/keyScheduler"

  let input = ''
  let textInputElement: HTMLInputElement
  let index = 0
  let inputValid = true
  let debounceTimer

  const insertStudent = () => {
    if ($shuffling) return

    validateInput()

    if (!inputValid) return
    
    clearTimeout(debounceTimer)

    students.update(oldState => [...oldState, { name: input, id: StudentKey.new(), index: index++}])
    input = ''
  }

  const validateInput = () => {
    if (input.length == 0) {
      inputValid = false
      textInputElement.focus()
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
  <h1 class="title">Inserisci nuovo studente</h1>
  <div class="form">
    <input type="text" 
           on:keyup={(e) => e.key == "Enter" ? insertStudent() : debounce()}
           placeholder="Inserisci nome" 
           class={`input input-bordered w-2/5 ${inputValid ? "input-primary" : "input-error invalid-student-input"}`}  
           bind:value={input}
           bind:this={textInputElement}
    />
    <button class={`btn btn-primary w-1/4 ${$shuffling ? "loading no-animation disabled text-center" : ""}`}
            on:click={insertStudent}
    >
      Inserisci
    </button>
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
    @apply text-black w-full lg:w-3/5;
  }

  button {
    @apply w-full lg:w-2/5;
  }

  :global(.invalid-student-input) {
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