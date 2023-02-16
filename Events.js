function getEvents(){
    fetch('http://localhost:3000/events')
    .then((r) => r.json())
    .then((response) => {
    showEventData(response)
    console.log(response)
    }).catch(err => console.error(err));
}

function showEventData(jsonFormatResponse){
    const eventsContainer= document.getElementById("vContainer");
    for(let i in jsonFormatResponse){
        const eventInfo = jsonFormatResponse[i];
        const eventDiv  = document.createElement("div");
        eventDiv.className = "eventDiv";
        const nameColumn = document.createElement("span");
        const costColumn = document.createElement("span");
        const streetColumn = document.createElement("span");
        const cityStateColumn = document.createElement("span");
        const dateColumn = document.createElement("span");
        nameColumn.innerText = eventInfo.eventTitle;
        costColumn.innerText = "$"+eventInfo.eventCost;
        streetColumn.innerText = eventInfo.eventAddress;
        cityStateColumn.innerText = eventInfo.eventCity+", "+eventInfo.eventState;
        dateColumn.innerText=eventInfo.eventDate;

        eventDiv.appendChild(nameColumn);
        eventDiv.appendChild(costColumn);
        eventDiv.appendChild(streetColumn);
        eventDiv.appendChild(cityStateColumn);
        eventDiv.appendChild(dateColumn);
        eventsContainer.appendChild(eventDiv);
    }
}

getEvents();