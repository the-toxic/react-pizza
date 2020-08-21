import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"

import App from './App'
import store from "./redux/store"

import './scss/app.scss'

// store.subscribe(() => console.log(store.getState()))
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })

ReactDOM.render(
	// <React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>,
	// </React.StrictMode>,
	document.getElementById('root')
)
