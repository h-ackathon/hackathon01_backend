import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    onLeagueChange, onMatchChange, onPlayerChange,
    onStatChange, fetchAllLeagues, saveStat
} from '../actions/stats';
import PLAYER_FORM from '../constants/playerform';

class Stats extends PureComponent {

    componentDidMount() {
        this.props.fetchAllLeagues();
    };

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-8 col-xs-12 offset-md-3 offset-sm-2 mt-3">

                        <h2 className="mb-3">Player Stats</h2>

                        <div className="form-group">
                            <label>Select League</label>
                            <select id="league" onChange={this.props.onLeagueChange}>
                                <option value={0}>None selected</option>
                                {
                                    this.props.leagues.map(l =>
                                        <option value={l.key} key={l.key}>{l.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Select Match</label>
                            <select id="match" onChange={this.props.onMatchChange}>
                                <option value={0}>None selected</option>
                                {
                                    this.props.matches.map((m, i) =>
                                        <option value={m._id} key={`mt${i}`}>{m.title}</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Select Player</label>
                            <select id="player" onChange={this.props.onPlayerChange}>
                                <option value={0}>None selected</option>
                                {
                                    this.props.players.map((p, i) =>
                                        <option value={p.player._id} key={`pl${i}`}>
                                            {p.player.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        {
                            PLAYER_FORM.map(p =>
                                <div key={p.key} className="form-group">
                                    <label>{p.title}</label>
                                    <input min={0} type="number" id={p.key}
                                        className="form-control"
                                        placeholder={p.title}
                                        onChange={this.props.onStatChange} />
                                </div>
                            )
                        }

                        <button onClick={() => this.props.saveStat(
                            this.props.league, this.props.match, this.props.player, 
                            this.props.player_stats
                        )}
                            type="submit" className="btn btn-primary border-0">Submit</button>

                    </div>
                </div>
            </div>
        );
    };
};

const mapState = function ({ stats }) {
    const { leagues, matches, players, league, match, player,
        loading, error,
        error_message, player_stats } = stats;

    return {
        leagues, matches, players, league, match, player,
        loading, error,
        error_message, player_stats
    };
};

export default connect(mapState, {
    onLeagueChange, onMatchChange, onPlayerChange,
    onStatChange, fetchAllLeagues, saveStat
})(Stats);