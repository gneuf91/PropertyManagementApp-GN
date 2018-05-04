import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewletterDetail extends Component {

    componentDidMount() {
        console.log(`the id is: ${this.props.match.params._id}`)
        this.props.fetchNewsLetterById(this.props.match.params._id)
    }
    render() {
       return (
            <div>
                newsletter detail
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.newsletter.fetchedItem)
    return {
        fetchedItem: state.newsletter.fetchedItem
    }
}

export default connect(mapStateToProps, actions)(NewletterDetail);