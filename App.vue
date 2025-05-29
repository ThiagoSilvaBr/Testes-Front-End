<script>
 import axios from 'axios'
 import PokemonItem from './components/PokemonItem'

  export default {
    components: {
      PokemonItem
    },

    mounted(){
      this.carregarLista()
    },

    method(){
      async carregarLista(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        this.pokemons = response.data.results
      }
    };

    data() {
      return {
        pokemons: []
      }
    }
  }
</script>

<template>
  <div><h1>Pokemons</h1></div>
   <div v-for = "pokemon in pokemons">
    <PokeItem
    
    :name = "pokemon.name"
    :url = "pokemon.url"
      
    />
  </div>

  
  
</template>

<style>

</style>