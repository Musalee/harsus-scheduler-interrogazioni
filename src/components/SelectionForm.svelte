<script>
  import Card from "./Card.svelte"

</script>

<Card>
  <h1 class="title">Inserisci numero studenti da estrarre</h1>
  <div class="form">
    <input type="text" id="name-input" placeholder="Inserisci numero" class="input input-bordered input-primary w-1/3" />
    <button class="btn btn-primary">let's go</button>
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