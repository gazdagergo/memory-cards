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
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSI2MC42OTggMTU3LjI2MSA3My43MjggNzMuOTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDcyLjU2NzY0MiwgMTY5LjI2MTM2OCkiPgogICAgPHBhdGggZD0iTTQ5LjU2NSwwLjI5MmMtMC4yNzQtMC4yNzMtMC42ODItMC4zNjMtMS4wNDQtMC4yMzRMMzUuOTQ4LDQuNTY1QzMyLjYxNCwyLjg3OCwyOC44OCwxLjk4OSwyNS4xMiwxLjk4OSBjLTMuOCwwLTcuNTcsMC45MDgtMTAuOTMzLDIuNjI5bC0xMi43Mi00LjU2Yy0wLjM2My0wLjEyOS0wLjc3LTAuMDM5LTEuMDQ0LDAuMjM0QzAuMTUsMC41NjYsMC4wNTksMC45NzMsMC4xODksMS4zMzcgbDQuMzg3LDEyLjIzN0MyLjMxMywxNy4zMTIsMS4xMiwyMS41OTMsMS4xMiwyNS45ODljMCwxMy4yMzMsMTAuNzY2LDI0LDI0LDI0YzEzLjIzMywwLDI0LTEwLjc2NywyNC0yNCBjMC00LjUwMy0xLjI0OS04Ljg3My0zLjYxNS0xMi42NzJMNDkuOCwxLjMzN0M0OS45MywwLjk3Myw0OS44MzksMC41NjYsNDkuNTY1LDAuMjkyeiBNNDMuNDU3LDEzLjEwMyBjLTAuMTA1LDAuMjk1LTAuMDY3LDAuNjIyLDAuMTA0LDAuODg0YzIuMzI4LDMuNTcsMy41NTksNy43MjEsMy41NTksMTIuMDAyYzAsMTIuMTMxLTkuODY5LDIyLTIyLDIycy0yMi05Ljg2OS0yMi0yMiBjMC00LjE4MSwxLjE3Ny04LjI0OCwzLjQwNS0xMS43NjNjMC4xNjUtMC4yNjEsMC4yMDEtMC41ODIsMC4wOTctMC44NzNMMi43ODYsMi42NTZsMTEuMTQsMy45OTMgYzAuMjY3LDAuMDk1LDAuNTYxLDAuMDczLDAuODEtMC4wNjFjMy4xNzEtMS43LDYuNzYyLTIuNiwxMC4zODQtMi42YzMuNTg0LDAsNy4xNDIsMC44ODEsMTAuMjg3LDIuNTQ5IGMwLjI0OCwwLjEzMiwwLjU0MSwwLjE1MiwwLjgwNiwwLjA1OGwxMC45OS0zLjk0TDQzLjQ1NywxMy4xMDN6IiBzdHlsZT0iZmlsbDogcmdiKDE3NiwgMjA5LCAyMzYpOyIvPgogICAgPGNpcmNsZSBjeD0iMTYuMTMiIGN5PSIyMS45OTkiIHI9IjIiIHN0eWxlPSJmaWxsOiByZ2IoMTc2LCAyMDksIDIzNik7Ii8+CiAgICA8Y2lyY2xlIGN4PSIzNC4xMyIgY3k9IjIxLjk5OSIgcj0iMiIgc3R5bGU9ImZpbGw6IHJnYigxNzYsIDIwOSwgMjM2KTsiLz4KICAgIDxwYXRoIGQ9Ik0zNC4xMywzMy45OTljMCwyLjIwNi0xLjc5NCw0LTQsNHMtNC0xLjc5NC00LTR2LTAuMDgxYzIuMjc5LTAuMzcyLDQtMS45ODcsNC0zLjkxOWMwLTIuMjA2LTIuMjQzLTQtNS00cy01LDEuNzk0LTUsNCBjMCwxLjkzMiwxLjcyMSwzLjU0Nyw0LDMuOTE5djAuMDgxYzAsMi4yMDYtMS43OTQsNC00LDRzLTQtMS43OTQtNC00di0xaC0ydjFjMCwzLjMwOSwyLjY5MSw2LDYsNmMyLjA4NiwwLDMuOTI0LTEuMDcxLDUtMi42OSBjMS4wNzYsMS42MiwyLjkxNCwyLjY5LDUsMi42OWMzLjMwOSwwLDYtMi42OTEsNi02di0xaC0yVjMzLjk5OXogTTIyLjEzLDI5Ljk5OWMwLTEuMDg0LDEuMzc0LTIsMy0yczMsMC45MTYsMywycy0xLjM3NCwyLTMsMiBTMjIuMTMsMzEuMDgzLDIyLjEzLDI5Ljk5OXoiIHN0eWxlPSJmaWxsOiByZ2IoMTc2LCAyMDksIDIzNik7Ii8+CiAgPC9nPgo8L3N2Zz4=');
  background-size: 32px 32px;
  background-repeat: repeat;
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
    onClick(id)
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
