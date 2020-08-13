import React, {useState} from 'react'

const Categories = ({items, onClickItem}) => {
	const [activeIdx, setActiveIdx] = useState(null)

	return (
		<div className="categories">
			<ul>
				<li className={activeIdx === null ? 'active' : ''} onClick={() => setActiveIdx(null)}>Все</li>
				{items && items.map((name, idx) =>
					<li key={idx}
					    className={activeIdx === idx ? 'active' : ''}
					    onClick={() => setActiveIdx(idx)}
					>{name}</li>
				)}
			</ul>
		</div>
	)
}

export default Categories
