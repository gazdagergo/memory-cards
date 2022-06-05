
export const MAX_VISIBLE_NON_PAIRED_CARDS = 2
export const CARD_CLICK = 'CARD_CLICK'
export const HIDE_OTHER_NON_PAIRED = 'HIDE_OTHER_NON_PAIRED'

const reducer = (state, { type, payload }) => {
  switch (type){
    case CARD_CLICK: return {
      ...state,
      cards: state.cards.map(card => {
        if (card.id === payload.id){
          return {
            ...card,
            visible: !card.visible
          }
        }
        return card
      })
    }

    case HIDE_OTHER_NON_PAIRED: return {
      ...state,
      cards: state.cards.map(card => {
        if (card.id !== payload.id){
          return {
            ...card,
            visible: false
          }
        }
        return card
      })
    }

    default: return state
  }
}

export default reducer
