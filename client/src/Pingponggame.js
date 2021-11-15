import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'

import RegisterPage from "./containers/RegisterPage";
import RankingPage from "./containers/RankingPage";
import NotFoundPage from "./containers/NotFoundPage";

import { fetchCurrentUser } from './redux/modules/auth/actions'

class Pingponggame extends Component {

    async componentDidMount() {
        const { fetchCurrentUser } = this.props
        if (fetchCurrentUser) await fetchCurrentUser()
    }

    render() {
        const {authenticated} = this.props
        return(
            <Switch>
                <Route exact path="/" authenticated={authenticated} component={RegisterPage}/>
                <Route exact path="/ranking" authenticated={authenticated} component={RankingPage}/>
                <Route component={NotFoundPage} />                     
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
      // Auth
      user: state.auth.currentUser,
      authenticated: state.auth.authenticated,
      authenticating: state.auth.authenticating,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // Auth
      fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pingponggame)