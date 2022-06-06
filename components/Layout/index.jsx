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

`

const HeaderInner = styled.div`
  max-width: 1072px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const LogoText = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-left: 8px;

  sup {
    font-size: .4em;
    font-weight: normal;
    margin-left: 3px;
  }
`

const Layout = ({ children, headerChildren }) => {
  return (
    <AppShell
    padding="md"
    header={<HeaderStyled
      height={60}
      p="xs">
        <HeaderInner>
          <Image src={catLogo} width={30} height={30} />
          <LogoText>MemoCat<sup>TM</sup></LogoText>
          {headerChildren}
        </HeaderInner>
      </HeaderStyled>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colors.gray[0] },
    })}
    >
      <Container size={1072} style={{ minHeight: 'calc(100vh - 92px)' }}>
        {children}
      </Container>
    </AppShell>
  )
}

export default Layout
