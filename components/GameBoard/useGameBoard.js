import { useReducer } from 'react';
import reducer, {
  CARD_CLICK,
  HIDE_OTHER_NON_PAIRED,
  initialState,
  MAX_VISIBLE_NON_PAIRED_CARDS
} from './reducer';


const useGameBoard = ({ initialCards }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    cards: initialCards
  })

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

  return {
    cards: state.cards,
    handleCardClick,
  }
}

export default useGameBoard