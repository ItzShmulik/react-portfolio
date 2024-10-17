function detectColorScheme(){
    let theme = "dark";
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            theme = "dark";
        }else{
            theme = "light";
        }
    }
}