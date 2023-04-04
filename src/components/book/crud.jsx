import { useEffect, useState } from 'react'

const DetailCrud = ({ libro: { title, author, isbn, descripcion } }) => {
  return (
    <>
      <div>
        <div></div>
        <p>{title}</p>
        <p>{author}</p>
        <p>{isbn}</p>
        <p>{descripcion}</p>
      </div>
    </>
  )
}

const FormCrud = ({ setStep }) => {
  const clickSave = (e) => {
    e.preventDefault()
    const item = {
      title: e.target.title.value,
      author: e.target.author.value,
      isbn: e.target.isbn.value,
      description: e.target.descripcion.value,
    }
    fetch('https://02ae-181-65-18-100.sa.ngrok.io/api/books', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) =>
        res.status === 201 ? setStep('list') : alert('NO SE PUDO AGREGAR EL LIBRO')
      )
      .catch((error) => console.log(error))
  }

  return (
    <article className="formContainer">
      <form onSubmit={clickSave}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="Author" />
        <input type="text" name="isbn" placeholder="Isbn" />
        <textarea
          name="descripcion"
          id=""
          cols="30"
          rows="10"
          placeholder="descripcion"
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </article>
  )
}

const ListCrud = ({ libro, onBookClick, loadBook }) => {
  const bookClick = (elem) => {
    onBookClick(elem)
  }
  const remove = (item) => {
    fetch('https://02ae-181-65-18-100.sa.ngrok.io/api/books/' + item._id, {
      method: 'DELETE',
    }).then((res) => {
      alert('SE ELIMINO EL LIBRO')
      loadBook()
    })
  }
  return (
    <div className="maincontainer">
      {libro.map((elem) => {
        return (
          <div className="listContainer">
            <div key={elem.id}>
              <p onClick={() => bookClick(elem)}>{elem.title}</p>
              <p>{elem.isbn}</p>
              <p>{elem.author}</p>
            </div>
            <div>
              <button>Editar</button>
              <button onClick={() => remove(elem)}>Eliminar</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Crud = () => {
  const [step, setStep] = useState('list')
  const [booksData, setBooksData] = useState([])
  const [selectedBook, setSelectedBook] = useState({})

  const loadBook = () => {
    fetch('https://02ae-181-65-18-100.sa.ngrok.io/api/books')
      .then((res) => res.json())
      .then(({ data }) => setBooksData(data))
  }
  useEffect(() => {
    loadBook()
  }, [step])

  const onBookClick = (elem) => {
    setSelectedBook(elem)
    setStep('detail')
  }

  // const registroLibro = (item) => {
  //   const newBooks = JSON.parse(JSON.stringify(booksData))
  //   newBooks.push(item)
  //   setBooksData(newBooks)
  //   setStep('list')
  // }

  // console.log(selectedBook, step)
  return (
    <div className="booksContainer">
      <div>
        <h1>Lista de Libros</h1>
        <button onClick={() => setStep('form')}>Agregar Libro</button>
      </div>
      <br />
      <div>
        {step === 'list' ? (
          <ListCrud libro={booksData} onBookClick={onBookClick} loadBook={loadBook} />
        ) : step === 'form' ? (
          <FormCrud setStep={setStep} />
        ) : (
          <DetailCrud libro={selectedBook} />
        )}
      </div>
    </div>
  )
}
export default Crud
