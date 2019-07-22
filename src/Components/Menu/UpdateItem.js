import React, { Component } from 'react'

class UpdateItem extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="itemName" placeholder="Chicken Salad"/>
                    <input type="text" name="description" placeholder="description" />
                    <input type="number" name="amountAvailable" placeholder="50" />
                    <input type="text" name="img_url" placeholder=".png" />
                    $<input type="number" placeholder="0"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UpdateItem
