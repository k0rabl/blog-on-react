import { RouteComponentProps } from "react-router-dom";

export interface ICalendarState {
  dateValue: string
}

interface IMapProps {
  setActive: Function
}

export type IProps = RouteComponentProps<{}> & IMapProps