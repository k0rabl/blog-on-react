import React, { Component } from 'react'
import IArticle from './IArticle'

import './Article.sass'
import { Link } from 'react-router-dom'

class Article extends Component<IArticle> {

  render() {
    const { id, date, name, desc, isRead } = this.props
    
    return (
      <Link to={`/${id}`} className="link articleLink">
        <div className="container article">
          <div className="top">
            <div className={`title ${isRead && 'read'}`}>{name}</div>
            <div className="date">{date}</div>
          </div>
          <div className="bottom">
            <div className="image"></div>
            <div className="descr">{desc}</div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Article