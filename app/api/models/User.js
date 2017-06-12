/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    provider: {
      type : 'string',
      required : true
    } ,
    uid: {
      type :'string',
      required : true,
      unique :true
    },
    name: {
      type : 'string',
      required : 'true'
    },
    questionares: {
      collection: 'questionare',
      via: 'user'
    }
  }
};

