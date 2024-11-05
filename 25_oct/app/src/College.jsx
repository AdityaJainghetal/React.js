// const College=(props)=>{
//     return(
//         <>
//         <h1>My name is: {props.nm} </h1>
//         <h2>my city is: {props.ct} </h2>
//         </>
//     )
// }

// export default College;

// const College=({name,city,clas,children})=>{
//     return(
//         <>
//         <h1>My name is: {name} </h1>
//         <h2>my city is: {city} </h2>
//         <h3>class {clas}</h3>
//         {children}
//         </>
//     )
// }


const College=({children})=>{
    return(
        <>
      
        <h1>This is cybrom component Data</h1>
        <h2 style={{color:"red"}}>{children}</h2>

        
        </>
    )
}

export default College;