@echo off

@REM start React server
cd Client
start cmd /k "npm start"

@REM start nodeJS server
cd ..
cd server
nodemon server

