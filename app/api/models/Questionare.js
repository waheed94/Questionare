/**
 * Questionare.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 
  attributes: {
    
    title: {
    	type : 'STRING',
    	required :true
    },
    description: {
    	type : 'STRING',
    	required : true
    },
    user: {
      model: 'user' 
    },
    sections :{
    	collection : 'section',
    	via        : 'questionare'
    }
  
  }
};

