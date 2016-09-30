const eggBtn = document.getElementById("eggBtn");
const chickBtn = document.getElementById("chickBtn");
const henBtn = document.getElementById("henBtn");
const henHouseBtn = document.getElementById("henHouseBtn");
const farmerBtn = document.getElementById("farmerBtn");

var totalEggsStr = document.getElementById("totalEggsStr");
var totalChicksStr = document.getElementById("totalChicksStr");
var totalHensStr = document.getElementById("totalHensStr");
var totalHenHousesStr = document.getElementById("totalHenHousesStr");
var totalFarmersStr = document.getElementById("totalFarmersStr");

//getting the price elements
var chickenPrice = document.getElementById("chickenPrice").innerHTML;
var henPrice = document.getElementById("henPrice").innerHTML;
var henHousePrice = document.getElementById("henHousePrice").innerHTML;
var farmerPrice = document.getElementById("farmerPrice").innerHTML;


// total things in the beginning
var eggs = 0;
var chicks = 0;
var hens = 0;
var henHouses = 0;
var farmers = 0;

//execute function disableBtn
// if(eggs < 10){
  disableBtn();
//}


//On click, execute functions to get things
eggBtn.addEventListener("click", getEggs);
chickBtn.addEventListener("click", getChicks);
henBtn.addEventListener("click", getHens);
henHouseBtn.addEventListener("click", getHenHouses);
farmerBtn.addEventListener("click", getFarmers);

// disable btns until enough eggs
function disableBtn(){
  if(eggs <chickenPrice){
    chickBtn.disabled = true;
    chickBtn.setAttribute("disabled", "disabled");
    henBtn.disabled = true;
    henHouseBtn.disabled = true;
    farmerBtn.disabled = true;
  }
  else if(eggs <henPrice){
    henBtn.disabled = true;
    henHouseBtn.disabled = true;
    farmerBtn.disabled = true;
  }
  else if(eggs <henHousePrice){
    henHouseBtn.disabled = true;
    farmerBtn.disabled = true;
  }
  else if(eggs <farmerPrice){
    farmerBtn.disabled = true;
  }
}

//enable btns depending on how many eggs.
function enableBtn(){
  if(eggs >=farmerPrice){
    farmerBtn.disabled = false;
  }
  else if(eggs >=henHousePrice){
    henHouseBtn.disabled = false;
  }
  else if(eggs >=henPrice){
    henBtn.disabled = false;
  }
  else if(eggs >=chickenPrice){
    chickBtn.disabled = false;
  }
}

//get eggs manually
function getEggs(){
  eggs ++;

  enableBtn();
  showEggs();
}
//show total eggs
function showEggs(){
  totalEggsStr.innerHTML = "You have total: "+ eggs + " eggs";
}

/**
  * get things  and show total of them on page
**/

//get chickens manually + reduce eggs + add prices
function getChicks(){
  chicks++;
  totalChicksStr.innerHTML = "You have total: "+ chicks + " chickens";
  eggs -= chickenPrice;
  disableBtn();
  showEggs();

  var chickenPrice2 = Math.round( Math.pow(chickenPrice, 1.05));//new price

  chickenPrice =document.getElementById("chickenPrice").innerHTML = chickenPrice2;

  // getting eggs auto.
  setInterval(()=>{
    getEggs();
  }, 4000);
}


//get hens manually + reduce eggs + add prices
function getHens(){
  hens++;
  totalHensStr.innerHTML = "You have total: "+ hens + " hens";
  eggs -=henPrice;
  disableBtn();
  showEggs();

  var henPrice2 = Math.round(Math.pow(henPrice, 1.06));
  henPrice =document.getElementById("henPrice").innerHTML = henPrice2;

  // getting eggs auto.
  setInterval(()=>{
    getEggs();
  }, 3000);

}

//get hen houses manually + reduce eggs + add prices
function getHenHouses(){
  henHouses++;
  totalHenHousesStr.innerHTML = "You have total: "+ henHouses + " hen houses";
  eggs -= henHousePrice;
  disableBtn();
  showEggs();

  var henHousePrice2 = Math.round(Math.pow(henHousePrice, 1.07));//new price, adds on price
  henHousePrice =document.getElementById("henHousePrice").innerHTML = henHousePrice2;

  // getting eggs auto.
  setInterval(()=>{
    getEggs();
  }, 2000);
}

//get farmers manually + reduce eggs + add prices
function getFarmers(){
  farmers++;
  totalFarmersStr.innerHTML = "You have total: "+ farmers + " farmers";
  eggs -= farmerPrice;
  disableBtn();
  showEggs();

  var farmerPrice2 = Math.round(Math.pow(farmerPrice, 1.08));
  farmerPrice =document.getElementById("farmerPrice").innerHTML = farmerPrice2;


  // getting eggs auto.
  setInterval(()=>{
    getEggs();
  }, 1000);
}
