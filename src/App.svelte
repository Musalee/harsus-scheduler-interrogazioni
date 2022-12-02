<script lang="ts">
  import InputForm from "./components/InputForm.svelte"
  import Navbar from "./components/Navbar.svelte"
  import ResultsList from "./components/ResultsList.svelte"
  import StudentList from "./components/StudentList.svelte"
</script>

<Navbar />
<div class="content">
  <InputForm />
  <div class="lists">
    <StudentList />
    <ResultsList />
  </div>
</div>

<style>
  .content {
    @apply h-full;
    padding-top: var(--navbar-height);
  }

  .lists {
    @apply w-full flex;
  }
</style>