const Bouncer = (props) => {
    let reply ;
    if (props.age < 18) {
        reply = "sorry no"
    } else if (props.age < 21) {
        reply = "no drinking"
    } else {
        reply = <p>"have a drink" 'yep'</p>
    }
    return (
        <div>
            <p>
                <b>Bouncer:</b> How old are you?
            </p>
            <p><b>
                You: </b> I am {props.age} years old!</p>
                <p>
                    <b>
                        Bouncer: {reply}
                    </b>

                </p>
        </div>
    )
}