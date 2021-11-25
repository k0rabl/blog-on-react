export default interface IArticle {
  id: number
  name: string
  image?: string
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
  handleDeleteElement: Function
}

export type ArticleProps = IArticle & IProps