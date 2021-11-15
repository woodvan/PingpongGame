import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import { register } from '../redux/modules/auth/actions'
import BaseLayout from './Layouts/BaseLayout';
import {
    sendSuccessNotification,
    sendErrorNotification
  } from '../services/Notification';
import {createNotification, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_WARNING, NOTIFICATION_TYPE_ERROR} from 'react-redux-notify';

const notification_config = {
    duration: 5000,
    canDismiss: true,
    showCloseAllBtn: false,
    position: 'TopRight'
}
const success_notification_config = {
    ...notification_config,
    message: 'Your action was done successfully',
    type: NOTIFICATION_TYPE_SUCCESS,
  //   icon: '<i className="fa fa-check"/>'
}

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
        }
        this.onChange = this.onChange.bind(this)
        this.register = this.register.bind(this)
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    register() {
        if (!this.state.username || !this.state.email) {
            createNotification({...success_notification_config, message: "Please enter username and email."});
            return;
        }
        const {username, email} = this.state
        const payload = {username: username, email: email, win: 0, lose: 0}
        this.props.register(payload)
    }

    displayPlayers() {
        return this.props.players.map((player, index) => {
            return (<tr key={index}>
                <td>{player.username}</td>
                <td>{player.email}</td>
            </tr>)
        })
    }

    render() {
        return <BaseLayout>
            <Row className="vh-100">
                <Col className="mt-auto mb-auto">
                    <Card className="mx-auto" style={{maxWidth: 450}}>
                        <CardHeader className="text-center">
                            <h2>Player List</h2>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th style={{minWidth: 200}}>Player Name</th>
                                        <th style={{minWidth: 200}}>Email</th>
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
                            <h2>Register</h2>
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label for="username">Player Name</Label>
                                <Input type="text" name="username" onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" size="md" block onClick={this.register}>Add Player</Button>
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
      register: (payload) => dispatch(register(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)