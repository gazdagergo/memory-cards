import styled from '@emotion/styled';
import {
  AppShell,
  Header,
  Container,
} from '@mantine/core';
import Image from 'next/image';
import catLogo from '../../public/cat.svg'

const HeaderStyled = styled(Header)`
  background-color: #1E2634;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoText = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-left: 8px;
`

const Layout = ({ children }) => {
  return (
    <AppShell
    padding="md"
    header={<HeaderStyled
      height={60}
      p="xs">
        <Image src={catLogo} width={30} height={30} />
        <LogoText>MemoCat</LogoText>
      </HeaderStyled>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colors.gray[0] },
    })}
    >
      <Container size={1100} style={{ minHeight: 'calc(100vh - 92px)' }}>
        {children}
      </Container>
    </AppShell>
  )
}

export default Layout
