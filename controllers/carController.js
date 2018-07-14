const Car = require("../models/Car");

exports.getCars = (req, res) => {
    Car.find((err, cars) => {
      if (err) {
        res.render('error');
      } else {
        res.render('cars', {
          title: 'Cars',
          cars,
        });
      }
    });
  };