import React from 'react';
import Service from './Service'
import { actionFilterService } from '../actions/actionCreators'
import { connect } from 'react-redux';

class ServicesList extends React.Component {
  onCategoryClick = (category) => {
    const currentServiceNameFilter = this.props.serviceNameFilter

    this.props.actionFilterService(currentServiceNameFilter, category);
  }

  handleInputChange = (event) => {
    const currentServiceCategoryFilter = this.props.serviceCategoryFilter
    const target = event.target;
    const value = target.value;

    this.props.actionFilterService(value, currentServiceCategoryFilter);
  }

  render (){
    const servicesResult = this.props.servicesResult
    
    return (
      <nav className="services-list">
        <p className="panel-heading">
          Serviços
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-small is-danger" type="text" placeholder="Busca..." onChange={this.handleInputChange} />
            <span className="icon is-small is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div className="panel-tabs">
          <div className={`${this.props.serviceCategoryFilter === '' ? 'is-active' : 'has-text-danger'}`} onClick={() => this.onCategoryClick('')}>Todos</div>
          <div className={`${this.props.serviceCategoryFilter === 'Face' ? 'is-active' : 'has-text-danger'}`} onClick={() => this.onCategoryClick('Face')}>Face</div>
          <div className={`${this.props.serviceCategoryFilter === 'Cabelo' ? 'is-active' : 'has-text-danger'}`} onClick={() => this.onCategoryClick('Cabelo')}>Cabelo</div>
          <div className={`${this.props.serviceCategoryFilter === 'Unhas' ? 'is-active' : 'has-text-danger'}`} onClick={() => this.onCategoryClick('Unhas')}>Unhas</div>
          <div className={`${this.props.serviceCategoryFilter === 'Produtos' ? 'is-active' : 'has-text-danger'}`} onClick={() => this.onCategoryClick('Produtos')}>Produtos</div>
          <div className={`${this.props.serviceCategoryFilter === 'Outros' ? 'is-active' : 'has-text-danger'}`} onClick={() => this.onCategoryClick('Outros')}>Outros</div>
        </div>
        {
          Object.keys(servicesResult).map(key => (
            <div href="#" className="panel-block is-active" key={key}>
              <Service service={servicesResult[key]} key={servicesResult[key].name} />
            </div>
          ))
        }
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionFilterService: (serviceNameFilter, serviceCategoryFilter) => { dispatch(actionFilterService(serviceNameFilter, serviceCategoryFilter)) }
});

const mapStateToProps = state => ({
  servicesResult: state.servicesState.servicesResult,
  serviceNameFilter: state.servicesState.serviceNameFilter,
  serviceCategoryFilter: state.servicesState.serviceCategoryFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
