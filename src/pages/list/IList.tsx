import IArticle from "../../components/article/IArticle";

export interface IListProps {} 

export interface IListState {
  articlesArr: IArticle[][]
  active: number
} 