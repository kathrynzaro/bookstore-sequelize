const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Authors.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const author = await db.Authors.findByPk(req.params.id, {
        include: db.Books,
      });
      if (!author) next();
      res.json(author);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const author = await db.Authors.create(req.body);
      res.json(author);
    } catch (e) {
      next(e);
    }
  })


  .post('/:id/books', async (req, res, next) => {
    try {
      const book = await db.Books.create({
        ...req.body,
        author_id: req.params.id,
      });
      res.json(book);
    } catch (e) {
      next(e);
    }
  })
;
