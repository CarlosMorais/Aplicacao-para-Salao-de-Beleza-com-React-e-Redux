import React from 'react';

class CategoryIcon extends React.Component {
  categoryIcon = (category) => {
    switch (category) {
      case 'Face':
        return 'fa-theater-masks';
      case 'Cabelo':
        return 'fa-cut';
      case 'Unhas':
        return 'fa-hand-scissors';
      case 'Produtos':
        return 'fa-burn'
      default:
        return 'fa-shopping-cart'
    }
  }

  render(){
    return (
      <span className="panel-icon has-text-danger" style={{ marginTop: '5px' }}>
        <i className={"fas " + this.categoryIcon(this.props.category)} aria-hidden="true"></i>
      </span>
    )
  }
}

export default CategoryIcon;
