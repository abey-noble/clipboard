





// grab the button and then create an event listener to listen for submit click
var theButton = document.getElementById("theButton");
theButton.addEventListener("click", submitPressed);

function submitPressed(event) {
    theMessage();
}

// document.body.addEventListener("keyup", enterPressed);

// create a function that displays everything you have typed and also save it elsewhere
function theMessage() {
    
    var listLocation = document.getElementById("listLocation");
    var initialText = document.getElementById("theInput").value;
    if (initialText != "done") {
        // display everything user types for their reminder and eventually save it someplace else
        console.log(initialText);
        // save it someplace else
        // url = 'http://notes.html?name=' + encodeURIComponent(initialText);
        // document.location.href = url;
        // save it someplace else
        var reminderText = document.createTextNode(initialText);
        var reminderItemElement = document.createElement('li');
        var reminderElement = document.createElement('ul');
        reminderElement.className = "userType";
        reminderItemElement.className = "listType";
        reminderItemElement.appendChild(reminderText);
        reminderElement.appendChild(reminderItemElement);

        

        listLocation.appendChild(reminderElement);
        initialText = document.getElementById("theInput").value = "";
        
    }
    
    else if(initialText == "done") {
        
        // display that you asked to be done
        var doneText = document.createTextNode(initialText);
        var doneItem = document.createElement('li');
        var doneElement = document.createElement('ul');
        doneElement.className = "doneType";
        doneItem.className = "listType";
        doneItem.appendChild(doneText);
        doneElement.appendChild(doneItem);

       

        listLocation.appendChild(doneElement);

        // display that notes have been saved
        var cbReminderText = document.createTextNode("awesome we have saved your above notes to be viewed later");
        var cbReminderItem = document.createElement('li');
        var cbReminderElement = document.createElement('ul');
        cbReminderElement.className = "cbType";
        cbReminderItem.className = "listType";
        cbReminderItem.appendChild(cbReminderText);
        cbReminderElement.appendChild(cbReminderItem);

        

        listLocation.appendChild(cbReminderElement);
        console.log("awesome we have saved your above notes to be viewed later");
        initialText = document.getElementById("theInput").value = ""; 
    } 
}











// var storage = localStorage.getItem("storageKey");

// if(storage !== null) {
//     var data = JSON.parse(storage);
//     loadData(data);
//     var id  = data.length;
// }
// else {
//     id = 0;
//     data = [];
// }

// function loadData(array) {
//     array.forEach(function(initialText){
//         theMessage(initialText.name, initialText.id);
//     });
// }


// // grab the button and then create an event listener to listen for submit click
// var theButton = document.getElementById("theButton");
// theButton.addEventListener("click", submitPressed);

// function submitPressed(event) {
//     var initialText = document.getElementById("theInput").value;
//     theMessage(initialText, id);
//     data.push({
//         name: initialText,
//         id: id
//     });
//     localStorage.setItem("storageKey", JSON.stringify(data));
//     id = id + 1;
// }



// // document.body.addEventListener("keyup", enterPressed);

// // create a function that displays everything you have typed and also save it elsewhere
// function theMessage(initialText, id) {
    
//     var listLocation = document.getElementById("listLocation");
//     if (initialText != "done") {
//         var initialText = document.getElementById("theInput").value;
//         // display everything user types for their reminder and eventually save it someplace else
//         console.log(initialText);
//         // save it someplace else
//         // url = 'http://notes.html?name=' + encodeURIComponent(initialText);
//         // document.location.href = url;
//         // save it someplace else
//         var reminderText = document.createTextNode(initialText);
//         var reminderItemElement = document.createElement('li');
//         var reminderElement = document.createElement('ul');
//         reminderElement.className = "userType";
//         reminderItemElement.className = "listType";
//         reminderItemElement.appendChild(reminderText);
//         reminderElement.appendChild(reminderItemElement);

//         reminderElement.setAttribute("id", id);

//         listLocation.appendChild(reminderElement);
//         initialText = document.getElementById("theInput").value = "";
        
//     }
    
//     else if(initialText == "done") {
        
//         // display that you asked to be done
//         var doneText = document.createTextNode(initialText);
//         var doneItem = document.createElement('li');
//         var doneElement = document.createElement('ul');
//         doneElement.className = "doneType";
//         doneItem.className = "listType";
//         doneItem.appendChild(doneText);
//         doneElement.appendChild(doneItem);

//         doneElement.setAttribute("id", id);

//         listLocation.appendChild(doneElement);

//         // display that notes have been saved
//         var cbReminderText = document.createTextNode("awesome we have saved your above notes to be viewed later");
//         var cbReminderItem = document.createElement('li');
//         var cbReminderElement = document.createElement('ul');
//         cbReminderElement.className = "cbType";
//         cbReminderItem.className = "listType";
//         cbReminderItem.appendChild(cbReminderText);
//         cbReminderElement.appendChild(cbReminderItem);

//         cbReminderElement.setAttribute("id", id);

//         listLocation.appendChild(cbReminderElement);
//         console.log("awesome we have saved your above notes to be viewed later");
//         initialText = document.getElementById("theInput").value = ""; 
//     } 
// }




















// window.onload = function() {
//     var url = document.location.href;
//     params = url.split('?')[1].split('&'),
//     data = {}, tmp;
//     for (var i = 0, l = params.length; i < l; i++) { 
//         tmp = params[i].split('=');
//         data[tmp[0]] = tmp[1];
//     }
//     document.getElementById("listForNotes").innerHTML = data.name;
// }

// function enterPressed(event) {
//     if(event.keyCode == 13) {
//         console.log("enterPressed");
//         theMessage();
//     }
// }




// grab the button and create and event listener 


// // create a function that displays what the user and chatbox type after asking for reminder
// function sendToWho (event) {
//     var sentText = document.getElementById("theInput").value;
//     var sentenceArray = sentText.split(" ");
    
//         if (sentenceArray.indexOf("reminder") != -1) {
//             var forIndex = sentenceArray.indexOf("for");
//             // console.log(sentText);
//             // console.log(sentenceArray[forIndex + 1]);
            
//             // display text of user request for reminder
//             var listText = document.createTextNode(sentText);
//             var listElement = document.createElement('ul');
//             var listItemElement = document.createElement('li');
//             var listLocation = document.getElementById("listLocation");
//             listItemElement.appendChild(listText);
//             listElement.appendChild(listItemElement);
//             listLocation.appendChild(listElement);

//             //display text of chatbot responding to reminder
//             var chatbotText = document.createTextNode("Reminder created for " + sentenceArray[forIndex + 1] + " hours");
//             var chatbotItemElement = document.createElement('li');
//             var chatbotElement = document.createElement('ul');
//             chatbotItemElement.appendChild(chatbotText);
//             chatbotElement.appendChild(chatbotItemElement);
//             listLocation.appendChild(chatbotElement);
            
//             //console.log the reminder and clear the text input
//             console.log("Reminder created for " + sentenceArray[forIndex + 1] + " hours");
//             document.getElementById("theInput").value = "";

//             // create a new event listener that listens for user message






//             // var secondButton = document.getElementById("theButton");
//             // secondButton.addEventListener("click", theMessage);
//             // theMessage;
//         }

//         // we can go and try clearing the text afterwards and then set the email to the words after send and to
//         // and then I got to figure out how to display what I wrote within here itself
    
// }






// function submitEmail (event) {
//     var text = document.getElementById("theInput").value;
//     console.log(text);
// }



// var sentence = document.getElementById('sentence').textContent;
// var sentenceArray = sentence.split(" ");

// var i;
// for (i = 0; i < sentenceArray.length; i++) {
//     if (sentenceArray[i] == "text") {
//         console.log("text");
//     }
// }
 


