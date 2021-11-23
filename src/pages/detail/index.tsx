import React, { ChangeEvent, Component } from 'react'
import { withRouter } from "react-router"
import { Props, IState } from './IDetail';

import './Detail.sass'
import { handleRead, handleEditElement, handleAddElement } from '../../features/Article/ArticleSlice';
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AlertContext from '../../AlertContext';

const today = new Date()



class Detail extends Component<Props, IState> {
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
        date: today.toDateString()
      }
    }
  }

  getBase64(file?: File, cb?: Function) {

    if (!file || !cb) return false

    if (file.size > 500000) {
      console.error('File size > 500kb');
      return false
      // TODO: Add alert
    } 
    
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

    this.getBase64(event.target.files?.[0], (result: string) => {
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

    articles.filter(element => element.id === article.id)
      ? handleEditElement(article)
      : handleAddElement(article)   

    setOpen(true)
    setType('edit')
      
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
              <input type="file" name="image" accept="image/jpeg"  onChange={this.handleAddFile}/>      
              
              <img src={image} alt="" />
              <input className="input input__name" type="text" name="name" value={name} onChange={this.handleChange}/>
              <textarea className="input input__desc" name="desc" value={desc} onChange={this.handleChange}/>
            </> 
            : <>
              <h1>{name}</h1>
              <img src={image} alt="" />
              <p className="desc">{desc}</p>
            </>
        }

        <p className="date">{date}</p>

        <div className="buttons">
         
          <button  
            className="waves-effect waves-light redC lighten-3 btn button-second" 
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
  articles: state.search.filteredArticles,
  editMode: state.edit.editMode
})

const mapDispatchToProps = { handleRead, handleEditElement, handleAddElement }


export default compose<React.ComponentType<Props>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Detail)