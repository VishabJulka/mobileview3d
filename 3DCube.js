window.onload = function () {
    
    var a = window.innerWidth;
    if(a >= 450)
    {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var count = 0;
    var displayAxis = 0;
    var body = 0;
    var face = 0;

    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.strokeStyle = 'rgba(0,153,255,1)';

    
    var Qx = Math.PI / 4;
    var Qy = Math.PI / 3;
    var Qz = Math.PI / 4;
    var dx = 0;
    var dy = 0;
    var dz = 0;

    
    var SIZE = 75;
    
    var AXIS = 150;
    
    var vertices = [];

   
    

    function addPoint(x, y, z) {
        return [x, y, z]
    }

    
    vertices.push(addPoint(SIZE, SIZE, SIZE));  
    vertices.push(addPoint(-SIZE, SIZE, SIZE)); 
    vertices.push(addPoint(-SIZE, -SIZE, SIZE)); 
    vertices.push(addPoint(SIZE, -SIZE, SIZE));  

    vertices.push(addPoint(SIZE, SIZE, SIZE)); 
    vertices.push(addPoint(SIZE, SIZE, -SIZE));
    vertices.push(addPoint(-SIZE, SIZE, -SIZE)); 
    vertices.push(addPoint(-SIZE, -SIZE, -SIZE));


    vertices.push(addPoint(SIZE, -SIZE, -SIZE)); 
    vertices.push(addPoint(SIZE, SIZE, -SIZE)); 
    vertices.push(addPoint(SIZE, -SIZE, -SIZE));
    vertices.push(addPoint(SIZE, -SIZE, SIZE)); 

    vertices.push(addPoint(-SIZE, -SIZE, SIZE)); 
    vertices.push(addPoint(-SIZE, -SIZE, -SIZE));
    vertices.push(addPoint(-SIZE, SIZE, -SIZE)); 
    vertices.push(addPoint(-SIZE, SIZE, SIZE)); 


    
    vertices.push(addPoint(SIZE, SIZE, SIZE));
    vertices.push(addPoint(SIZE, SIZE, AXIS));


    vertices.push(addPoint(SIZE, SIZE, SIZE));
    vertices.push(addPoint(SIZE, SIZE, -SIZE));
    vertices.push(addPoint(SIZE, -SIZE, -SIZE));
    vertices.push(addPoint(SIZE, -AXIS, -SIZE)); 

    vertices.push(addPoint(SIZE, -SIZE, -SIZE)); 
    vertices.push(addPoint(SIZE, SIZE, -SIZE)); 
    vertices.push(addPoint(-SIZE, SIZE, -SIZE));
    vertices.push(addPoint(-AXIS, SIZE, -SIZE));


    vertices.push(addPoint(-AXIS, SIZE, -60)); 

    vertices.push(addPoint(-AXIS, SIZE, -SIZE));
    vertices.push(addPoint(-SIZE, SIZE, -SIZE));
    vertices.push(addPoint(SIZE, SIZE, -SIZE));    
    vertices.push(addPoint(SIZE, -SIZE, -SIZE));
    vertices.push(addPoint(SIZE, -AXIS, -SIZE));

    vertices.push(addPoint(SIZE, -AXIS, -60)); 

    vertices.push(addPoint(SIZE, -AXIS, -SIZE));  
    vertices.push(addPoint(SIZE, -SIZE, -SIZE));
    vertices.push(addPoint(SIZE, SIZE, -SIZE)); 
    vertices.push(addPoint(SIZE, SIZE, SIZE));
    vertices.push(addPoint(SIZE, SIZE, AXIS));

    vertices.push(addPoint(SIZE, 35, AXIS));

    
    
    vertices.push(addPoint(SIZE, SIZE, AXIS));
    vertices.push(addPoint(SIZE, SIZE, SIZE));
    vertices.push(addPoint(SIZE, SIZE, -SIZE));

    
    vertices.push(addPoint(-SIZE, SIZE, -SIZE));
    vertices.push(addPoint(-SIZE, -SIZE, -SIZE));
    vertices.push(addPoint(-SIZE, -SIZE, SIZE)); 
    vertices.push(addPoint(-SIZE, SIZE, SIZE)); 
    vertices.push(addPoint(-SIZE, SIZE, -SIZE)); 

    
    vertices.push(addPoint(-SIZE, SIZE, -SIZE)); 
    vertices.push(addPoint(SIZE, -SIZE, -SIZE)); 
    vertices.push(addPoint(SIZE, -SIZE, SIZE));  
    vertices.push(addPoint(-SIZE, SIZE, SIZE)); 
    vertices.push(addPoint(-SIZE, SIZE, -SIZE)); 


    vertices.push(addPoint(-SIZE, SIZE, -SIZE));
    vertices.push(addPoint(SIZE, -SIZE, -SIZE));
    vertices.push(addPoint(SIZE, SIZE, SIZE));
    vertices.push(addPoint(-SIZE, SIZE, -SIZE));

    
    vertices.push(addPoint(-SIZE, SIZE, -SIZE)); 

    
    vertices.push(addPoint(SIZE, SIZE, -SIZE));                    
    vertices.push(addPoint(SIZE, -SIZE, -SIZE));                  
    vertices.push(addPoint(SIZE, -SIZE, SIZE));                   
    vertices.push(addPoint(SIZE, SIZE, SIZE));                     
    vertices.push(addPoint(SIZE, SIZE, -SIZE));                    


    
    vertices.push(addPoint(SIZE, SIZE, -SIZE));                    
    vertices.push(addPoint(SIZE, SIZE, SIZE));                    


    vertices.push(addPoint(-SIZE, SIZE, SIZE));                   
    vertices.push(addPoint(SIZE, -SIZE, SIZE));                      
    vertices.push(addPoint(-SIZE, -SIZE, -SIZE));                 
    vertices.push(addPoint(-SIZE, SIZE, SIZE));                    



    
    vertices.push(addPoint(-SIZE, SIZE, SIZE));                   

    
    vertices.push(addPoint(-SIZE, 0, SIZE));       
    vertices.push(addPoint(0, -SIZE, SIZE));       
    vertices.push(addPoint(0, -SIZE, -SIZE));     
    vertices.push(addPoint(-SIZE, 0, -SIZE));      
    vertices.push(addPoint(-SIZE, 0, SIZE));       



    
    vertices.push(addPoint(-SIZE, SIZE, SIZE));                    

    
    vertices.push(addPoint(0, SIZE, SIZE));        
    vertices.push(addPoint(0, SIZE, -SIZE));     
    vertices.push(addPoint(SIZE, 0, -SIZE));       
    vertices.push(addPoint(SIZE, 0, SIZE));        
    vertices.push(addPoint(0, SIZE, SIZE));       









    vertices.push(addPoint(0, 0, 0));        

    
    vertices.push(addPoint(0, SIZE, -SIZE));       
    vertices.push(addPoint(0, -SIZE, -SIZE));      
    vertices.push(addPoint(0, -SIZE, SIZE));       
    vertices.push(addPoint(0, SIZE, SIZE));        
    vertices.push(addPoint(0, SIZE, -SIZE));       




    vertices.push(addPoint(0, -SIZE, 0)); 4,3    
    vertices.push(addPoint(-SIZE, 0, 0)); 3,2    
    vertices.push(addPoint(0, 0, SIZE));  3,4    
    vertices.push(addPoint(0, SIZE, 0)); 1,6     
    vertices.push(addPoint(SIZE, 0, 0)); 9,4     
    vertices.push(addPoint(0, 0, -SIZE)); 6,9    










    drawCube();

    //event listener on the keyboard
    window.addEventListener("keydown", checkIfKeyPressed, false);

    //check if up down right left a z keys have been pressed
    //increment or decrement the respective x,y,z rotational parameters
    function checkIfKeyPressed(e) {
        var step = Math.PI / 4320;

        if (e.keyCode == "39") {//right key
            dy = dy + step;

        }
        else if (e.keyCode == "37") {//left key
            dy = dy - step;

        }
        else if (e.keyCode == "40") {//up key
            dx = dx + step;

        }
        else if (e.keyCode == "38") {//down key
            dx = dx - step;

        }
        else if (e.keyCode == "65") {//a key
            dz = dz + step;

        }
        else if (e.keyCode == "66") {//b key
            if (body < 3) {
                body++;
                count = 0;
                face = 0;
            }
            else {
                body = 1;
                count = 0;
                face = 0;
            }
        }
        else if (e.keyCode == "70") {//f key
            if (face < 3) {
                face++;
                count = 0;
                body = 0;
            }
            else {
                face = 1;
                count = 0;
                body = 0;
            }
        }
        else if (e.keyCode == "90") {//z key
            dz = dz - step;

        }
        else if (e.keyCode == "86") {//v key
            if (count < 3) {
                count++;
                body = 0;
                face = 0;
            }
            else {
                count = 1;
                body = 0;
                face = 0;
            }

        }
        else if (e.keyCode == "88") {//x key
            displayAxis++;
        };

        updateCube();
    }

    //function that updates the cube 
    function updateCube() {
        var rate = 0.999;//this parameter is responsible for the slow dying off effect of rotations

        dx = t = rate * dx;
        Qx = Qx + dx;
        dy = rate * dy;
        Qy = Qy + dy;
        dz = rate * dz;
        Qz = Qz + dz;
        drawCube();

        //console.log("Qx,Qy,Qz",Qx,Qy,Qz)
        //console.log("dx,dy,dz",dx,dy,dz)

        //key operation to create an animation.  This is what gives the sustaining movement.
        window.requestAnimationFrame(updateCube)

    }

    //this is the function that projects 3D coordinates to the 2D canvas
    //it took me a whole summer some years ago to figure these transformations
    function project3D(x, y, z) {
        var xRotQz = x * Math.cos(Qz) + y * Math.sin(Qz);
        var yRotQz = y * Math.cos(Qz) - x * Math.sin(Qz);
        var zRotQz = z;
        var xRotQzQx = xRotQz;
        var yRotQzQx = yRotQz * Math.cos(Qx) + zRotQz * Math.sin(Qx);
        var zRotQzQx = zRotQz * Math.cos(Qx) - yRotQz * Math.sin(Qx);
        var xRotQzQxQy = xRotQzQx * Math.cos(Qy) + zRotQzQx * Math.sin(Qy);
        var yRotQzQxQy = yRotQzQx;
        //var zRotQzQxQy=zRotQzQx*Math.cos(Qy)-xRotQzQx*Math.sin(Qy);
        return [xRotQzQxQy, yRotQzQxQy]
    }

    //function that draws the cube
    function drawCube() {
        //console.log("drawCube");

        //these clear the canvas of previous traces
        ctx.clearRect(0, 0, 650, 400);
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillRect(0, 0, 650, 400)

        var verticesPixLoc = [];
        //vertex coordinates in 3D are first projected to 2D and then transformed into pixel location
        //this latter is needed as (0,0) of canvas is not at the center of the canvas but at upper left
        for (var i = 0; i < 80; i++) //actual value 16
        {
            var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
            var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
            verticesPixLoc.push(pixLoc);

            //give vertices a bit of a circular shape
            if (i < 16) {
                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();

            }

            if (i < 26 && displayAxis % 2 == 1) {
                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();
            }

            if (i >= 69 && face == 2) {
                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();
            }


        }

        //Drawing the cube edges excluding the axis
        for (var i = 0; i < 16 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#87CEFA'; //light blue
            ctx.stroke();
        }

        //Drawing the color of the internal edges
        for (var i = 23; i < 25 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }


        //original 
        for (var i = 29; i < 31 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }


        //original 
        for (var i = 35; i < 37 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }












        if (displayAxis % 2 == 1) {
            //draw the cube edges  //actual value 16
            for (var i = 0; i < 26 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#87CEFA'; //light blue
                ctx.stroke();
            }

            //Trying to color the axis line with different colour from x to y
            for (var i = 27; i < 32 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#32CD32'; //green
                ctx.stroke();

            }

            //Trying to color the axis line with different colour from y to z
            for (var i = 33; i < 38 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#32CD32'; //green
                ctx.stroke();
            }

        }






        //Trying TO display the X, Y and Z alphabet on the screen
        if (displayAxis % 2 == 1) {
            //X Displayed
            for (var j = 26; j < 27; j++) {
                ctx.beginPath();
                var text = 'X';
                ctx.font = '25px Papyrus, sans-Serif';
                ctx.fillStyle = '#fa4b2a';
                ctx.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
            }

            //Y Displayed
            for (var j = 32; j < 33; j++) {
                ctx.beginPath();
                var text = 'Y';
                ctx.font = '25px Papyrus, sans-Serif';
                ctx.fillStyle = '#fa4b2a';
                ctx.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
            }

            //Z Displayed
            for (var j = 38; j < 39; j++) {
                ctx.beginPath();
                var text = 'Z';
                ctx.font = '25px Papyrus, sans-Serif';
                ctx.fillStyle = '#fa4b2a';
                ctx.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
            }

        }

        //to display 100
        if (count == 1 || body == 1 || face == 1) {
            var k = 43;
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[k][0], verticesPixLoc[k][1]);
            for (var i = 43; i < 47 - 1; i++) {
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            }
            ctx.fillStyle = "orange red";
            ctx.fill();


            var k1 = 58;
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[k1][0], verticesPixLoc[k1][1]);
            for (var i = 58; i < 62 - 1; i++) {
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            }
            ctx.fillStyle = "orange red";
            ctx.fill();

        }

        //to display 110
        if (count == 2 || body == 2 || face == 2) {
            var k = 48;
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[k][0], verticesPixLoc[k][1]);
            for (var i = 48; i < 52 - 1; i++) {
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            }
            ctx.fillStyle = "orange red";
            ctx.fill();

            if (face == 2) {
                var k2 = 70;
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[k2][0], verticesPixLoc[k2][1]);
                for (var i = 70; i < 74 - 1; i++) {
                    ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                }
                ctx.fillStyle = "orange red";
                ctx.fill();

                var k7 = 76;
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[k7][0], verticesPixLoc[k7][1]);
                for (var i = 76; i < 80 - 1; i++) {
                    ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                }
                ctx.fillStyle = "orange red";
                ctx.fill();
            }

        }

        //to display 111
        if (count == 3 || body == 3 || face == 3) {
            var k = 53;
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[k][0], verticesPixLoc[k][1]);
            for (var i = 53; i < 56 - 1; i++) {
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            }
            ctx.fillStyle = "orange red";
            ctx.fill();


            var k8 = 65;
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[k8][0], verticesPixLoc[k8][1]);
            for (var i = 65; i < 68 - 1; i++) {
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            }
            ctx.fillStyle = "orange red";
            ctx.fill();

        }



        //Drawing the cube edges excluding the axis
        for (var i = 0; i < 16 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#87CEFA'; //light blue
            ctx.stroke();
        }


        //Drawing the color of the internal edges

        for (var i = 23; i < 25 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }


        for (var i = 29; i < 31 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }

        for (var i = 35; i < 37 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }

        //Trying to make the lines again 

        //draw the cube edges  //actual value 16

        if (displayAxis % 2 == 1) {
            for (var i = 0; i < 26 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#87CEFA'; //light blue
                ctx.stroke();
            }



            //Trying to color the axis line with different colour from x to y
            for (var i = 27; i < 32 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#32CD32'; //green
                ctx.stroke();

            }

            //Trying to color the axis line with different colour from y to z
            for (var i = 33; i < 38 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#32CD32'; //green
                ctx.stroke();

            }
        }


        //Trying to print the center explicitly
        if (body || face) {
            var xyLoc = project3D(vertices[80][0], vertices[80][1], vertices[80][2]);
            var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
            verticesPixLoc.push(pixLoc);
            if (body) {
                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "orange red";
                ctx.fill();
            }
        }


        if (body == 1 || face == 1) {
            for (var i = 81; i < 86; i++) {
                var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
                var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                verticesPixLoc.push(pixLoc);

                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "orange red";
                ctx.fill();
            }

            var k2 = 82;
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[k2][0], verticesPixLoc[k2][1]);
            for (var i = 82; i < 86 - 1; i++) {
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            }
            ctx.fillStyle = "orange red";
            ctx.fill();

        }


        var xyLoc = project3D(vertices[80][0], vertices[80][1], vertices[80][2]);
        var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
        verticesPixLoc.push(pixLoc);
        if (body) {
            ctx.beginPath();
            ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "orange";
            ctx.fill();
        }

        //Trying later loop for face center points
        if (face) {
            for (var i = 86; i < 92; i++) {
                var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
                var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                verticesPixLoc.push(pixLoc);

                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "orange";
                ctx.fill();
            }
        }

        //Making the edges again 
        for (var i = 0; i < 80; i++) //actual value 16
        {
            var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
            var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
            verticesPixLoc.push(pixLoc);

            //give vertices a bit of a circular shape
            if (i < 16) {
                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();

            }

            if (i < 26 && displayAxis % 2 == 1) {
                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();
            }

            if (i >= 69 && face == 2) {
                ctx.beginPath();
                ctx.arc(pixLoc[0], pixLoc[1], 5, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();
            }


        }

        //Drawing the cube edges excluding the axis
        for (var i = 0; i < 16 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#87CEFA'; //light blue
            ctx.stroke();
        }


        //Drawing the color of the internal edges

        for (var i = 23; i < 25 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }


        for (var i = 29; i < 31 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }

        for (var i = 35; i < 37 - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
            ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
            ctx.strokeStyle = '#32CD32'; //green
            ctx.stroke();

        }

        //Trying to make the lines again 

        //draw the cube edges  //actual value 16

        if (displayAxis % 2 == 1) {
            for (var i = 0; i < 26 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#87CEFA'; //light blue
                ctx.stroke();
            }



            //Trying to color the axis line with different colour from x to y
            for (var i = 27; i < 32 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#32CD32'; //green
                ctx.stroke();

            }

            //Trying to color the axis line with different colour from y to z
            for (var i = 33; i < 38 - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                ctx.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                ctx.strokeStyle = '#32CD32'; //green
                ctx.stroke();

            }
        }

        //Trying TO display the X, Y and Z alphabet on the screen
        if (displayAxis % 2 == 1) {
            //X Displayed
            for (var j = 26; j < 27; j++) {
                ctx.beginPath();
                var text = 'X';
                ctx.font = '25px Papyrus, sans-Serif';
                ctx.fillStyle = '#fa4b2a';
                ctx.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
            }

            //Y Displayed
            for (var j = 32; j < 33; j++) {
                ctx.beginPath();
                var text = 'Y';
                ctx.font = '25px Papyrus, sans-Serif';
                ctx.fillStyle = '#fa4b2a';
                ctx.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
            }

            //Z Displayed
            for (var j = 38; j < 39; j++) {
                ctx.beginPath();
                var text = 'Z';
                ctx.font = '25px Papyrus, sans-Serif';
                ctx.fillStyle = '#fa4b2a';
                ctx.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
            }

        }

    }



    //this function transforms (x,y) of cartesian plane to proper pixel location of canvas with (0,0)
    //at the upper left
    function transformXYtoPixels(x, y) {
        return [x + 650 / 2, -y + 400 / 2]
    }


    


    //for input feild copy to another feild
    // var dst1 = document.getElementById("mynumber2");
    // var dst2 = document.getElementById("mynumber1");
    var src = document.getElementById("one"),
    concatenate,
    i=0,
    dot=0,
    h=1,
    dot1=0,
    h1=1,
   
        // dst = document.getElementById("two"),
        src1 = document.getElementById("zvalue");
    src.addEventListener('input', function () {
        concatenate = src.value;
        concat();
    });

    function concat()
    {
        if(dot==1)
        {
            dot++;
            dst.value = dst.value + ".";
            dst1.value = dst1.value + ".";
            dst2.value = dst2.value + ".";

        }
        else if(dot>=2 && dot<5){
            concatenate = concatenate * Math.pow(10,h);
            concatenate = concatenate % 10;
            dst.value = dst.value + concatenate;
            dst1.value = dst1.value + concatenate;
            dst2.value = dst2.value + concatenate;
            h++;
            dot++;
        }
        if(dot==0){
            dot++;
            concatenate = concatenate % 10;
            dst.value = dst.value + concatenate;
            dst1.value = dst1.value + concatenate; 
            dst2.value = dst2.value + concatenate;
        }
        if(dot==5)
        {
           src.value = "";
           dot=0;
           h=1;
        }
       
        
    }
    function concat1()
    {
        if(i==0)
        {
            dst.value = dst.value + ":" + " ";
            dst1.value = dst1.value + ":" + " ";
            dst2.value = dst2.value + ":" + " ";
            i=1;
        }

        if(dot1==1)
        {
            dot1++;
            dst.value = dst.value + ".";
            dst1.value = dst1.value + ".";
            dst2.value = dst2.value + ".";

        }
        else if(dot1>=2 && dot1<5){
            concatenate = concatenate * Math.pow(10,h1);
            concatenate = concatenate % 10;
            dst.value = dst.value + concatenate;
            dst1.value = dst1.value + concatenate;
            dst2.value = dst2.value + concatenate;
            h1++;
            dot1++;
        }
        if(dot1 == 0){
            dot1++;
            concatenate = concatenate % 10;
            dst.value = dst.value + concatenate;
            dst1.value = dst1.value + concatenate;
            dst2.value = dst2.value + concatenate;
        }
        if(dot1==5)
        {
           src1.value = "";
           dot1=0;
           h1=1;
           i=0;
        }



        
        // concatenate = concatenate % 10;
        // dst.value = dst.value + concatenate;
    }

    src1.addEventListener('input',function() {
        concatenate =src1.value;
        concat1();

    });

    }
}

//for generating randon number
var randomnumber;
var dot2=0;
var prev_handler = window.onload;
window.onload = function () {
    if (prev_handler) {
        prev_handler();
    }
    var minNumber = 2; // The minimum number you want
    var maxNumber = 4; // The maximum number you want
    randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    document.getElementById("myNumber").value = randomnumber; // Sets content of <div> to number

    // var dst = document.getElementById("two");
    dst.value = randomnumber + ":" + " ";
    return false; // Returns false just to tidy everything up
}



    function FccValue()
    {
        // document.getElementById("mynumber1").value = randomnumber; 

        // var dst2 = document.getElementById("mynumber1");
        dst2.value = randomnumber + ":" + " ";
    }

    function SccValue()
    { 
        document.getElementById("mynumber").value = randomnumber; 
        // var dst = document.getElementById("two");
        dst.value = "";
    }

    function BccValue()
    { 
        // document.getElementById("mynumber2").value = randomnumber; 
        
        // var dst1 = document.getElementById("mynumber2");
        dst1.value = randomnumber + ":" + " ";

    }


    function initCanvas()
    { 
        var up = document.getElementById("up");
        var down = document.getElementById("down");
        var right = document.getElementById("right");
        var left = document.getElementById("left");
        var clockwise = document.getElementById("clockwise");
        var anticlockwise = document.getElementById("anticlockwise");
        var axisdisplay = document.getElementById("x");
        var sccdisplay = document.getElementById("v");
        var fccdisplay = document.getElementById("f");
        var bccdisplay = document.getElementById("b");
        
        var size = window.innerWidth;
        if(size <= 450)
        {
            var k;
            var ctx1 = document.getElementById('myCanvas1').getContext('2d');
            k=window.innerWidth;
            k=k-30;
            ctx1.canvas.width = k;

            var count = 0;
            var displayAxis = 0;
            var body = 0;
            var face = 0;
        
            ctx1.fillStyle = 'rgba(0,0,0,1)';
            ctx1.strokeStyle = 'rgba(0,153,255,1)';
        
            
            var Qx = Math.PI / 4;
            var Qy = Math.PI / 3;
            var Qz = Math.PI / 4;
            var dx = 0;
            var dy = 0;
            var dz = 0;
        
            
            var SIZE = 55;
            
            var AXIS = 110;
            
            var vertices = [];
        
           
            
        
            function addPoint(x, y, z) {
                return [x, y, z]
            }
        
            
            vertices.push(addPoint(SIZE,SIZE,SIZE));  //1
            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2
            vertices.push(addPoint(-SIZE,-SIZE,SIZE)); //3
            vertices.push(addPoint(SIZE,-SIZE,SIZE));  //4
            
            vertices.push(addPoint(SIZE,SIZE,SIZE)); //5 && //1
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7 
            vertices.push(addPoint(-SIZE,-SIZE,-SIZE)); //8
        

            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //10 && //6
            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //11 && //9
            vertices.push(addPoint(SIZE,-SIZE,SIZE)); //12 && //4
            
            vertices.push(addPoint(-SIZE,-SIZE,SIZE)); //13 && //3
            vertices.push(addPoint(-SIZE,-SIZE,-SIZE)); //14 && //8
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //15  && //7
            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //16 && //2
            

            //adding axis
            vertices.push(addPoint(SIZE,SIZE,SIZE));//1                     //count - 17
            vertices.push(addPoint(SIZE,SIZE,AXIS));//z axis                 //count -18


            vertices.push(addPoint(SIZE,SIZE,SIZE));//1                     //count -19
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -20
            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9                  //count -21
            vertices.push(addPoint(SIZE,-AXIS,-SIZE)); //y axis              //count -22

            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9                  //count -23
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -24
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -25
            vertices.push(addPoint(-AXIS,SIZE,-SIZE)); //x axis             //count -26


            vertices.push(addPoint(-AXIS,SIZE,-60)); //x-top //X printed    //count -27

            vertices.push(addPoint(-AXIS,SIZE,-SIZE)); //x axis             //count -28
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -29
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -30   
            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9                  //count -31
            vertices.push(addPoint(SIZE,-AXIS,-SIZE)); //y axis             //count -32

            vertices.push(addPoint(SIZE,-AXIS,-60)); //y-top //Y printed    //count -33

            vertices.push(addPoint(SIZE,-AXIS,-SIZE)); //y axis             //count -34  
            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9                  //count -35
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -36
            vertices.push(addPoint(SIZE,SIZE,SIZE));//1                     //count -37
            vertices.push(addPoint(SIZE,SIZE,AXIS));//z axis                //count -38

            vertices.push(addPoint(SIZE,35,AXIS));//z-top //Z printed       //count -39

            //Trying to make shape 100
            //Traverse to point 7
            vertices.push(addPoint(SIZE,SIZE,AXIS));//z axis                //count -40
            vertices.push(addPoint(SIZE,SIZE,SIZE));//1                     //count -41
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -42

            //starting of making 100
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -43
            vertices.push(addPoint(-SIZE,-SIZE,-SIZE)); //8                 //count -44
            vertices.push(addPoint(-SIZE,-SIZE,SIZE)); //3                  //count -45
            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2                   //count -46
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -47

            //Trying to make shape 110
            //starting of making 110
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -48
            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9                  //count -49
            vertices.push(addPoint(SIZE,-SIZE,SIZE));  //4                  //count -50
            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2                   //count -51
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -52

            //Trying to make shape 111
            //starting of making 111
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -53
            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9                  //count -54
            vertices.push(addPoint(SIZE,SIZE,SIZE));//1                     //count -55
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -56

            //Trying to make the parallel side of 100
            vertices.push(addPoint(-SIZE,SIZE,-SIZE)); //7                  //count -57

            //starting of making 100 parallel side
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -58
            vertices.push(addPoint(SIZE,-SIZE,-SIZE)); //9                  //count -59
            vertices.push(addPoint(SIZE,-SIZE,SIZE));  //4                  //count -60
            vertices.push(addPoint(SIZE,SIZE,SIZE));  //1                   //count -61
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -62


            //second side of 111 planes                 
            vertices.push(addPoint(SIZE,SIZE,-SIZE)); //6                   //count -63 
            vertices.push(addPoint(SIZE,SIZE,SIZE));  //1                   //count -64


            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2                   //count -65
            vertices.push(addPoint(SIZE,-SIZE,SIZE));  //4                  //count -66    
            vertices.push(addPoint(-SIZE,-SIZE,-SIZE)); //8                 //count -67
            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2                   //count -68

            //Trying for 110 planes first side


            //Reaching the edge
            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2                   //count -69

            //start making the side
            vertices.push(addPoint(-SIZE,0,SIZE)); //center of 2 and 3      //count -70
            vertices.push(addPoint(0,-SIZE,SIZE)); //center of 3 and 4      //count -71
            vertices.push(addPoint(0,-SIZE,-SIZE)); //center of 8 and 9     //count -72
            vertices.push(addPoint(-SIZE,0,-SIZE)); //center of 7 and 8     //count -73
            vertices.push(addPoint(-SIZE,0,SIZE)); //center of 2 and 3      //count -74


            //Trying for 110 planes second side

            //Reaching the edge
            vertices.push(addPoint(-SIZE,SIZE,SIZE)); //2                   //count -75

            //start making the side
            vertices.push(addPoint(0,SIZE,SIZE));  //center of 1 and 2      //count -76
            vertices.push(addPoint(0,SIZE,-SIZE)); //center of 7 and 6      //count -77
            vertices.push(addPoint(SIZE,0,-SIZE)); //center of 6 and 9      //count -78
            vertices.push(addPoint(SIZE,0,SIZE));  //center of 1 and 4      //count -79
            vertices.push(addPoint(0,SIZE,SIZE));  //center of 1 and 2      //count -80








            //Trying the body center

            vertices.push(addPoint(0,0,0)); //center point of bcc           //count -75  //81

            //for side 100 making the center parallel for body centered

            vertices.push(addPoint(0,SIZE,-SIZE)); //center of 7 and 6      //count -76  //82
            vertices.push(addPoint(0,-SIZE,-SIZE)); //center of 8 and 9     //count -77  //83
            vertices.push(addPoint(0,-SIZE,SIZE)); //center of 3 and 4      //count -78  //84
            vertices.push(addPoint(0,SIZE,SIZE));  //center of 1 and 2      //count -79  //85
            vertices.push(addPoint(0,SIZE,-SIZE)); //center of 7 and 6      //count -80  //86


            



            //Trying to make face centered

            //First lets try to make the center edges of each cube side

            vertices.push(addPoint(0,-SIZE,0)); //center of side 8,9,4,3    //count -81  //87
            vertices.push(addPoint(-SIZE,0,0)); //center of side 7,8,3,2    //count -82  //88
            vertices.push(addPoint(0,0,SIZE));  //center of side 1,2,3,4    //count -83  //89
            vertices.push(addPoint(0,SIZE,0)); //center of side 7,2,1,6     //count -84  //90
            vertices.push(addPoint(SIZE,0,0)); //center of side 1,6,9,4     //count -85  //91
            vertices.push(addPoint(0,0,-SIZE)); //center of side 8,7,6,9    //count -86  //92

        
        
        
        
        
        
        
        
        
            drawCube();
        
            //event listener on the keyboard

            // window.addEventListener("keydown", checkIfKeyPressed, false);

            up.addEventListener("click",moveUp);
            down.addEventListener("click",moveDown);
            right.addEventListener("click",moveRight);
            left.addEventListener("click",moveLeft);
            clockwise.addEventListener("click",moveClockwise);
            anticlockwise.addEventListener("click",moveAntiClockwise);
            axisdisplay.addEventListener("click",moveAxisdisplay);
            sccdisplay.addEventListener("click",moveSccdisplay);
            fccdisplay.addEventListener("click",moveFccdisplay);
            bccdisplay.addEventListener("click",moveBccdisplay);


            function moveUp()
            {
                var step = Math.PI / 4320;
                dx = dx + step;
                updateCube();
            }

            function moveDown()
            {
                var step = Math.PI / 4320;
                dx = dx - step;
                updateCube();
            }

            function moveRight()
            {
                var step = Math.PI / 4320;
                dy = dy + step;
                updateCube();
            }

            function moveLeft()
            {
                var step = Math.PI / 4320;
                dy = dy - step;
                updateCube();
            }

            function moveClockwise()
            {
                var step = Math.PI / 4320;
                dz = dz + step;
                updateCube();
            }

            function moveAntiClockwise()
            {
                var step = Math.PI / 4320;
                dz = dz - step;
                updateCube();
            }

            function moveAxisdisplay()
            {
                displayAxis++;
                updateCube();
            }

            function moveSccdisplay()
            {
                var step = Math.PI / 4320;
                if (count < 3) {
                    count++;
                    body = 0;
                    face = 0;
                }
                else {
                    count = 1;
                    body = 0;
                    face = 0;
                }
                updateCube();
            }

            function moveBccdisplay()
            {
                var step = Math.PI / 4320;
                if (body < 3) {
                    body++;
                    count = 0;
                    face = 0;
                }
                else {
                    body = 1;
                    count = 0;
                    face = 0;
                }
                updateCube();

            }

            function moveFccdisplay()
            {
                var step = Math.PI / 4320;
                if (face < 3) {
                    face++;
                    count = 0;
                    body = 0;
                }
                else {
                    face = 1;
                    count = 0;
                    body = 0;
                }
                updateCube();
            }


        
           
            
        
           
            function updateCube() {
                var rate = 0.999;//this parameter is responsible for the slow dying off effect of rotations
        
                dx = t = rate * dx;
                Qx = Qx + dx;
                dy = rate * dy;
                Qy = Qy + dy;
                dz = rate * dz;
                Qz = Qz + dz;
                drawCube();
        
                //console.log("Qx,Qy,Qz",Qx,Qy,Qz)
                //console.log("dx,dy,dz",dx,dy,dz)
        
                //key operation to create an animation.  This is what gives the sustaining movement.
                window.requestAnimationFrame(updateCube)
        
            }
        
           
            function project3D(x, y, z) {
                var xRotQz = x * Math.cos(Qz) + y * Math.sin(Qz);
                var yRotQz = y * Math.cos(Qz) - x * Math.sin(Qz);
                var zRotQz = z;
                var xRotQzQx = xRotQz;
                var yRotQzQx = yRotQz * Math.cos(Qx) + zRotQz * Math.sin(Qx);
                var zRotQzQx = zRotQz * Math.cos(Qx) - yRotQz * Math.sin(Qx);
                var xRotQzQxQy = xRotQzQx * Math.cos(Qy) + zRotQzQx * Math.sin(Qy);
                var yRotQzQxQy = yRotQzQx;
                //var zRotQzQxQy=zRotQzQx*Math.cos(Qy)-xRotQzQx*Math.sin(Qy);
                return [xRotQzQxQy, yRotQzQxQy]
            }
        
           
            function drawCube() {
                //console.log("drawCube");
        
                //these clear the canvas of previous traces
                ctx1.clearRect(0, 0, 650, 400);
                ctx1.fillStyle = 'rgba(0,0,0,1)';
                ctx1.fillRect(0, 0, 650, 400)
        
                var verticesPixLoc = [];
                //vertex coordinates in 3D are first projected to 2D and then transformed into pixel location
                //this latter is needed as (0,0) of canvas is not at the center of the canvas but at upper left
                for (var i = 0; i < 80; i++) //actual value 16
                {
                    var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
                    var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                    verticesPixLoc.push(pixLoc);
        
                    //give vertices a bit of a circular shape
                    if (i < 16) {
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
        
                    }
        
                    if (i < 26 && displayAxis % 2 == 1) {
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                    }
        
                    if (i >= 69 && face == 2) {
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                    }
        
        
                }
        
                //Drawing the cube edges excluding the axis
                for (var i = 0; i < 16 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#87CEFA'; //light blue
                    ctx1.stroke();
                }
        
                //Drawing the color of the internal edges
                for (var i = 23; i < 25 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
        
                //original 
                for (var i = 29; i < 31 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
        
                //original 
                for (var i = 35; i < 37 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
        
        
        
        
        
        
        
        
        
        
        
                if (displayAxis % 2 == 1) {
                    //draw the cube edges  //actual value 16
                    for (var i = 0; i < 26 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#87CEFA'; //light blue
                        ctx1.stroke();
                    }
        
                    //Trying to color the axis line with different colour from x to y
                    for (var i = 27; i < 32 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#32CD32'; //green
                        ctx1.stroke();
        
                    }
        
                    //Trying to color the axis line with different colour from y to z
                    for (var i = 33; i < 38 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#32CD32'; //green
                        ctx1.stroke();
                    }
        
                }
        
        
        
        
        
        
                //Trying TO display the X, Y and Z alphabet on the screen
                if (displayAxis % 2 == 1) {
                    //X Displayed
                    for (var j = 26; j < 27; j++) {
                        ctx1.beginPath();
                        var text = 'X';
                        ctx1.font = '25px Papyrus, sans-Serif';
                        ctx1.fillStyle = '#fa4b2a';
                        ctx1.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
                    }
        
                    //Y Displayed
                    for (var j = 32; j < 33; j++) {
                        ctx1.beginPath();
                        var text = 'Y';
                        ctx1.font = '25px Papyrus, sans-Serif';
                        ctx1.fillStyle = '#fa4b2a';
                        ctx1.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
                    }
        
                    //Z Displayed
                    for (var j = 38; j < 39; j++) {
                        ctx1.beginPath();
                        var text = 'Z';
                        ctx1.font = '25px Papyrus, sans-Serif';
                        ctx1.fillStyle = '#fa4b2a';
                        ctx1.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
                    }
        
                }
        
                //to display 100
                if (count == 1 || body == 1 || face == 1) {
                    var k = 43;
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[k][0], verticesPixLoc[k][1]);
                    for (var i = 43; i < 47 - 1; i++) {
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    }
                    ctx1.fillStyle = "orange red";
                    ctx1.fill();
        
        
                    var k1 = 58;
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[k1][0], verticesPixLoc[k1][1]);
                    for (var i = 58; i < 62 - 1; i++) {
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    }
                    ctx1.fillStyle = "orange red";
                    ctx1.fill();
        
                }
        
                //to display 110
                if (count == 2 || body == 2 || face == 2) {
                    var k = 48;
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[k][0], verticesPixLoc[k][1]);
                    for (var i = 48; i < 52 - 1; i++) {
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    }
                    ctx1.fillStyle = "orange red";
                    ctx1.fill();
        
                    if (face == 2) {
                        var k2 = 70;
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[k2][0], verticesPixLoc[k2][1]);
                        for (var i = 70; i < 74 - 1; i++) {
                            ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        }
                        ctx1.fillStyle = "orange red";
                        ctx1.fill();
        
                        var k7 = 76;
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[k7][0], verticesPixLoc[k7][1]);
                        for (var i = 76; i < 80 - 1; i++) {
                            ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        }
                        ctx1.fillStyle = "orange red";
                        ctx1.fill();
                    }
        
                }
        
                //to display 111
                if (count == 3 || body == 3 || face == 3) {
                    var k = 53;
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[k][0], verticesPixLoc[k][1]);
                    for (var i = 53; i < 56 - 1; i++) {
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    }
                    ctx1.fillStyle = "orange red";
                    ctx1.fill();
        
        
                    var k8 = 65;
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[k8][0], verticesPixLoc[k8][1]);
                    for (var i = 65; i < 68 - 1; i++) {
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    }
                    ctx1.fillStyle = "orange red";
                    ctx1.fill();
        
                }
        
        
        
                //Drawing the cube edges excluding the axis
                for (var i = 0; i < 16 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#87CEFA'; //light blue
                    ctx1.stroke();
                }
        
        
                //Drawing the color of the internal edges
        
                for (var i = 23; i < 25 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
        
                for (var i = 29; i < 31 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
                for (var i = 35; i < 37 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
                //Trying to make the lines again 
        
                //draw the cube edges  //actual value 16
        
                if (displayAxis % 2 == 1) {
                    for (var i = 0; i < 26 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#87CEFA'; //light blue
                        ctx1.stroke();
                    }
        
        
        
                    //Trying to color the axis line with different colour from x to y
                    for (var i = 27; i < 32 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#32CD32'; //green
                        ctx1.stroke();
        
                    }
        
                    //Trying to color the axis line with different colour from y to z
                    for (var i = 33; i < 38 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#32CD32'; //green
                        ctx1.stroke();
        
                    }
                }
        
        
                //Trying to print the center explicitly
                if (body || face) {
                    var xyLoc = project3D(vertices[80][0], vertices[80][1], vertices[80][2]);
                    var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                    verticesPixLoc.push(pixLoc);
                    if (body) {
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "orange red";
                        ctx1.fill();
                    }
                }
        
        
                if (body == 1 || face == 1) {
                    for (var i = 81; i < 86; i++) {
                        var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
                        var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                        verticesPixLoc.push(pixLoc);
        
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "orange red";
                        ctx1.fill();
                    }
        
                    var k2 = 82;
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[k2][0], verticesPixLoc[k2][1]);
                    for (var i = 82; i < 86 - 1; i++) {
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    }
                    ctx1.fillStyle = "orange red";
                    ctx1.fill();
        
                }
        
        
                var xyLoc = project3D(vertices[80][0], vertices[80][1], vertices[80][2]);
                var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                verticesPixLoc.push(pixLoc);
                if (body) {
                    ctx1.beginPath();
                    ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                    ctx1.stroke();
                    ctx1.fillStyle = "orange";
                    ctx1.fill();
                }
        
                //Trying later loop for face center points
                if (face) {
                    for (var i = 86; i < 92; i++) {
                        var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
                        var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                        verticesPixLoc.push(pixLoc);
        
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "orange";
                        ctx1.fill();
                    }
                }
        
                //Making the edges again 
                for (var i = 0; i < 80; i++) //actual value 16
                {
                    var xyLoc = project3D(vertices[i][0], vertices[i][1], vertices[i][2]);
                    var pixLoc = transformXYtoPixels(xyLoc[0], xyLoc[1]);
                    verticesPixLoc.push(pixLoc);
        
                    //give vertices a bit of a circular shape
                    if (i < 16) {
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
        
                    }
        
                    if (i < 26 && displayAxis % 2 == 1) {
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                    }
        
                    if (i >= 69 && face == 2) {
                        ctx1.beginPath();
                        ctx1.arc(pixLoc[0], pixLoc[1], 4, 0, 2 * Math.PI);
                        ctx1.stroke();
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                    }
        
        
                }
        
                //Drawing the cube edges excluding the axis
                for (var i = 0; i < 16 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#87CEFA'; //light blue
                    ctx1.stroke();
                }
        
        
                //Drawing the color of the internal edges
        
                for (var i = 23; i < 25 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
        
                for (var i = 29; i < 31 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
                for (var i = 35; i < 37 - 1; i++) {
                    ctx1.beginPath();
                    ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                    ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                    ctx1.strokeStyle = '#32CD32'; //green
                    ctx1.stroke();
        
                }
        
                //Trying to make the lines again 
        
                //draw the cube edges  //actual value 16
        
                if (displayAxis % 2 == 1) {
                    for (var i = 0; i < 26 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#87CEFA'; //light blue
                        ctx1.stroke();
                    }
        
        
        
                    //Trying to color the axis line with different colour from x to y
                    for (var i = 27; i < 32 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#32CD32'; //green
                        ctx1.stroke();
        
                    }
        
                    //Trying to color the axis line with different colour from y to z
                    for (var i = 33; i < 38 - 1; i++) {
                        ctx1.beginPath();
                        ctx1.moveTo(verticesPixLoc[i][0], verticesPixLoc[i][1]);
                        ctx1.lineTo(verticesPixLoc[i + 1][0], verticesPixLoc[i + 1][1]);
                        ctx1.strokeStyle = '#32CD32'; //green
                        ctx1.stroke();
        
                    }
                }
        
                //Trying TO display the X, Y and Z alphabet on the screen
                if (displayAxis % 2 == 1) {
                    //X Displayed
                    for (var j = 26; j < 27; j++) {
                        ctx1.beginPath();
                        var text = 'X';
                        ctx1.font = '25px Papyrus, sans-Serif';
                        ctx1.fillStyle = '#fa4b2a';
                        ctx1.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
                    }
        
                    //Y Displayed
                    for (var j = 32; j < 33; j++) {
                        ctx1.beginPath();
                        var text = 'Y';
                        ctx1.font = '25px Papyrus, sans-Serif';
                        ctx1.fillStyle = '#fa4b2a';
                        ctx1.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
                    }
        
                    //Z Displayed
                    for (var j = 38; j < 39; j++) {
                        ctx1.beginPath();
                        var text = 'Z';
                        ctx1.font = '25px Papyrus, sans-Serif';
                        ctx1.fillStyle = '#fa4b2a';
                        ctx1.fillText(text, verticesPixLoc[j][0], verticesPixLoc[j][1]);
                    }
        
                }
        
            }
        
        
        
          
            function transformXYtoPixels(x, y) {
                return [x + 335 / 2, -y + 400 / 2]
            }
        
        
            
        
        
           
            var src = document.getElementById("one"),
            concatenate,
            i=0,
            dot=0,
            h=1,
            dot1=0,
            h1=1,
           
               
            src1 = document.getElementById("zvalue");
            src.addEventListener('input', function () {
                concatenate = src.value;
                concat();
            });
        
            function concat()
            {
                if(dot==1)
                {
                    dot++;
                    dst.value = dst.value + ".";
                    dst1.value = dst1.value + ".";
                    dst2.value = dst2.value + ".";
        
                }
                else if(dot>=2 && dot<5){
                    concatenate = concatenate * Math.pow(10,h);
                    concatenate = concatenate % 10;
                    dst.value = dst.value + concatenate;
                    dst1.value = dst1.value + concatenate;
                    dst2.value = dst2.value + concatenate;
                    h++;
                    dot++;
                }
                if(dot==0){
                    dot++;
                    concatenate = concatenate % 10;
                    dst.value = dst.value + concatenate;
                    dst1.value = dst1.value + concatenate; 
                    dst2.value = dst2.value + concatenate;
                }
                if(dot==5)
                {
                   src.value = "";
                   dot=0;
                   h=1;
                }
               
                
            }
            function concat1()
            {
                if(i==0)
                {
                    dst.value = dst.value + ":" + " ";
                    dst1.value = dst1.value + ":" + " ";
                    dst2.value = dst2.value + ":" + " ";
                    i=1;
                }
        
                if(dot1==1)
                {
                    dot1++;
                    dst.value = dst.value + ".";
                    dst1.value = dst1.value + ".";
                    dst2.value = dst2.value + ".";
        
                }
                else if(dot1>=2 && dot1<5){
                    concatenate = concatenate * Math.pow(10,h1);
                    concatenate = concatenate % 10;
                    dst.value = dst.value + concatenate;
                    dst1.value = dst1.value + concatenate;
                    dst2.value = dst2.value + concatenate;
                    h1++;
                    dot1++;
                }
                if(dot1 == 0){
                    dot1++;
                    concatenate = concatenate % 10;
                    dst.value = dst.value + concatenate;
                    dst1.value = dst1.value + concatenate;
                    dst2.value = dst2.value + concatenate;
                }
                if(dot1==5)
                {
                   src1.value = "";
                   dot1=0;
                   h1=1;
                   i=0;
                }
        
        
        
                
               
            }
        
            src1.addEventListener('input',function() {
                concatenate =src1.value;
                concat1();
        
            });
        }  

    }


    window.addEventListener('load', function (event) {
        initCanvas();
    });


   