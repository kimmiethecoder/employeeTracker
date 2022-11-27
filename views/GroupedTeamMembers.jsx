import { useState } from 'react';

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() 
  {
    var teams = [];

    var teamExecutiveMembers = employees.filter((employee) => employee.teamName === 'Executive Team');
    var teamExecutive = {team: 'Executive Team', 
                         members: teamExecutiveMembers, 
                         collapsed: selectedTeam === 'Executive Team' ? false:true}
    teams.push(teamExecutive);

    var teamEngineeringMembers = employees.filter((employee) => employee.teamName === 'Engineering Team');
    var teamEngineering = { team: 'Engineering Team', 
                         members: teamEngineeringMembers, 
                         collapsed: selectedTeam === 'Engineering Team' ? false:true }
    teams.push(teamEngineering);

    var teamSoutheastMembers = employees.filter((employee) => employee.teamName === 'Southeast Team');
    var teamSoutheast = { team: 'Southeast Team', 
                         members: teamSoutheastMembers, 
                         collapsed: selectedTeam === 'Southeast Team' ? false:true }
    teams.push(teamSoutheast);

    var teamSouthwestMembers = employees.filter((employee) => employee.teamName === 'Southwest Team');
    var teamSouthwest = { team: 'Southwest Team', 
                         members: teamSouthwestMembers, 
                         collapsed: selectedTeam === 'Southwest Team' ? false:true }
    teams.push(teamSouthwest);

    return teams;
  }
  

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id 
                                                             ?{...groupedData,collapsed:!groupedData.collapsed}
                                                             :groupedData);
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }
  
  return (
    <main className = "container"> 
      {
        groupedEmployees.map((item) => {
          return (
            <div key = {item.team} className='card mt-2' style={{cursor: "pointer"}}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id ={"collapse_" + item.team}
                      className={item.collapsed === true? "collapse" : ""}>
              <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          )
        })
      }  
    </main>
  )
  
}
export default GroupedTeamMembers