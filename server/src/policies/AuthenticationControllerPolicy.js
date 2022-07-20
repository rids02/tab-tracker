const Joi = require('@hapi/joi')
module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().min(6).email().max(32).required(),
            password: Joi.string().required().min(8).max(32)
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        })

        const {error} = schema.validate(req.body)

        if(error){
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: `Enter valid email address!`
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules
                        <br>
                        1. It must contain ONLY the following characters: lower case, upper case, numerics
                         <br>
                        2. It must be at least 8 characters in length and not greater than 32 characters
                         `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration info'
                    })
            }}else{
        next()
        }
    }
}

// steps:
// import joi which is used for validating different things in the express
// create a module which has register method: {req: request you comes in, res: what you used to send something back, next: what you call to invoke the next thing inthe routes path}
// declare the schema
// validate the req.body against the schema
// check the error, check the key of the error and accordingly write switch case to return different error messages
// if everything is good just call next()

// method 2
        // try{
        //     const {error, value} = schema.validate(req.body)

        //     if(error === undefined || typeof error === "undefined") return next()

        //     const err = new Error(
        //         error.details.map((errorObject) => errorObject.message).toString()
        //     );
        //     err.statusCode = 400;
        //     next(err);
        // }catch(err){
        //     res.send(err)
        //     next(err);
        // }

// method 1

//         if(res.error)
// {  
//     console.log(res.error.details)
// }
// else
// {
//     console.log("Validated Data")
// }