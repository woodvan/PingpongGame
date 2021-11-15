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
const warnning_notification_config = {
  ...notification_config,
  message: 'Your action was done successfully',
  type: NOTIFICATION_TYPE_WARNING,
//   icon: '<i className="fa fa-check" />'
}
const error_notification_config = {
  ...notification_config,
  message: 'Your action was done successfully',
  type: NOTIFICATION_TYPE_ERROR,
//   icon: '<i className="fa fa-check" />'
}

export function sendSuccessNotification(message) {
    return createNotification({...success_notification_config, message: message})
}

export function sendWarningNotification(message) {
    return createNotification({...warnning_notification_config, message: message})
}

export function sendErrorNotification(message) {
    return createNotification({...error_notification_config, message: message})
}