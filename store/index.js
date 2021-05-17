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
    commit('SET_PAGINATION', {
      firstPage: products.data.first_page_url,
      currentPage: products.data.first_page_url,
      path: products.data.path + '?page=',
      fromPage: products.data.from,
      toPage: products.data.to,
      nextPage: products.data.next_page_url,
      prevPage: products.data.prev_page_url,
      lastPage: products.data.last_page_url,
      totalItem: products.data.total,
    })
  },
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PAGINATION(state, page) {
    ;(state.pagination = page), state.produc
  },
}

export const state = () => ({
  products: {
    data: [],
  },
  pagination: {},

  loadStatus: 0,
})

export const getters = {
  getPagination(state) {
    return state.pagination
  },
}
