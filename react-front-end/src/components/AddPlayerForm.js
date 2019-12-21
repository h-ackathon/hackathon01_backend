import React from 'react';
import {
  getAllLeagues,
  getAllTeams,
  inputChanged,
  inputTeamChanged,
  inputRadioChanged,
  addPlayer,
  clearAddPlayerForm,
} from "../actions";
import { connect } from 'react-redux';

class AddPlayerForm extends React.Component {

  componentDidMount() {
    this.props.getAllLeagues();
  }

  addPlayer = () => {
    let player = {
      league: this.props.league,
      team: this.props.team,
      teams: this.props.teams,
      name: this.props.name,
      image: 'http://justnewsly.com/wp-content/uploads/Fakhar-ZXaman.jpg',
      avatar_path: 'https://i.imgur.com/K3KJ3w4h.jpg',
      is_batsman: false,
      is_bowler: false,
      is_wicket_keeper: false,
      is_all_rounder: false,
      is_captain: false,
      is_vice_captain: false,
    }
    player[this.props.playerType] = true;
    this.props.addPlayer(player);
  }

  inputTeamChanged = (e, league) => {
    this.props.inputTeamChanged(e.target.value, league);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-8 col-xs-12 offset-md-3 offset-sm-2 mt-3">
            <h4 className="mb-3">Add Player</h4>
            <div className="form-group">
              <label>Select League</label>
              <select id="playerleague" onChange={this.props.getAllTeams}>
              <option defaultValue={0}>None selected</option>
                {
                  this.props.allLeagues.map(l =>
                    <option value={l.key} key={l.key}>{l.name}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group">
              <label>Select Team</label>
              <select id="team" onChange={(e) => this.inputTeamChanged(e, this.props.league)}>
                <option value={0}>None selected</option>
                {
                  this.props.allTeams.map((team, i) =>
                    <option value={team.key} key={team.key}>{team.name}</option>
                  )
                }
              </select>
            </div>
            <div className="form-group">
              <label>Player Name</label>
              <input id="name" value={this.props.name} onChange={this.props.inputChanged} />
            </div>
            <div className="form-group">
              <input type="radio"
                onChange={() => this.props.inputRadioChanged('is_batsman')}
                id="is_batsman"
                name="playerType"
                value={this.props.playerType}
              /> Batsman <br />
              <input type="radio"
                onChange={() => this.props.inputRadioChanged('is_bowler')}
                id="is_bowler"
                name="playerType"
                value={this.props.playerType}
              /> Bowler <br />
              <input type="radio"
                onChange={() => this.props.inputRadioChanged('is_all_rounder')}
                id="is_all_rounder"
                name="playerType"
                value={this.props.playerType}
              /> All Rounder <br />
              <input type="radio"
                onChange={() => this.props.inputRadioChanged('is_wicket_keeper')}
                id="is_wicket_keeper"
                name="playerType"
                value={this.props.playerType}
              /> Wicket Keeper <br />
            </div>
            <div className="form-group">
              <button onClick={this.addPlayer}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { allLeagues } = state.leagues;
  const { allTeams } = state.teams;
  const {
    name,
    league,
    team,
    teams,
    playerType, } = state.addPlayerForm;
  return {
    allLeagues,
    allTeams,
    name,
    league,
    team,
    playerType,
    teams,
  }
}

export default connect(
  mapStateToProps,
  {
    getAllLeagues,
    getAllTeams,
    inputChanged,
    inputTeamChanged,
    inputRadioChanged,
    addPlayer,
    clearAddPlayerForm,
  }
)(AddPlayerForm)