import React from 'react'
import { Alert } from "antd";
import styles from './Error.module.css'
const Error = ({description}) => {
  return (
    <Alert
    className={styles.root}
    message="Error"
    type="error"  
    description={description}
  />
  )
}

export default Error