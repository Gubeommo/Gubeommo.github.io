const imagesList = ["http://file.instiz.net/data/file/20130518/5/2/0/5201eac82c79aaaff6d6016440d95fba","https://t1.daumcdn.net/cfile/tistory/2612954F5409265003?original","https://blog.kakaocdn.net/dn/bZRlDK/btqZtABmEHc/rWLD6yqsxYEsOJIKPeaiY0/img.jpg","https://www.10wallpaper.com/wallpaper/1366x768/1409/Maldives_Resorts-Landscape_HD_Wallpaper_1366x768.jpg","https://www.10wallpaper.com/wallpaper/1366x768/1409/Niagara_Falls_Canada-Landscape_HD_Wallpaper_1366x768.jpg","https://post-phinf.pstatic.net/MjAxOTA5MjVfMTUg/MDAxNTY5MzkyMzg3Mjk5.Pz5bGHiirgoZgmKi4aSNMHKB0-D8XFAqtIxLyxP0LUQg.uKfVgH2B_Mm92IeP5MP87c3rW-v0LEhQ14pQMF6QF70g.JPEG/Best-Affordable-Camping-Gear-000-Hero.jpg?type=w1200","https://www.10wallpaper.com/wallpaper/1366x768/1811/Universe_Starry_Sky_Space_HD_Nebula_1366x768.jpg","https://t1.daumcdn.net/cfile/tistory/216F6E485914281A07","https://image.freepik.com/free-photo/drops-of-rain-on-the-window-water-on-the-glass-running-drops-background-conceptual_136813-3123.jpg","https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2068134650BF4ADC1D0A9B","https://rgo4.com/files/attach/images/2681740/617/103/007/c026461721a57836e71f440d84c53db4.jpg","https://t1.daumcdn.net/cfile/tistory/99A72E3D5A7F0F071F","https://a-static.besthdwallpaper.com/chocolate-pasty-cake-byeogji-3590_L.jpg","https://www.10wallpaper.com/wallpaper/1366x768/1508/skogafoss_waterfall_iceland-Nature_HD_Wallpapers_1366x768.jpg","https://blog.kakaocdn.net/dn/9dgIe/btqS9YPzY5c/9bODHjcXweKNhZ9kcP6qv0/img.jpg"];

const announcementMainList=["oh ! Great! So,,Shall we change the mood? ","Cool,, Sometimes I feel good, too. ","How about that? isn't cool?","wow... Look at that so..beautiful...","There are so many beautiful places in the world.","Ohh...Are you alright?","A small star shines for at least 50 billion years.","There's no easy way.","If you're having a hard time, stop and think.","What's hard now is that moving forward, what you want to run away from is that  fighting reality now","Take a break","Look at that cat !!","Sometimes women eat cake when they are angry..","You need some fresh air","How about working out?"];
const announcementSubList=["I have agood idea  you just enjoy!  ","When I watch Disney movies","I like the night view.","Oops ..sorry. I'll show you soon.","Here you are *^^*","Don't worry too much. This too will pass.","You're gonna shine much brighter than that star.","You need to hang in there to achieve your goals.","Don't be nervous. Just start over when you're okay.","what's unfortunate is that trying to be happy. - dogseol","With the puppies.","Isn't it so cute?","So I prepared !","ohh..How is it over there?","Lift to dumbbells as much as you're angry."];
const happyButton = document.querySelector("#happy");
const sadButton = document.querySelector("#sad");
const angryButton = document.querySelector("#angry");
const hiddenbox = document.querySelector("#status-div");
const statusText = document.querySelector("#align-status-text");
const handleSpeak = document.querySelector("#speak");


//const randImage = images[Math.floor(Math.random()* images.length)];
let statusCondition = 0;
let randimages=0;

const HIDDEN_CLASSNAMES = "hidden";

const backImag = document.createElement("img");

function hiddenstatus(){
    hiddenbox.style.removeProperty("display");
    statusText.style.removeProperty("display");
    statusText.classList.add(HIDDEN_CLASSNAMES);
    hiddenbox.classList.add(HIDDEN_CLASSNAMES);

    setTimeout(chagneText,1000);
    setTimeout(chageimage,6000);

}

function chagneText(){
  handleSpeak.style.display = "flex";
  handleSpeak.classList.remove(HIDDEN_CLASSNAMES);
  const handleSpeakOne = document.querySelector("#speak h3:first-child");
  const handleSpeakTwo =document.querySelector("#speak h3:last-child");
  console.log(handleSpeakTwo)
  
  
  if (statusCondition === 0){
    const randAnnouncementHappy = Math.floor(Math.random()*5);
    randimages = randAnnouncementHappy;
    handleSpeakOne.innerHTML = announcementMainList[randAnnouncementHappy];
    handleSpeakTwo.innerHTML= announcementSubList[randAnnouncementHappy];

  }else if(statusCondition ===1){
    const randAnnouncementSad = Math.floor(Math.random()*5)+5;
    randimages = randAnnouncementSad;
    handleSpeakOne.innerHTML = announcementMainList[randAnnouncementSad];
    handleSpeakTwo.innerHTML= announcementSubList[randAnnouncementSad];

  }else{
    const randAnnouncementangry = Math.floor(Math.random()*5)+10;
    randimages = randAnnouncementangry;
    handleSpeakOne.innerHTML = announcementMainList[randAnnouncementangry];
    handleSpeakTwo.innerHTML= announcementSubList[randAnnouncementangry];

  }
}
function returnStatusView(){
  handleSpeak.style.removeProperty("display");
  handleSpeak.classList.add(HIDDEN_CLASSNAMES);
  hiddenbox.style.display = "flex";
  hiddenbox.classList.remove(HIDDEN_CLASSNAMES);
  statusText.style.display = "flex";
  statusText.classList.remove(HIDDEN_CLASSNAMES);
}

function chageimage(){
  setTimeout(returnStatusView,1500);
  const randiamge = imagesList[randimages];
  document.body.style.backgroundImage = `url(${randiamge})`;
}


function happyImage(){
  statusCondition =0;
  hiddenstatus()
}

function sadImage(){
  statusCondition =1;
  hiddenstatus()
}

function angryImage(){
  statusCondition =2;
  hiddenstatus()
}

//backImag.src = `/img/${randImage}`;
happyButton.addEventListener("click",happyImage);
sadButton.addEventListener("click",sadImage);
angryButton.addEventListener("click",angryImage);
//document.body.appendChild(backImag);

