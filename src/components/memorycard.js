import React from "react";
import './memoryCardBack.css'

class MemoryCard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { isFlipped: false };
	}
	render() {
		let memoryCardInnerClass = this.props.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner"
		// if (this.state.isFlipped) {
		// 	memoryCardInnerClass += " flipped"
		// }

		return (
			<div className="MemoryCard" onClick={this.props.pickCard}>
				<div className={memoryCardInnerClass}>
					<div className="MemoryCardBack">
						<img src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo-wht.svg" className="cardImage" alt="digital crafts"></img>
					</div>
					<div className="MemoryCardFront">
					{this.props.symbol}
					</div>
				</div>
			</div>
		);
	
		
	}
	
}


export default MemoryCard