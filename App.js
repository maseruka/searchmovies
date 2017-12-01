import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import _ from 'lodash';

import Start from './src/components/start';
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
			MovieDB.searchMovie({ query: this.state.query }, (err, res) => {
				if (!err) {
					this.setState({
						data: res,
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

	renderUI() {
		if (this.state.query.length == 0) {
			return (
				<Start>
					<Search
						value={this.state.query}
						onUpdateSearchQuery={query =>
							this.updateSearchQuery(query)
						}
						placeholder="Search movies by title..."
					/>
				</Start>
			);
		}

		return (
			<Listing showLoader={this.state.showLoader} data={this.state.data}>
				<Search
					value={this.state.query}
					onUpdateSearchQuery={query => this.updateSearchQuery(query)}
					placeholder="Search movies by title..."
				/>
			</Listing>
		);
	}

	render() {
		return <View style={styles.container}>{this.renderUI()}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
		width: '100%'
	}
});
