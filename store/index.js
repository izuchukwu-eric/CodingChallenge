import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const actions = {
  async getProducts({ commit }) {
    const products = await axios
      .get(`https://trayvonnorthern.com/Edgewood-API/public/api/products`)
      .then((response) => {
        return response.data.data
      })
    commit('SET_PRODUCTS', products)
  },

  async getPagination({ commit }, pageNumber) {
    const pages = await axios
      .get(
        `https://trayvonnorthern.com/Edgewood-API/public/api/products?page=${pageNumber}`
      )
      .then((response) => {
        return response.data.data
      })
    commit('SET_PAGINATION', pages)
  },

  getCategory({ commit, state }, selectedCategory) {
    const categories = state.categories.filter((prod) => {
      return prod.catname === selectedCategory
    })
    commit('GET_CATEGORY', categories)
  },
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
    state.categories = products
  },
  SET_PAGINATION(state, pages) {
    state.products = pages
    state.categories = pages
  },
  GET_CATEGORY(state, categories) {
    state.products = categories
  },
}

export const state = () => ({
  products: [],
  categories: [],
})
