import React, { Component } from 'react';
import { GridList } from '@material-ui/core';
import { CustomPaginationActionsTable } from '../../../Table';
import BigCard from './BigCard';

class Reporting extends Component {

    renderBixBoxes() {
        return(
            <div>
                <GridList>
                    <BigCard title={'Total conversation count'} content={this.props.reporting.total_conversation_count} />
                    <BigCard title={'Total user message count'} content={this.props.reporting.total_user_message_count} />
                    <BigCard title={'Total visitor message count'} content={this.props.reporting.total_visitor_message_count} />
                </GridList>
            </div>
        )
    }

    render() {
        return(
            <div>
                { this.renderBixBoxes() }
                <CustomPaginationActionsTable rows={this.props.reporting.by_date} />
            </div>
        )
    }
}

export default Reporting;
