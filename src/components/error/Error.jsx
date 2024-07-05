import React from 'react'
import { Alert } from "antd";
import styles from './Error.module.css'
const Error = () => {
  return (
    <Alert
    className={styles.root}
    message="Error"
    type="error"
    closable
    onClose={onClose}
    description={description}
  />
  )
}

export default Error