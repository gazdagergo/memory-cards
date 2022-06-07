import { useReducer, useEffect } from 'react';
import reducer, {
  CARD_CLICK,
  HIDE_OTHER_NON_PAIRED,
  initialState,
  MAX_VISIBLE_NON_PAIRED_CARDS,
  SIZE_CHANGED
} from './reducer';


const useGameBoard = ({ initialCards, onReady }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    cards: initialCards
  })

  useEffect(() => {
    dispatch({ type: SIZE_CHANGED, payload: { initialCards }})
  }, [initialCards])

  const numberOfVisibleUnpaired = state.cards.filter(({ visible, imgId }) => !!visible && !state.pairedImgIds.includes(imgId)).length

  const handleCardClick = (id) => {
    const {
      imgId: clickedCardImgId,
      visible: isClickedCardVisible
    } = state.cards.find(card => card.id === id)

    if (isClickedCardVisible) return

    if (numberOfVisibleUnpaired >= MAX_VISIBLE_NON_PAIRED_CARDS) {
      dispatch({ type: HIDE_OTHER_NON_PAIRED, payload: { id } })
    }    
    dispatch({ type: CARD_CLICK, payload: { id, imgId: clickedCardImgId } })
  }

  const isReady = state.cards.length > 0 && state.cards.length / 2 === state.pairedImgIds.length

  return {
    cards: state.cards,
    handleCardClick,
    isReady
  }
}

export default useGameBoard