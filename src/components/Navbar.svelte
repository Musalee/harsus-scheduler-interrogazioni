<script>
  import navicon from "../assets/harsu.jpeg"
</script>

<div id="nav">
  <img class="icon" src={ navicon } alt="Harsukhman">
  <h1 class="title">HarSUS Scheduler Interrogazioni</h1>
</div>

<style>
  :global(:root) {
    --navbar-height: 3rem
  }

  #nav {
    @apply absolute bg-blue-600 w-full flex items-center px-12 gap-6;
    height: var(--navbar-height);
  }

  #nav .icon {
    @apply h-5/6
  }

  .title {
    @apply text-white font-semibold text-xl;
  }

</style>