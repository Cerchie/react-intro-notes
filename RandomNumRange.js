const RandomNumRange = (props)=> {
   const rand = Math.floor(Math.random() * (props.max - props.min)) + props.min
   return <h1>Rand Is: {rand} </h1>
}

