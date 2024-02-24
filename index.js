function search(){
    const inputValue=document.getElementById('search').value.toUpperCase();
   let item=document.querySelectorAll('.btn-value');
   let l=document.getElementsByTagName('h1');
   for(let i=0;i<l.length;i++){
    const a=item[i].getElementsByTagName('h1')[0];

    let value=a.innerHTML||a.innerText||a.textContent;
    if(value.toUpperCase().indexOf(inputValue)>-1){
        item[i].style.display="";

    }
    else{
        item[i].style.display="none";
    }
   }
}