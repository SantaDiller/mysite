function timer(fnc) {
  this.fnc = fnc;
  this.time1 = 0;
  this.start= function(tm){
      if(time>this.time1+tm){
        this.time1=time
        this.fnc() 
    }
  }
}
function tick(){time++}



function save(){
        var inp=document.getElementById("inp")
    st=" "+inp.value
    }
    function img() {
     let file = document.getElementById('file').files[0]
      let reader = new FileReader()
      reader.readAsText(file)
       reader.onload = function() { 
       //document.getElementById('ex').textContent=reader.result
       document.write(reader.result)
       
       }; 
       reader.onerror = function() { 
       document.getElementById('ex').textContent=reader.error
       }
        }

function setcol(ev) { 
const color = ev.target.value 
const r = parseInt(color.substr(1,2), 16) 
const g = parseInt(color.substr(3,2), 16) 
const b = parseInt(color.substr(5,2), 16)
document.documentElement.style.setProperty('--r', 255);
        document.documentElement.style.setProperty('--g', 255);
        document.documentElement.style.setProperty('--b', 255);
        
        document.documentElement.style.setProperty('--rt', r);
        document.documentElement.style.setProperty('--gt', g);
        document.documentElement.style.setProperty('--bt', b);
}
