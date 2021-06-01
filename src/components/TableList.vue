<template>
  <div class="table-list">
    <p>Ordered by {{order}}</p>
    <ul class="menu-options">
        <li><a class="link" href="#">All Characters</a></li>
        <li><a class="link" href="#">Favorites</a></li>
    </ul>
    <table class="table">
        <thead>
            <tr>
                <th>Photo</th>
                <th>Character Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Species</th>
                <th>Last Episode</th>
                <th>Add to Favorites</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="character in orderedCharacter" :key="character.characterId">
            <td>{{character.foto}}</td>
            <td>{{character.characterId}}</td>
            <td>{{character.name}}</td>
            <td>{{character.gender}}</td>
            <td>{{character.species}}</td>
            <td>{{character.lastEpisode}}</td>
            <td><button class="button btn-primary btn-sm btn-success" type="button"><span class="material-icons">favorite</span></button></td>
        </tr>    
        </tbody> 
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Character from "@/types/Character";
import OrderTerm from "@/types/OrderTerm";
// import Character from "@/types/Character";

export default defineComponent({
    props:{
        characters:{ 
            required: true,
            type: Array as PropType<Character[]> 
        },
        order:{ 
          required: true,
          type: String as PropType<OrderTerm>
        }
    },
    setup(props){
      const orderedCharacter = computed(() =>{
        return [...props.characters].sort((a: Character, b: Character) => {
          return a[props.order] > b[props.order] ? 1 : -1;
        })
      })

      return{ orderedCharacter}
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

thead{
background: rgba(229, 234, 244, 0.25);
border-style: none;
}

thead th{
      color: #A9B1BD;
      font-style: normal;
      font-weight: 500;
}

td{
    color: #A9B1BD;
    font-style: normal;
    font-weight: 500;
}

body{
 margin: 0;
}

.table-list{
    text-align: center;
}

.menu-options{
    display: flex;
}
</style>
