import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Filter extends Component {

    static propTypes = {
           filter: PropTypes.string,
       }

    handleInput = (e) => {
        this.props.onInputFilter(e.target.value)
    }
    render() {
        return (
            <div>
                <h3>Find contacts by name</h3>
                <input type='text' onChange={this.handleInput} />
            </div>
        )
    }
}

export default Filter
