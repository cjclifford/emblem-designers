function onToggleDescriptionSize(event) {
  description = event.target.parentElement.parentElement.getElementsByClassName('component__description__text')[0];
  descriptionToggle = event.target;

  if (!description || !descriptionToggle)
    return;

  more = description.style && description.style.overflow;

  if (!more || more == "hidden") {
    description.style.maxHeight = 'initial';
    description.style.overflow = 'initial';
    descriptionToggle.textContent = "Read less";
  } else {
    description.style.maxHeight = '22ex';
    description.style.overflow = 'hidden';
    descriptionToggle.textContent = "Read more";
    setToggleVisible(description, descriptionToggle);
  }
}

function setToggleVisible(description, descriptionToggle) {
  if (description && descriptionToggle) {
    descriptionToggle.hidden = description.style.maxHeight != 'initial'
      && description.scrollHeight - 5 <= description.clientHeight;
  }
}

function onSetToggleAll() {
  descriptionToggles = document.getElementsByClassName('component__description__toggle');
  for (descriptionToggle of descriptionToggles) {
    description = descriptionToggle.parentElement.parentElement.getElementsByClassName('component__description__text')[0];
    setToggleVisible(description, descriptionToggle);
  }
}

function showTeam(teamId) {
  lazyLoadButton = document.getElementById('lazy-load-button');
  if (teamId === null || teamId === undefined) {
    lazyLoadButton.style.display = "initial";
    showAllTeams();
    return;
  } else {
    lazyLoadButton.style.display = "none";
    for (team of this.teams)
      team.style.display = "none";
    this.teams[teamId].style.display = "initial";
  }
}

function initLazyLoad() {
  lazyLoadButton = document.getElementById('lazy-load-button');
  this.lazyLoadIndex = 0;
  for (team of this.teams)
    team.style.display = "none";
  this.teams[this.lazyLoadIndex].style.display = "initial";
  checkLazyLoadLimit();
}

function showAllTeams() {
  for (team in this.teams) {
    console.log(team);
    if (team <= this.lazyLoadIndex)
      this.teams[team].style.display = "initial";
    else
      this.teams[team].style.display = "none";
  }
  loadMoreVeryLazily();
}

function loadMoreVeryLazily() {
  if (this.teams.length - 1 > this.lazyLoadIndex) {
    this.lazyLoadIndex++;
    this.teams[this.lazyLoadIndex].style.display = "initial";
    checkLazyLoadLimit();
  }
}

function checkLazyLoadLimit() {
  lazyLoadButton = document.getElementById('lazy-load-button');
  if (this.teams.length - 1 === this.lazyLoadIndex)
    lazyLoadButton.style.display = "none";
}

window.onresize = onSetToggleAll;

window.onload = function () {
  window.setTimeout(0);
  this.teams = document.getElementsByClassName('component__team');
  onSetToggleAll();
  initLazyLoad();
}