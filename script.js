var a = document.getElementById("whole")
var b = document.getElementById("bio")
var c = document.getElementById("allobj")
var d = document.getElementById("education")
var e = document.getElementById("contactme")
function main(){
    a.style.display = "block";
    b.style.display = "none";
    c.style.display= "none";
    d.style.display="none";
    e.style.display="none";
}

function aboutme(){
    b.style.display = "block";
    a.style.display = "none";
    c.style.display= "none";
    d.style.display="none";
    e.style.display="none";

}
function object(){
    c.style.display="block";
    a.style.display = "none";
    b.style.display = "none";
    d.style.display="none";
    e.style.display="none";


}
function edu(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display= "none";
    d.style.display="block";
    e.style.display="none";
}
function phone(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display= "none";
    d.style.display="none";
    e.style.display="block";
}