import { RouteComponentProps } from "react-router-dom";
import IArticle from "../../features/Article/component/IArticle";

interface IProps {
  id: string
}

export interface IState {
  article: IArticle
}

export type Props = RouteComponentProps<IProps>;
