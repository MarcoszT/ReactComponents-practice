import { useState } from 'react'

const Galery = () => {
  const data = [
    {
      id: 0,
      img: 'https://picsum.photos/500/300',
      nombre: 'imagen1',
    },

    {
      id: 1,
      img: 'https://picsum.photos/600/400',
      nombre: 'imagen2',
    },

    {
      id: 2,
      img: 'https://picsum.photos/500/500',
      nombre: 'imagen3',
    },

    {
      id: 3,
      img: 'https://picsum.photos/500/400',
      nombre: 'imagen4',
    },

    {
      id: 4,
      img: 'https://picsum.photos/500/600',
      nombre: 'imagen5',
    },
  ]
  const [image, setImage] = useState(data[0].img)

  console.log(data)

  return (
    <>
      <div className="mainPhoto">
        <img src={image} alt="imagen" />
      </div>
      {data.map((elem) => {
        return (
          <div key={elem.id}>
            <div
              onClick={() => {
                setImage(elem.img)
              }}
            >
              <img width="500" height="300" src={elem.img} alt="imagen" />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Galery
