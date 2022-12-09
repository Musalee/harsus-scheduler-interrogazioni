<script lang="ts">
  import InputForm from "./components/InputForm.svelte"
  import Navbar from "./components/Navbar.svelte"
  import ResultsList from "./components/ResultsList.svelte"
  import SelectionForm from "./components/SelectionForm.svelte"
  import StudentList from "./components/StudentList.svelte"
  import { loadFromStorage, registerUpdates } from "./utils/storage"

  loadFromStorage()
  registerUpdates()
</script>


<Navbar />
<div class="content">
  <div class="input">
    <InputForm />
    <SelectionForm />
  </div>
  <div class="lists">
    <StudentList width="w-1/2"/>
    <ResultsList width="w-1/2"/>
  </div>
</div>

<style>
  .content {
    @apply h-full flex flex-col px-56 bg-blue-100;
    padding-top: var(--navbar-height);
  }

  .input {
    @apply flex h-fit p-0 bg-blue-100;
  }

  .lists {
    @apply w-full flex align-baseline;
  }
</style>