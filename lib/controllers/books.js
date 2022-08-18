const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Books.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const book = await db.Books.findByPk(req.params.id, {
        include: db.Authors,
      });
      if (!book) next();
      res.json(book);
    } catch (e) {
      next(e);
    }
  })
;
