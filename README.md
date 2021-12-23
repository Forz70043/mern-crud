# mern-crud

MySQL Express React Node

### Back-end
* Node.js Express exports REST APIs & interacts with MySQL Database using Sequelize ORM.

| Method  | URLS | Actions |
| ------------- | ------------- |------------- |
| GET  | api/tutorials  | get all Tutorials  |
| GET  | api/tutorials/:id  | get Tutorial by id  |
| POST  | api/tutorials  | add new Tutorial  |
| PUT  | api/tutorials/:id  | update Tutorial by id  |
| DELETE  | api/tutorials  | remove all Tutorial  |
| DELETE  | api/tutorials/:id  | remove Tutorial by id  |
| GET  | api/tutorials?title=[kw]  | find all Tutorials which title contains 'kw'  |

### Front-End
* React Client sends HTTP Requests and retrieves HTTP Responses using Axios, consume data on the components. React Router is used for navigating to pages.

