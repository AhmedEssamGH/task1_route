var bookmarkName = document.getElementById("bookmarkName");
var websiteURL = document.getElementById("websiteURL");
var bookmarks=[];

if (localStorage.getItem("ourBookmarks") == null)
{
    bookmarks = [];
}
    
else 
{
    bookmarks = JSON.parse(localStorage.getItem("ourBookmarks"));
    displayBookmark(bookmarks);
}

function addSite ()
{
    var site = {

        name:bookmarkName.value,
        url:websiteURL.value,
    }
    bookmarks.push(site);
    localStorage.setItem("ourBookmarks" , JSON.stringify(bookmarks));
    displayBookmark(bookmarks);
    clearFrom();
}

function displayBookmark (Array)
{
    var bookmarkContent = "";
    for(var i=0;i<Array.length;i++)
    {
        bookmarkContent+= `
                        <h2 class="pt-3">${Array[i].name}</h2>
                        <a href = "https://${Array[i].url}" class = "btn btn-primary btn1 btn-m" target="_blank">visit</a>
                        <button onclick="deleteBookmark(${i});" class="btn btn-danger btn1">Delete</button>
                        `
    }
    document.getElementById("bookmarks").innerHTML=bookmarkContent;
    
}
function clearFrom() {
    bookmarkName.value = "";
    websiteURL.value = "";

}

function deleteBookmark (item)
{
   bookmarks.splice(item , 1);
   localStorage.setItem("ourBookmarks" , JSON.stringify(bookmarks));
   displayBookmark(bookmarks);
 
}
