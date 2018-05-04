import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsletterArchive from './newsletter_archive';

class Newsletter extends Component {

    componentDidMount() {
        this.props.fetchNewsletterArchive();
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        02 Jan 2018
                    </div>
                    <NewsletterArchive/>
                </div>
                <div>
                    main content, the latest header
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
        console.log(state.newsletter.archive);
        return { archive: state.newsletter.archive }
}

export default connect(mapStateToProps, actions)(Newsletter);