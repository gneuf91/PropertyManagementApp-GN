import React, { Component } from 'react';
import InfoBox from '../infoBox';

import { connect } from 'react-redux';

class SupportRequest extends Component {
    render() {
        return (
            <div >
                support request 
                <div>
                    <div>Add Request</div>
                    <div className="row">
                        <div className="col-md-3">
                             <InfoBox type='pending'/>
                             <InfoBox type='in-progress'/>
                             <InfoBox type='complete'/>
                        </div>
                        <div className="col-md-9">
                            Support Request Content - contains UL
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state: state.supportRequest }
}

export default connect()(SupportRequest);