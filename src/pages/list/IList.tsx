import { RouteComponentProps } from "react-router";
import IArticle from "../../features/Article/component/IArticle";

interface IListProps {
  active: number
  articles: IArticle[]
  filteredArticles: IArticle[]
} 

interface IMapProps {
  handleFilterDate: Function
  setActive: Function
}

export interface IListState {
  articlesArr: IArticle[][]
} 

export type IProps = RouteComponentProps & IListProps & IMapProps