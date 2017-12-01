import React, { Component } from 'react';
import {
	ActivityIndicator,
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

class Item extends Component {
	render() {
		const { title, release_date, poster_path } = this.props.data;

		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: `https://image.tmdb.org/t/p/w300${
									poster_path
								}`
							}}
							style={styles.image}
						/>
					</View>
					<View>
						<Text numberOfLines={1} style={styles.title}>
							<Text style={styles.year}>
								{release_date.substr(0, 4) + ': '}
							</Text>
							{title}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 12,
		minWidth: '45%',
		padding: 6,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start'
	},
	card: {
		width: '100%',
		height: '100%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 1,
		elevation: 2,
		borderRadius: 2,
		backgroundColor: '#fff'
	},
	imageContainer: {
		height: 180
	},
	image: {
		width: '100%',
		height: '100%',
		borderTopLeftRadius: 2,
		borderTopRightRadius: 2
	},
	title: {
		fontWeight: 'bold',
		fontSize: 17,
		color: '#6747cd',
		padding: 12,
		paddingTop: 6,
		lineHeight: 28
	},
	year: {
		color: '#777'
	}
});

export default Item;
