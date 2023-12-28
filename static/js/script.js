function func1() {
  var apiurl = 'https://' + document.domain + '/api?input_text=' + document.getElementById("input_message").value + '&out_lang=fr';
  var request = new XMLHttpRequest();

  request.open('GET', apiurl, true);
  request.responseType = 'text';
  request.onload = function () {
      var data = JSON.parse(this.response);
      document.getElementById("output_message").innerHTML = data.output_text;
  };
  request.send();
}

function func2() {
    document.getElementById("input_message").value = '';
    document.getElementById("output_message").innerHTML = '';
}