import { useState } from 'react'

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    user: '',
    password: '',
  })
  const [showLoader, setShowLoader] = useState(false)

  return (
    <div>
      HOLA LOGIN
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(userInfo)
          setShowLoader(true)
        }}
      >
        <input
          name="user"
          value={userInfo.user}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              user: e.target.value,
            })
          }
        />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        />

        <button type="submit">Send</button>
        <br />
        {showLoader && (
          <img
            width="250px"
            alt=""
            src="https://media.tenor.com/_rqNDp-2hOYAAAAC/loading-loading-gif.gif"
          />
        )}
      </form>
    </div>
  )
}

export default Login
