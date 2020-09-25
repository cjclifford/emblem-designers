function onToggleDescriptionSize(event) {
  description = event.target.parentElement.parentElement.getElementsByClassName('component__description__text')[0];
  descriptionToggle = event.target;

  if (!description || !descriptionToggle)
    return;

  more = description.style && description.style.overflow;

  if (!more || more == 'hidden') {
    description.style.maxHeight = 'initial';
    description.style.overflow = 'initial';
    descriptionToggle.textContent = 'Read less';
  } else {
    description.style.maxHeight = '22ex';
    description.style.overflow = 'hidden';
    descriptionToggle.textContent = 'Read more';
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
  hideHorizontalRules();
  lazyLoadButton = document.getElementById('lazy-load-button');
  let teamFilterButtons = document.getElementById('team-filters').children;
  let teamFilterButton;

  for (let button of teamFilterButtons) {
    button.children[0].classList.remove('active');
  }

  if (teamId === null) {
    teamFilterButton = document.getElementById('team-all');
    teamFilterButton.classList.add('active');
    lazyLoadButton.style.display = 'block';
    showAllTeams();
  } else {
    teamFilterButton = document.getElementById(`team-${teamId}`);
    teamFilterButton.classList.add('active');
    lazyLoadButton.style.display = 'none';
    for (team of this.teams) {
      if (team === this.teams[teamId]) {
        team.style.display = 'block';
      } else {
        team.style.display = 'none';
      }
    }
  }
}

function initLazyLoad() {
  lazyLoadButton = document.getElementById('lazy-load-button');
  this.lazyLoadIndex = 0;
  for (team of this.teams)
    team.style.display = 'none';
  this.teams[this.lazyLoadIndex].style.display = 'block';
  checkLazyLoadLimit();
}

function showAllTeams() {
  let i = 0;
  for (team of this.teams) {
    if (i <= this.lazyLoadIndex)
      team.style.display = 'block';
    else
      team.style.display = 'none';
    i++;
  }
  loadMoreVeryLazily();
  showHorizontalRules();
}

function loadMoreVeryLazily() {
  if (this.teams.length - 1 > this.lazyLoadIndex) {
    this.lazyLoadIndex++;
    this.teams[this.lazyLoadIndex].style.display = 'block';
    checkLazyLoadLimit();
  }
}

function checkLazyLoadLimit() {
  lazyLoadButton = document.getElementById('lazy-load-button');
  if (this.teams.length - 1 === this.lazyLoadIndex)
    lazyLoadButton.style.display = 'none';
}

function showHorizontalRules() {
  let rules = document.getElementsByClassName("component__team__hrule");
  for (let rule of rules) {
    rule.style.display = 'block';
  }
}

function hideHorizontalRules() {
  let rules = document.getElementsByClassName("component__team__hrule");
  for (let rule of rules) {
    rule.style.display = 'none';
  }
}

window.onresize = onSetToggleAll;

window.onload = function () {
  window.setTimeout(0);
  this.teams = document.getElementsByClassName('component__team');
  onSetToggleAll();
  initLazyLoad();
}