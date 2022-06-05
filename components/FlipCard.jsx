import Image from 'next/image'
import styled from '@emotion/styled'

const FlipCardWrap = styled.div`
// https://www.w3schools.com/howto/howto_css_flip_card.asp

background-color: transparent;
width: 160px;
height: 160px;
perspective: 1000px;
cursor: pointer;
transition: opacity 0.3s;

&:hover {
  opacity: .85;
}


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

const FlipCard = ({
  id,
  onClick,
  src,
  visible,
  imgId,
  ...rest
}) => {
  const handleClick = () => {
    onClick({ id, imgId })
  }

  return (
    <FlipCardWrap flipped={!visible} onClick={handleClick} {...rest}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image
            src={src}
            width={160}
            height={160}
            layout="responsive"
          />
        </div>
        <div className="flip-card-back" />
      </div>
    </FlipCardWrap>   
  )
}

export default FlipCard
