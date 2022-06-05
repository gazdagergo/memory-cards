
import {
  AppShell,
  Header,
  Container,
  Group,
} from '@mantine/core';
import FlipCard from '../FlipCard';
import useGameBoard from './useGameBoard';

const GameBoard = ({ initialCards }) => {
  
  const {
    cards,
    handleCardClick,
  } = useGameBoard({ initialCards })

  return (
    <AppShell
      padding="md"
      header={<Header
        style={{
          backgroundColor: '#1E2634'
        }}
        height={60}
        p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colors.gray[0] },
      })}
    >
      <Container size={1100}>
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
      </Container>
    </AppShell>
  )
}

export default GameBoard
