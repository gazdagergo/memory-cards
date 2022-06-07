
export const MAX_VISIBLE_NON_PAIRED_CARDS = 2
export const CARD_CLICK = 'CARD_CLICK'
export const HIDE_OTHER_NON_PAIRED = 'HIDE_OTHER_NON_PAIRED'
export const SIZE_CHANGED = 'SIZE_CHANGED'

export const initialState = {
  cards: [],
  pairedImgIds: [],
  nrOfTurns: 0
}

const reducer = (state, { type, payload }) => {
  switch (type){
    case CARD_CLICK: return {
      ...state,
      cards: state.cards.map(card => {
        return {
          ...card,
          visible: card.id === payload.id ? true : card.visible,
        }
      }),
      pairedImgIds: [
        ...state.pairedImgIds,
        ...(state.cards.find(({ visible, imgId }) => visible && !state.pairedImgIds.includes(imgId))?.imgId === payload.imgId ? [payload.imgId] : [])
      ],
      nrOfTurns: state.nrOfTurns + 1
    }

    case HIDE_OTHER_NON_PAIRED: return {
      ...state,
      cards: state.cards.map(card => {
        if (card.id !== payload.id && !state.pairedImgIds.includes(card.imgId)){
          return {
            ...card,
            visible: false
          }
        }
        return card
      })
    }

    case SIZE_CHANGED: return {
      ...initialState,
      cards: payload.initialCards
    }

    default: return state
  }
}

export default reducer
