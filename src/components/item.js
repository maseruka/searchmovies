import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

class Item extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.card} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		padding: 12,
		flex: 2,
		minWidth: '40%',
		padding: 6,
		height: 80,
		flexDirection: 'row'
	},
	card: {
		borderWidth: 1,
		borderColor: 'red',
		width: '100%',
		height: '100%'
	}
});

export default Item;
