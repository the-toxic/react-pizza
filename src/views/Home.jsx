import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Categories, SortPopup, Pizza} from '../components'
import {setCategory} from "../redux/actions/filters"

const categoriesList = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']

const Home = () => {
	const pizzas = useSelector(({pizzas}) => pizzas.items)
	const dispatch = useDispatch()

	console.log('render Home', pizzas.length + ' pizzas')

	const onSelectCategory = React.useCallback((idx) => {
		dispatch(setCategory(idx))
	}, [dispatch])

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClickItem={onSelectCategory}
					items={categoriesList} />

				<SortPopup/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzas && pizzas.map((item) =>
					<Pizza key={item.id} {...item} />
				)}
				</div>
		</div>
	)
}

export default Home
