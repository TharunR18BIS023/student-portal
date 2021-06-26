const joi=require('@hapi/joi');

const registerValidation= (data) =>{
const schema=joi.object({
    name: joi.string().required(),
    email: joi.string().min(6).required().email()   ,
    password: joi.string().min(6).required(),
    roll: joi.string().min(8).required()
});

return schema.validate(data);
};


const loginValidation= (data) =>{
    const schema=joi.object({

        email: joi.string().min(6).required().email()   ,
        password: joi.string().min(6).required(),

    });
    
    return schema.validate(data);
    };

    const semValidation= (data) =>{
        const schema=joi.object({
    
            sem1: joi.number().required(),
            sem2: joi.number().required(),
            sem3: joi.number().required(),
            sem4: joi.number().required(),
            sem5: joi.number().required(),
            sem6: joi.number().required(),
            sem7: joi.number().required(),
            sem8: joi.number().required()
    
        });
        
        return schema.validate(data);
        };


        const detailValidation= (data) =>{
            const schema=joi.object({
                name: joi.string().required(),
                email: joi.string().min(6).required().email()   ,
                roll: joi.string().min(8).required()
            });
            
            return schema.validate(data);
            };


module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;
module.exports.semValidation=semValidation;
module.exports.detailValidation=detailValidation;