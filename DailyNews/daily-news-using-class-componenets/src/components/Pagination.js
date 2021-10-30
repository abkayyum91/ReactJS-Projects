import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-between my-3">
                <button disabled={this.props.page <= 1} onClick={this.props.prev} className="btn btn-secondary">&larr; Previous</button>
                <button disabled={this.props.page >= Math.ceil(this.props.totalResults / this.props.pageSize)} onClick={this.props.next} className="btn btn-secondary">Next &rarr;</button>
            </div>
        )
    }
}
