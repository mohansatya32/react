console.log('App.js is running');
var uname = "mohan";
var age = 29
let count = 0
let addCount = () => {
    count++
    console.log(count)
    renderCounterApp()
}
let minusCount = () => {
    count--;
    console.log(count)
}
let resetCount = () => {
    count = 0
    renderCounterApp()
}
var appRoot = document.getElementById('app')
const renderCounterApp = () => {
    const template2 = (

        <div>
            <h1>Count : {count}</h1>
            <button onClick={addCount}> +1</button>
            <button onClick={resetCount}> +1</button>
        </div>
    )
    ReactDOM.render(template2, appRoot)
}

var template = (
    <div>
        <div>
            <h>This is jsx app.js</h>
            <p>ghjnm</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
        </div>
        <div>
            <h>This is jsx app.js</h>
            <p>ghjnm</p>
            <ol>
                <li>{uname}</li>
                {(age && age > 20) && <li>{age}</li>}
            </ol>
        </div>
    </div>
);

renderCounterApp();
