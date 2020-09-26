//youtube api key
//AIzaSyAQmv6tfX2O--XdCmHzgIP-RJ_KcoMUjxA


$(document).ready(function(){
    $("#searchBtn").on("click",function(event){
        event.preventDefault();
        window.localStorage.setItem("movieSearch",JSON.stringify($("#searchInput").val()));
    })
})