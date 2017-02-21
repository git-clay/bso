var BsoAppDispatcher = require('../dispatcher/bsoAppDispatcher.js');
var BsoConstants = require('../constants/bsoConstants.js');

var ActionTypes = BsoConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    BsoAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

 // ... 
};