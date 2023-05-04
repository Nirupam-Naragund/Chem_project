var start = alert("Welcome to our website!  Calculate the corrosion penetration rate for free!!")

var choose = alert("Select 1 mpy and 2 mmpy and 3 for time ")

var c1 = parseInt(prompt("Enter "))
if (c1 == 1) {
  alert(cpr_mpy()) 
} else if (c1 == 2) {
  alert(cpr_mmpy()) 
} else {
  alert(time())
}

function cpr_mpy() {
  const k = parseInt(534)
  var w = parseFloat(prompt("What is the weight?"))
  var p = parseFloat(prompt("What is the density?"))
  var a = parseFloat(prompt("What is the area in inches?"))
  var t = parseFloat(prompt("What is the time"))

  alert((k * w) / p * a * t)
}

function cpr_mmpy() {
  const k = parseFloat(87.6)
  var w = parseFloat(prompt("What is the weight?"))
  var p = parseFloat(prompt("What is the density?"))
  var a = parseFloat(prompt("What is the area in inches?"))
  var t = parseFloat(prompt("What is the time"))

  alert((k * w) / p * a * t)
}

function time() {
  var s = parseInt(prompt("Enter 1 for to enter cpr in mmpy and 2 to enter cpr in mpy"))

  if (s == 1) {
    return time1()
  }
  else {
    return time_2()
  }
  function time1() {
    const k = parseFloat(87.6)
    var w = parseFloat(prompt("What is the weight?"))
    var p = parseFloat(prompt("What is the density?"))
    var a = parseFloat(prompt("What is the area in inches?"))
    var e = parseFloat(prompt("What is the value of cpr"))

    alert((k * w) / p * a * e)}

    function time_2() {
      const k = parseInt(534)
      var w = parseFloat(prompt("What is the weight?"))
      var p = parseFloat(prompt("What is the density?"))
      var a = parseFloat(prompt("What is the area in inches?"))
      var f = parseFloat(prompt("What is the cpr"))

      alert((k * w) / p * a * f)
    }
  }
