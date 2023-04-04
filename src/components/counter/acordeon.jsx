import { useState } from 'react'

const data = [
  {
    id: 0,
    title: 'pregunta 1',
    body: `SOLO ES TEXTO PARA LA PREGUNTA 1, YA NECESITO DOTO`,
  },

  {
    id: 1,
    title: 'pregunta 2',
    body: `SOLO ES TEXTO PARA LA PREGUNTA 2, YA NECESITO DOTO`,
  },

  {
    id: 2,
    title: 'pregunta 3',
    body: `SOLO ES TEXTO PARA LA PREGUNTA 3, YA NECESITO DOTO`,
  },
]
const Acordeon = () => {
  const [selected, setSelected] = useState(-1)

  return (
    <>
      {data.map((response) => {
        return (
          <div className="maincontainer" key={response.id}>
            <div
              className="acordeon"
              onClick={() => {
                if (selected == -1) {
                  setSelected(response.id)
                } else setSelected(-1)
              }}
            >
              <h3>{response.title}</h3>
              <img
                width="20px"
                height="20px"
                src={
                  !(selected == response.id)
                    ? 'https://cdn.icon-icons.com/icons2/1673/PNG/512/arrowiosdownwardoutline_110713.png'
                    : 'https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosupward  _111059.png'
                }
                alt=""
              />
            </div>
            {selected == response.id && (
              <div>
                <p>{response.body}</p>
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}
export default Acordeon
