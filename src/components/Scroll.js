const Scroll =(props) => {
	return (
		<div style={{overflow: 'scroll', border: '3px solid #0ccac4', height: '600px', borderRadius: '0.5rem'}}>
			{props.children}
		</div>
	)
}

export default Scroll;