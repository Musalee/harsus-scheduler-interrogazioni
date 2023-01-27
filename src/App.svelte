<script lang="ts">
  import { onMount } from "svelte"
  import InputForm from "./components/InputForm.svelte"
  import Navbar from "./components/Navbar.svelte"
  import ResultsList from "./components/ResultsList.svelte"
  import SelectionForm from "./components/SelectionForm.svelte"
  import StudentList from "./components/StudentList.svelte"
  import { loadFromStorage, registerUpdates } from "./utils/storage"

  onMount(() => {
    loadFromStorage()
    registerUpdates()
  })
</script>


<Navbar />
<div class="content">
  <div class="input">
    <InputForm />
    <SelectionForm />
  </div>
  <div class="lists">
    <StudentList className="md:w-1/2"/>
    <ResultsList className="md:w-1/2"/>
  </div>
</div>

<style>

  :global(#app) {
    @apply h-screen;
  }
  .content {
    @apply h-full flex flex-col lg:px-28 xl:px-56 bg-blue-100;
    padding-top: var(--navbar-height);
    min-width: 400px;
  } 

  .input {
    @apply flex flex-col w-full md:flex-row h-fit p-0 bg-inherit;
  }

  .lists {
    @apply flex flex-col md:flex-row w-full align-baseline;
  }

  
</style>