import IArticle from "../article/IArticle";

export interface ISearchProps {
  handleFilterString: Function
  handleDrop: Function
}

export interface ISearchState {
  searchValue: string
}