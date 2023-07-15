/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  function generateRandomDomain(pronouns, adjetives, nouns, extensions) {
    let domains = "<h1 class = 'text-center'>Domain Generator</h1><div class = 'd-flex justify-content-center'><ol class = 'mt-5 list-group-numbered'>";

    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjetives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            let domain = pronouns[i] + adjetives[j] + nouns[k] + extensions[l];
            domains += `<li class = "list-group-item">${domain}</li>`;
          }
        }
      }
    }

    domains += "</ol></div>";
    return domains;
  }

  // Generar los nombres de dominio
  let myPronouns = ["the", "our"];
  let myAdjetives = ["great", "big"];
  let myNouns = ["jogger", "racoon", "mouse"];
  let myExtensions = [".com", ".net", ".pt", ".ly", ".es", ".org"];
 
  //Vinculamos nuestro archivo js
  let domainList = document.querySelector("#domainList");
  domainList.innerHTML = generateRandomDomain(myPronouns, myAdjetives, myNouns, myExtensions);
};
