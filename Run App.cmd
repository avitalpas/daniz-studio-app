@echo off

@REM start React server
start cmd /k "npm start"

@REM start nodeJS server
cd backend
nodemon server