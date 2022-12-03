<script lang="ts">
  import { students } from "../utils/store"
  import Card from "./Card.svelte"
  import List from "./List.svelte"
  import StudentItem from "./StudentItem.svelte";


  export let width
</script>


<Card className={width}>
  <List name="Lista Studenti">
    {#each $students as student}
      <StudentItem name={student.name}/>
    {/each }
  </List>
</Card>