import React from "react"

export default class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOptions = this.handleAddOptions.bind(this)
    }
    handleAddOptions(e) {
        e.preventDefault()
        console.log("----")
        const option = e.target.elements.option.value.trim()
        if (option) {
            console.log("called")
            this.props.handleAddOptions(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

