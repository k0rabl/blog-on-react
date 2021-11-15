import './Pagination.sass'

import { StoreProps } from './IPagination'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'

import { setActive, decrement, increment } from '../PaginationSlice'


const Pagination = (props: StoreProps) => {

  const active = useAppSelector((state) => state.pagination.active)
  const dispatch = useAppDispatch()

  const createButtons = () => {
    const { amount } = props
    const buttonsArr = []

    for (let i: number = 1; i <= amount; i++){
      const layout = (
        <button
          key={i}
          onClick={() => dispatch(setActive(i))}
          className={`numberPage numberPage-${i} ${i === active ? 'active redC-bg': 'inactive'}`} 
        >
          {i}
        </button>
      )
      buttonsArr.push(layout)
    }

    return buttonsArr
  }   
  
  const handleArrow = (side: string) => {
    const { amount } = props

    if (active < amount && side === 'plus') 
      dispatch(increment())

    else if (active > 1 && side === 'minus') 
      dispatch(decrement())

  }
    
  return (
    <div className="pagination">
      <div className="pagination__container">
        <button className="numberPage prev" onClick={() => handleArrow('minus')}>prev</button>
        {createButtons()}
        <button className="numberPage next" onClick={() => handleArrow('plus')}>next</button>
      </div>
    </div>
  )
} 

export default Pagination