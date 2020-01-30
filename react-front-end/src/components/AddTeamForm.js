import React from 'react';
import { connect } from 'react-redux';
import {
  getAllLeagues,
  teamFormInputChanged, 
  teamFormLeagueChanged,
  addTeam,
} from "../actions";

class AddTeamForm extends React.Component {

  teamFormInputChanged = ({ e, prop }) => {
    this.props.teamFormInputChanged(e.target.value, prop)
  }

  componentDidMount() {
    this.props.getAllLeagues();
  }

  addTeam = () => {
    let team = {
      name: this.props.name,
      key: this.props.teamkey,
      league: this.props.league,
    }
    this.props.addTeam(team);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-8 col-xs-12 offset-md-3 offset-sm-2 mt-3">
            <h4 className="mb-3">Add Team</h4>
            <div className="form-group">
              <label>Select League</label>
              <select id="playerleague" onChange={this.props.teamFormLeagueChanged}>
                <option defaultValue={0}>None selected</option>
                {
                  this.props.allLeagues.map(l =>
                    <option value={l.key} key={l.key}>{l.name}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group">
              <label>Team Name</label>
              <input id="teamname"
                value={this.props.name}
                onChange={(e) => this.teamFormInputChanged({ e, prop: 'name' })}
              />
            </div>
            <div className="form-group">
              <label>Team Key</label>
              <input id="key"
                value={this.props.teamkey}
                onChange={(e) => this.teamFormInputChanged({ e, prop: 'key' })}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.addTeam}>Save Team</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { allLeagues } = state.leagues;
  const { name, league, key } = state.addTeamForm;
  return {
    allLeagues,
    name, league,
    teamkey: key,
  }
}

export default connect(
  mapStateToProps,
  {
    getAllLeagues,
    teamFormInputChanged,
    teamFormLeagueChanged,
    addTeam,
  }
)(AddTeamForm)