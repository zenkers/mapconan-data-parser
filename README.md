# 🗾 MapConan data parser
This project was created to clean some data on an open source project I am contributing to <a href="https://github.com/Naksta/mapconan">mapconan</a>. In the project, markers are being created through hundreds of repetitive lines of js. I made this to extract the data from that js, and parse it into json. Once that's done we can use the json to have clean data we can loop through.

*✨ If you want to reuse the wrapper and write your own parser function, be my guest! ✨*

# Using the parser 👨‍💻
* Clone the project
* Enter your raw js marker data into data/dirty.txt
* In your terminal, navigate to the project root, and run `node app`
* Your cleaned data should now be in data/clean.json
