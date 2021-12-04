import React, { ChangeEvent, Component } from 'react'
import { withRouter } from "react-router"
import { Props, IState } from './IDetail'

import { handleRead, handleEditElement, handleAddElement } from '../../features/Article/ArticleSlice'
import { RootState } from '../../redux/store'
import { connect } from 'react-redux'
import { compose } from 'redux'
import AlertContext from '../../Context/AlertContext'
import './Detail.sass'

const today = new Date()



export class Detail extends Component<Props, IState> {
  static contextType = AlertContext

  constructor(props: Props){
    super(props)

    this.state = {
      article: {
        id: NaN,
        name: '',
        image: '',
        preview: '',
        desc: '',
        isRead: false,
        date: today.toISOString().split('T')[0]
      }
    }
  }

  getBase64(file?: File, cb?: Function) {
    if (!file || !cb) return false
    
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };

    reader.onerror = function (error) {
        console.log('Error: ', error);
    };

  }

  componentDidMount(){
    const { article } = this.state
    const { id } = this.props.match.params
    const { articles, handleRead } = this.props
  
    if (!id)
      return this.setState({
        article: {
          ...article,
          id: articles[articles.length-1].id + 1
        }
      })
    

    articles.forEach(element => {
      element?.id === Number(id) && this.setState({article: element})
    })

    handleRead(Number(id))
  }

  handleAddFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { article } = this.state 
    const file = event.target.files?.[0]
    
    if (file && file.size > 500000) {
      const { setOpen, setType } = this.context 
      
      setOpen(true)
      setType('FIle size is over 500kb, please try less file size')

      return false
    } 

    this.getBase64(file, (result: string) => {
         this.setState({
          article: {
            ...article,
            image: result
          }
        })
    });
  }


  handleChange = (event: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>) => {
    const { article } = this.state 

    this.setState({
      article: {
        ...article,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSave = () => {
    const { article } = this.state
    const { handleEditElement, handleAddElement, history, articles } = this.props 
    const { setOpen, setType } = this.context 

    articles.some(element => element.id === article.id)
      ? handleEditElement(article)
      : handleAddElement(article)   

    setOpen(true)
    setType('Lsiting is edit!')
      
    history.goBack()
  }

  render() {
    const { article: {name, desc, date, image} } = this.state   
    const { editMode } = this.props

    return(
      <div className="detail">
        {
          editMode  
            ? <>        
              <div className="addImage">
                <input id="file" type="file" name="image" accept="image/jpeg"  onChange={this.handleAddFile}/>      
                <img src={image} alt="" />
              </div>
              <input className="input input__name" type="text" name="name" value={name} onChange={this.handleChange}/>
              <textarea className="input input__desc" name="desc" value={desc} onChange={this.handleChange}/>
            </> 
            : <>
              <h1>{name}</h1>
              <img className="showImage" src={image} alt="" />
              <p className="desc">{desc}</p>
            </>
        }

        <p className="date">{date}</p>

        <div className="buttons">
         
          <button  
            className="waves-effect waves-light redC lighten-3 btn button-second " 
            onClick={this.props.history.goBack}
          >
            Back
          </button >

          {editMode && 
            <button  
              className="waves-effect waves-light redC-bg lighten-3 btn button-primary" 
              onClick={this.handleSave}
            >
              Save
            </button > 
          } 
        </div>
       
      </div>
    )
  }
}


const mapStateToProps = (state: RootState) => ({
  articles: state.search.articles,
  editMode: state.edit.editMode
})

const mapDispatchToProps = { handleRead, handleEditElement, handleAddElement }


export default compose<React.ComponentType<Props>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Detail)