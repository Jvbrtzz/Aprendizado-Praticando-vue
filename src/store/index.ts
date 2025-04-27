import type ICategoria from "@/interface/ICategoria";
import { createStore } from "vuex";

interface Estado {
  categoria: ICategoria[]; // Ajustado para ser um array de ICategoria
}

export const store = createStore<Estado>({
  state: {
    categoria: [], // Inicializado como um array vazio
  },
  mutations: {
    'SET_CATEGORIA'(state: Estado, categoria: ICategoria) {
      state.categoria.push(categoria); // Adiciona o novo item ao array
    },
  },
  actions: {
    atualizarCategoria({ commit }: { commit: Function }, categoria: ICategoria) {
      commit("SET_CATEGORIA", categoria); // Corrigido para usar a mutação correta
    },
  },
  getters: {
    getCategoria(state: Estado): ICategoria[] {
      return state.categoria; // Retorna o array de categorias
    },
  },
});