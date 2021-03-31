
let pronoun = ['the', 'our', 'your', 'his', 'their'];
let adj = ['great', 'big', 'amazing', 'strong', 'weak', 'polite', 'inmortal', 'shy', 'pretencious', 'intrepid'];
let noun = ['jogger', 'racoon', 'spiderman', 'tree', 'domain', 'cat', 'dog', 'spider', 'bird', 'potatoe', 'carrot'];
let ext = ['.com', '.es', '.co', '.cl', '.br', '.uk', '.fr', '.po', '.ge', '.us', '.pe']

const generatorDomainName = () => {
    let domainNameG = "";
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let l = 0; l < ext.length; l++) {
                    domainNameG = pronoun[i] + adj[j] + noun[k] + ext[l]
                    console.log(domainNameG);
                }
            }
        }
    };
}
generatorDomainName()