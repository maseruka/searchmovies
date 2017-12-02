import _ from 'lodash';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Listing from './src/components/listing';
import Search from './src/components/search';
import { API_KEY } from './src/constants';

const MovieDB = require('moviedb')(API_KEY);

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
			data: [],
			showLoader: false
		};

		this.fetchNewData = false;
	}

	updateSearchQuery = query => {
		if (query.toString().length != 0) {
			this.fetchNewData = true;

			this.setState({
				query: query,
				showLoader: true
			});
		} else {
			this.fetchNewData = false;

			this.setState({
				query: '',
				data: [],
				showLoader: false
			});
		}
	};

	fetchMovieListings = () => {
		if (this.fetchNewData) {
			this.fetchNewData = false;

			MovieDB.searchMovie({ query: this.state.query }, (err, res) => {
				if (!err) {
					this.fetchNewData = true;

					this.setState({
						data: res.results,
						showLoader: false
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
