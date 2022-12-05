function normal(val) {
  switch (val) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
  }
}
function tens(val) {
  switch (val) {
    case 2:
      return "twenty";
    case 3:
      return "thrirty";
    case 4:
      return "fourty";
    case 5:
      return "fifty";
    case 6:
      return "sixty";
    case 7:
      return "seventy";
    case 8:
      return "eighty";
    case 9:
      return "ninety";
  }
}
function special(val) {
  switch (val) {
    case 10:
      return "ten";
    case 11:
      return "eleven";
    case 12:
      return "twelve";
    case 13:
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fifteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "sighteen";
    case 19:
      return "nineteen";
  }
}

function convert() {
  var value = document.querySelector("input").value;

  var string_value = "";
  if (value < 0 || value > 999) {
    string_value = "Out of range";
  } else if (value == 0) {
    string_value = "zero";
  } else {
    if (Math.floor(value / 100)) {
      string_value =
        string_value + normal(Math.floor(value / 100)) + " hundred";
      var and = true;
    }
    value %= 100;
    var temp = value % 100;
    if (temp >= 10 && temp <= 19) {
      if (and) {
        string_value += " and ";
      }
      string_value += special(temp);
      and = false;
      var end = true;
    } else if (temp > 19) {
      if (and) {
        string_value += " and ";
      }
      string_value = string_value + tens(Math.floor(temp / 10)) + " ";
      and = false;
    }
    value %= 10;
    if (!end && value) {
      if (and) {
        string_value += " and ";
      }
      string_value = string_value + normal(value);
    }
  }
  var first = string_value[0].toUpperCase();
  string_value = first + string_value.slice(1, string_value.length);
  document.querySelector(".output").innerHTML = string_value + ".";
}
document.addEventListener("keypress", function (event) {
  // console.log(event.key);
  if (event.key == "Enter") convert();
});
