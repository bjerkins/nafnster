import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as namesActions from '../../stores/names/actions';

import Swiping from './Swiping.layout';

class SwipingContainer extends Component {

    static propTypes = {
        names: PropTypes.shape({
            type: PropTypes.shape(),
        }).isRequired,
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
            <Swiping
                {...this.props}
                {...this.state}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.names,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...namesActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipingContainer);
