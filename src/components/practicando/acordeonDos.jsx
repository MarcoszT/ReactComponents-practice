import { useState } from 'react'

const AcordeonDos = () => {
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
  const [show, setShow] = useState(-1)

  const onClick = (elem) => {
    if (show == elem.id) setShow(-1)
    else setShow(elem.id)
  }

  return (
    <>
      {data.map((elem) => {
        return (
          <div className="maincontainer" key={elem.id} onClick={() => onClick(elem)}>
            <div className="acordeon">
              <p>{elem.nombre}</p>
              <img
                width="20px"
                src="https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png"
                alt=""
              />
            </div>

            {show == elem.id && (
              <div>
                <p>{elem.text}</p>
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}
export default AcordeonDos
