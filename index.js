// Code your solution here


function findMatching(names,driverName){
    
    return names.filter( (n)   => {
        console.log(n)
       return driverName === n 

    }
 )
}

function fuzzyMatch (names, twoLetters){
       return names.filter( (bar) =>{
           return  bar.startsWith(twoLetters)
        }

        )
}

