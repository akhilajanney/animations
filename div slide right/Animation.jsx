import React, { Component } from 'react'
import style from './style.css'
import $ from 'jquery'

export default class Animation extends Component {
    toggleMenu=()=>{
        $("#mobile").show(); 
        setTimeout(function(){ 
            document.getElementById("mobile").style.right = "800px";    
            },500);   
            
    }
    close=()=>{
          
            $("#mobile").css('display','none'); 
            window.location.reload();
        
        
    }

  render() {
    return (
        <>
      <div id="mobile" style={{display:'none'}}>
      <i className="fas fa-times-circle" style={{fontSize:'25px',color:'white',float:'right'}} onClick={this.close}></i>
      </div>
      <button id="slideButton" onClick={this.toggleMenu}>
        button
       </button>
      </>
    )
  }
}
