const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
	text: 'Handling GET requests for /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
	text: 'Handling POST requests for /products'
  });
});

router.get('/:prodId', (req, res, next) => {
  const id = req.params.prodId;
  if (id === 'special') {
	res.status(200).json({
	  message: 'You get special ID',
	  id: id
	});
  }
  else {
    res.status(200).json({
	  message: 'You passed an ID'
	});
  }
});

router.patch('/:prodId', (req, res, next) => {
  res.status(200).json({
	message: 'product updated!',
  });
});

router.delete('/:prodId', (req, res, next) => {
  res.status(200).json({
	message: 'product deleted!',
  });
});

module.exports = router;