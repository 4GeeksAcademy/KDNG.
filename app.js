import  "./styles.css";
import "bootstrap";
import "./assets/img/rigo-babt.jpg";
import "./assests/img/4geeks.ico";

let domain = [];
window.onload = function() {
    function genDomain(pronoun, adj, noun, ending) 
    {
        return "www." + pronoun + adj + noun + ending;
    }

}
let pronoun = ["the", "our", "yours", "his", "her"];
let adj = ["awesome", "amazing", "fantastic", "creative"];
let noun= ["jogger","racoon", "idea","project,"];
let ending = [".com", ".dev", ".net", ".org",];

for (let pronoun of pronouns){
    for (let adj of adjs) {
        for (let noun of nouns) {
            for(let ending of endings){
                domain.push(genDomain(pronoun, adj, noun, ending));
            }
        }
    }
}

let domainList1 =
document.getElementById("ul");
console.log (domainList1)
doamins.forEach((domain) => {
    let domainItem =
document.createElement("li");
domainItem.innerText = domain;
domainList1.appendChild(domainItem);
});
console.log(domains);



