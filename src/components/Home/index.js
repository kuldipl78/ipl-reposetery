import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, iplTeams: []}

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({isLoading: false, iplTeams: formattedData})
  }

  render() {
    const {isLoading, iplTeams} = this.state

    return (
      <div className="main-container">
        <div className="dashboard">
          <div className="ipl-container">
            <img
              alt="ipl logo"
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
        </div>
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ipl-teams">
            {iplTeams.map(team => (
              <TeamCard key={team.id} teamData={team} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
