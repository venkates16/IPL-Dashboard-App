// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {obj} = props
  const {id, name, teamImageUrl} = obj
  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div className="MatchAlign">
          <img src={teamImageUrl} alt={name} className="matchLogo" />
          <p>{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
