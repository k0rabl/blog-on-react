import { RouteComponentProps } from "react-router-dom";

export interface ISearchState {
  searchValue: string
}

interface IMapProps {
  setActive: Function
}

export type IProps = RouteComponentProps<{}> & IMapProps