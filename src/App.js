import React, {useEffect} from 'react'
import {Route} from "react-router-dom"
import {useDispatch} from "react-redux"
import axios from "axios"

import {Home, Cart} from "./views"
import {Header} from "./components"
import {setPizzas as setPizzasAction}  from "./redux/actions/pizzas"

function App() {
	const dispatch = useDispatch()

	window.test = function() {
		async function fetchData() {
			const response = await axios.get('/db.json')
			dispatch(setPizzasAction(response.data.pizzas))
		}
		fetchData()
	}

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('/db.json')
			dispatch(setPizzasAction(response.data.pizzas))
		}
		fetchData()
	}, [dispatch])

	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
				<Route exact path="/" component={Home}/>
				<Route path="/cart" component={Cart}/>
			</div>
		</div>
	)
}

export default App
