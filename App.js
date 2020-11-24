const App = () => (
        <div>
            <Alert>
            <RandomNumRange min={5} max={10}/>
            <RandomChoice choices={['red', 'blue', 'green']} />
            </Alert>
            <Animal name="stevie" species="silkie" emoji=":chicken:" isCute={true}/>
            <Animal name="foxy" species="red-tailed" emoji=":fox:" isCute={false} />
            <RandomNum />
            <RandomNum />
            <RandomNum />
            <Bouncer age={19} />
            <Bouncer age={11} />
            <Bouncer age={39} />
            <ToDoList todos={[ 'Walk Chickens',
        'Feed Chickens',
        'Eat Chickens']}/>
       
        </div>
    )


ReactDOM.render(<App />, document.getElementById("root"));