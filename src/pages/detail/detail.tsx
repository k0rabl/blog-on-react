import React, { Component } from 'react'
import { withRouter } from "react-router"
import Articles from '../../fixtures/Articles';
import { Props, IState } from './IDetail';


class Detail extends Component<Props, IState> {

  constructor(props: Props){
    super(props)

    this.state = {
      article: Articles[0] // TODO:  Question! Don't forget!
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params

    Articles.forEach(element => {
      element?.id === Number(id) && this.setState({article: element})
    })
  }


  render() {
    const { article } = this.state   
    return(
      <div>
        <h1>{article.name}</h1>
        <p>{article.desc}</p>
        
        <p>{article.date}</p>

        <button  
          className="waves-effect waves-light redC-bg lighten-3 btn" 
          onClick={() => this.props.history.goBack()}
        >
          Back
        </button > 
      </div>
    )
  }
}

export default withRouter(Detail)