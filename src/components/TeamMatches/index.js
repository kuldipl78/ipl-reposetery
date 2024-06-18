import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamDetails: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        umpire: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(match => ({
        id: match.id,
        competingTeam: match.competing_team,
        competingTeamLogo: match.competing_team_logo,
        date: match.date,
        firstInnings: match.first_innings,
        secondInnings: match.second_innings,
        manOfTheMatch: match.man_of_the_match,
        matchStatus: match.match_status,
        result: match.result,
        umpire: match.umpires,
        venue: match.venue,
      })),
    }
    this.setState({isLoading: false, teamDetails: formattedData})
  }

  render() {
    const {isLoading, teamDetails} = this.state

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-content">
            <img
              src={teamDetails.teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <LatestMatch latestMatch={teamDetails.latestMatchDetails} />
            <ul className="recent-matches-list">
              {teamDetails.recentMatches.map(match => (
                <MatchCard key={match.id} matchDetails={match} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
