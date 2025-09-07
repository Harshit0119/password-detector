 const input = document.getElementById("inputtext");
        const counter = document.getElementById("counter");  

        input.addEventListener("input", () => {
            let c= inputtext.value.length;
            if(c < 6){
                counter.style.color = "red";    
                document.getElementById("counter").innerHTML = "Weak Password"; 
            }
            else if(c >= 6 && c < 10){
                counter.style.color = "orange";    
                document.getElementById("counter").innerHTML = "Moderate Password"; 
            }
            else{
                counter.style.color = "green";    
                document.getElementById("counter").innerHTML = "Strong Password"; 
            }
        });