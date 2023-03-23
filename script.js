var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=function(){
    let data = JSON.parse(request.response);
    let temp=data.filter((node)=>node.population<100000);
    console.log(temp);
}
