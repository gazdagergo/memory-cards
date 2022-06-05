
import { Group } from '@mantine/core';
import FlipCard from '../FlipCard';
import useGameBoard from './useGameBoard';

const GameBoard = ({ initialCards, onReady }) => {
  const {
    cards,
    handleCardClick,
  } = useGameBoard({ initialCards, onReady })

  return (
    <Group>
      {cards.map(({ id, visible, url, imgId }) => (
        <FlipCard
          key={id}
          visible={visible}
          src={url}
          id={id}
          imgId={imgId}
          onClick={handleCardClick}
        />
      ))}
    </Group>
  )
}

export default GameBoard
