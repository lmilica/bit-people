import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {

    onSearch = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div className="SearchBar">
                <i className="fa fa-search"></i><input type="search" onChange={this.onSearch}></input>
            </div>
        )
    }
}
export default SearchBar