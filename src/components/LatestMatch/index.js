// Write your code here
import './index.css'

const LatestMatch = props => {
  const {obj} = props

  const {
    secondInnings,
    firstInnings,
    date,
    venue,
    result,
    competingTeamLogo,
    manOfTheMatch,
    umpires,
    competingTeam,
  } = obj
  console.log(firstInnings)
  return (
    <div className="latestMatch">
      <div className="alignLogoToRight">
        <div className="matchdata">
          <p>{competingTeam}</p>

          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="teamLogo"
          alt={`latest match  ${competingTeam}`}
        />
      </div>
      <div className="matchdata">
        <p className="textInings">first Innings</p>
        <p className="pareInnings">{firstInnings}</p>
        <h1 className="textInings">second Innings</h1>
        <p className="pareInnings">{secondInnings}</p>
        <h1 className="textInings">Man of the Match</h1>
        <p className="pareInnings">{manOfTheMatch}</p>
        <h1 className="textInings">umpires</h1>
        <p className="pareInnings">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
