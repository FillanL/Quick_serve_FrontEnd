import React, { Component } from 'react'

import Menuitem from '../showPages/MenuItem'

class CustomerDash extends Component {
    render() {
        return (
            <div>
                <div className="vert-grid" >
                   { [1,2,3,4,5,6].map(item =>
                    
                    <Menuitem num={item} key={item}/>
                    )
                    }
                </div>
                
            </div>
        )
    }
}

export default CustomerDash
