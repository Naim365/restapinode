const db = require("../../index");

// Displaying the list of customers

const displayCustomer = async (req, res, next) => {
    try {

        var db = req.connection;
        let results = await db.query("select * from customer", function(error, rows){

        if(error) {
            console.log("error")
        }
        else {
            res.send({
                status: 1,
                message: "Successfully get the list of customers" + id,
                data:rows
            })
        }
    });

      

    }

    catch (error) {
            res.send({
            message: "An Error occured"
        

    })
    }

}

//Creating a  customer

const createCustomer = async (req, res, next) => {

    try{
        var db = req.connection;
        var id = Math.floor(Math.random() * 100) + 1;
        var data = {
         
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            image: req.file.filename,
            phone: req.body.phone,
            address: req.body.address,  

        }
        let results = await db.query("insert into customer set ?", [data], function(error, rows){

        if(error) {
            res.send({
                message: "An Error occured"
            })
        }
        else {
            res.send({
          
                message: "Successfully created customer with id"
          
            })
        }
    });

    }

    catch (error) {
            res.send({
            message: "An Error occured"
        

    })
    }

}




module.exports = {displayCustomer, createCustomer};
