// Write your code here
import './index.css'

const MatchCard = props => {
  const {obj} = props
  const {competingTeam, result, matchStatus, competingTeamLogo, id} = obj
  const colorStatus = matchStatus === 'Won' ? 'wonColor' : 'lostColor'
  return (
    <li className="matchCards">
      <img
        src={competingTeamLogo}
        className="LogoMatch"
        alt={` competing team ${competingTeam} `}
      />

      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={colorStatus}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
