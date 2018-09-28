import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withStyles, TextField, Button, SnackbarContent } from '@material-ui/core';

import { DateField } from "../Field";
import ReportingView from './components/Reporting/ReportingView';
import { fetchReporting } from "./components/Reporting/action";
import { REPORTING } from '../../mock/reporting'
import config from '../../config/config';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    button: {
        margin: theme.spacing.unit,
    },
    snackbar: {
        margin: theme.spacing.unit,
    }
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: this.getLocalStorageValue('startDate', "2017-05-01"),
            endDate: this.getLocalStorageValue('endDate', "2017-06-15"),
            accessToken: this.getLocalStorageValue('accessToken', ""),
            error: "",
            showReport: false
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    getLocalStorageValue(key, defaultVal) {
        const value = localStorage.getItem(key);
        return value === null ? defaultVal : value;
    }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        localStorage.setItem(e.target.name, e.target.value);
    }

    showReport() {
        // Make simple validation
        if (this.state.startDate === "" || this.state.endDate === "" || this.state.accessToken === "") {
            this.setState({ error: "Fill in all the fields."});
        } else {
            this.setState({ error: ""});
            if (!config.useDummyData) {
                this.props.fetchReporting(this.state.startDate, this.state.endDate, this.state.accessToken);
            }
        }

        this.setState({ showReport: true});
    }

    renderReport() {
        if (this.state.showReport) {
            let reportingData;
            if (config.useDummyData) {
                reportingData = { error: "", reporting: REPORTING };
            } else {
                const reporting = this.props.reportingObj;
                reportingData = { error: reporting.error, reporting: reporting.reporting };
            }

            if (Object.keys(reportingData.reporting).length && this.state.error === "") {
                return (
                    <ReportingView reporting={reportingData.reporting} />
                );
            } else {
                let errorMsg = (this.state.error !== "") ? this.state.error : reportingData.error;
                return(
                    <SnackbarContent className={this.props.classes.snackbar} message={"Error: " + errorMsg} />
                )
            }
        } else {
            return(
                <div></div>
            )
        }
    }

    render() {
        const classes = this.props.classes;

        return(
            <div>
                <form className={this.props.classes.container}>
                    <DateField
                        name="startDate"
                        label="Start date"
                        className={classes.textField}
                        defaultValue={this.state.startDate}
                        onChange={this.onChangeValue}
                    />
                    <DateField
                        name="endDate"
                        label="End date"
                        className={classes.textField}
                        defaultValue={this.state.endDate}
                        onChange={this.onChangeValue}
                    />
                    <TextField
                        name="accessToken"
                        label="Access token"
                        className={this.props.classes.textField}
                        margin="normal"
                        required
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={this.onChangeValue}
                        value={this.state.accessToken}
                    />
                    <Button
                        variant="outlined" onClick={() => this.showReport()} size="small" color="primary" className={classes.button}>
                        Show Results
                    </Button>
                </form>

                {this.renderReport()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reportingObj: state.reportingReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchReporting: fetchReporting}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
