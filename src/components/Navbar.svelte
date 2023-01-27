<script>
  import navicon from "../assets/harsu-nobg-crop.png"
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
    @apply absolute w-screen bg-indigo-500 flex items-center px-12 gap-6 border-b-4 border-indigo-300 border-solid;
    height: var(--navbar-height);
  }

  #nav .icon {
    @apply h-5/6
  }

  .title {
    @apply text-white font-semibold sm:text-xl;
  }

</style>