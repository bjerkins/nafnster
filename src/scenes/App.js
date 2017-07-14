import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBarIOS } from 'react-native';

import { colors } from '../theme/default';

import Names from './Names/Names';
import { namesTabIcon } from './Names/Names.icons';

import Profile from './Profile/Profile';
import { profileTabIcon } from './Profile/Profile.icons';

export default class App extends Component {

    static propTypes = {
        onLogOutSuccess: PropTypes.func.isRequired,
    }

    state = {
        selectedTab: 'namesTab',
    }

    render() {
        return (
            <TabBarIOS
                unselectedTintColor={colors.tabBarUnSelectedTintColor}
                tintColor={colors.tabBarTintColor}
                barTintColor={colors.tabBarBarTintColor}
            >
                <TabBarIOS.Item
                    title="Names"
                    icon={namesTabIcon}
                    selected={this.state.selectedTab === 'namesTab'}
                    onPress={() => this.setState({ selectedTab: 'namesTab' })}
                >
                    <Names />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Profile"
                    icon={profileTabIcon}
                    selected={this.state.selectedTab === 'profileTab'}
                    onPress={() => this.setState({ selectedTab: 'profileTab' }) }
                >
                    <Profile />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
