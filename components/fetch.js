
let searchfn=async(url)=>{
    
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.articles);
        return data.articles;
    }catch(err){
        console.log(err);
    }
}
let create=(id)=>{
    return document.createElement(id);
}

let appendfn=(data)=>{
    let news=document.getElementById('results');
    news.innerHTML=null;
    data.forEach(({urlToImage,description,title})=>{
        let div=create('div');
        let imgbox=create('div');
        let desbox=create('div')
        let img=create('img');
        let newstitle=create('h3');
        let descrip=create('p');
        img.src=urlToImage;
        newstitle.innerText=title;
        descrip.innerText=description;
        desbox.append(newstitle,descrip)
        imgbox.append(img);
        div.append(imgbox,desbox);
        
        news.append(div);


    })

}
export{searchfn,appendfn,create};