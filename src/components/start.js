import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class Start extends Component {
	render() {
		const { children } = this.props;

		return (
			<View style={styles.screen}>
				<View style={styles.container}>{children}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		display: 'flex',
		flex: 1,
		backgroundColor: '#6747cd',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		height: '100%',
		width: '100%'
	},
	container: {
		marginLeft: 16,
		marginRight: 16,
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.5,
		elevation: 2,
		backgroundColor: 'rgba( 255, 255, 255, 09 )',
		borderRadius: 2
	}
});

export default Start;
