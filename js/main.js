function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}


async  function getTemplate(elmt,page){
      let itm = document.getElementById(elmt);
      let address = "template/"+page+".html"
      itm.innerHTML = await fetchHtmlAsText(address)
  }

  getTemplate("itm","home")