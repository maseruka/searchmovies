import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Item from './item';

class Items extends Component {
	renderItems = () => {
		const { data } = this.props;

		if (data.length > 0) {
			return data.map(record => <Item key={record.id} data={record} />);
		}

		return <View />;
	};

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>{this.renderItems()}</View>
			</ScrollView>
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
		padding: 9,
		width: '100%',
		height: '100%'
	}
});

export default Items;
