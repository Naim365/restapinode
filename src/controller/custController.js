const res = require("express/lib/response")

// Displaying the list of customers
const displayCustomer =  async(req,res,next)=>{

    try{ 
        var db = req.connection;
        let results = db.query("Select * from customer", function(err, rows){
        if(error) {
            console.log("error")
        }

        else {
            res.send({
                status: 1,
                message: "Successfully get the list of customers",
                data:rows
            })
        }
    })

}

catch(error){
    res.send({
        message: "An Error occured"
        

    })
}

}

module.exports= {displayCustomer}
