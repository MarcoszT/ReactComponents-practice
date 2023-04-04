import { useState } from 'react'

const Practice = () => {
  const [response, setResponse] = useState({
    x: undefined,
    y: undefined,
  })

  return (
    <>
      <div className="mainContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log(response)
            console.log(parseInt(response.x) + parseInt(response.y))
          }}
        >
          <input
            type="number"
            value={response.x}
            onChange={(e) => setResponse({ ...response, x: e.target.value })}
          />
          <button type="submit">+</button>
          <br />
          <input
            type="number"
            value={response.y}
            onChange={(e) => setResponse({ ...response, y: e.target.value })}
          />
        </form>
      </div>
    </>
  )
}

export default Practice
