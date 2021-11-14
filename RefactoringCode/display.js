//DISPLAY
//----------------------------------------------------------------------------------------------------------------
function GameDesign(){
    document.getElementById("test").innerHTML =
    `<br> <font color = \"red\"> Game Type: </font><font color = \"gray\">player number, camera, level type, game tick, genre</font><br>
    ${gametype()}<br>
    <font color = \"red\">World type: </font><font color = \"gray\">size, tone, genre</font><br>
    ${worldtype()}<br> 
    <font color = \"red\">Concept: </font><br>
    ${concept()}<br><br> 
    <font color = \"red\">Theme:</font><br> 
    ${balance()}<br> 
    <font color = \"red\">Set up :</font><br>
    ${setupResult()}<br> 
    <font color = \"red\">Goal:</font><br>
    ${resolution() /*Goal -> resolution*/}<br><br> 
    <font color = \"red\">Attitude:</font><br>
    ${attitude()}<br> 
    <font color = \"red\">Action:</font><br>
    ${action()}<br> 
    <font color = \"red\">Event:</font><br>
    ${events()}<br>`
    }
    