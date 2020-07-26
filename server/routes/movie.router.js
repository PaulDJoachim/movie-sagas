const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `
      SELECT movies.id, title, description, poster, array_agg(genres.name)
      FROM movies
      JOIN movies_genres on movies.id = movies_genres.movie_id
      JOIN genres ON movies_genres.genre_id = genres.id
      GROUP BY movies.id
      ORDER BY title ASC;`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error on query`,error);
            res.sendStatus(500);
        });
});

// router.put('/genre', (req, res) => {
//   console.log(req.body)
//   const queryText = `
//   SELECT genres.name FROM movies 
//   JOIN movies_genres on movies.id = movies_genres.movie_id
//   JOIN genres ON movies_genres.genre_id = genres.id
//   WHERE movies.id = $1`;
//   const queryValues = [
//     req.body
//   ]
  // pool.query(queryText, queryValues)
  //     .then( (result) => {
  //         res.send(result.rows);
  //     })
  //     .catch( (error) => {
  //         console.log(`***Error on genre query`,error);
  //         res.sendStatus(500);
  //     });
// });


router.put('/', (req, res) => {
  // console.log(req.body)
  const movie = req.body
  const queryText = `
    UPDATE movies 
    SET "title" = $1, "description" = $2
    WHERE "id" = $3;
      `
  const queryValues = [
    movie.title,
    movie.description,
    movie.id
  ]

  pool.query(queryText, queryValues)
  .then((result) => {
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log(`***Error updating movie`, error);
      res.sendStatus(500);
  })
});


module.exports = router;
