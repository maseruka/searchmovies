import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NoRecords = () => {
	return (
		<View style={styles.container}>
			<Icon name="search" size={40} color="#dddddd" />
			<Text>Start a search or try a different term!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80
	}
});

export default NoRecords;
