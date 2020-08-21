import React, {useState} from 'react'

const Categories = React.memo(({items, onClickItem}) => {
	console.log('render categories')
	const [activeIdx, setActiveIdx] = useState(null)

	const onSelectItem = (idx) => {
		setActiveIdx(idx)
		onClickItem(idx)
	}
	return (
		<div className="categories">
			<ul>
				<li className={activeIdx === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
				{items && items.map((name, idx) =>
					<li key={idx}
					    className={activeIdx === idx ? 'active' : ''}
					    onClick={() => onSelectItem(idx)}
					>{name}</li>
				)}
			</ul>
		</div>
	)
})

export default Categories
