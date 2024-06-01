import { create } from "zustand";

export const usePokeStore = create((set) => ({
  pokemonArr: [],
  setPokemonArr: (pokemonApi) =>
    set(() => ({
      pokemonArr: pokemonApi,
    })),

  currentPokemonType: [],
  setCurrentPokemonType: (pokemonType) =>
    set((state) => ({
      currentPokemonType: pokemonType,
    })),

  currentPages: [],
  setCurrentPages: (pokemonApi) =>
    set(() => ({
      currentPages: pokemonApi,
    })),
}));
