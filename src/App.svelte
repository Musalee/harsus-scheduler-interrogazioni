<script lang="ts">
  import InputForm from "./components/InputForm.svelte"
  import Navbar from "./components/Navbar.svelte"
  import ResultsList from "./components/ResultsList.svelte"
  import SelectionForm from "./components/SelectionForm.svelte"
  import StudentList from "./components/StudentList.svelte"
</script>

<Navbar />
<div class="content">
  <InputForm />
  <div class="lists">
    <StudentList width="w-1/2"/>
    <div class="col">
      <ResultsList/>
      <SelectionForm />
    </div>
  </div>
</div>

<style>
  .content {
    @apply h-full;
    padding-top: var(--navbar-height);
  }

  .col {
    @apply flex flex-col w-1/2;
  }

  .lists {
    @apply w-full flex;
  }
</style>