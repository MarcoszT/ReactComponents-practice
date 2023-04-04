import { useEffect, useState } from 'react'

const Box = ({ elem, check }) => {
  return (
    <>
      <div
        key={elem.id}
        className={
          elem.checked === 'player1'
            ? 'player1'
            : elem.checked === 'player2'
            ? 'player2'
            : 'itemMichi'
        }
        onClick={check}
      ></div>
    </>
  )
}

const Michi = () => {
  const arrMichi = [
    [
      { id: 1, checked: null },
      { id: 2, checked: null },
      { id: 3, checked: null },
    ],
    [
      { id: 4, checked: null },
      { id: 5, checked: null },
      { id: 6, checked: null },
    ],
    [
      { id: 7, checked: null },
      { id: 8, checked: null },
      { id: 9, checked: null },
    ],
  ]

  const [player, setPlayer] = useState('player1')
  const [grilla, setGrilla] = useState(arrMichi)
  const [winner, setWinner] = useState('')

  const checkedPLayer = (i, j) => {
    const newMatrix = JSON.parse(JSON.stringify(grilla))
    if (newMatrix[i][j].checked === null) {
      newMatrix[i][j].checked = player
      setGrilla(newMatrix)
      player === 'player1' ? setPlayer('player2') : setPlayer('player1')

      // console.log(i, j, player, newMatrix)
    }
  }

  useEffect(() => {
    console.log(player)
    if (
      (grilla[0][0].checked === grilla[0][1].checked &&
        grilla[0][1].checked === grilla[0][2].checked &&
        grilla[0][0].checked != null) ||
      //
      (grilla[1][0].checked === grilla[1][1].checked &&
        grilla[1][1].checked === grilla[1][2].checked &&
        grilla[1][0].checked != null) ||
      //
      (grilla[2][0].checked === grilla[2][1].checked &&
        grilla[2][1].checked === grilla[2][2].checked &&
        grilla[2][0].checked != null) ||
      //
      (grilla[0][0].checked === grilla[1][0].checked &&
        grilla[1][0].checked === grilla[2][0].checked &&
        grilla[0][0].checked != null) ||
      //
      (grilla[0][1].checked === grilla[1][1].checked &&
        grilla[1][1].checked === grilla[2][1].checked &&
        grilla[0][1].checked != null) ||
      //
      (grilla[0][2].checked === grilla[1][2].checked &&
        grilla[1][2].checked === grilla[2][2].checked &&
        grilla[0][2].checked != null) ||
      //
      (grilla[0][0].checked === grilla[1][1].checked &&
        grilla[1][1].checked === grilla[2][2].checked &&
        grilla[0][0].checked != null) ||
      //
      (grilla[0][2].checked === grilla[1][1].checked &&
        grilla[1][1].checked === grilla[2][0].checked &&
        grilla[0][2].checked != null)
    ) {
      setWinner(player === 'player1' ? 'player2' : 'player1')
    }
  }, [grilla])

  useEffect(() => {
    if (winner != '') {
      alert('Gano: ' + winner)
    }
  }, [winner])

  return (
    <>
      <div className="mainMichi">
        {grilla.map((fila, i) => {
          return fila.map((element, j) => {
            return <Box elem={element} check={() => checkedPLayer(i, j)} />
          })
        })}
      </div>
    </>
  )
}
export default Michi
