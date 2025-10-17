`javascript
// script.js
const timezoneDisplay = document.createElement('p');
timezoneDisplay.textContent = Your time zone: ${Intl.DateTimeFormat().resolvedOptions().timeZone};
timezoneDisplay.style.fontSize = '14px';
timezoneDisplay.style.color = '#555';
timezoneDisplay.style.marginTop = '10px';

document.querySelector('.card').appendChild(timezoneDisplay);
`
<script>
  const timezoneElement = document.getElementById("timezone");
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timezoneElement.textContent = `Your current time zone: ${timeZone}`;
</script>
