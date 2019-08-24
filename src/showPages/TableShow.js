import React, { Component } from 'react'
import  '../CSSFiles/table.scss'

class TableShow extends Component {
    state={
        "num": 0,
        "total": 0
    }

    droppedd=(e)=>{
        let newData = e.dataTransfer.getData("idd")
        this.setState({"num": newData})
        console.log("dropped here", newData);
    }
    draggOver = e =>{
        e.preventDefault()
        // console.log("overrrrr here", e);
    }

    render() {
        return (
            <div 
            onDragOver={(e)=>this.draggOver(e)} 
            onDrop={(e)=>this.droppedd(e)}
            className="dash-tables"
            >
                <h1> table number 1</h1>
                <p>mennu item x  x4 $300</p>
                <p>mennu item y x2 $10</p>
                <p>mennu item z x1 $8 </p>

                <p>total orders $100</p>
                <p>{this.state.num}</p>
                <button>Check Out</button>
                <div className="total">
                    <p className="total-font">Total $ {this.state.total} </p>
                </div>
            </div>
        )
    }
}

export default TableShow
