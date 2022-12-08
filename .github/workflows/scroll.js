function scrolling(){
    id = document.getElementById("1")
    var dten=""
    
    if(document.getElementById('scrol_c').checked){
    for(i=0;i<st.length;i++){
        dten+=st[(k+i)%st.length]
    }
    }
    else{
        dten=st
    }
        id.textContent=dten
        k++
        }
