import { useEffect, useState } from 'react'

const topoCard = [
  {
    id: 1,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 2,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 3,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 4,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 5,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 6,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 7,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 8,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },

  {
    id: 9,
    img: 'https://play-lh.googleusercontent.com/EKij6N21p0aMFFl8u461yMfNUbrf38zfINfKdCykDEUSvoBL36roJyPI4s4Yu7Xys60',
    imgBang: '',
    show: false,
  },
]
const Topos = () => {
  const [board, setBoard] = useState(topoCard)
  const [posTopo, setPosTopo] = useState(0)
  const [contTopos, setContTopos] = useState(0)

  const click = (elem, pos) => {
    const newBoard = JSON.parse(JSON.stringify(board))
    newBoard[pos].show === false ? (newBoard[pos].show = true) : (newBoard[pos].show = false)
    setBoard(newBoard)
    setContTopos(contTopos + 1)
    console.log(posTopo)
  }

  useEffect(() => {
    const timerTopo = setInterval(() => {
      setPosTopo(Math.floor(Math.random() * 9))
    }, 2000)

    const timer = setInterval(() => {
      setBoard((prevNewTopos) => {
        const newTopos = [...prevNewTopos]
        newTopos[posTopo].show === false
          ? (newTopos[posTopo].show = true)
          : (newTopos[posTopo].show = false)
        return newTopos
      }, 2000)

      return () => {
        clearInterval(timer)
        clearInterval(timerTopo)
      }
    })
  }, [])

  return (
    <>
      <div>
        <h1>Elige tu dificultad mamaguevo</h1>
        <br />
        <button>EZ ZZZZ</button>
        <button>LVL GOD</button>
      </div>

      <div className="topoCards">
        {board.map((elem, pos) => {
          return (
            <div key={elem.id} onClick={() => click(elem, pos)}>
              <img
                width="150px"
                src={pos === posTopo && elem.show === false ? elem.img : elem.imgBang}
                alt=""
              />
            </div>
          )
        })}
      </div>
      <div>
        <h2>Vergueaste a {contTopos} Topos</h2>
      </div>
    </>
  )
}

export default Topos
