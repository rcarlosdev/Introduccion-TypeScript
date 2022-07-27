import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    // public id: number;
    // public name: string;

    get imageUrl(): string {
        return `https://pokemondb.net/sprites/sun-moon/icon/${this.name.toLowerCase()}.png`;
    }

    constructor(
        public readonly id: number,
        public name: string // public img: string
    ) {
        // this.id = id;
        // this.name = name;
    }

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
        this.speak();
    }

    private speak() {
        console.log(`${this.name}, ${this.name}!`);
    }

    async getMovs(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves);
        return data.moves;
    }
}
export const charmander = new Pokemon(4, "Charmander");

// console.log(charmander.imageUrl);
// charmander.scream();
// charmander.speak();

charmander.getMovs();
// console.log(charmander.getMovs());