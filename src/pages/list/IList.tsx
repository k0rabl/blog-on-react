import IArticle from "../../components/article/IArticle";

export interface IListProps {
  active: number
  articles: IArticle[]
} 

export interface IListState {
  articlesArr: IArticle[][]
} 