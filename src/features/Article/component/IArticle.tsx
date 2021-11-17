export default interface IArticle {
  id: number
  name: String
  image?: Object
  preview?: String
  desc: String
  isRead: Boolean
  date: string
}

interface IProps {
  editMode?: Boolean
  articles: IArticle[]
  handleDeleteElement: Function
}

export type ArticleProps = IArticle & IProps