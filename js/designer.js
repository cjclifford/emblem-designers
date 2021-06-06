(function() {
  teams = [
    {
      teamName: 'team-africa',
      teamMembers: [
        {
          fullName: 'Name Surname',
          memberImage: './images/placeholder-profile-picture.png',
          birthDate: '1 January 1992',
          profession: 'Astronaut',
          age: '28',
          facebookLink: 'https://www.facebook.com',
          linkedInLink: 'https://www.linkedin.com',
          instagramLink: 'https://www.instagram.com'
        }
      ],
      designImage: './images/emblem_big.png',
      designRationale: `Sed sed tristique tellus. Pellentesque semper magna
        dictum enim congue, vel fermentum eros dictum. Sed quis leo justo. Proin rhoncus varius
        tempus. Aliquam et fermentum est. Praesent diam justo, aliquet id ligula et, dignissim
        dictum quam. Mauris posuere lorem in arcu auctor, sit amet dignissim mauris dignissim. Nam
        tempor nulla lorem, nec pellentesque enim elementum eget. Maecenas placerat consequat erat
        sed congue. Nulla vitae posuere arcu. Nulla et lorem feugiat arcu auctor vehicula nec et
        metus.`
    }
  ];

  const params = new URLSearchParams(window.location.search);
  let selectedTeam;
  let selectedTeamMember;

  for (let team of teams) {
    if (team.teamName === params.get('team')) {
      selectedTeam = team;
      break;
    }
  }

  for (let teamMember of selectedTeam.teamMembers) {
    console.log(teamMember.fullName, params.get('member'))
    if (teamMember.fullName === params.get('member')) {
      selectedTeamMember = teamMember;
      break;
    }
  }

  document.getElementById('member-name').innerText = selectedTeamMember.fullName;
  // document.getElementById('member-team').innerText = selectedTeam.teamName + '\'s Design';
  document.getElementById('member-image').src = selectedTeamMember.memberImage;
  document.getElementById('member-design').src = selectedTeam.designImage;
  document.getElementById('member-design-rationale').innerText = selectedTeam.designRationale;
  document.getElementById('member-birthdate').innerText = selectedTeamMember.birthDate;
  document.getElementById('member-profession').innerText = selectedTeamMember.profession;
  document.getElementById('member-age').innerText = selectedTeamMember.age;
  document.getElementById('member-facebook').href = selectedTeamMember.facebookLink;
  document.getElementById('member-linked-in').href = selectedTeamMember.linkedInLink;
  document.getElementById('member-instagram').href = selectedTeamMember.instagramLink;
})();
