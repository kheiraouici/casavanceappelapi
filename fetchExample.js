async function  getCatbreeds () {
    try{
        result = await fetch ('https://catFact.ninja/breeds');
        let resultJson = await result.json ();
        let breeds = resultJson.data ;
        let breedDom= document.getElementById("breeds");
        let para = document.createElement("p")
        let text = document.createTextNode('voici la liste race de chat');
        para.appendChild(text);
        breedDom.appendChild(para);
       let list =document.createElement("ul");
       for(let i = 0 ; i < breeds.lenght; i++){
        let breed = document.createElement ("li");
        let breedName = document.createTextNode(breeds[i].breed + ":" +  breeds[i].country)
        breed.appendChild(breedName)
        list.appendChild(breed)

       }
       breedDom.appendChild(list)
        }
       
    
    catch(e){
        console.log(e);
    }
}
getCatbreeds();