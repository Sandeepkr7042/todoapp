import './Student.css';
const Student=(props)=>{
    return(
        <div className="stu">
            <h1>{props.roll}</h1>
            <p><input type="text" onChange={props.chg} value={props.name} /> </p>
            <p><input type="button" value="X" onClick={props.clk} /></p>
        </div> 
    )
}
export default Student;