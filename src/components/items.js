import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import Item from './item';

class Items extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Item />
				<Item />
				<Item />
				<Item />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		padding: 12,
		width: '100%',
		height: '100%'
	}
});

export default Items;
