<script lang="ts">
  import { students } from "../utils/store"
  import Card from "./Card.svelte"
  import List from "./List.svelte"
  import StudentItem from "./StudentItem.svelte";

  export let className = ""
</script>


<Card className={className}>
  <List name="Lista Studenti">
    <div class="overflow-hidden">
      {#each $students as student (student.id)}
        <StudentItem name={student.name} key={student.id}/>
      {:else}
        <p>No students left :o</p>
      {/each }
    </div>
  </List>
</Card>