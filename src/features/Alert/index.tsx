import { useContext, useEffect } from 'react'
import AlertContext from '../../context/AlertContext'

import './Alert.sass'

export const Alert = () => {
  const {isOpen, message, setOpen} = useContext(AlertContext)

  useEffect(() => {
    setTimeout(() => setOpen(false), 5000)
  }, [isOpen, setOpen])

  const active = isOpen ? 'active' : ''
  
  return (
    <div className={`alert ${active}`}>
      <div className="content">{message}</div>
      <div className="close"></div>
    </div>
  )
}
