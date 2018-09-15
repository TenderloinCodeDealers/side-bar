import React from 'react';
import { Form, Radio } from 'semantic-ui-react'; // For options: use semantic
// import { Dropdown } from 'semantic-ui-react'; // For options: semantic does not work well, so use React's built-in feature instead

import { Checkbox } from 'semantic-ui-react'; // Checkbox for adding warranty (for goods category only)

// import { Button } from 'semantic-ui-react'; // Semantic's button does not work
import { Rating } from 'semantic-ui-react'; // Semantic's rating for reviews' rating (per product), which also does not work

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleChange(v) { // handleChange(event) {
		this.setState({
			value: v // value: event.target.value
		});
	}

	handleClick() {
		alert('Congrats! You just bought this product!');
	}

	render() {
		let options;
		if (this.props.category === 'Local') {
			options = <RadioOptions
				value={this.state.value}
				option1Price={this.props.option1Price}
				option2Price={this.props.option2Price}
				handleChange={this.handleChange.bind(this)}
			/>;
		} else if (this.props.category === 'Goods') {
			options = <BoxOptions
				value={this.state.value}
				option1Price={this.props.option1Price}
				option2Price={this.props.option2Price}
				handleChange={this.handleChange.bind(this)}
				option1Warranty={this.props.option1Warranty}
				option2Warranty={this.props.option2Warranty}
			/>;
		}

		return (
			<div>
				<h3>Side Bar</h3>

				<Rating icon='star' rating={5} defaultRating={3} maxRating={4} />

				<p>Product Category: {this.props.category}</p>
				<p>Expiration time: {this.props.expirationTime}</p>

				{options}

				<br></br>
				<button onClick={this.handleClick}>
					Buy
				</button>
			</div>
		);
	}
}


/*
  The 2 components below are added, per conditional rednering to side bar 
  - For category as 'Local', display radio buttons
  - For category as 'Goods', display dropdown box
*/

function RadioOptions(props) {
	let price1 = <span>Option 1's price: ${props.option1Price}</span>;
	let price2 = <span>Option 2's price: ${props.option2Price}</span>;
	return (
		<Form>
			{/* <p>Option 1's price: ${this.props.option1Price}</p> */}
			<Form.Field>
				<Radio
					// label='Option 1 costs ${this.props.option1Price}'
					label={price1}
					name='radioGroup'
					value='option1'
					// checked={this.state.value === 'option1'}
					// onChange={this.handleChange.bind(this)}
					checked={props.value === 'option1'}
					onChange={(event) => props.handleChange(event.target.value)}
				/>
			</Form.Field>
			<Form.Field>
				<Radio
					label={price2}
					name='radioGroup'
					value='option2'
					checked={props.value === 'option2'}
					onChange={(event) => props.handleChange(event.target.value)}
				/>
			</Form.Field>
		</Form>
	);
}

// Note: use React's drop-down feature
function BoxOptions(props) {
	let price;
	let warranty;
	let warrantyLabel;

	if (props.value === 'option2') {
		price = <p>Option 2's price: ${props.option2Price}</p>;
		warrantyLabel = <span>Add warranty for option 2 at ${props.option2Warranty}</span>;
		warranty = <Checkbox label={warrantyLabel} />;
	} else { // Note: option 1 is the default option
		price = <p>Option 1's price: ${props.option1Price}</p>;
		warrantyLabel = <span>Add warranty for option 1 at ${props.option1Warranty}</span>;
		warranty = <Checkbox label={warrantyLabel} />;
	}

	return (
		<div>
			{price}

			<label>
				Select your option:
				<form>
					<select onChange={(event) => props.handleChange(event.target.value)}>
						<option value='option1'>Option 1</option>
						<option value='option2'>Option 2</option>
					</select>
				</form>
			</label>

			<br></br>
			{warranty}
		</div>
	);
}

export default SideBar;
