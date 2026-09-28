
function myFunction(){
    document.getElementById("firstParagraph").innerHTML = "Hello again, world";
}

function calculateArea(a,b){
    // document.getElementById("firstParagraph").innerHTML = "Incremenet " + ( a-- + ++b - ++a);
    for (var i = 0; i < 10; i++) {
        alert
        var c = prompt("Please enter your name");
        document.getElementById("firstParagraph").innerHTML = "Welcome " + c;
    }
}


function Book(numChapter, theTitle, theColor){
    this.chapter=numChapter;
    this.title=theTitle;
    this.color=theColor;
}

function createBook(){
    b = new Book(24, "Harry Potter", "red");
    console.log("I created a book!")
    return b;
}

function showAllTheProperties(obj){
    for (i in obj){
        console.log("The property: " + i + " has value: " + obj[i]);
    }
}

function iWillCallYourFunction(f){
    f();

}

function tryThis(){
      a = "happy abing";
    console.log(a.search(/..ing/));
    a = "not here";
    console.log(a.search(/..ing/));

      a = "100 400 34 73";
    console.log(a.search(/3[0123456789][0123456789]/));
    a = "100 400 34 73";
    console.log(a.search(/3[0123456789][0123456789]/));

    /[a-z][A-Z][A-z]/
}

// type your functions first and code second