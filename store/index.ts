import { ActionTree, MutationTree, GetterTree } from 'vuex'

import Vue from 'vue'
import { isObject } from 'lodash'

interface SysI18n {
  [i18nKey: string]: any
}

export const state = () => ({
  sysI18n: {
    zh: {
      icpNumber: '粤ICP备17165430号',
      companyName: '深圳呗佬智能有限公司',
      phone: '(0755) 8657 6905',
      email: 'bello@belloai.com',
      address: '深圳市 南山区 华润大厦2楼 202',
    },
  },
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  sysI18n: (state) => state.sysI18n,
}

export const mutations: MutationTree<RootState> = {
  setSysI18n(state, { key, value }) {
    console.log('setSysI18n key', key)
    console.log('setSysI18n value', value)
    Vue.set(state.sysI18n, key, value)
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchSysI18n({ commit, state }) {
    const { locale } = this.$i18n
    console.log('fetchSysI18n', locale)
    if ((state.sysI18n as SysI18n)[locale]) {
      console.log('fetchSysI18n', locale, (state.sysI18n as SysI18n)[locale])
      return
    }
    const value = await this.$axios.$get(`/i18n/${locale}`)
    if (!isObject(value)) {
      console.error(`/i18n/${locale} value is not obj`, value)
      return
    }
    console.log('fetchSysI18n value', value)
    commit('setSysI18n', { key: locale, value })
  },
}
