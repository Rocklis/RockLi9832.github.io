function time(wait){

    if (wait===0) {

        window.location = "home.html";
    }else{

        wait--;
        setTimeout(function(){
            time(wait);
        },1000)
    }
}
time(6);
