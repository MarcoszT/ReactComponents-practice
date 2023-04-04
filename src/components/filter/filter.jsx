import { useState } from 'react'

const Filter = () => {
  const fruits = [
    {
      id: 0,
      name: 'Manzana',
    },

    {
      id: 1,
      name: 'Piña',
    },

    {
      id: 2,
      name: 'Fresa',
    },

    {
      id: 3,
      name: 'Sandia',
    },

    {
      id: 4,
      name: 'Palta',
    },
  ]
  const [token, setToken] = useState('')

  const handleType = (e) => {
    setToken(e.target.value)
  }
  const filtered = fruits.filter((elem) =>
    elem.name.toLowerCase().includes(token.toLowerCase())
  )

  return (
    <>
      <div className="maincontainer">
        <div>
          <label htmlFor="search">Search: </label>
          <input type="text" name="search" onChange={handleType} value={token} />
        </div>
        {filtered.map((elem) => {
          return (
            <div key={elem.id}>
              <ul>
                <li>{elem.name}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Filter
