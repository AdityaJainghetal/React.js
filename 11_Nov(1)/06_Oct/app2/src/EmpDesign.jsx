const EmpDesign=(props)=>{
    return(
        <>
        <div className="data">
        <h1>Employee id: {props.empo}</h1>
        <h1>Name :{props.emnm} </h1>
        <h1>Designation: {props.empdeg}</h1>
        <h1>Salary: {props.empsal}</h1>
        </div>
        </>

    )
}
export default EmpDesign;