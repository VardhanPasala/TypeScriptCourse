
// Numeric enum types

enum details{
add,
substract,
multiply,
division

}

function actions(perform:details){
    return perform*2
//console.log(perform.toString());


}

console.log(actions(3));

console.log("The details of mathamatics are:", details)

// Numeric enumstypes

enum statusCode{
    ok=200,
    badGateway=400,
    notFound= 402

}

function handleCodes(code: statusCode){

    if (code === 200){

        console.log("Page response is accepted");
    }else if(code === 400){
        console.log("Bad gateway");

    }else if(code === 402){
     
        console.log("Page not found");
    }


}

handleCodes(200);
