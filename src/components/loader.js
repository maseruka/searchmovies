import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator
				animating={true}
				color="#6747cd"
				size="large"
				style={styles.activityIndicator}
			/>
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

export default Loader;
