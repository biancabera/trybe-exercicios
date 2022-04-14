const header = document.getElementById('header-container')
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 180, 302)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
  emergencyTasksHeaders[0].style.backgroundColor = 'rgb(165, 0, 243)';
  emergencyTasksHeaders[1].style.backgroundColor = 'rgb(165, 100, 290)';

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(25, 140, 210)';

const noemergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
noemergencyTasksHeaders[0].style.backgroundColor = 'rgb(165, 0, 243)';
noemergencyTasksHeaders[1].style.backgroundColor = 'rgb(165, 0, 243)';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(151, 20, 20)';