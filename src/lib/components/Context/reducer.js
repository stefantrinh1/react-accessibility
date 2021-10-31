import initialState from './initialState'

export default (state, action) => {
  switch (action.type) {
    // ============================
    // ========  General  =========
    // ============================

    case 'HIDE_IMAGES':
      return {
        ...state,
        hideImages: true,
      }

    case 'UNHIDE_IMAGES':
      return {
        ...state,
        hideImages: false,
      }

    default:
      alert('Error - No Action Could Be Found')
      throw new Error()
  }
}
