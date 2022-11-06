import connectMongo from '../../util/mongodb';
import UserModel from '../../models/UserModel'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {*import('next').NextApiResponse} res 
 */


export default async function user(req, res)
{
    const user = req.body;

   try {
    
        await connectMongo(); // Connecting to MongoDB
       console.log('Connected to DB');
       
        const oldUser = await UserModel.findOne({ email: req.body.email }) // Checking if an exisiting data awail on the email id.
    
       if (oldUser)
       {
            
            res.status(403)
            res.json({ message: 'Response has been caputured previously on this email id' })
            
        } else
        {
            const userData = await UserModel.create(user) // Creating a record in MongoDB
            res.status(200)
            res.json({userData})
        
        }

   } catch (error) {
       res.send({error:error})
   }
    

}