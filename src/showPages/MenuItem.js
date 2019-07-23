import React, { Component } from 'react'

import '../CSSFiles/menuitem.scss'

class MenuItem extends Component {

    dragging=(e)=>{
        e.preventDefault()
        console.log(this.props.num);
        

    }

    render() {
        return (
            <div className="menu-item" draggable onDrag={(e)=>this.dragging(e)}>
                {/* <img src="" /> */}
                
                <p>name: Ale Beer </p>
                <p>Price: 9.84</p>
                <p>description : 2jn ej1n jq wdn</p>
                <button> Order Now</button>
                <button>Info</button>
                
            </div>
        )
    }
}

export default MenuItem
