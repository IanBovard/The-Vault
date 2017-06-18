'use strict';
function vaultGen(){
  var secretValue = {};

  function getValue (key){
    if (!key){
      return null;
    }else if(!secretValue.hasOwnProperty(key)){
      return null;
    }else{
      return secretValue[key];
    }
  }

  function setValue (key, value){
    secretValue[key] = value;
    return secretValue;
  }

return {
  getValue : getValue,
  setValue : setValue
      };

}

module.exports = vaultGen;