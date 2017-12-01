import _ from 'lodash';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Listing from './src/components/listing';
import Search from './src/components/search';
import { API_KEY } from './src/constants';

const MovieDB = require('moviedb')(API_KEY);

export default class App extends Component {
	state = {
		query: '',
		data: [],
		showLoader: false,
		fetchNewData: false
	};

	updateSearchQuery = query => {
		if (query.toString().length != 0)
			this.setState({
				query: query,
				showLoader: true,
				fetchNewData: true
			});
		else
			this.setState({
				query: '',
				data: [],
				showLoader: false,
				fetchNewData: false
			});
	};

	fetchMovieListings = () => {
		if (this.state.fetchNewData) {
			console.log('Outside');

			MovieDB.searchMovie({ query: this.state.query }, (err, res) => {
				if (!err) {
					console.log(res);

					this.setState({
						data: res.results,
						showLoader: false,
						fetchNewData: false
					});

					console.log(this.state);
				}
			});
		}
	};

	componentWillMount = () => {
		this.fetchMovieListings();
	};

	componentWillUpdate = () => {
		this.fetchMovieListings();
	};

	render() {
		return (
			<View style={styles.container}>
				<Listing
					showLoader={this.state.showLoader}
					data={this.state.data}>
					<Search
						value={this.state.query}
						onUpdateSearchQuery={query =>
							this.updateSearchQuery(query)
						}
						placeholder="Type to search for movies..."
					/>
				</Listing>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
		width: '100%'
	}
});
