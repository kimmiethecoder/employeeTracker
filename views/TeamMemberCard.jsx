import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
  return(
    <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam? "card m-2 standout": "card m-2")} style={{ 
                  cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                  
                  {(employee.gender === "male") ? <img src={maleProfile} className="card-img-top"/> 
                  : <img src={femaleProfile} className="card-img-top"/>}
                  
                  <div className="card-body">
                    <h6 className="card-title text-center text-uppercase">{employee.fullName}</h6>
                    <p className="card-text">{employee.designation}</p>
                  </div>
                </div>
  )
}
export default TeamMemberCard;