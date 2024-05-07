base url: http://localhost:8080/

Login/register
POST:
post login/signin   --> auth/signin
post register/signup   --> auth/signup



User apis

GET:
fetch user details  --> user/detail
fetch list of societies --> user/listSociety
fetch society details   --> user/society/:sId
fetch latest updates    --> user/latestUpdate

POST:
post details    --> user/updateDetail
post apply for the society  --> user/apply/:sId
post apply for the loan     --> user/apply/loan/:sId
post apply for the event    --> user/apply/event/:sId



Society
GET:
fetch overview of society   --> society/overview/:query
fetch society details       --> society/detail/:sId

POST:
post create a new society   --> society/create
post modify society details --> society/modify/:sId


authority:
GET:
fetch the authority level   --> role/:userId

post:
change the authority level  --> role/:userId