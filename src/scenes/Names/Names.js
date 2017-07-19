import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as namesActions from '../../stores/names/actions';

import Names from './Names.layout';

class NamesContainer extends Component {

    static propTypes = {
        names: PropTypes.shape().isRequired,
        getNames: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this._fetchNames(this.props, true);
    }

    componentWillReceiveProps(nextProps) {
        this._fetchNames(nextProps);
    }

    _fetchNames = (props, initial = false) => {
        const query = props.names.type.query;
        if (query !== this.props.names.type.query || initial) {
            this.props.getNames(query);
        }
    }

    render() {
        return (
            <Names
                {...this.props}
                {...this.state}
            />
        );
    }
}

function mapStateToProps(state) {
    const { names } = state;
    return { names };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...namesActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NamesContainer);
