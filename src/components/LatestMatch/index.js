import React from 'react'
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    matchStatus,
    result,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="latest-match-details">
        <div className="team-details">
          <p className="team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <div className="match-details">
          <p className="match-detail">
            <span className="detail-label">First Innings</span>
            {firstInnings}
          </p>
          <p className="match-detail">
            <span className="detail-label">Second Innings</span>
            {secondInnings}
          </p>
          <p className="match-detail">
            <span className="detail-label">Man Of The Match</span>
            {manOfTheMatch}
          </p>
          <p className="match-detail">
            <span className="detail-label">Match Status</span>
            {matchStatus}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
