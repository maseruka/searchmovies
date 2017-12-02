import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NoRecords = () => {
	return (
		<View style={styles.container}>
			<Icon name="search" size={40} color="#dddddd" />
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>No movies!</Text>
			</View>
			<Text>Start a search or try a different query!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headingContainer: {
		padding: 8
	},
	heading: {
		fontSize: 17,
		fontWeight: 'bold'
	}
});

export default NoRecords;
