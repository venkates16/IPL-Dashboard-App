// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.getMatches()
  }

  caseConverionMethod = matchObj => ({
    umpires: matchObj.umpires,
    result: matchObj.result,
    manOfTheMatch: matchObj.man_of_the_match,
    id: matchObj.id,
    date: matchObj.date,
    venue: matchObj.venue,
    competingTeam: matchObj.competing_team,
    competingTeamLogo: matchObj.competing_team_logo,
    firstInnings: matchObj.first_innings,
    secondInnings: matchObj.second_innings,
    matchStatus: matchObj.match_status,
  })

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const request = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const response = await request.json()
    const teamBannerUrl = response.team_banner_url
    const latestMatchDetails = response.latest_match_details
    const recentMatches = response.recent_matches

    //  console.log({a: team_banner_url})

    const bannerImg = teamBannerUrl

    const latestMatchDetailesObj = this.caseConverionMethod(latestMatchDetails)

    const recentMatchesArray = recentMatches.map(each =>
      this.caseConverionMethod(each),
    )
    console.log(recentMatchesArray)
    this.setState(prev => ({
      isLoading: !prev.isLoading,
      bannerImg,
      latestMatchDetailesObj,
      recentMatchesArray,
    }))
  }

  renderMatchedData = () => {
    const {recentMatchesArray, latestMatchDetailesObj, bannerImg} = this.state

    return (
      <div>
        <div>
          <img src={bannerImg} className="bannerLogo" alt="team banner" />
        </div>
        <h1>Latest Matches</h1>
        <div>
          <LatestMatch obj={latestMatchDetailesObj} />
        </div>
        <ul className="matchCardContainer">
          {recentMatchesArray.map(each => (
            <MatchCard obj={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  loaderElement = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const matchedColor = () => {
      const {match} = this.props
      const {params} = match
      const {id} = params
      switch (id) {
        case 'RCB':
          return 'rcb'
        case 'KKR':
          return 'kkr'
        case 'KXP':
          return 'kxp'
        case 'CSK':
          return 'csk'
        case 'RR':
          return 'rr'
        case 'MI':
          return 'mi'
        case 'SH':
          return 'srh'
        case 'DC':
          return 'dc'
        default:
          return ''
      }
    }

    const {isLoading} = this.state
    return (
      <div className={`${matchedColor()} matchTeams`}>
        {isLoading ? this.loaderElement() : this.renderMatchedData()}
      </div>
    )
  }
}

export default TeamMatches
