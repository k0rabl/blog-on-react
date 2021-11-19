import { IProps } from "./IModal"

import './Modal.sass'

export const Modal = ({onAccept, onClose, type, opened}: IProps ) => {
  
  const handleClick = (type: string) => {
    type === 'close'
      ? onClose()
      : onAccept()
  }

  return(
    <div className={`modalC ${opened && 'opened'}`}>
      <div className="modalC__content">
        <h6 className="modalC__title">{type === 'delete' ? 'Delete' : 'Exit'}</h6>
        <p className="modalC__text">
          {
            type === 'delete' 
              ? 'You realy want to delete this article?' 
              : 'You realy want exit from edit-mode?'
          }
        </p>
        <div className="modalC__buttons buttons">
            <button 
              onClick={() => handleClick('close')} 
              className="waves-effect waves-light redC-bg lighten-3 btn btn__no button-second"
              >
                No, Thanks
            </button>
            <button
                onClick={() => handleClick('accept')}
                className="waves-effect waves-light redC-bg lighten-3 btn btn__exit  button-primary"
            >
                Exit
            </button>
        </div>    
      </div>
    </div>
  )
}