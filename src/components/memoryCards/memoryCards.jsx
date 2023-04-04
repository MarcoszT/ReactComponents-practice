import { useEffect, useState } from 'react'

const cards = [
  {
    id: 1,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack: 'https://images7.memedroid.com/images/UPLOADED754/6124ec0fc23ec.jpeg',
    flipped: false,
  },
  {
    id: 2,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack: 'https://images7.memedroid.com/images/UPLOADED754/6124ec0fc23ec.jpeg',
    flipped: false,
  },
  {
    id: 3,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack: 'https://i.pinimg.com/originals/b6/7e/92/b67e9237c02ef6ebcf00c90797307b91.jpg',
    flipped: false,
  },
  {
    id: 4,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack: 'https://i.pinimg.com/originals/b6/7e/92/b67e9237c02ef6ebcf00c90797307b91.jpg',
    flipped: false,
  },
  {
    id: 5,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4h4brSqOSBTtLz4z6bUhOJXgLoJBVdNFl85WWyRiQQ3NPVgyAQZbTuQOpmxNFwiCLe4&usqp=CAU',
    flipped: false,
  },
  {
    id: 6,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4h4brSqOSBTtLz4z6bUhOJXgLoJBVdNFl85WWyRiQQ3NPVgyAQZbTuQOpmxNFwiCLe4&usqp=CAU',
    flipped: false,
  },
  {
    id: 7,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack: 'https://pbs.twimg.com/media/Dcm4OGJX0AAPkCe.jpg',
    flipped: false,
  },
  {
    id: 8,
    imgFront: 'https://i.pinimg.com/originals/3d/a3/9c/3da39cea425e1fc2b8c7b01d7b0d6c5c.png',
    imgBack: 'https://pbs.twimg.com/media/Dcm4OGJX0AAPkCe.jpg',
    flipped: false,
  },
]

const MemoryCards = () => {
  const [board, setBoard] = useState(cards)
  const [clicked, setClicked] = useState({
    x: '',
    xPos: null,
    y: '',
    yPos: null,
  })
  const [win, setWin] = useState('')

  const click = (elem, pos) => {
    if (clicked.xPos !== pos) {
      const newBoard = JSON.parse(JSON.stringify(board))
      newBoard[pos].flipped = true
      setBoard(newBoard)
      if (clicked.x === '') setClicked({ x: elem.imgBack, xPos: pos, y: '' })
      else if (clicked.x !== '') {
        setClicked({ ...clicked, y: elem.imgBack, yPos: pos })
      }
    }

    console.log(clicked)
  }

  useEffect(() => {
    if (clicked.x === clicked.y && clicked.x) {
      setClicked({ x: '', y: '' })
    } else if (clicked.x !== clicked.y && clicked.x && clicked.y) {
      setTimeout(() => {
        const newBoard = JSON.parse(JSON.stringify(board))
        newBoard[clicked.xPos].flipped = false
        newBoard[clicked.yPos].flipped = false
        setBoard(newBoard)
      }, 1000)

      setClicked({ x: '', y: '' })
    }
  }, [board])

  return (
    <>
      <div className="mainCards">
        {board.map((elem, pos) => {
          return (
            <div key={elem.id} onClick={() => click(elem, pos)}>
              <img
                height="300pc"
                src={elem.flipped === false ? elem.imgFront : elem.imgBack}
                alt=""
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MemoryCards
