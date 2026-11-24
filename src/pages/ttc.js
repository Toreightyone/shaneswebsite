let Kipling = 0;
let Islington = 0;
let Royal_York = 0;
let Old_Mill = 0;
let Jane = 0;
let Runnymede = 0;
let High_Park = 0;
let Keele = 0;
let Dundas_West = 0;
let Lansdowne = 0;
let Dufferin = 0;
let Ossington = 0;
let Christie = 0;
let Bathurst = 0;
let SpadinaL2 = 0;
let StGeorgeL2 = 0;
let Bay = 0;
let BloorYongeL2 = 0;
let Sherbourne = 0;
let Castle_Frank = 0;
let Broadview = 0;
let Chester = 0;
let Pape = 0;
let Donlands = 0;
let Greenwood = 0;
let Coxwell = 0;
let Woodbine = 0;
let Main_Street = 0;
let Victoria_Park = 0;
let Warden = 0;
let KennedyL2 = 0;
const params = new URLSearchParams({
  key: "ad3c8199",
  url: "https://www.ttc.ca/ttcapi/routedetail//getstopdetails?stop=9445",
});
const response = await fetch('https://corsproxy.io/?' + params);

if (!response.ok) throw new Error('HTTP ' + response.status + ': ' + await response.text());
const data = await response.json();
document.getElementById('station').innerHTML = data.stopName;
document.getElementById('station_time').innerHTML = data.nextTrains[0].line + ' ' + data.nextTrains[0].directionText + ' ' + data.nextTrains[0].arrivalTimes[0].nextArrival

