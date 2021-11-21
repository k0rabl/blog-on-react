export default interface IArticle {
  id: number
  name: string
  image?: Object
  preview?: string
  desc: string
  isRead: Boolean
  date: string
}

export interface IState {
  opened: Boolean
}

interface IProps {
  editMode?: Boolean
  articles: IArticle[]
  handleDeleteElement: Function
}

export type ArticleProps = IArticle & IProps