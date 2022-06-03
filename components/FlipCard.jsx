import Image from 'next/image'
import styled from '@emotion/styled'

const FlipCardWrap = styled.div`
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

${({ flipped }) => flipped ? `
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

const FlipCard = ({ visible, onClick, id, ...rest }) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <FlipCardWrap flipped={!visible} onClick={handleClick} {...rest}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            width={160}
            height={160}
            alt="Norway"
          />
        </div>
        <div className="flip-card-back" />
      </div>
    </FlipCardWrap>   
  )
}

export default FlipCard
