<script>
  import {flip} from 'svelte/animate';

  import Card from "./Card.svelte"
  import List from "./List.svelte"

  import { results } from "../utils/store";
  import { slide } from 'svelte/transition'

  export let width = ""


</script>
<Card className={width}>
  <List name="Lista Risultati">
    {#each $results as result (result.id)}
        <li animate:flip transition:slide|local>
          {result.name}
        </li>
    {:else}
      <p>No results to be shown :P</p>
    {/each}
  </List>
</Card>