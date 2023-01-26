var bars=document.querySelector(".bars");
var Sidebar=document.querySelector(".Sidebar");
var vidcontainer=document.querySelector(".vidcontainer");
bars.onclick=function()
{
    Sidebar.classList.toggle("small-sidebar");
    vidcontainer.classList.toggle("largevid-container")
}