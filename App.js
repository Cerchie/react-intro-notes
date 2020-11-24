const App = () => (
        <div>
            <RandomChoice choices={['red', 'blue', 'green']} />
            <Animal name="stevie" species="silkie" emoji=":chicken:" isCute={true}/>
            <Animal name="foxy" species="red-tailed" emoji=":fox:" isCute={false} />
            <Animal name="" species="" emoji="" />
            <RandomNum />
            <RandomNum />
            <RandomNum />
        </div>
    )


ReactDOM.render(<App />, document.getElementById("root"));