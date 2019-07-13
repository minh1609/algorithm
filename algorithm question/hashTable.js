//Question 1 (from Google)
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Naive approach with nested loop 0(n square)
function firstRecurringCharacter(input = []) {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }

    return undefined;
}

console.log("ver 1: " + firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));

//Appproach with hash table O(n), increase space complexity O(n)
function firstRecurringCharacter2(input = []) {
    //map is hash table
    let map = {};
    //loop through array
    for (let i = 0; i < input.length; i++) {
        //if hash exists, return this number
        if (map[input[i]] !== undefined) {
            return input[i];
        }
        //if not, hash it
        else {
            map[input[i]] = "dog";
        }
    }
    return undefined;
}

console.log("ver 2: " + firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
