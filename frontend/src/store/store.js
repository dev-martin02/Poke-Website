import { create } from "zustand";

export const usePokeStore = create((set) => ({
  pokemonArr: [],
  setPokemonArr: (pokemonApi) =>
    set((state) => ({
      pokemonArr: pokemonApi,
    })),

  currentPokemonType: [],
  setCurrentPokemonType: (pokemonType) =>
    set((state) => ({
      currentPokemonType: [...state.currentPokemonType, pokemonType],
    })),

  resetCurrentPokemonType: () =>
    set(() => ({
      currentPokemonType: [],
    })),
}));
