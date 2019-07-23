import React, { Component } from 'react'
import  '../CSSFiles/table.scss'

class TableShow extends Component {
    render() {
        return (
            <div className="dash-tables">
                <h1> table number 1</h1>
                <p>mennu item x  x4 $300</p>
                <p>mennu item y x2 $10</p>
                <p>mennu item z x1 $8 </p>

                <p>total orders $100</p>
                <button>Check Out</button>
            </div>
        )
    }
}

export default TableShow
