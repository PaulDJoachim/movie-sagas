# MOVIE SAGAS

## Description

_Duration: 2 Days_

This application retrieves and displays movie posters from a database. When a poster is selected the title, genre, and description of the movie will appear. Users can edit the movie titles and descriptions as desired. This project uses Redux and Redux-Sagas to cache information about the movies. It also joins multiple database tables to match movie genres with titles.

## Example GIF

![Overview](public/images/example.gif)

## Setup

1. Run the query from the database.sql file to create a new table in the SQL database of your choice, values are included if you want to use the example entries.
2. Use the "$ npm install" command to install dependencies.
3. Use the "$ npm run server" command to start the server. 
4. Use the "$ npm run client" command to start the react development build. 
5. Access the webpage via the url "localhost:3000"

## Usage

1. Movies are displayed as posters on the main page of the site. Click a movie to view its details. Click the "Home" button in the upper-left corner at any time to go back to the main page.
2. On the details page press the "Edit" button to change the title and description of the movie.
3. Press "Submit" when you're done to save the changes, or press "Cancel" to go back without saving.

## Built With

JavaScript, React, Node.js, Express, PostgreSQL, Redux, Redux-Saga, Material-UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.