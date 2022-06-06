import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10vh);
  }

  80% {
    opacity: 0;
    transform: translateY(-10vh);
  }

  100% {
    opacity: 1;
    transform: translateY(0) ;
  }
`

const Overlay = styled.div`
  position: fixed;
  background: #FFFFFF88;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 2s forwards;

  button {
    font-size: 28px;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    background: #2980b9;
    color: white;
    animation: ${slideIn} 2s forwards;

    &:hover {
      background: #3388b9;
    }
  }
`

export default Overlay
