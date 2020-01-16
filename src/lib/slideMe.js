import React from 'react'

class slideMe {
  children = []
  start = (source) => {
    this.children.push(<h1 key={this.children.length}>{source}</h1>)
    return this
  }
  end = () => {
    return this.children
  }
  doneBy = (author, title) => {
    this.children.push(<div key={this.children.length}><div>{author}</div> <div>{title}</div></div>)
    return this
  }
  index = (title, elements) => {
    let elementsList = []
    for (const key in elements) {
      elementsList.push(<li key={`${key}-${this.children.length}`}><strong>{key}</strong>  {elements[key]}</li>)
    }
    this.children.push(<div key={this.children.length}><h2>{title}</h2><ul>{elementsList}</ul></div>)
    for (const key in elements) {
      if (elements.hasOwnProperty(key)) {
        this[key] = function(){
          this.children.push(<div><h2 key={this.children.length}>{key}</h2><div> {elements[key]}</div></div>)
          return this
        }
      }
    }
    return this
  }

  step = (title, elements) => {
    const elementsList = []
    if (elements && !elements.length){
      for (const key in elements) {
        elementsList.push(<div key={`${key}-${this.children.length}`}><strong>{key}:</strong> {elements[key]}</div>)
      }
    }else{
    elementsList.push(<div key="single-0">{elements}</div>)
    }

    this.children.push(<div key={this.children.length}>
      <h3>{title}</h3>
      {elementsList}
    </div>)
    return this
  }

}

export default new slideMe();
