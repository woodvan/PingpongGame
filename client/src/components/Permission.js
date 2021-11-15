import React, { Component, Fragment } from 'react';

class Permission extends Component {

    isAllowed(user, allowed_groups) {
        const groups = (user && user.groups) || []
        if (user && user.is_superuser)
            return true
        for (const ug of groups) {
            for (const ag of allowed_groups) {
                if (ug.name === ag.name) return true
            }
        }
        return false
    }

    render() {
        let {children, user, allowed_groups} = this.props;
        const isAllowed = this.isAllowed(user, allowed_groups)
        return (isAllowed && <Fragment>
            {children}
        </Fragment>);
    }
}

export default Permission;