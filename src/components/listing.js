import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Loader from './loader';
import Items from './items';
import NoRecords from './no_records';

class Listing extends Component {
	renderUI = () => {
		const { children, showLoader, data } = this.props;

		if (showLoader) return <Loader />;
		else if (data.length > 0) return <Items data={data} />;

		return <NoRecords />;
	};

	render() {
		const { children, showLoader, data } = this.props;

		return (
			<View style={styles.screen}>
				<View style={styles.header}>
					<View style={styles.container}>{children}</View>
				</View>
				<View style={styles.contentArea}>{this.renderUI()}</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#ffffff',
		height: '100%',
		width: '100%'
	},
	header: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 1,
		elevation: 5,
		height: 54,
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		backgroundColor: '#ffffff'
	},
	contentArea: {
		display: 'flex',
		flex: 1,
		backgroundColor: '#efefef'
	}
});

export default Listing;
