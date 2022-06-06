import { nanoid } from 'nanoid/non-secure'
import { useRouter } from 'next/router'
import axios from 'axios';
import getShuffledArray from '../functions/getShuffledArray'
import GameBoard from '../components/GameBoard';
import Layout from '../components/Layout';
import { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  background: #FFFFFF88;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 28px;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    background: #2980b9;
    color: white;

    &:hover {
      background: #3388b9;
    }
  }
`

const Home = ({ cards: initialCards }) => {
  const catSound = useRef(null);
  const [isReady, setIsready] = useState(false)
  const router = useRouter()

  useEffect(() => {
    catSound.current = new Audio('/meow.mp3')
  }, [])

  const handleReady = () => {
    catSound.current.play()
    setIsready(true)
  }

  const handleRestartClick = () => {
    router.reload(window.location.pathname)
  }

  return (
    <Layout>
      <GameBoard initialCards={initialCards} onReady={handleReady} />
      {isReady && <Overlay><button onClick={handleRestartClick}>Újrakezdem</button></Overlay>}
    </Layout>
  )
}

export default Home

export const getServerSideProps = async () => {
  axios.defaults.headers.common['x-api-key'] = process.env.API_KEY

  const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 9, size: 'thumb' } } )
  
  const cards = data.reduce((acc, { id, url }) => {
    return [
      ...acc,
      {
        id: nanoid(),
        imgId: id,
        url,
        visible: false
      },
      {
        id: nanoid(),
        imgId: id,
        url,
        visible: false
      }      
    ]
  }, [])

  return {
    props: {
      cards: getShuffledArray(cards)
    }
  }
}
