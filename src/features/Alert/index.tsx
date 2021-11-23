import { useContext, useEffect } from 'react'
import AlertContext from '../../Context/AlertContext'

import './Alert.sass'

export const Alert = () => {
  const {isOpen, type, setOpen} = useContext(AlertContext)

  useEffect(() => {
    setTimeout(() => setOpen(false), 10000)
  }, [setOpen])

  
  return (
    <div className={`alert ${isOpen ? 'active' : ''}`}>
      <div className="content">
      {
        type === 'delete' 
          ? 'Listing is delete!' 
          : type === 'edit' 
            ? 'Lsiting is edit!'
            : type === 'create' 
              ? 'Lsiting is create!'
        : ''
      }
      </div>
      <div className="close"></div>
    </div>
  )
}
