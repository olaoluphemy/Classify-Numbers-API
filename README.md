#### DESCRIPTION:
This is a simple web api that accepts any integer as a query parameter and returns a random fact about it alongside some other mathematical properties.

#### SETUP INSTRUCTION:
to setup the project run the command "npm i" to install all application dependencies(express, morgan, cors, dotenv), run "npm i nodemon --save-dev" if you don't already have nodemon installed globally on your desktop, this is because the script "npm start" wouldn't run if nodemon isn't installed(as a dev dependency or global install). To install nodemon globally run the script "npm i nodemon --global", there's also a need for a "config.env" file. The file should contain the variable `NODE_ENV` with a value equal to "development" i.e `NODE_ENV=development`. There's an optional environment variable `PORT`, which you'll set to the preferred port number you want the app to run. Defaults to 3000, if unset. the program can be run locally using the npm script "npm start"

#### API DOCS:
base URL - (https://classify-numbers-api.vercel.app/api)

endpoint - /classify-number

parameters - number(query string)

method: `GET`

responses: 
statusCode - 200(OK)

`{
  "number": 19,
  "is_prime": true,
  "is_perfect": false,
  "properties": [
    "odd"
  ],
  "digit_sum": 10,
  "fun_fact": "19 is a centered triangular number, centered hexagonal number and a Heegner number."
}`

statusCode - 400(Bad Request)
`{
  "number": "abcd",
  "error": true
}
`
