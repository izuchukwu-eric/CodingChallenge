import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const actions = {
  async getProducts({ commit }) {
    const products = await axios.get(
      `https://trayvonnorthern.com/Edgewood-API/public/api/products`
    )
    commit('SET_PRODUCTS', products)
  },

  async getPagination({ commit }, pageNumber) {
    const pages = await axios.get(
      `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=${pageNumber}`
    )
    commit('SET_PAGINATION', pages)
    // console.log(pageNumber)
  },
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PAGINATION(state, pages) {
    state.products = pages
  },
}

export const state = () => ({
  products: {
    data: [],
  },
})
