# Backend Challenge
## The Challenge
* Clone this repo
* Create a GraphQL mutation that allows the modification of a users first name, last name, email address, and/or country
* Type safety is key
* Bonus points if you can clean up my code in the process
* Check this code into your own public GitHub repo, and send me an email back when you're done.
* Please complete this within 48 hours (in before 2022-01-27 @ 08:30 Pacific Time)
## Requirements
### PostGreSQL
You will need a local PostGreSQL database, which can be created with the following commands

`$ psql`

`CREATE DATABASE test;`

`\c test`

`CREATE USER testuser WITH PASSWORD 'testpassword';`

`GRANT ALL PRIVILEGES ON DATABASE test TO testuser;`
