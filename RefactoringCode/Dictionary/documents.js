//DISPLAY
class designDocument extends gameGenerator{
    
    data = {
        title,  //get tone and genre from world and generate from a title library

        //game
        gametype,
        worldtype,
        concept,

        //story
        balance,
        setupResult,
        resolution, /*Goal -> resolution*/
        attitude,
        action,
        events
    }

    getDefaultString(){
        document.getElementById("test").innerHTML =
        `<br> <font color = \"red\"> Game Type: </font><font color = \"gray\">player number, camera, level type, game tick, genre</font><br>
        ${this.data.gametype()}<br>
        <font color = \"red\">World type: </font><font color = \"gray\">size, tone, genre</font><br>
        ${this.data.worldtype()}<br> 
        <font color = \"red\">Concept: </font><br>
        ${this.data.conceptObject()}<br><br> 
        <font color = \"red\">Theme:</font><br> 
        ${this.data.balanceObject()}<br> 
        <font color = \"red\">Set up :</font><br>
        ${this.data.setupResult()}<br> 
        <font color = \"red\">Goal:</font><br>
        ${this.data.resolutionObject() /*Goal -> resolution*/}<br><br> 
        <font color = \"red\">Attitude:</font><br>
        ${this.data.attitudeObject()}<br> 
        <font color = \"red\">Action:</font><br>
        ${this.data.actionObject()}<br> 
        <font color = \"red\">Event:</font><br>
        ${this.data.events()}<br>`
    }
}


    