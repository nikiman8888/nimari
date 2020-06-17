import React,{Component} from 'react';
import './AccesoriesContainer.css';
import accHolder from '../../utils/accesoriesHolder.js';
import Accesoties from './Accesories/Accesories';

class AccesoriesContainer extends Component {
  state = {
    items:''
  }

  scrollTop()
  {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }
  
  componentDidMount() {
    this.scrollTop();
     this.setState({items:accHolder.map((name) => 
      <Accesoties key = {name} name = {name}/>)}) 
      
  }
  render() {
    const {items} = this.state;
    return (
      <div className="accesories-wrapper" onMouseOver={this.props.closeNav}>
        {items}
      </div>
    );
  }
  }
  
  export default AccesoriesContainer;