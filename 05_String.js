let str = "HelloWorld!";
let language = "Javascript";

// length: length property string ki length (characters ki count) ko return karti hai.
console.log("1.", str.length);

// charAt(index): charAt method ek specific index par sthit character ko return karta hai. Index zero-based hota hai, yani ki 0 se shuru hota hai.
console.log("2.", str.charAt(0));

// concat(str1, str2, strN...): concat method ek ya zyada strings ko combine karke naya string return karta hai.
console.log("3.", str.concat(language));

// indexOf(searchValue, fromIndex): indexOf method ek substring (ya character) ki position return karta hai. Agar substring multiple baar repeat ho raha hai, to pehla milne wala index return hota hai.
console.log("4.", str.indexOf("l"));

// lastIndexOf(searchValue, fromIndex): lastIndexOf method indexOf method ki tarah kaam karta hai, lekin yeh string ko reverse direction me search karta hai aur last milne wala index return karta hai.
console.log("5.", str.lastIndexOf("l"));

// includes(searchString, position): includes method ek string me specified substring ko dhoondta hai aur uska presence check karke true ya false return karta hai. Agar position argument diya gaya hai toh, woh position se shuruat karta hai.
console.log("6.", str.includes("Hello"));

// slice(startIndex, endIndex): slice method substring method ki tarah kaam karta hai, lekin isme negative indexes ka bhi istemal hota hai, jo string ki end se ginti hoti hai.
console.log(str.slice(0, 5));

// substring(startIndex, endIndex): substring method ek substring return karta hai, jo ki original string ke startIndex se endIndex-1 tak ka portion hota hai.
console.log(str.substring(0, 5));

// substr(startIndex, endIndex)
console.log(str.substr(5, 6));

// toUpperCase()
console.log(str.toUpperCase());

// toLowerCase()
console.log(str.toLowerCase());

// trim(): trim method string ke shuru aur ant me maujood whitespace (spaces, tabs, etc.) ko hata deta hai.
console.log(str.trim());

// startsWith(searchStarting, position): startsWith method ek string ke shuruat me di gayi substring se match karke true ya false return karta hai. Agar position argument diya gaya hai toh, woh position se shuruat karta hai.
console.log(str.startsWith("Hello"));

// endsWith(): endsWith method ek string ke ant me di gayi substring se match karke true ya false return karta hai. Agar length argument diya gaya hai toh, woh position tak match karta hai.
console.log(str.endsWith("World!"));

// replace(searchValue, newValue): replace method ek substring ya pattern ko dusre substring ya pattern se replace kar deta hai.
console.log(str.replace("Hello", "Hey"));

// repeat(count): repeat method ek string ko di gayi number of times repeat karke naya string return karta hai.
console.log(str.repeat(2));

// split(seperator, limit): split method ek string ko specified separator se split karke ek array me convert karta hai.
console.log(str.split(""));

// match(regexp): match method ek string ko ek regular expression ke sath match karta hai aur match milne par ek array return karta hai.
console.log(str.match(/[A-Z]/g));

// search(regexp): search method ek string me di gayi regular expression ko search karta hai aur match milne par uska index return karta hai. Agar match na mile toh -1 return hota hai.
console.log(str.search(/[A-Z]/g));

// padStart(targetLength, padString): padStart method ek string ki length ko targetLength tak pahuchane ke liye padString se unke shuru me padding (filling) karta hai.
console.log(str.padStart(10, "567"));

// padEnd(targetLength, padString): padEnd method ek string ki length ko targetLength tak pahuchane ke liye padString se unke ant me padding (filling) karta hai.
console.log(str.padEnd(10, "123"));