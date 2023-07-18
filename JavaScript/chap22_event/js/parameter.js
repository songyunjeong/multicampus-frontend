function getParameter(paramName, paramValue) {
  var parameter = {
    paramName: paramName,
    paramValue: paramValue,
  };

  return parameter;
}

function getParameters(search) {
  var params = search.substr(1).split("&"); // substr(1): 물음표 제거, 물음표 빼고 다음 문자열부터 가져옴

  for (var i in params) {
    var param = params[i].split("=");
    params[i] = getParameter(param[0], decodeURIComponent(param[1])); // decodeURIComponent: 디코딩. 한글 아이디 사용 가능함. (인코딩은 자동으로 해줌)
  }

  var parameters = {
    params: params,

    getParamValue: function (paramName) {
      var paramValue = "";

      for (var i in this.params) {
        if (params[i].paramName === paramName) {
          paramValue = params[i].paramValue;
          break;
        }
      }

      return paramValue;
    },
  };

  return parameters;
}

/*
var search = "?name=harper&age=28&gender=female";
alert(
  getParameters(search)[1].paramName +
    " : " +
    getParameters(search)[1].paramValue
);
*/
