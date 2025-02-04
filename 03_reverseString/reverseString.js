const reverseString = function(arg) {
    let array = [];
    for (let i = 0; i < arg.length; i++) {
        array.push(arg[i]);
    }
    return array.reverse().join('');
};

console.log(reverseString("hello")); // Output: "olleh"

// Do not edit below this line
module.exports = reverseString;
