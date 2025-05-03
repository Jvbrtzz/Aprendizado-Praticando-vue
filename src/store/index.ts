import type ICategoria from "@/interface/ICategoria";
import { createStore } from "vuex";
import { SET_CATEGORIA, REMOVE_INGREDIENTE, CLEAR_CATEGORIAS } from "./mutations-type";
import { GET_CATEGORIA } from "./actrion-type";
import { obterCategorias } from "@/http";

interface Estado {
  categoria: ICategoria[]; // Ajustado para ser um array de ICategoria
}

export const store = createStore<Estado>({
  state: {
    categoria: [], // Inicializado como um array vazio
  },
  mutations: {
    [SET_CATEGORIA](state: Estado, categoria: ICategoria) {
      state.categoria.push(categoria); // Adiciona o novo item ao array
    },
    [REMOVE_INGREDIENTE](state: Estado, nome: string) {
      const index = state.categoria.findIndex(categoria => categoria.nome === nome);
      if (index !== -1) {
          state.categoria.splice(index, 1); // Remove o item do array pelo índice encontrado
      }
    },
    [CLEAR_CATEGORIAS](state: Estado) {
      state.categoria = []; // Limpa as categorias
    },
  },
  actions: {
    async [GET_CATEGORIA]({ commit }: { commit: Function }) {
        try {
            const categorias = await obterCategorias();
            categorias.forEach((categoria: ICategoria) => {
                commit(SET_CATEGORIA, categoria); // Adiciona cada categoria individualmente
            });
        } catch (error) {
            console.error("Erro ao obter categorias:", error);
        }
    }
  },
  getters: {
    getCategoria(state: Estado): ICategoria[] {
      return state.categoria; // Retorna o array de categorias
    },
  },
});