import nc from 'next-connect'
import session from 'express-session'
const MySQLStore = require('express-mysql-session')(session)

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
};

const sessionStore = new MySQLStore(options);

export default function nextConnect(){
  return nc({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(500).end('A server-side error occurred.')
    },
    onNoMatch: (req, res) => {
      res.status(405).json({error: `Method ${req.method} is not facilitated for this route.`})
    }
  })
  .use(session({
    cookie: {
      maxAge: 1000 * 60 * 30,
      sameSite: true,
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
  }))
}