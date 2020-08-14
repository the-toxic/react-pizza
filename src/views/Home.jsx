import React, {useEffect, useState} from 'react'
import {Categories, SortPopup, Pizza} from '../components'
import axios from "axios"

const Home = () => {
	const [pizzas, setPizzas] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('/db.json')
			setPizzas(response.data.pizzas)
		}
		fetchData()
	}, [])

	return (
		<div className="container">
			<div className="content__top">
				<Categories onClickItem={name => console.log(name)} items={['Мясные','Вегетарианская','Гриль','Острые','Закрытые']} />
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
