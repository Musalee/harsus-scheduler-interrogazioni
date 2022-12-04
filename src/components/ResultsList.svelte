<script>
  import Card from "./Card.svelte"
  import List from "./List.svelte"

  import { results } from "../utils/store";

  export let width = ""

  import {flip} from 'svelte/animate';
	import {crossfade} from '../utils/crossfade';
	const [send, receive] = crossfade;

</script>
<Card className={width}>
  <List name="Lista Risultati">
    {#each $results as result (result.id)}
        <li animate:flip in:receive={{key: result.id}} out:send={{key: result.id}}>
          {result.name}
        </li>
    {/each}
  </List>
</Card>