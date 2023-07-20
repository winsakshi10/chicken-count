import express from 'express'



app.post('/calculate-chicken', (req, res) => {
    const { dishName, measurement, quantity } = req.body;
  
    ChickenDish.findOne({ name: dishName }, (err, dish) => {
      if (err) {
        console.error('Error finding dish:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
  
      const matchedPortion = dish.portions.find((portion) => portion.measurement === measurement);
  
      if (!matchedPortion) {
        return res.status(404).json({ error: 'Invalid measurement' });
      }
  
      const amountOfChicken = matchedPortion.weight * quantity;
  
      return res.json({ amountOfChicken });
    });
  });
  