import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Search extends Component {
	renderClearButton() {
		const { value, onUpdateSearchQuery } = this.props;

		if (value) {
			return (
				<TouchableOpacity
					style={styles.clearButton}
					onPress={() => onUpdateSearchQuery('')}>
					<Icon name="x" size={20} color="#6747cd" />
				</TouchableOpacity>
			);
		}

		return <View />;
	}

	render() {
		const { value, onUpdateSearchQuery, placeholder } = this.props;

		return (
			<View style={styles.container}>
				<Icon name="search" size={20} color="#6747cd" />
				<TextInput
					style={styles.input}
					autoCorrect={false}
					underlineColorAndroid="transparent"
					placeholder={placeholder}
					autoCapitalize="none"
					onChangeText={onUpdateSearchQuery}
					value={value}
					autoFocus={true}
				/>
				{this.renderClearButton()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 12,
		paddingRight: 12
	},
	input: {
		height: 45,
		borderColor: '#7a42f4',
		borderWidth: 0,
		flex: 1,
		fontSize: 17,
		marginLeft: 10,
		marginRight: 10
	}
});

export default Search;
