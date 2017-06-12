/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
  attributes: {
    type:  {
      type: 'string',
      enum: ['SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'BOOLEAN','LONG_DESCRIPTION','SHORT_DESCRIPTION']
    },
    text:  {
    	type :'string',
    	required : true
    },
      order: {
    	type : 'integer',
    	required :true
    },
    section : {
    	 model  : 'section'
    },
    options : {
    	collection : 'option',
    	via        : 'question'
    }
  }
};

