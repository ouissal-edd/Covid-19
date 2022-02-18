const User = require('../models/User')







// Creat  Manager
const createFormulair = async (req, res) => {
    try {

        const {
            age,
            CIN,
            adress,
            tel,
            dose,
            maladie,
            traitement,

        } = req.body;
      

        //validation 
        if (!age || !CIN || !adress || !tel || !dose )
            return res.status(400).json({
                errorMessage: "please enter amll require fields"
            })
  
           

        if(age >= 12 ){
        const existingUser = await User.findOne({CIN})
        if(existingUser){
        if (existingUser.dose[0] === dose[0] || existingUser.dose[1] === dose[0] ||existingUser.dose[2] === dose[0])
        {
             return res.status(400).json({
            errorMessage: "You have already took this dose "
        })

        }else{
            await User.findOneAndUpdate({
                _id: existingUser._id
            }, {
                $push: {
                    dose: dose
                }
            });
            return res.status(200).json({
                Message: "Thank you :)"
            })
        }
    }
        else{        
              // add new Data-covid
              const newData = new User({
                age :age,
                CIN :CIN,
                adress :adress,
                tel :tel,
                dose :dose,
                maladie :maladie,
                traitement :traitement,
            })
    
            const savedData = await newData.save();
            res.status(200).send();
            res.json(savedData)
        }
    
                 
  
    
}else {
        return res.status(400).json({
            errorMsg:"your age most be more than 12 years old"

        })
       
    }
   
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
}


module.exports = {
    createFormulair
}