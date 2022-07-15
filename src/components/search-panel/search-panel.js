import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onUpdateSearchSP = (e) => {
		const term = e.target.value;
		//установка локального состояния
		this.setState({ term });
		//пробрасываем локальное состояние наверх
		this.props.onUpdateSearch(term);
	};
	render() {
		return (
			<input
				type="text"
				className="form-control seacrh-input"
				placeholder="Найти сотрудника"
				value={this.state.term}
				onChange={this.onUpdateSearchSP}
			/>
		);
	}
}

export default SearchPanel;
