import { useState } from 'react'

const Acordeon2 = () => {
  const data = [
    {
      id: 0,
      nombre: 'Marcos',
      edad: 18,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed quisquam aspernatur eveniet porro harum amet. Sint, voluptatibus quo. Impedit facilis est et unde incidunt sequi quis saepe nostrum obcaecati!',
    },

    {
      id: 1,
      nombre: 'Imanol',
      edad: 18,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed quisquam aspernatur eveniet porro harum amet. Sint, voluptatibus quo. Impedit facilis est et unde incidunt sequi quis saepe nostrum obcaecati!',
    },

    {
      id: 2,
      nombre: 'Solimar',
      edad: 18,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed quisquam aspernatur eveniet porro harum amet. Sint, voluptatibus quo. Impedit facilis est et unde incidunt sequi quis saepe nostrum obcaecati!',
    },
  ]

  const [cont, setCont] = useState(-1)

  return (
    <>
      {data.map((res) => {
        return (
          <div
            className="maincontainer"
            onClick={() => {
              if (cont == res.id) setCont(-1)
              else setCont(res.id)
            }}
          >
            <div className="acordeon">
              <p>{res.nombre}</p>
              <img
                width="20px"
                src="https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png"
                alt=""
              />
            </div>

            {cont == res.id && (
              <div>
                <p>{res.text}</p>
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}
export default Acordeon2
