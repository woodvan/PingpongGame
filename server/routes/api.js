const express = require ('express');
const router = express.Router();
const Item = require('../models/item');
router.get('/list', (req, res, next) => {
  Item.find({})
    .then(data => {
      res.json(data);
    })
    .catch(next)
});
router.post('/list', (req, res, next) => {
  if(req.body.username && req.body.email){
    Item.create(req.body)
      .then(data => {
        Item.find({})
        .then(data => {
          res.json(data);
        })
        .catch(next)
      })
      .catch(next)
  }else {
    Item.find({}).then(data => {
      res.json(data)
    })
    .catch(next)
  }
});
router.post('/match', (req, res, next) => {
  if(req.body.player1 && req.body.player2 && req.body.winner){
    Item.findOne({"username": req.body.player1}).then(data => {
      if (data == null) {
        Item.find({}).then(data => {
          res.json(data)
        })
        .catch(next)
      }
      if (req.body.winner === 1)
        data.win += 1;
      else
        data.lose += 1;
      Item.updateOne({"_id": data._id}, data).then(data => {
        Item.findOne({"username": req.body.player2}).then(data => {
          if (data == null) {
            Item.find({}).then(data => {
              res.json(data)
            })
            .catch(next)
          }
          if (req.body.winner === 2)
            data.win += 1;
          else
            data.lose += 1;
          Item.updateOne({"_id": data._id}, data).then(data => {
            Item.find({}).then(data => {
              res.json(data)
            })
            .catch(next)
          })
          .catch(next)
        })
        .catch(next)
      })
      .catch(next)
    })
    .catch(next)
  }else {
    Item.find({}).then(data => {
      res.json(data)
    })
    .catch(next)
  }
});
module.exports = router;