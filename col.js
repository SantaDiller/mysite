function colorref(){
if(document.getElementById('blink').checked){
        document.documentElement.style.setProperty('--r', k%255+100);
        document.documentElement.style.setProperty('--g', k*2%255+50);
        document.documentElement.style.setProperty('--b', k*4%255+25);
        
        document.documentElement.style.setProperty('--rt', k%255-100);
        document.documentElement.style.setProperty('--gt', k*2%255-50);
        document.documentElement.style.setProperty('--bt', k*4%255-25);
        k++
    }
    else{
        
    }
   
    }
