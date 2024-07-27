// Numeric enum types
var details;
(function (details) {
    details[details["add"] = 0] = "add";
    details[details["substract"] = 1] = "substract";
    details[details["multiply"] = 2] = "multiply";
    details[details["division"] = 3] = "division";
})(details || (details = {}));
function actions(perform) {
    return perform * 2;
    //console.log(perform.toString());
}
console.log(actions(3));
console.log("The details of mathamatics are:", details);
// Numeric enums
var statusCode;
(function (statusCode) {
    statusCode[statusCode["ok"] = 200] = "ok";
    statusCode[statusCode["badGateway"] = 400] = "badGateway";
    statusCode[statusCode["notFound"] = 402] = "notFound";
})(statusCode || (statusCode = {}));
function handleCodes(status) {
    if (status === 200) {
        console.log("Page response is accepted");
    }
    else if (status === statusCode.badGateway) {
        console.log("Bad gateway");
    }
    else if (status === statusCode.notFound) {
        console.log("Page not found");
    }
}
handleCodes(200);
