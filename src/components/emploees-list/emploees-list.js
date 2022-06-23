import EmploeesListItem from '../emploees-list-item/emploees-list-item';

import './emploees-list.css';

const EmploeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
	const elements = data.map((item) => {
		const { id, ...itemPtops } = item;
		return (
			<EmploeesListItem
				key={id}
				{...itemPtops}
				onDelete={() => onDelete(id)}
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)}
			/>
		);
	});
	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmploeesList;
