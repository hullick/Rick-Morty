<template>
  <div class="table-list">
    <p>Ordered by {{ order }}</p>
    <ul class="menu-options">
      <li><a class="link" href="#">All Characters</a></li>
      <li><a class="link" href="#">Favorites</a></li>
    </ul>

    <table class="table">
      <thead>
        <tr>
          <th
            v-for="characterField in charactersFieldsList"
            :key="characterField"
            v-html="getDisplayOfField(characterField)"
          ></th>
          <th>Add to Favorites</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="character.characterId">
          <td
            v-for="characterField in charactersFieldsList"
            :key="characterField"
            v-html="getHTMLElementOfField(characterField, character)"
          ></td>
          <td>
            <button class="button btn-primary btn-sm btn-success" type="button">
              <span class="material-icons">favorite</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <character-photo style="display: none" />
  </div>
</template>

<script lang="ts">
import { defineComponent, h, render } from "vue";
import { useQuery, useQueryLoading } from "@vue/apollo-composable";
import { GET_CHARACTERS } from "@/types/graphql/queries";
import CharacterFactory from "@/factories/CharacterFactory";
import DisplayTypeFieldHelper from "@/helpers/DisplayTypeFieldHelper";
import Character from "@/types/Character";
import CharacterPhoto from "./CharacterPhoto.vue";

export default defineComponent({
  components: { CharacterPhoto },
  computed: {
    characters(): any {
      return this["charactersQuery"]
        ? this["charactersQuery"].characters.results.map((value: any) => {
            return CharacterFactory.getCharacterInstanceFrom(value);
          })
        : [];
    },
  },
  data() {
    return {
      charactersFieldsList:
        process.env.VUE_APP_CHARACTERS_FIELDS_LIST.split("|"),
    };
  },
  watch: {
    charactersQuery: function (currValue) {
      this.characters = this.charactersQuery.results;
    },
  },
  methods: {
    getDisplayOfField(field: string) {
      return DisplayTypeFieldHelper.getCharacterFieldDisplay(field);
    },
    getHTMLElementOfField(field: string, character: Character): any {
      const MyLink = {
        functional: true,
        name: "my-link",
        props: { url: String },
        render(createElement: any, context: any) {
          let { url } = context.props;
          let slots = context.slots();
          if (url) {
            return createElement(
              "a",
              {
                attrs: { href: url },
              },
              slots.default
            );
          } else {
            return slots.default;
          }
        },
      };
      switch (field) {
        case "foto":
          return `<component :is='CharacterPhoto'/>`;
        case "episode":
          return character.lastEpisode.name;
        case "name":
          return character.name;
        case "characterId":
          return character.characterId;
        case "gender":
          return character.gender;
        case "species":
          return character.species;
      }
    },
  },
  setup(props) {
    const query = useQuery(GET_CHARACTERS, {
      page: 0,
    });

    const { result: charactersQuery } = query;

    const loading = useQueryLoading();

    return { charactersQuery, loading };
  },
});
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

thead {
  background: rgba(229, 234, 244, 0.25);
  border-style: none;
}

thead th {
  color: #a9b1bd;
  font-style: normal;
  font-weight: 500;
}

td {
  color: #a9b1bd;
  font-style: normal;
  font-weight: 500;
}

body {
  margin: 0;
}

.table-list {
  text-align: center;
}

.menu-options {
  display: flex;
}
</style>
