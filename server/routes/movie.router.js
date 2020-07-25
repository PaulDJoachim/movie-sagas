const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM movies ORDER BY title ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error on query`,error);
            res.sendStatus(500);
        });
});


router.put('/', (req, res) => {
  console.log(req.body)
  const queryText = `
    UPDATE 
      movies 
    SET 
      title = '${req.body.title}', 
      description = '${req.body.description}'
    WHERE
      id = ${req.body.id};
      `
  pool.query(queryText)
  .then((result) => {
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log(`***Error updating movie`, error);
      res.sendStatus(500);
  })
  // const queryText = `UPDATE movies SET title=${} FROM movies ORDER BY title ASC`;
  // pool.query(queryText)
  //     .then( (result) => {
  //         res.send(result.rows);
  //     })
  //     .catch( (error) => {
  //         console.log(`Error on query ${error}`);
  //         res.sendStatus(500);
  //     });
});


module.exports = router;
