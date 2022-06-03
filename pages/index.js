import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link';
import { Button } from '@mantine/core';
import {
  AppShell,
  Header,
  Badge,
  Container,
  Card,
  Group,
  Grid,
  useMantineTheme,
  Text,
  ActionIcon,
} from '@mantine/core';
import { Bus } from 'tabler-icons-react';



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
        <Grid>
          <Grid.Col span={4}>1</Grid.Col>
          <Grid.Col span={4}>2</Grid.Col>
          <Grid.Col span={4}>3</Grid.Col>
        </Grid>
      </Container>
    </AppShell>
  )
}
