var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

console.log(text);

var dinosaur = "triceratops";
var dinosaurUpperCased  = dinosaur.toUpperCase();

console.log(dinosaurUpperCased); 

var text2 = text.replace("Velociraptor", dinosaurUpperCased);
console.log(text2);

console.log(text2.substr(0, text2.length/2));

