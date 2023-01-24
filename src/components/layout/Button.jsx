import React from 'react'

import "./Button.css"

const Button = (props) => {

	const exists = (valor) => {
		if(typeof valor === 'undefined'){
			return ""
		} else {
			return valor
		}
	}
		
	return (
		<div 
			className={`button-container ${exists(props.class)}`.trimEnd()}
			onClick={() => props.handleClick(props.children)}
		>
				<p>{props.children}</p>
		</div>
	)
}

export default Button