export const pokemonIds = [1,2,3,4];
pokemonIds.push(5);

interface Pokemon {
    id: number;
    name: string;
    type: string;
    age?: number;
}

export const pikachu: Pokemon = {
    id: 1,
    name: 'Pikachu',
    type: 'Electric'
}
