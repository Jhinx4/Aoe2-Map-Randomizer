var mapsPool =["Atacama","Baltic","Enemy Archipelago", "Enemy Islands","Land Madness","Far Out","Front Line","Gold Rush","Hide Out","Continental" ,"Islands","Team Islands"
,"Mangrove Jungle" ,"Northen Isles","Yucatan"]
var randMap = Math.floor(Math.random()*mapsPool.length);
var choosenMap = mapsPool[randMap];

var mapObjects={
  mapName: choosenMap,
  mapStrategy:"",
  mapImageSrc:"images/"+choosenMap+".jpg"
}
var winner = document.querySelector(".winner");
winner.innerHTML=choosenMap;
var mapImage = document.querySelector(".map-img");
mapImage.setAttribute("src",mapObjects.mapImageSrc);
// TeamISLANDS Continental Mangove jungles GOLD RUSH
