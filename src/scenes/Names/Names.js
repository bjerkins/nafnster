import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNames } from '../../stores/names/actions';

import Names from './Names.layout';

class NamesContainer extends Component {

    static propTypes = {
        getNames: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.getNames();
    }

    render() {
        return (
            <Names {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    const { names } = state;
    return { names };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getNames,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NamesContainer);
