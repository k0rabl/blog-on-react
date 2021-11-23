import { useContext, useEffect } from 'react'
import AlertContext from '../../Context/AlertContext'

import './Alert.sass'

export const Alert = () => {
  const {isOpen, message, setOpen} = useContext(AlertContext)

  useEffect(() => {
    setTimeout(() => setOpen(false), 5000)
  }, [isOpen, setOpen])

  
  return (
    <div className={`alert ${isOpen ? 'active' : ''}`}>
      <div className="content">{message}</div>
      <div className="close"></div>
    </div>
  )
}
