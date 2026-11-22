import { useState } from "react";
import "./ReactForm.css"
const ReactForm = () => {

    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Department, setDepartment] = useState("");

    const [patient, setPatient] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newPatient = {Name, Age, Department};

        setPatient([...patient, newPatient]);



        setName("");
        setAge("");
        setDepartment("");



        console.log(newPatient);



    }

    const onDelete = (e) => {


        setPatient(patient.filter((_, index) => index !== e));

    }




 return (
    
    <div className="app-container">
        <h2 className="app-title"> Patient Form </h2>
        <form className="card patient-form" onSubmit={handleSubmit}>
    <input name="Patient Name"  placeholder="Patient Name" value={Name} onChange={(e) => setName(e.target.value)}/> 
    <input name="Age" placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value)}/>
    <input name="Department" placeholder="Department" value={Department} onChange={(e) => setDepartment(e.target.value)}/>
    <button className="add-btn" type="submit">Add patient</button>
    </form> 
    <p>Total: {patient.length}</p> 

    <h1 className="patients-title">Patients</h1>

    <ul className="card patient-list">
        {patient.map((patient,index) => {
            return(
                <li className="patient-item" key={index}>
                    {patient.Name} - {patient.Age} - {patient.Department}
                    <button className="delete-btn" onClick={() => onDelete(index)}> Delete </button>
                </li>
            )


        })}
    </ul>
    </div>
);


} 

export default ReactForm