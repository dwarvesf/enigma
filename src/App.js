import { Component } from 'react';

class Form extends Component{
constructor(props){
	super(props)
	this.state = { 
		input:'',
		key:'', 
		output:'', 
		inputBin:'', 
		keyBin:'', 
		outputBin:'', 
		inputResult:'', 
		outputResult:'',
		isInput: false,
		isOutput: false,
	}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	let { input, key, output } = this.state
	input = input.trim()
	key = key.trim()
	output = output.trim()
  
  event.preventDefault()
  
  if (key.trim() === '') {
    alert('Please enter a key')
    return 
  }
	let keyBin = this.str2bin(key)
	
	if (input.trim() !== '') {
		let inputBin = this.hex2bin(input)
		let [outputBin, norKeyBin] = this.xor(inputBin, keyBin)
		let outputHex = this.bin2str(outputBin)
		this.setState({
			isInput: true,
			isOutput: false,
			inputBin: inputBin,
			outputBin: outputBin,
			keyBin: norKeyBin,
			outputResult: outputHex,
		})
	} else if (output.trim() !== '') {
		let outputBin = this.str2bin(output)
		let [inputBin, norKeyBin] = this.xor(outputBin, keyBin)
		let inputHex = this.bin2hex(inputBin)
		this.setState({
			isInput: false,
			isOutput: true,
			inputBin: inputBin,
			outputBin: outputBin,
			keyBin: norKeyBin,
			inputResult: inputHex,
		})
	}
}

str2bin(str) {
	return str.split('').map(function (char) {
				let num = char.charCodeAt(0).toString(2);
        return "00000000".slice(String(num).length) + num;
    }).join(' ');
}

bin2str(str) {
	return str.split(' ').map(function (bin) {
		return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
			return String.fromCharCode(parseInt(bin, 2))
		})	
	}).join('')
}

hex2bin(str) {
	return str.split(' ').map(function (hex) {
		return (parseInt(hex, 16).toString(2)).padStart(8, '0');
	}).join(' ');
}

bin2hex(str) {
	return str.split(' ').map(function (bin) {
		return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
			let num = parseInt(bin, 2).toString(16).toUpperCase()
			return "00".slice(String(num).length) + num;
		})	
	}).join(' ')
}

// XOR will never go out of bounds because it combines bits and doesn't create new bits where no bits were set before
// The reverse of any xor operation is itself, so the reverse of bitxor is bitxor.
xor(input, key) {
	let inputPath = input.split(' ')
	let keyPath = key.split(' ')
	
	for (let i = keyPath.length; i < inputPath.length; i++) {
		keyPath.push(key.split(' ')[i % key.split(' ').length])
	}
	
	let output = []
	for (let i = 0; i < inputPath.length; i++) {
		let result = ''
    for (let j = 0; j < 8; j++){
        if (inputPath[i][j] === keyPath[i][j])
            result += "0";
        else
            result += "1";
    }
		
    output.push(result);
	}
	
	keyPath = keyPath.slice(0, output.length)
	
	return [output.join(' '), keyPath.join(' ')]
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}


resultInput = (input, output, key, outputAscii) => {
	return (
		<div>
			<h1>Result</h1>
			<b>Input:</b> {input}
			<p>	</p>
			<b>Key:</b> {key}
			<p>	</p>
			
			<b>Output = Input XOR Key</b>
			<code>
			<p> {input}</p>
			<p>XOR</p>
			<p> {key}</p>
			<p>----------------</p>
			<p> {output}</p>
			</code>
			<b>Output in ASCII: {outputAscii}</b>
			<p></p>
		</div>
	);
}

resultOutput = (input, output, key, inputHex) => {
	return (
		<div>
			<h1>Result</h1>
			<b>Output:</b> {output}
			<p>	</p>
			<b>Key:</b> {key}
			<p>	</p>
			
			<b>Input = Output XOR Key</b>
			<code>
			<p> {output}</p>
			<p>XOR</p>
			<p> {key}</p>
			<p>----------------</p>
			<p> {input}</p>
			</code>
			<b>Input in Hex: {inputHex}</b>
			<p></p>
		</div>
	)
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<div class="container">
		<div class="top">
			<h1> Enigma </h1>
		</div>
		<div class="col-1">
			<p>To calculate output, please provide proper input and key</p>
			<p>To estimate input, please provide proper output and key</p>
		</div>
		<form onSubmit={this.handleSubmit}>
			<div class="col-1">
			<input
				name='input'
				class="effect-1"
				placeholder='Input'
				value={this.state.input}
				onChange={this.handleChange}
			/>
			</div>
			<div class="col-1">
			<input
				name='key'
				class="effect-1"
				placeholder='Key'
				value={this.state.ket}
				onChange={this.handleChange}
			/>
			</div>
			<div class="col-1">
			<input
				name='output'
				class="effect-1"
				placeholder='Output'
				value={this.state.output}
				onChange={this.handleChange}
			/>
			</div>
			<div class="col-1">
			<button class="submit" >Estimate</button>
			</div>
			<div class="col-1">
    	</div>
		</form>
		{this.state.isInput && this.resultInput(this.state.inputBin, this.state.outputBin, this.state.keyBin, this.state.outputResult)}
		{this.state.isOutput && this.resultOutput(this.state.inputBin, this.state.outputBin, this.state.keyBin, this.state.inputResult)}
	</div>
	)
}
}

export default Form
