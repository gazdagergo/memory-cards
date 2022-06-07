import { nanoid } from 'nanoid/non-secure'
import { useRouter } from 'next/router'
import axios from 'axios';
import getShuffledArray from '../functions/getShuffledArray'
import GameBoard from '../components/GameBoard';
import Layout from '../components/Layout';
import SizeSelector from '../components/SizeSelector'


const Home = ({ cards: initialCards, boardSize }) => {
  const router = useRouter()

  const handleRestartClick = () => {
    router.replace(router.asPath)
  }

  const handleSizeChange = ({ target: { value }}) => {
    router.replace(value)
  }

  return (
    <Layout headerChildren={(
      <SizeSelector
        value={boardSize}
        onChange={handleSizeChange}
      />
      )}>
      <GameBoard
        initialCards={initialCards}
        onRestart={handleRestartClick} />
    </Layout>
  )
}

export default Home

export const getServerSideProps = async ({ query }) => {
  let boardSize = parseInt(query.boardSize)

  if (boardSize % 2 !== 0) boardSize = 18

  axios.defaults.headers.common['x-api-key'] = process.env.API_KEY

  const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: boardSize / 2, size: 'thumb' } } )
  
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
      cards: getShuffledArray(cards),
      boardSize
    }
  }
}
