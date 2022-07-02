console.log("hello world")



function checkAge(age) {
    if(age < 0) { 
            return false;
        } else { 
            return true;
        }
    }

    function repeatSentence(sentence, times) {
        for(var i = 0; i < times; i = i + 1) { 
                console.log(i + " " + sentence);
            } 
        }

 
        function nameTransform(name) {
            var lowerName = name.toLowerCase();
            var firstLetter = lowerName[0];
            var firstCapitalLetter = firstLetter.toUpperCase();
            var nameWithoutFirstLetter = lowerName.substring(1, lowerName.length);
            var correctName = firstCapitalLetter + nameWithoutFirstLetter;
            return correctName;
        }

        function listTransform(listOfNames) {
            var transformedNames = [];
        for(var i = 0; i < listOfNames.length; i = i + 1) { 
            var transformedNameI = nameTransform(listOfNames[i]);
                transformedNames.push(transformedNameI);
            } 
            return transformedNames;
        }


        
        
       function applyTransform(listOfNames, transformFunction) {
            var transformedNames = [];
        for(var i = 0; i < listOfNames.length; i = i + 1) { 
            var transformedNameI = transformFunction(listOfNames[i]);
                transformedNames.push(transformedNameI);
            } 
            return transformedNames;
        }


// SQUARE ROOT OF A NUMBER
function squareRoot(number) {
    var squareRoot = Math.sqrt(number);
    return squareRoot;
}

// FIFTY CUT


        





 






// list of ingredients

function createListItem(ingredient, id) {
    var htmlString = '<li id="ingredient-' + id + '" class="li-ingredient">'
        + ingredient + '</li>';
        return htmlString;
    }
    
    function createList(listOfIngredients) {
        var htmlString = '';
        for(var i = 0; i < listOfIngredients.length; i = i + 1) {
            htmlString = htmlString + createListItem(listOfIngredients[i], i);
        }
        return htmlString;
    }
    
    var listOfIngredients = ["apple", "orange", "pear", "nutella"];
    
    function populateList() {
        var ulElement = document.getElementById('ingredients');
        ulElement.innerHTML = createList(listOfIngredients);
    }


    






    

            
        


