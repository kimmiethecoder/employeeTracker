import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
 
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={ selectedTeam } onChange= { handleTeamSelectionChange }>
            <option value="Executive Team">Executive Team</option>
            <option value="Engineering Team">Engineering Team</option>
            <option value="Southwest Team">Southwest Team</option>
            <option value="Southeast Team">Southeast Team</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam? "card m-2 standout": "card m-2")} style={{ 
                  cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                  
                  {(employee.gender === "male") ? <img src={maleProfile} className="card-img-top"/> 
                  : <img src={femaleProfile} className="card-img-top"/>}
                  
                  <div className="card-body">
                    <h6 className="card-title">Full Name: {employee.fullName}</h6>
                    <p className="card-text">Designation: {employee.designation}</p>
                  </div>
                </div>
            ))
            }
          </div>
        </div>
      </div>
    </main>
  )
  
}
export default Employees