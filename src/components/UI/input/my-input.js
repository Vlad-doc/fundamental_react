import React from "react"
import classes from "./my-input.module.css"

function MyInput(props) {
  return <input {...props} className={classes.myInput} />
}

export default MyInput
