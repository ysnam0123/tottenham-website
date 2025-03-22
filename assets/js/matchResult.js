const team = {
  tottenham:{
    stadium : 'tottenham hotspurs stadium'
  },
  Manchester_United:{
    stadium: 'oldtrafford'
  }
}

const matchResults = [
  { home: 'Tottenham' , away: 'ManchesterUnited', result : '1-0', date:'2025.03.21', stadium:'Tottenham Hotspur Stadium'},
  { home: 'ManchesterUnited', away : 'Tottenham' , result : "0-3", date: '2025.03.25', stadium: 'Old Trafford'}
]


function createMatchElement (match) {
  const matchDiv = document.createElement('div');
  matchDiv.classList.add('match');

  const homeTeam = document.createElement('div');
  homeTeam.classList.add('homeTeam');
  homeTeam.classList.add('team');
  const homeTeamLogo = document.createElement('img')
  homeTeamLogo.src = `./assets/images/teams/${match.home}.svg`
  homeTeamLogo.classList.add('homeTeamLogo');
  homeTeamLogo.classList.add('teamLogo');
  homeTeamLogo.alt = match.home;
  const homeTeamName = document.createElement('div');
  homeTeamName.classList.add('homeTeamName,teamName');
  homeTeamName.textContent= match.home;

  const awayTeam = document.createElement('div');
  awayTeam.classList.add('awayTeam');
  awayTeam.classList.add('team');
  awayTeam.classList.add('teamLogo');
  const awayTeamName = document.createElement('div');
  awayTeamName.classList.add('awayTeamName,teamName');
  awayTeamName.textContent= match.away;

  const awayTeamLogo = document.createElement('img')
  awayTeamLogo.src = `./assets/images/teams/${match.away}.svg`
  awayTeamLogo.classList.add('awayTeamLogo');
  awayTeamLogo.classList.add('teamLogo');
  awayTeamLogo.alt = match.away;

  const score = document.createElement('div');
  score.classList.add('score');
  score.textContent = match.result;

  const matchInfo = document.createElement('div');
  const matchLocation = document.createElement('div');
  const matchDate = document.createElement('div');
  matchInfo.classList.add('matchInfo');
  matchLocation.classList.add('matchLocation');
  matchLocation.textContent = match.stadium;
  matchDate.classList.add('matchDate');
  matchDate.textContent = match.date;
  
  matchInfo.appendChild(matchLocation);
  matchInfo.appendChild(matchDate);

  homeTeam.appendChild(homeTeamLogo);
  homeTeam.appendChild(homeTeamName);
  awayTeam.appendChild(awayTeamLogo);
  awayTeam.appendChild(awayTeamName);

  matchDiv.appendChild(homeTeam);
  matchDiv.appendChild(score);
  matchDiv.appendChild(awayTeam);
  matchDiv.appendChild(matchInfo);


  return matchDiv
}

const matchResult = document.getElementById('matchResult')

matchResults.forEach(match=>{
  const matchElement = createMatchElement(match);
  matchResult.appendChild(matchElement);
});