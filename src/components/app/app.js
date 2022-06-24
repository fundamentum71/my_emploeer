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
			data: [],
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

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	//onToggleRise = (id) => {
	//	this.setState(({ data }) => ({
	//		data: data.map((item) => {
	//			if (item.id === id) {
	//				return { ...item, rise: !item.rise };
	//			}
	//			return item;
	//		}),
	//	}));
	//};

	render() {
		const emploees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;
		return (
			<div className="app">
				<AppInfo emploees={emploees} increased={increased} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmploeesList
					data={this.state.data}
					onDelete={(id) => this.deleteItem(id)}
					onToggleProp={this.onToggleProp}
				/>
				<EmploeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
