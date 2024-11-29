        
        const dil = new Date(2004, 7, 12).getTime();  

        const formatNum = (num) => {
            return num < 10 ? `0${num}` : num;
        }

        
        const interval = setInterval(() => {
            let now = new Date().getTime(); 
            let defference = dil - now; 

            
            if (defference <= 0) {
                clearInterval(interval); 
                document.querySelector(".timer").style.display = 'none'; 
                document.getElementById("birthdayMessage").style.display = 'block'; 
                return;
            }

            const day = Math.floor(defference / (1000 * 60 * 60 * 24));
            const hour = Math.floor((defference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((defference % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((defference % (1000 * 60)) / 1000);

           
            document.getElementById('day').textContent = formatNum(day);
            document.getElementById('hour').textContent = formatNum(hour);
            document.getElementById('minute').textContent = formatNum(minute);
            document.getElementById('second').textContent = formatNum(second);
        }, 1000);





