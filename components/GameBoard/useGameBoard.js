import { useReducer } from 'react';
import reducer, {
  CARD_CLICK,
  HIDE_OTHER_NON_PAIRED,
  MAX_VISIBLE_NON_PAIRED_CARDS
} from './reducer';


const useGameBoard = ({ initialCards }) => {
  const [state, dispatch] = useReducer(reducer, { cards: initialCards })

  const numberOfVisibleUnpaired = state.cards.filter(({ visible }) => !!visible).length

  const handleCardClick = (id) => {
    if (numberOfVisibleUnpaired >= MAX_VISIBLE_NON_PAIRED_CARDS) {
      dispatch({ type: HIDE_OTHER_NON_PAIRED, payload: { id } })
    }    
    dispatch({ type: CARD_CLICK, payload: { id } })
  }

  return {
    cards: state.cards,
    handleCardClick,
  }
}

export default useGameBoard