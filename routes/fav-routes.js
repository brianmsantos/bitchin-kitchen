const path = require('path');
const db = require('../models');
const util = require('util');

module.exports = function(app){
    app.get('/api/favorites/:userid', function(req, res){
       console.log( 'req body', req.params.userid);
        db.recipe.findAll({where: {chef: req.params.userid}})
        .then(recipes => {res.json(recipes)});
    });

    app.post('/api/addFavorites', (req, res) => {
        console.log("THIS IS MY BODY!!!!! " + req.body.fuid)
    db.recipe.findOrCreate({where: {chef: req.body.fuid, recipe_name: req.body.recipe}})
        .spread((user, created) => {
            console.log(user.get({
                plain: true
            }))
            console.log(created)
        })
    })
}

                // db.recipe.create(
                //     {fuid: req.body.fuid,
                //     favorites: req.body.recipes}
                // )
                // .then(response => {
                //     console.log(response)
                // })
                // .catch(error => {
                //     console.log(error)
                // })

// User
//   .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
//   .spread((user, created) => {
//     console.log(user.get({
//       plain: true
//     }))
//     console.log(created)


// Book.update(
//     {title: req.body.title},
//     {where: req.params.bookId}
//   )
//   .then(function(rowsUpdated) {
//     res.json(rowsUpdated)
//   })
//   .catch(next)
//  })