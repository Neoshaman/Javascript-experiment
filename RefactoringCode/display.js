//DISPLAY
//----------------------------------------------------------------------------------------------------------------
function GameDesign(){
    document.getElementById("test").innerHTML =
    "<br> <font color = \"red\"> Game Type: </font><font color = \"gray\">player number, camera, level type, game tick, genre</font> <br>" + gametype() +
    "<br> <font color = \"red\">World type: </font><font color = \"gray\">size, tone, genre</font><br>" + worldtype() +
    "<br> <font color = \"red\">Concept: </font><br>" + concept() +
    "<br>" +
    "<br> <font color = \"red\">Theme: <br> </font>" + balance() +
    "<br> <font color = \"red\">Set up : <br> </font>" + setupResult() +
    "<br> <font color = \"red\">Goal: <br></font>" + resolution() + //Goal -> resolution
    "<br>" +
    "<br> <font color = \"red\">Attitude: <br></font>" + attitude() +
    "<br> <font color = \"red\">Action: <br></font>" + action() +
    "<br> <font color = \"red\">Event: <br></font>" + events() +
    "<br>"
    ;
    }
    