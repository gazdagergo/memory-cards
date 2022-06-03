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
        <Group>
        <Card radius="xl" shadow="sm" p="lg">
          <Group style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <ActionIcon color="grape" size="lg" radius="lg" variant="filled">
              <Bus />
            </ActionIcon>          
            <Text weight={500}>Közlekedés</Text>
          </Group>
          <Group direction="column">
            <Text>utak</Text>
            <Text>megállók</Text>
            <Text>közösségi közlekedés</Text>
            <Text>biciklik</Text>
          </Group>
        </Card>
        <Card radius="xl" shadow="sm" p="lg">
          <Group style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <ActionIcon color="grape" size="lg" radius="lg" variant="filled">
              <Bus />
            </ActionIcon>          
            <Text weight={500}>Közlekedés</Text>
          </Group>
          <Group direction="column">
            <Text>utak</Text>
            <Text>megállók</Text>
            <Text>közösségi közlekedés</Text>
            <Text>biciklik</Text>
          </Group>
        </Card>
        </Group>
      </Container>
    </AppShell>
  )
}
