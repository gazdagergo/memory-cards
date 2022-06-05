import { nanoid } from 'nanoid/non-secure'
import axios from 'axios';
import getShuffledArray from '../functions/getShuffledArray'
import GameBoard from '../components/GameBoard';
import Layout from '../components/layout';
import { useRef, useEffect } from 'react'

const Home = ({ cards: initialCards }) => {
  const catSound = useRef(null);

  useEffect(() => {
    catSound.current = new Audio('/meow.mp3')
  }, [])

  const handleReady = () => {
    catSound.current.play()
  }

  return (
    <Layout>
      <GameBoard initialCards={initialCards} onReady={handleReady} />
    </Layout>
  )
}

export default Home

export const getServerSideProps = async () => {
  axios.defaults.headers.common['x-api-key'] = process.env.API_KEY

  const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 9, size: 'med' } } )
  
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
