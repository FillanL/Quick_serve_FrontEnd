import React, { Component } from 'react'


import Menuitem from '../showPages/MenuItem'
import OrderMessages from './OrderMessages'
import TableShow from '../showPages/TableShow'

import '../CSSFiles/dash.scss'



export class Dashboard extends Component {



    render() {
        return (
            <div className="dash-interface">
                <div>
                    
                <div className="vert-grid" >
                   { [1,2,3,4,5,6].map(item =>
                    
                    <Menuitem num={item} key={item}/>
                    )
                    }
                </div>
                <button>ADD ITEM</button>
                </div>

                <div className="table-col">
                {[1,2,3,4].map(table => <TableShow key={table}/>)}
                </div>

                {/* <OrderMessages /> */}
            </div>
        )
    }
}

export default Dashboard
