import React from "react"
import MyInput from "../components/UI/input/my-input"
import MyButton from "../components/UI/button/my-button"

function Login() {
  return (
    <div>
      <h1>Страница для логина</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
