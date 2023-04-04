import { useState } from 'react'

const GaleriaDos = () => {
  const fotos = [
    {
      id: 0,
      img: 'https://picsum.photos/500/300',
    },

    {
      id: 0,
      img: 'https://picsum.photos/600/300',
    },

    {
      id: 0,
      img: 'https://picsum.photos/400/300',
    },

    {
      id: 0,
      img: 'https://picsum.photos/500/400',
    },
  ]
  // const [imagen, setImagen] = useState(fotos[0].img)
  const [show, setShow] = useState('')

  const click = (elem) => setShow(elem.img)
  return (
    <>
      {show != '' && (
        <div className="modal">
          <img src={show} alt="" />
          <div>
            <button onClick={() => setShow('')}>Cerrar</button>
          </div>
        </div>
      )}

      {fotos.map((elem) => {
        return (
          <div key={elem.id} onClick={() => click(elem)}>
            <img width="500px" height="300px" src={elem.img} alt="" />
          </div>
        )
      })}
    </>
  )
}
export default GaleriaDos
