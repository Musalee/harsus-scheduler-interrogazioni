<script>
  import Card from "./Card.svelte"
  import List from "./List.svelte"

  export let width = ""

</script>
<Card className={width}>
  <List name="Lista Risultati">
    <li>
      Harsukhman
    </li>
  </List>
</Card>