import React from 'react'
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const matchStatusClassName =
    matchStatus === 'Won' ? 'match-status-won' : 'match-status-lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
