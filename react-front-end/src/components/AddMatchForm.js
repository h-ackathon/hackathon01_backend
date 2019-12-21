import React from 'react';
import { connect } from 'react-redux';
import {
  getAllLeagues,
  matchFormGetTeams,
  matchFormTeamChanged, 
  matchFormDateChanged,
  matchFormTimeChanged,
  addMatch,
} from "../actions";
import * as moment from 'moment';

class AddMatchForm extends React.Component {

  componentDidMount() {
    this.props.getAllLeagues();
  }

  matchFormTeamChanged = ({ e, prop }) => {
    this.props.matchFormTeamChanged(e.target.value, prop);
  }

  addMatch = () => {
    let teams = [];
    teams.push(this.props.teamone);
    teams.push(this.props.teamtwo);
    let match = {
      name: this.props.name,
      league: this.props.league,
      teams: teams,
      start_date_time: `${moment().format('MM/DD/YYYY', this.props.date)}T${moment().format(this.props.time)}:00`,
      end_date_time: `${moment().format('MM/DD/YYYY', this.props.date)}T${moment().format(this.props.time)}:00`
    }
    this.props.addMatch(match);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-8 col-xs-12 offset-md-3 offset-sm-2 mt-3">
            <h4 className="mb-3">Add Match</h4>
            <div className="form-group">
              <label>Select League</label>
              <select id="playerleague" onChange={this.props.matchFormGetTeams}>
                <option defaultValue={0}>None selected</option>
                {
                  this.props.allLeagues.map(l =>
                    <option value={l.key} key={l.key}>{l.name}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group">
              <label>Select First Team</label>
              <select id="team" onChange={(e) => this.matchFormTeamChanged({ e, prop: 'teamone' })}>
                <option value={0}>None selected</option>
                {
                  this.props.allTeams.map((team, i) =>
                    <option value={team.key} key={team.key}>{team.name}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group">
              <label>Select Second Team</label>
              <select id="team" onChange={(e) => this.matchFormTeamChanged({ e, prop: 'teamtwo' })}>
                <option value={0}>None selected</option>
                {
                  this.props.allTeams.map((team, i) =>
                    <option value={team.key} key={team.key}>{team.name}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input id="date" type="date" value={this.props.date} onChange={this.props.matchFormDateChanged} />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input id="time" type="time" value={this.props.time} onChange={this.props.matchFormTimeChanged} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.addMatch}>Save Match</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  const { allLeagues } = state.leagues;
  const { allTeams } = state.teams;
  const { league, teamone, teamtwo, date, time, name } = state.addMatchForm;

  return {
    allLeagues,
    allTeams,
    league, teamone, teamtwo, date, time, name,
  }
}

export default connect(
  mapStateToprops,
  {
    matchFormGetTeams,
    getAllLeagues,
    matchFormTeamChanged,
    matchFormDateChanged,
    matchFormTimeChanged,
    addMatch,
  }
)(AddMatchForm);