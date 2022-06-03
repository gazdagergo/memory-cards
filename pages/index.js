import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure'
import Head from 'next/head'

import {
  AppShell,
  Header,
  Container,
  Card,
  Group,
  useMantineTheme,
} from '@mantine/core';
import FlipCard from '../components/FlipCard';


export default function Home() {
  const theme = useMantineTheme();


  const [cards, setCards] = useState(Array(10).fill('a').map(() => ({
    id: nanoid(),
    visible: false
  })))

  const handleCardClick = (id) => {
    setCards(prevCards => prevCards.map(card => {
      if (card.id === id){
        return {
          ...card,
          visible: !card.visible
        }
      }
      return card
    }))
  }  

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
          {cards.map(({ id, visible }) => (
            <FlipCard key={id} visible={visible} id={id} onClick={handleCardClick} />
          ))}
        </Group>
      </Container>
    </AppShell>
  )
}
