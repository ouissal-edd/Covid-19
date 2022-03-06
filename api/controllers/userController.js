const User = require('../models/User')

const MailToUser = require('../mail/sendMail')


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
            effetsecFirstdose,
            effetsecSeconddose,
            centre,
            email


        } = req.body;
      

        //validation 
        if (!age || !CIN || !adress || !tel || !dose )
            return res.status(200).json({
                Message: "please enter amll require fields"
            })
  
           

        if(age >= 12 ){
        const existingUser = await User.findOne({CIN})
        if(existingUser){
        if (existingUser.dose[0] === dose || existingUser.dose[1] === dose ||existingUser.dose[2] === dose)
        {
             return res.status(200).json({
            Message: "You have already took this dose "
        })

        }else{
            await User.findOneAndUpdate({
                _id: existingUser._id
            }, {
                $push: {
                    dose: dose
                }
                ,
                effetsecFirstdose:effetsecFirstdose,
                effetsecSeconddose:effetsecSeconddose,

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
                effetsecFirstdose:effetsecFirstdose,
                effetsecSeconddose:effetsecSeconddose,
                centre:centre

            })
                    if(dose == 'firstDose'){
                    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
                    let DATE = new Date(y, m + 1, 0);
                    await MailToUser(email, CIN,DATE,centre);
    }
            const savedData = await newData.save();
            res.status(200).send();
            res.json(savedData)
        }
    
                 
  
    
}else {
        return res.status(200).json({
            Message:"your age most be more than 12 years old"

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