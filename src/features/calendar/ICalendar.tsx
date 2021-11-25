import { RouteChildrenProps } from "react-router-dom"

interface ICalendarProps  {
  handleDrop: Function
}


export interface ICalendarState {
  dateValue: string
}

export type IProps = RouteChildrenProps<{}> & ICalendarProps