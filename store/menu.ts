export interface MenuState {
  open: boolean
}

export const state = () => ({
  open: false,
})

export const mutations = {
  toggle(thisState: MenuState, open: boolean) {
    thisState.open = open !== undefined ? open : !thisState.open
  },
  close(thisState: MenuState) {
    thisState.open = false
  },
}
