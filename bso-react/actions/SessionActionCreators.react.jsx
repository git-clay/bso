var BsoAppDispatcher = require('../dispatcher/bsoAppDispatcher.js');
var BsoConstants = require('../constants/bsoConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = BsoConstants.ActionTypes;

module.exports = {

  signup: function(email, password, passwordConfirmation) {
    BsoAppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, password, passwordConfirmation);
  },

  login: function(email, password) {
    BsoAppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout: function() {
    BsoAppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }

};
