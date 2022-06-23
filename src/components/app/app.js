import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
				{ name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
				{ name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
			],
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			rise: false,
			increase: false,
			id: this.maxId++,
		};

		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleIncrease = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);

			const old = data[index];
			const newItem = { ...old, increase: !old.increase };
			const newArr = [
				...data.slice(0, index),
				newItem,
				...data.slice(index + 1),
			];

			return {
				data: newArr,
			};
			//!15:43
		});
	};

	onToggleRise = (id) => {
		console.log(`Rise this ${id}`);
	};

	render() {
		return (
			<div className="app">
				<AppInfo />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmploeesList
					data={this.state.data}
					onDelete={(id) => this.deleteItem(id)}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
				/>
				<EmploeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
