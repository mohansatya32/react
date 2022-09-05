import validator from 'validator'
import React from 'react'
import  ReactDOM  from 'react-dom'
import Option from './components/Option'
import AddOption from './components/AddOption'
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = json.parse(json)
        this.setState(() => ({ options }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(opt) {
        console.log("hi")
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return opt !== option
            })
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleAddOptions(option) {
        console.log("--- option:", option)
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        // const title = 'Indecision'
        //const subtiltle = "Put your life in the hands of computer"
        return (
            <div>
                <Header />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <Option />
                <AddOption handleAddOptions={this.handleAddOptions} />
            </div>
        )
    }
}
 
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtiltle && <h2>{props.subtiltle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: "asb"
}

IndecisionApp.defaultProps = {
    options: []
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What Should i do?</button>
        </div>
    )

}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.map((option) => <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />)}
            <button>What Should i do?</button>
        </div>
    )
}






ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

