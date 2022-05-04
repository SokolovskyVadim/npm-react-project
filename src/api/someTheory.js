const HTTPMethods = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS"
]

const howToSendData = {
  1: "URL",
  2: headers,
  3: requestBody,
}

const headers = {
  "Content-Type": "text/css",
  "Accept" : "text/css, application/json",
}

const responceCodes = {

}

1) cookies
requestPayload = {
  userName:"",
  password:"",
}

responceHeader = "set-cookies: session_key=sdfasdf7dsfas5asdf23asd";

2) acces/refresh

requestPayload = {
  userName:"",
  password:"",
}

const accesToken = 1;
const accesToken = 1; -BAD GUY HIDJACKED!!!
const accesToken = 1; 200
const accesToken = 1; 401 - unautorised
const refreshToken = 2; 200
const accesToken = 3;
const refreshToken = 4;
const accesToken = 3; 200
const accesToken = 3; 200
const accesToken = 3; 200

3) jwt

4) oAuth 2.0

requestPayload => github => key => back-end => github => sessionToken

button => Link url(githuboAUTH?applicationKey=sdfasd435ds) => Link url(youAppAuth?authKey=sdfasd435ds) => Link url(youApp)

button => <iframe>Link url(githuboAUTH?applicationKey=sdfasd435ds)</iframe> => youAppCallback(key);


