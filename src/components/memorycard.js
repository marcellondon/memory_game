import React from "react";
import './memoryCardBack.css'

class MemoryCard extends React.Component {
	clickHandler() {
		this.setState({ isFlipped: !this.state.isFlipped });
	}
	constructor() {
		super();
		this.state = { isFlipped: false };
	}
	render() {
		let memoryCardInnerClass = this.state.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner"
		// if (this.state.isFlipped) {
		// 	memoryCardInnerClass += " flipped"
		// }

		return (
			<div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
				<div className={memoryCardInnerClass}>
					<div className="MemoryCardBack">
						<img src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo-wht.svg" className="cardImage" alt="digital crafts"></img>
					</div>
					<div className="MemoryCardFront">
						∆
					</div>
				</div>
			</div>
		);
	
		
	}
	
}


export default MemoryCard