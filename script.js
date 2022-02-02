// get params
const QueryString = window.location.search; 
const urlParams = new URLSearchParams(QueryString); 

var counterContainerI = document.querySelector(".website-counter.instagram");
var counterContainerT = document.querySelector(".website-counter.twitter");
var counterContainerF = document.querySelector(".website-counter.facebook");

var resetButton = document.querySelector("#reset");
var dict = localStorage.getItem("visit_dict");
// Check if page_view entry is present
if (dict) {
  dict = JSON.parse(dict);
  if (urlParams.has('ref')) {
    val = urlParams.get('ref')
    if ((val in dict) === false) {
      dict[val]=0;
      console.log(`added new key ${val} to dict`);
      }
    dict[val] += 1;

  console.log(dict);
  localStorage.setItem("visit_dict", JSON.stringify(dict));

  }
} else {
  dict = {'instagram':0, 'twitter':0, 'facebook':0};
  localStorage.setItem("visit_dict", JSON.stringify(dict));
}

counterContainerI.innerHTML = `instagram ${dict['instagram']}`;
counterContainerT.innerHTML = `twitter ${dict['twitter']}`;
counterContainerF.innerHTML = `facebook ${dict['facebook']}`;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  dict = {'instagram':0, 'twitter':0, 'facebook':0};
  localStorage.setItem("visit_dict", JSON.stringify(dict));
  counterContainerI.innerHTML = `instagram ${dict['instagram']}`;
  counterContainerT.innerHTML = `twitter ${dict['twitter']}`;
  counterContainerF.innerHTML = `facebook ${dict['facebook']}`;
});




