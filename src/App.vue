<template>
<div class="container">
  <div class="row">
  <img alt="Vue logo" src="./assets/RickAndMorty.svg" />
    <div class="filter">
      <button @click="handleClick('name')" type="button" class="btn">Name</button>
      <button @click="handleClick('characterId')" type="button" class="btn">Identifier</button>
      <button @click="handleClick('lastEpisode')" type="button" class="btn">Episodes</button>

    </div>  
  <TableList :characters="characters" :order="order" />
  </div>
</div>

</template>

<script lang="ts">
import {defineComponent, ref, toRefs} from 'vue';
import TableList from "./components/TableList.vue"; 
// import SearchList from "./components/SearchList.vue"; 
import Character from "./types/Character";
import OrderTerm from "./types/OrderTerm";



export default defineComponent({
  name: 'App',
  components: {TableList},
  setup(){
    // const characters = ref<Character[]>([
    //   {identifier:1,foto:'eqwe',characterId: 1, name: 'Rui', gender: 'Male', species: '2', lastEpisode:'ws23'},
    //   {identifier:2,foto:'eqwe',characterId: 2, name: 'Jorge', gender: 'Male', species: '2', lastEpisode:'ws24'},
    //   {identifier:3,foto:'eqwe',characterId: 3, name: 'Raul', gender: 'Male', species: '2', lastEpisode:'ws25'},
    //   {identifier:4,foto:'eqwe',characterId: 4, name: 'Morty', gender: 'Male', species: '2', lastEpisode:'ws21'},
    // ])

    const order =ref<OrderTerm>('name')

    const handleClick = (term: OrderTerm) => {
       order.value = term
    }
    return {handleClick, order}
  }
})
</script>

<style lang="scss">
 @import 'node_modules/bootstrap/scss/bootstrap';
 @import url("https://fonts.googleapis.com/css?family=Poppins");
#app {
 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #A9B1BD;
  margin-top: 60px;
}

body{
  text-align: center;
}
</style>
