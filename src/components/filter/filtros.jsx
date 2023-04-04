import { useState } from 'react'

const Filtros = () => {
  const fruits = [
    {
      id: 0,
      name: 'Apple',
    },

    {
      id: 1,
      name: 'PineApple',
    },

    {
      id: 2,
      name: 'Orange',
    },

    {
      id: 3,
      name: 'Watermelon',
    },

    {
      id: 4,
      name: 'Banana',
    },
  ]
  const [search, setSearch] = useState('')
  const buscar = (e) => setSearch(e.target.value)
  const filtered = fruits.filter((elem) => elem.name.toLowerCase().includes(search))

  return (
    <>
      <div className="maincontainer">
        <div>
          <label htmlFor="buscador">Buscar: </label>
          <input type="text" name="buscador" onChange={buscar} value={search} />
        </div>
        {filtered.map((elem) => {
          return (
            <ul key={elem.id}>
              <li>{elem.name}</li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default Filtros
