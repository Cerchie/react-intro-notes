const RandomChoice = (props) => {
    const idx = Math.floor(Math.random() * props.choices.length);
    const choice = props.choices[idx];
    return <h4> Randcom Choice is: {choice} </h4>
}
