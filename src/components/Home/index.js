// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDeatiles()
  }

  getTeamDeatiles = async () => {
    const request = await fetch('https://apis.ccbp.in/ipl')
    const response = await request.json()
    console.log(this.props)
    const {teams} = response
    console.log(teams)
    this.setState({
      teamsData: teams.map(each => ({
        id: each.id,
        name: each.name,
        teamImageUrl: each.team_image_url,
      })),
      isLoading: false,
    })
  }

  render() {
    const {isLoading, teamsData} = this.state

    return (
      <div className="HomeContainer">
        <Link to="/">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div>
              <div className="iplLogAlign">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                  className="imgLogIpl"
                  alt="ipl logo"
                />
                <h1>IPL DashBoard</h1>
              </div>

              <ul>
                {teamsData.map(each => (
                  <TeamCard key={each.id} obj={each} />
                ))}
              </ul>
            </div>
          )}
        </Link>
      </div>
    )
  }
}

export default Home
