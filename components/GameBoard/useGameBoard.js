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

  console.log(state)

  const numberOfVisibleUnpaired = state.cards.filter(({ visible, imgId }) => !!visible && !state.pairedImgIds.includes(imgId)).length

  const handleCardClick = ({ id, imgId }) => {
    if (numberOfVisibleUnpaired >= MAX_VISIBLE_NON_PAIRED_CARDS) {
      dispatch({ type: HIDE_OTHER_NON_PAIRED, payload: { id } })
    }    
    dispatch({ type: CARD_CLICK, payload: { id, imgId } })
  }

  return {
    cards: state.cards,
    handleCardClick,
  }
}

export default useGameBoard