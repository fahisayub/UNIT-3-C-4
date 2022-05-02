// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import {sidebar} from "../components/sidbar.js";
import { appedtosearch } from "./search.js";
import {searchfn,appendfn} from '../components/fetch.js';
document.getElementById('navbar').innerHTML=navbar();
document.getElementById('sidebar').innerHTML=sidebar();


//https://masai-mock-api.herokuapp.com/news?q={query} (for searching based on query, will only work for "tesla" and "twitter")
//https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code} 

let defaultfn=async()=>{
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
    let data= await searchfn(url);
      if(data==undefined){
        return;
    }
    appendfn(data);
}
defaultfn();


let bycountry =async(id)=>{
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`;
    let data= await searchfn(url);
      if(data==undefined){
        return;
    }
    appendfn(data);
}

let input =document.getElementById('search_input');
let main=async()=>{
    window.location.href='search.html';
     let query=input.value ;
    const url=`https://masai-mock-api.herokuapp.com/news?q=${query}`;
    let data= await searchfn(url);
      if(data==undefined){
        return;
    }
    
    appedtosearch(data);
}

let id;
let debounce=()=>{
if(id){
    clearTimeout(id);
}
id=setTimeout(()=>{
  main();

},1000)

}


input.addEventListener('input',debounce);

let countries=document.getElementById('countries').children;


for(let el of countries ){
   let id= el.id;
    console.log(id);
    el.addEventListener('click',()=>{
        bycountry(id)
    });
}

