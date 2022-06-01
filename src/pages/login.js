import React, { useContext } from "react"
import MyInput from "../components/UI/input/my-input"
import MyButton from "../components/UI/button/my-button"
import { AuthContext } from "../context"

function Login() {
  const { setIsAuth } = useContext(AuthContext)
  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem("auth", true)
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
