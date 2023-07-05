/* 
          body 태그 내의 script를 제거하는 코드를 작성하세요. 
      */

var gugudan = "<table>";

for (var num = 0; num <= 9; num++) {
  gugudan += "<tr>";

  for (var dan = 2; dan <= 9; dan++) {
    if (num == 0) {
      gugudan += "<th>" + dan + "단</th>";
    } else {
      gugudan += "<td>" + dan + " * " + num + " = " + dan * num + "</td>";
    }
  }

  gugudan += "</tr>";
}

gugudan += "</table>";

window.onload = function () {
  document.body.innerHTML += gugudan;
};
