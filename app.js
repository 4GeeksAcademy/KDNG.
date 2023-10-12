let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun= ['jogger','racoon'];
let ending = ['.com', '.dev']

function genDomain(pronoun , adj, noun, ending){
    return "www" + pronoun + adj + noun + ending
}

pronouns.forEach((pron)=> {
adjs.forEach((adj) => {
nouns.forEach((noun)=> { 
    endings.forEach((ending) => {
        domain.push(genDomain(pron, adj,noun, ending));
    });
});
});
});

window.onload = function(){
    let domainList=document.getElementsByTagName("u");
    console.log(domainList);
    domainList.forEach((domain)=> {
        let domainItem= document.createElement("li");
        domainItem.innertext =domain;
        domainList[0].appendChild(domainItem);

    });
};



console.log(domain)

