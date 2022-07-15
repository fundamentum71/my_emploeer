import EmploeesListItem from '../emploees-list-item/emploees-list-item';

import './emploees-list.scss';

const EmploeesList = ({ data, onDelete, onToggleProp }) => {
	const elements = data.map((item) => {
		const { id, ...itemPtops } = item;
		return (
			<EmploeesListItem
				key={id}
				{...itemPtops}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) =>
					onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
				}
			/>
		);
	});
	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmploeesList;
