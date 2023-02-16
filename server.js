const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { Sequelize,DataTypes } = require('sequelize');

const sequelizeConnection = new
Sequelize('postgres://postgres:mtndew@localhost:5432/postgres',{
    define:{
        timestamps:false,
        schema:'dj_gives'
    }
})
const Donation = sequelizeConnection.define("Donations",{
    donationId:{
        type: DataTypes.INTEGER,
        field: 'donation_id',
        primaryKey: true,
        autoIncrement: true
    },
    donationSender:{
        type: DataTypes.STRING,
        field:'donation_sender'
    },
    senderEmail:{
        type: DataTypes.STRING,
        field:'sender_email'
    },
    donationAmount:{
        type:DataTypes.DECIMAL,
        field:'donation_amount'
    },
    eventId:{
        type:DataTypes.INTEGER,
        field:"event_id"
    }

})

const Event = sequelizeConnection.define("Events",{
    eventId:{
        type: DataTypes.INTEGER,
        field: 'event_id',
        primaryKey: true,
        autoIncrement: true
    },
    eventTitle:{
        type: DataTypes.STRING,
        field: 'event_title'
    },
    eventCost:{
        type: DataTypes.DECIMAL,
        field:'event_cost'
    },
    eventLink:{
        type:DataTypes.TEXT,
        field:'event_link'
    },
    eventImage:{
        type: DataTypes.BLOB,
        field: 'event_image'
    },
    eventAddress:{
        type: DataTypes.STRING,
        field: 'event_address'
    },
    eventCity:{
        type: DataTypes.STRING,
        field: 'event_city'
    },
    eventState:{
        type: DataTypes.STRING,
        field: 'event_state'
    },
    eventCountry:{
        type: DataTypes.STRING,
        field: 'event_country'
    },
    eventDate:{
        type: DataTypes.DATEONLY,
        field: 'event_date'
    },
    eventStartTime:{
        type: DataTypes.TIME,
        field: 'event_start_time'
    },
    eventEndTime:{
        type: DataTypes.TIME,
        field: 'event_end_time'
    },
    eventDesc:{
        type: DataTypes.TEXT('medium'),
        field: 'event_desc'
    },

})

Event.hasMany(Donation)
Donation.belongsTo(Event, {
    foreignKey:"eventId",
    as:"Events"
})






app.get('/Donations',(req,res)=>{
    Donation.findAll().then(donations=>{
    let dList = JSON.stringify(donations);
    res.setHeader('Content-type','application/json');
    res.send(dList);
    res.status(200);
    })
})

app.get('/Events',(req,res)=>{
    Event.findAll().then(events=>{
        let eList = JSON.stringify(events);
        res.setHeader('Content-type','application/json');
        res.send(eList);
        res.status(200);
    })
})


app.post('/Donations',(req,res)=>{
    const donationData = req.body;
    Donation.create({
        donationId:donationData.donationId,donationSender:donationData.donationSender,senderEmail:donationData.senderEmail,donationAmount:donationData.donationAmount,eventId:donationData.eventId
    })
    res.status(201).send("Donation created successfully");
})

app.post('/Events',(req,res)=>{
    const eventData = req.body;
    Event.create({
        eventId:eventData.eventId,eventTitle:eventData.eventTitle,eventCost:eventData.eventCost,eventLink:eventData.eventLink,eventImage:eventData.eventImage,eventAddress:eventData.eventAddress,eventCity:eventData.eventCity,eventState:eventData.eventState,eventCountry:eventData.eventCountry,eventDate:eventData.eventDate,eventStartTime:eventData.eventStartTime,eventEndTime:eventData.eventEndTime,eventDesc:eventData.eventDesc
        })
    res.status(201).send("Event created successfully");
})

app.put('/Events/:eventId', (req,res)=>{
    const eId = req.params['eventId'];
    Event.findByPk(eId).then(event =>{
        if(event){
            const eventData = req.body;
            Event.update({
               eventTitle:eventData.eventTitle,eventCost:eventData.eventCost,eventLink:eventData.eventLink,eventImage:eventData.eventImage,eventAddress:eventData.eventAddress,eventCity:eventData.eventCity,eventState:eventData.eventState,eventCountry:eventData.eventCountry,eventDate:eventData.eventDate,eventStartTime:eventData.eventStartTime,eventEndTime:eventData.eventEndTime,eventDesc:eventData.eventDesc
               },{
                where:{eventId:eId}
               })
               res.status(200).send("Event Updated Successfully!");
            }else{
                res.status(404).send("Event Not Found");
            }    
        })
    })

app.delete('/events/:eventId',(req,res)=>{
    const eId=req.params['eventId'];
    Event.findByPk(eId).then((e)=>{
        if(e){
            Event.destroy({
                where:{eventId:eId}
            })
            res.status(200).send("Event Deleted Successfully");
        }else{
            res.status(404).send("Event not Found");
        }   
    })
})

sequelizeConnection.authenticate().then(()=>{
    console.log("Database connection successful")
}).catch((error)=>{
    console.log(error);
})

sequelizeConnection.sync().then(()=>{
    console.log("Tables created successfully");
}) 

const server = http.createServer(app);
server.listen(3000,'127.0.0.1',()=>{
    console.log('Server started');
})