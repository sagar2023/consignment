const mongoose=require('mongoose');

//mongodb://localhost:27017/consignmentStore
//mongodb+srv://admin-aditya:Pass123@cluster0.ysgrh.mongodb.net/consignmentStore

mongoose.connect('mongodb://localhost:27017/consignmentstore', {                //connection to server
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection successful (mongoose).');
}).catch((error)=>{
    console.log('No connection (mongoose).');
})



