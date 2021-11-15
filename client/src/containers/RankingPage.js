import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import { matchGame } from '../redux/modules/auth/actions'
import BaseLayout from './Layouts/BaseLayout';

class RankingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player1: '',
            player2: '',
            isCheckedOne: true,
            isCheckedTwo: false
        }
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this.matchGame = this.matchGame.bind(this)
    }

    onChange1(e) {
        this.setState({player1: e.target.value})
    }

    onChange2(e) {
        this.setState({player2: e.target.value})
    }

    onChangeChecked = (val) => () => {
        this.setState({isCheckedOne: false})
        this.setState({isCheckedTwo: false})
        if (val === 1)
            this.setState({isCheckedOne: true})
        else
            this.setState({isCheckedTwo: true})
    }

    componentDidMount() {
        if (this.props.players) {
            this.setState({player1: this.props.players[0]})
            this.setState({player2: this.props.players[0]})
        }
    }

    matchGame() {
        const winner = this.state.isCheckedOne? 1 : 2;
        const {player1, player2} = this.state
        const payload = {player1: player1, player2: player2, winner: winner}
        console.log(payload)
        this.props.matchGame(payload)
    }

    displayPlayers() {
        console.log("=========display", this.props.players)
        return this.props.players.map((player, index) => {
            return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.win}</td>
                <td>{player.lose}</td>
            </tr>)
        })
    }

    getPlayersList() {
        return this.props.players.map((player) => {
            return (<option key={player._id}>
                {player.username}
            </option>)
        })
    }

    render() {
        return <BaseLayout>
            <Row className="vh-100">
                <Col className="mt-auto mb-auto">
                    <Card className="mx-auto" style={{maxWidth: 600}}>
                        <CardHeader className="text-center">
                            <h2>Player List</h2>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th style={{minWidth: 30}}>Rank</th>
                                        <th style={{minWidth: 80}}>Name</th>
                                        <th style={{minWidth: 80}}>Email</th>
                                        <th style={{minWidth: 80}}>Win</th>
                                        <th style={{minWidth: 80}}>Lose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.displayPlayers()}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="mt-auto mb-auto">
                    <Card className="mx-auto" style={{maxWidth: 450}}>
                        <CardHeader className="text-center">
                            <h2>Create a Match</h2>
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label for="username">Player 1</Label>
                                <Input type="select" name="player1" value={this.state.player1} onChange={this.onChange1}>
                                    {this.getPlayersList()}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Player 2</Label>
                                <Input type="select" name="player2" value={this.state.player2} onChange={this.onChange2}>
                                    {this.getPlayersList()}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="winner">Winner</Label>
                                <FormGroup style={{textAlign: 'center'}}>
                                    <Label>Player1</Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Input type="radio" name="winner" checked={this.state.isCheckedOne} onChange={this.onChangeChecked(1)} />&nbsp;&nbsp;&nbsp;
                                    <Label>Player2</Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Input type="radio" name="winner" checked={this.state.isCheckedTwo} onChange={this.onChangeChecked(2)} />
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" size="md" block onClick={this.matchGame}>Match</Button>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </BaseLayout>
    }
}

const mapStateToProps = state => {
    const players = state.auth.players || [];
    return {
        players: players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        matchGame: (payload) => dispatch(matchGame(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage)