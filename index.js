let homeScoreEl = document.getElementById("homescore")
let homeScore = 0

if (document.getElementById("homebtn1")) {
  function addHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
  }
  if (document.getElementById("homebtn2")) {
    function addHomeTwo() {
      homeScore += 2
      homeScoreEl.textContent = homeScore
    }
  }
  if (document.getElementById("homebtn3")) {
    function addHomeThree() {
      homeScore += 3
      homeScoreEl.textContent = homeScore
    }
  }
}

let guestscoreEl = document.getElementById("guestscore")
let guestScore = 0

if (document.getElementById("guestbtn1")) {
  function addGuestOne() {
    guestScore += 1
    guestscoreEl.textContent = guestScore
  }
  if (document.getElementById("guestbtn2")) {
    function addGuestTwo() {
      guestScore += 2
      guestscoreEl.textContent = guestScore
    }
  }
  if (document.getElementById("guestbtn3")) {
    function addGuestThree() {
      guestScore += 3
      guestscoreEl.textContent = guestScore
    }
  }
}

function resetScore() {
  document.getElementById("reset")
  homeScoreEl.textContent = 00
  guestscoreEl.textContent = 00
}

