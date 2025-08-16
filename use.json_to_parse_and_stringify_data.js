let jsonData = '{"name": "Amsterdam"}';
let parseData = JSON.parse(jsonData);
console.log(parseData.name);

//  It uses JSON.parse() to convert the JSON string into a JavaScript object, storing it in parsedData. Finally, it logs the value of the name property from the object