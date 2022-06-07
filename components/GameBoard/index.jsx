
import { Group } from '@mantine/core';
import FlipCard from '../FlipCard';
import useGameBoard from './useGameBoard';
import Overlay from '../Overlay';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Result = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: lightgray;
  padding: 18px;
`

const GameBoard = ({ initialCards, onReady, onRestart }) => {
  const {
    cards,
    handleCardClick,
    isReady,
    nrOfPairs,
    nrOfTurns
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
      <Result>{nrOfPairs} / {nrOfTurns}</Result>
      {isReady && (
        <Overlay>
          <h3>Gratulálunk!</h3>
          <p>{nrOfTurns} forgatásból megtaláltál {nrOfPairs} párt.</p>
          <br />
          <button onClick={onRestart}>Újrakezdem</button>
        </Overlay>
      )}    
    </>
  )
}

export default GameBoard
