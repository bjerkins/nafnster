/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class CenterView extends Component {

    static defaultProps = {
        children: null,
    }

    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <View style={styles.view}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    }
});
