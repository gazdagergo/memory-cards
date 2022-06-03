import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'

import {
  AppShell,
  Header,
  Container,
  Card,
  Group,
  useMantineTheme,
} from '@mantine/core';

const FlipCard = styled(Group)`
  // https://www.w3schools.com/howto/howto_css_flip_card.asp

  background-color: transparent;
  width: 160px;
  height: 160px;
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  ${({ visible }) => visible ? `
    .flip-card-inner {
      transform: rotateY(180deg);
    }` : ``}

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
`

export default function Home() {
  const theme = useMantineTheme();

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
          {Array(8).fill('a').map((_, i) => (
            <FlipCard visible={i}>
              <div class="flip-card-inner">
                <div class="flip-card-front">
                <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  width={160}
                  height={160}
                  alt="Norway"
                />
                </div>
                <div class="flip-card-back" />
              </div>
            </FlipCard>            
          ))}
        </Group>
      </Container>
    </AppShell>
  )
}
