//https://dev.to/elecweb/remove-outline-when-click-but-keep-it-when-tab-in-react-3fe5

import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const A11Wrap = styled.div`
  ${({ $isTabbing }) => $isTabbing ? `
    *:focus {
      outline: 0;
      box-shadow: 0 0 4px 2px #13293f;
    }
  ` : `
    outline: 0;
  `}
`

const Accessibility = ({ children }) => {
  const [isTabbing, setIsTabbing] = useState(false)

  const handleFirstTab = event => {
    if (event.keyCode === 9) {
      setIsTabbing(true)
      window.removeEventListener('keydown', handleFirstTab);
    }
  }

  const handleClick = () => {
    setIsTabbing(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('click', handleClick);
    };
  });
  
  return (
    <A11Wrap $isTabbing={isTabbing}>
      {children}
    </A11Wrap>
  )
}

export default Accessibility
