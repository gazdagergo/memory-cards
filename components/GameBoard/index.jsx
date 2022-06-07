
import { Group } from '@mantine/core';
import FlipCard from '../FlipCard';
import useGameBoard from './useGameBoard';
import Overlay from '../Overlay';
import { useEffect, useRef } from 'react';

const GameBoard = ({ initialCards, onReady, onRestart }) => {
  const {
    cards,
    handleCardClick,
    isReady
  } = useGameBoard({ initialCards, onReady })

  const catSound = useRef(null)

  useEffect(() => {
    catSound.current = new Audio('/meow.mp3')
  }, [])

  useEffect(() => {
    if (isReady){
      catSound.current.play()
    }
  }, [isReady])

  return (
    <>
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
      {isReady && <Overlay><button onClick={onRestart}>Újrakezdem</button></Overlay>}    
    </>
  )
}

export default GameBoard
