import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
const port = 5000;
app.listen(port, () => {
    console.log("server is opened");
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://khkt:khkt@cluster0.bditlhp.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected mongodb");
    })
    .catch((err) => {
        console.log(err);
    })

const freecodeSchema = new mongoose.Schema({
    freecode: {
        type: String,
        require: true
    },
    device: {
        type: String,
        require: true
    },
    remainTimes: {
        type: Number
    }
});

const freecodes = ["baoweb1", "baoweb2", "baoweb3", "baoweb4", "baoweb5",
    "baoweb6", "baoweb7", "baoweb8", "baoweb9", "baoweb10",
    "baoweb11", "baoweb12", "baoweb13", "baoweb14", "baoweb15",
    "baoweb16", "baoweb17", "baoweb18", "baoweb19", "baoweb20"
];

app.get("/", async (req, res) => {
    for(let i = 0; i < freecodes.length; i++){
        const record = new freecodeModel({
            freecode: freecodes[i],
            device: "",
            remainTimes: 20
        })
        //await record.save();
    }
});

const freecodeModel = mongoose.model("freecode", freecodeSchema);

app.post('/freecode', async (req, res) => {
    const freecode = req.body.freecode;
    const device = req.body.device;
    const doc = await freecodeModel.findOne({freecode: freecode});
    if (doc == null){
        res.json({message: "wrong freecode"});
    } else{
        if (doc.device == "" || doc.device == undefined || doc.device == null){
            await freecodeModel.findOneAndUpdate({freecode: freecode}, {device: device});
            await freecodeModel.findOneAndUpdate({freecode: freecode}, {remainTimes: doc.remainTimes-1});
            res.json({message: "accept", remainTimes: doc.remainTimes-1});
        } else{
            if (device != doc.device){
                res.json({message: "wrong device"});
            } else{
                if(doc.remainTimes <= 0){
                    res.json({message: "empty remain"});
                } else{
                    await freecodeModel.findOneAndUpdate({freecode: freecode}, {remainTimes: doc.remainTimes-1});
                    res.json({message: "accept", remainTimes: doc.remainTimes-1});
                }
            }
        }
    }
})