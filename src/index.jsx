import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./data/reducers"
import Routes from "./routes"

import './index.css'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById("root")
)
