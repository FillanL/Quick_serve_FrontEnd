import React, { Component } from 'react'


import Menuitems from '../Menuitems'
import OrderMessages from './OrderMessages'
import TableShow from '../showPages/TableShow'

import '../CSSFiles/dash.scss'



export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Menuitems />
                <button>ADD ITEM</button>

                <div className="table-col">
                {[1,2,3,4].map(table => <TableShow key={table}/>)}
                </div>

                {/* <OrderMessages /> */}
            </div>
        )
    }
}

export default Dashboard
