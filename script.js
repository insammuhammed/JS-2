let bookArray=[];
let bookCount=bookArray.length;

document.getElementById("Form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("bookName").value;
  let issue = document.getElementById("issue").value;
  
  let newEntry = {
    id:bookCount + 1,
    bookname: name,
    issue: issue,

  }
  bookArray.push(newEntry);
  bookCount++;
  document.getElementById("bookName").value="";
  document.getElementById("issue").value="";
  updateTable();
});
const date=new Date();

