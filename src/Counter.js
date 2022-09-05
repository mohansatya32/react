class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, this)
        this.handleAddOne = this.handleAddOne.bind(this);
        console.log(props, this)
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: "abcd"
        }
    }
    handleAddOne() {
        this.setState((prev) => {
            return {
                count: prev.count + 1
            }
        })
        console.log("handle + 1")
    }
    handleMinus() {
        this.setState((prev) => {
            console.log(prev)
            return {
                count: prev.count - 1
            }
        })

        console.log("handle - 1")
    }
    handleReset() {
        console.log("handle Reset")
        this.setState({

            count: 0

        })
        this.setState(
            {
                count: this.state.count + 3

            })
    }
    render() {
        return (
            <div>
                <h1> {this.state.name}</h1>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))