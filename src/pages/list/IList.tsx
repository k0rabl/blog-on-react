import IArticle from "../../features/Article/component/IArticle";

export interface IListProps {
  active: number
  articles: IArticle[]
} 

export interface IListState {
  articlesArr: IArticle[][]
} 