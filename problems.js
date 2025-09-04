//find unique character in a word
        //hello world javascript
        //split the word
        //["Hello","world","javascript"]
        //find the character

 let ans = ["Hello","world","javascript"].map( (e) => {
        return e.split("").find((element,i,arr) => { return arr.indexOf(element) == arr.lastIndexOf(element) })
        })
        console.log(ans);