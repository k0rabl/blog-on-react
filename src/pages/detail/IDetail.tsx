import { RouteComponentProps } from "react-router-dom";
import IArticle from "../../features/Article/component/IArticle";

interface IProps {
  id: string
}

interface IReduxProps {
  articles: IArticle[]
  editMode: Boolean
  handleRead: Function
  handleEditElement: Function
  handleAddElement: Function
}

export interface IState {
  article: IArticle
}

export type Props = RouteComponentProps<IProps> & IReduxProps;
