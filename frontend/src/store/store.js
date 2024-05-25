import { create } from "zustand";

const useRingColorStore = create((set) => ({
  ringColor: "", // Initial state
  setRingColor: (color) => set({ ringColor: color }), // Method to update the ringColor

  pokemonArr: [],
  setPokemonArr: (pokemonApi) =>
    set({ pokemonArr: pokemonArr.push(pokemonApi) }),
}));

export default useRingColorStore;
