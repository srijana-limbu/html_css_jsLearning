

        function addition()
        {
            var a= document.getElementById("first").value;
            var b= document.getElementById("second").value;
            a = parseInt(a);
            b = parseInt(b);
            var sum = a+b;

            // 
            // document.getElementById("para").innerHTML = sum;
            document.getElementById("sum").value = sum;
        }
        
        function sub()
        {
            var a= document.getElementById("first").value;
            var b= document.getElementById("second").value;
            a = parseInt(a);
            b = parseInt(b);
            var sum = a-b;

           
            document.getElementById("sum").value = sum;
        }
        
        function mul()
        {
            var a= document.getElementById("first").value;
            var b= document.getElementById("second").value;
            a = parseInt(a);
            b = parseInt(b);
            var sum = a*b;

            // 
            // document.getElementById("para").innerHTML = sum;
            document.getElementById("sum").value = sum;
        }
        
        function div()
        {
            var a= document.getElementById("first").value;
            var b= document.getElementById("second").value;
            a = parseInt(a);
            b = parseInt(b);
            var sum = a/b;

            // 
            // document.getElementById("para").innerHTML = sum;
            document.getElementById("sum").value = sum;
        }

