import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewsletterDetail extends Component {

    componentDidMount() {
        
        this.props.fetchNewsLetterById(this.props.match.params._id)
    }

    renderFetchedItem() {
        if(this.props.fetchedItem) {
            return (
                <div>
                    <div>
                        <img src={this.props.latestItem.imageUrl}/>
                        <h2>{this.props.fetchedItem.title}</h2>
                    </div>
                    <p>
                        {this.props.fetchedItem.body}
                    </p>
                </div>
            )
        }
    }

    render() {
       return (
        <div className="row">
            <div className="col-md-3 row">
                <div style={{width: '200px', height: '200px', backgroundColor: 'skyblue'}}>
                    02 jan 18
                </div>  
            </div>
            <div className="col-md-9">
                {this.renderFetchedItem}
            </div>
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

export default connect(mapStateToProps, actions)(NewsletterDetail);