const express = require('express');


//Dynamically Figure out Port to listen to
const PORT = process.env.PORT || 8000
app.listen(PORT,function(){
    console.log('Listening on port: ',PORT)
});
