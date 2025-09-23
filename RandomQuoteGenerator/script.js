let quote=document.getElementById("quote")
let author=document.getElementById("author")
const apiurl="https://quotes.domiadi.com/api"
const getquoterandom = document.getElementById("getquote")
const getquotepostonlinkedin = document.getElementById("postonlinkedin")
let linkedinurl="https://www.linkedin.com/"
async function getquote() {
    let response=await fetch(apiurl)
    let data = await response.json()
    console.log(data);
    quote.innerHTML=' " '+ data.quote+ ' " '
    author.innerHTML='By - '+data.from

}
// async function getquotepostonlinkedin() {
//     let response=await fetch(apiurl)
//     let data = await response.json()
   

// }

getquoterandom.addEventListener('click',function(e){
    e.preventDefault()
    getquote()
})
getquotepostonlinkedin.addEventListener('click',function(e){
    e.preventDefault()
     window.open(linkedinurl, "_blank");
})