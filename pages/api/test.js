import nextConnect from "../../middleware/nextConnect";
import Account from "../../db/models/Account";

const handler = nextConnect()
.get(async (req, res) => {

  const account = new Account(['blaze', 'password']) 
  return res.status(200).json({account});
  
})

export default handler;