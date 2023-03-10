let br = document.createElement("br");

function removeDivs(a,b,c,d){
    if(a){
        a.style.display = 'none';
    }
    if(b){
        b.style.display = 'none';
    }
    if(c){
        c.style.display= 'none';
    }
    if(d){
        d.style.display= 'none';
    }
}

function lessTheOpacity(box){
    var oppArray = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
    var x = 0;
    (function next() {
        box.style.opacity = oppArray[x];
        if(++x < oppArray.length) {
            setTimeout(next, 250); //depending on how fast you want to fade
        }
        if(oppArray[x]=="0"){
            box.style.display= 'none';
        }
    })();
}
function successMessage(div){
    // let container=document.getElementById(div);
    let success=document.createElement("div");
    let check=document.createElement("p");
    let messageContainer=document.createElement('div');
    messageContainer.id="messageContainer";
    success.className="success-msg";
    check.className="fa fa-check";

    if (div.id=="cFormContainer"){
        check.innerText=" Event Added Successfully";
    }
    if (div.id=="vContainer"){
        check.innerText=" Event Deleted Successfully";
    }

    success.appendChild(check);
    messageContainer.appendChild(success);
    div.appendChild(messageContainer);
    lessTheOpacity(messageContainer);

}

function errorMessage(div){

    let err=document.createElement("div");
    let x=document.createElement("p");
    let messageContainer=document.createElement('div');
    messageContainer.id="messageContainer";
    err.className="error-msg";
    x.className="fa fa-times-circle";
    x.innerText="Failed to Create Event";
    err.appendChild(x);
    messageContainer.appendChild(err);
    div.appendChild(messageContainer);
    lessTheOpacity(messageContainer);

}


function cForm(){
    let form = document.createElement("form");
    form.className="cForm";
    form.id="cForm";
    form.setAttribute("method","post");

    let eventTitle = document.createElement("input");
    eventTitle.className="form-control";
    eventTitle.id="eventTitle";
    eventTitle.setAttribute("type", "text");
    eventTitle.setAttribute("name","eventName");
    eventTitle.setAttribute("placeholder","Event Name");

    let eventStreet = document.createElement("input");
    eventStreet.className="form-control";
    eventStreet.id="eventStreet";
    eventStreet.setAttribute("type","street");
    eventStreet.setAttribute("name","eventStreet");
    eventStreet.setAttribute("placeholder","Street Address");

    let eventCity = document.createElement("input");
    eventCity.className="form-control";
    eventCity.id="eventCity";
    eventCity.setAttribute("type","city");
    eventCity.setAttribute("name","eventCity");
    eventCity.setAttribute("placeholder","City");

    let eventState = document.createElement("input");
    eventState.className="form-control";
    eventState.id="eventState";
    eventState.setAttribute("type","state");
    eventState.setAttribute("name","eventState");
    eventState.setAttribute("placeholder","State");

    let eventCountry = document.createElement("input");
    eventCountry.className= "form-control";
    eventCountry.id="eventCountry";
    eventCountry.setAttribute("type","country");
    eventCountry.setAttribute("name","eventCountry");
    eventCountry.setAttribute("placeholder","Country");

    let eventStartTime = document.createElement("input");
    eventStartTime.className="form-control";
    eventStartTime.id="eventStartTime";
    eventStartTime.setAttribute("type","time");
    eventStartTime.setAttribute("name","eventStartTime");
    eventStartTime.setAttribute("placeholder","Start Time");

    let eventEndTime = document.createElement("input");
    eventEndTime.className="form-control";
    eventEndTime.id="eventEndTime";
    eventEndTime.setAttribute("type","time");
    eventEndTime.setAttribute("name","eventEndTime");
    eventEndTime.setAttribute("placeholder","End Time");

    let eventDate = document.createElement("input");
    eventDate.className="form-control";
    eventDate.id="eventDate";
    eventDate.setAttribute("type","date");
    eventDate.setAttribute("name","eventDate");
    eventDate.setAttribute("placeholder","Date");

    let eventCost = document.createElement("input");
    eventCost.className="form-control";
    eventCost.id="eventCost";
    eventCost.setAttribute("type","decimal");
    eventCost.setAttribute("name","eventCost");
    eventCost.setAttribute("placeholder","Cost");

    let eventLink =document.createElement("input");
    eventLink.className="form-control";
    eventLink.id="eventLink";
    eventLink.setAttribute("type","string");
    eventLink.setAttribute("name","eventLink");
    eventLink.setAttribute("placeholder","Ticket Link");

    // let eventImage = document.createElement("input");
    // eventImage.className="form-control";
    // eventImage.id="eventImage";
    // eventImage.setAttribute("type","image");
    // eventImage.setAttribute("name","eventImage");
    // eventLink.setAttribute("placeholder","Add an Image");


    let s = document.createElement("input");
    s.id="s";
    s.setAttribute("type","submit")
    s.setAttribute("value","submit");

    let d = document.createElement("input");
    d.className='material-symbols-outlined';
    d.id="s";
    d.setAttribute("type","span");
    d.setAttribute("value","arrow_back_ios_new");


    let newEvent=document.createElement("p");
    newEvent.id="newEvent";
    newEvent.innerText="New Event"
    form.appendChild(newEvent);
    form.appendChild(eventTitle);
    form.appendChild(br.cloneNode());
    form.appendChild(eventStreet);
    form.appendChild(br.cloneNode());
    form.appendChild(eventCity);
    form.appendChild(br.cloneNode());
    form.appendChild(eventState);
    form.appendChild(br.cloneNode());
    // form.appendChild(eventCountry);
    // form.appendChild(br.cloneNode());
    form.appendChild(eventStartTime);
    form.appendChild(br.cloneNode());
    form.appendChild(eventEndTime);
    form.appendChild(br.cloneNode());
    form.appendChild(eventDate);
    form.appendChild(br.cloneNode());
    form.appendChild(eventCost);
    form.appendChild(br.cloneNode());
    form.appendChild(eventLink);
    form.appendChild(br.cloneNode());

    let formContainer = document.getElementById("cFormContainer");
    formContainer.style.backgroundColor="#01692B";
    formContainer.appendChild(form);
    let sContainer=document.getElementById("sContainer");
    sContainer.appendChild(s);
    sContainer.appendChild(d);
    
    s.addEventListener('click',()=>{
      saveSubmitBtn()
    })

    let vBtn = document.getElementById("vEventBtn");
    vBtn.addEventListener('click',()=>{
        removeDivs(form,s,newEvent,d);
    })  
    let cBtn = document.getElementById("cEventBtn");
    cBtn.addEventListener('click',()=>{
        removeDivs(form,s,newEvent,d);
    })
    let uBtn = document.getElementById("uEventBtn");
    uBtn.addEventListener('click',()=>{
        removeDivs(form,s,newEvent,d);
    })
    let dBtn = document.getElementById("dEventBtn");
    dBtn.addEventListener('click',()=>{
        removeDivs(form,s,newEvent,d);
    }) 
    
    d.addEventListener('click',()=>{
        removeDivs(form,s,newEvent,d);
    })
}


function saveSubmitBtn(){
    const eventTitle= document.getElementById("eventTitle").value;
    const eventAddress= document.getElementById("eventStreet").value;
    const eventCity= document.getElementById("eventCity").value;
    const eventState= document.getElementById("eventState").value;
    const eventStartTime= document.getElementById("eventStartTime").value;
    const eventEndTime= document.getElementById("eventEndTime").value;
    const eventCost= document.getElementById("eventCost").value;
    const eventDate= document.getElementById("eventDate").value;
    const eventLink= document.getElementById("eventLink").value;
    
    //fetch request
    fetch('http://localhost:3000/events',{
        method:'POST',
        headers:    {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            eventTitle:eventTitle,
            eventAddress:eventAddress,
            eventCity:eventCity,
            eventState:eventState,
            eventStartTime:eventStartTime,
            eventEndTime:eventEndTime,
            eventDate:eventDate,
            eventLink:eventLink,
            eventCost:eventCost
        }) 
    })
    .then(response =>{
        if(response.ok){
            
            successMessage(cFormContainer);
            console.log("Event Kept");
        }
        else{
            errorMessage(cFormContainer);
            console.log("Event Failed to Submit");
        }
    })
    .catch(error =>{
        console.error("Error saving Event", error);
    });
}

function delEvent(id,div){
    fetch('http://localhost:3000/events/'+ id,{
        method:'DELETE'
    })
    .then(response =>{
        if(response.ok){
            successMessage(div);
            console.log("Event Deleted");
        }
        else{
            console.log("Event Failed to Delete");
        }
    })
    .catch(error =>{
        console.error("Error Deleting Event", error);
    })
}

// function updateEvent(eventInfo){
//     fetch('http://localhost:3000/events',{
//         method:'PUT',
//         headers:    {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             eventTitle:eventTitle,
//             eventAddress:eventAddress,
//             eventCity:eventCity,
//             eventState:eventState,
//             eventStartTime:eventStartTime,
//             eventEndTime:eventEndTime,
//             eventDate:eventDate,
//             eventLink:eventLink,
//             eventCost:eventCost
//         })
//     })
// }

function vForm(){
    fetch('http://localhost:3000/events')
        .then((r) => r.json())
        .then((response) => {
            showEventData(response)
            console.log(response);
        }).catch(err => console.error(err));
}

function showEventData(jsonFormatResponse){
    console.log(jsonFormatResponse);
    const viewContainerDiv= document.getElementById("vContainer");
    viewContainerDiv.style.backgroundColor="#01692B";
    for(let i in jsonFormatResponse){
        const eventInfo = jsonFormatResponse[i];
        const eventRow  = document.createElement("div");
        eventRow.className = "eventRow";
        const nameColumn = document.createElement("span");
        const costColumn = document.createElement("span");
        const streetColumn = document.createElement("span");
        const cityStateColumn = document.createElement("span");
        const dateColumn = document.createElement("span");
        const timeColumn = document.createElement("span");
        
        timeColumn.innerText= eventInfo.eventStartTime + " - "+eventInfo.eventEndTime;
        nameColumn.innerText = eventInfo.eventTitle;
        costColumn.innerText = "$"+eventInfo.eventCost;
        streetColumn.innerText = eventInfo.eventAddress;
        cityStateColumn.innerText = eventInfo.eventCity+", "+eventInfo.eventState;
        dateColumn.innerText=eventInfo.eventDate;

        let eventBtnContainer= document.createElement("div");
        eventBtnContainer.className="eBContainer";
        eventBtnContainer.id="eBContainer";

        let u = document.createElement("input");
        u.className='material-symbols-outlined';
        u.id="s";
        u.setAttribute("type","span");
        u.setAttribute("value","edit_square");

        let r = document.createElement("input");
        r.className='material-symbols-outlined';
        r.id="s";
        r.setAttribute("type","span");
        r.setAttribute("value","delete");

        const id=jsonFormatResponse[i].eventId;

        eventRow.appendChild(nameColumn);
        eventRow.appendChild(costColumn);
        eventRow.appendChild(streetColumn);
        eventRow.appendChild(cityStateColumn);
        eventRow.appendChild(dateColumn);
        eventRow.appendChild(timeColumn);
        viewContainerDiv.appendChild(eventRow);
        eventBtnContainer.appendChild(u);
        eventBtnContainer.appendChild(r);
        viewContainerDiv.appendChild(eventBtnContainer);

        r.addEventListener("click", ()=>{
            const result = confirm("This will delete "+eventInfo.eventTitle+" permanently");
            if (result) {
                delEvent(id,viewContainerDiv);
                viewContainerDiv.removeChild(eventRow);
                viewContainerDiv.removeChild(eventBtnContainer);
            }
        })

        u.addEventListener("click", ()=>{
            updateEvent(jsonFormatResponse[i]);
        })


  
        let vBtn = document.getElementById("vEventBtn");
        vBtn.addEventListener('click',()=>{
            removeDivs(eventRow,eventBtnContainer);
        })  
        let cBtn = document.getElementById("cEventBtn");
        cBtn.addEventListener('click',()=>{
            removeDivs(eventRow,eventBtnContainer);
        })
        let uBtn = document.getElementById("uEventBtn");
        uBtn.addEventListener('click',()=>{
            removeDivs(eventRow,eventBtnContainer);
        })
        let dBtn = document.getElementById("dEventBtn");
        dBtn.addEventListener('click',()=>{
            removeDivs(eventRow,eventBtnContainer);
        })
    }   
}
 