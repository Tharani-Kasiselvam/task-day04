//Day-03 Task
//1. How to compare two JSON have the same properties without order?
    // a. let obj1 = {name:"Person",age:5}
    // b. let obj2 = {age:5, name:"Person"}

    var obj1 = {name:"Person",age:5}
    var obj2 = {age:5, name:"Person"}
    if(obj1.name == obj2.name)
        console.log("Name is same")
    else
        console.log("Name is different")

    if(obj1.age == obj2.age)
        console.log("Age is same")
    else
        console.log("Age is different")

//2. Use the rest countries API URL and display all the country FLAGS in the console
    var req = new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v3.1/all")
    req.send()
    req.onload = function(){
        var resp = JSON.parse(req.response)
        console.log("Printing Flags information")
        for(var i=0;i<resp.length;i++){
            console.log(resp[i].flags.png)
        }
      
//3. Use the rest countries API URL and print all countries names, regions, sub-regions and populations
        console.log("Printing Countries/Regions/Sub-regions/Populations")
        for(var i=0;i<resp.length;i++){
                console.log(resp[i].name.common, resp[i].region,resp[i].subregion,resp[i].population)
       }

    }



    

//Quest#3 with new API URL -- print id, name and email
    // var request = new XMLHttpRequest();
    // request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    // request.send()
    // request.onload = function(){
    // var newResp = JSON.parse(request.response)
    // for(var i=0;i<newResp.length;i++){
    //     console.log(newResp[i].id,newResp[i].name, newResp[i].email)
    // }

//Quest#1 Print all the 250 Countries Name in the console
//Quest#2 Print Countries name as well as Region
    // request.open("GET","https://restcountries.com/v3.1/all")
    // request.send()
    // request.onload = function(){
    // var res = JSON.parse(request.response)
    // console.log(res)
    // console.log("1. List of 250 Countries & 2. Countries name and Region")
    // for(var a=0;a<res.length;a++){
    //     console.log(res[a].name.common,res[a].region)
    // }
