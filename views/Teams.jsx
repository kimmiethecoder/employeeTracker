const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
    return(
      <select className="form-select form-select-lg" value={ selectedTeam } onChange= { handleTeamSelectionChange }>
        <option value="Executive Team">Executive Team</option>
        <option value="Engineering Team">Engineering Team</option>
        <option value="Southwest Team">Southwest Team</option>
        <option value="Southeast Team">Southeast Team</option>
      </select>
    )
  }
  export default Teams;