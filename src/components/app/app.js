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
				{ name: 'John C.', salary: 800, increase: true, id: 1 },
				{ name: 'Alex M.', salary: 3000, increase: false, id: 2 },
				{ name: 'Carl W.', salary: 5000, increase: false, id: 3 },
			],
		};
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			//const index = data.findIndex((elem) => elem.id === id);

			return {
				data: data.filter((item) => item.id !== id),
			};
		});
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
				/>
				<EmploeesAddForm />
			</div>
		);
	}
}

export default App;
