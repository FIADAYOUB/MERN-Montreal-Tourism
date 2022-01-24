const express = require("express");

const Place = require("../models/place");

exports.getPlaces = async (req, res, next) => {
  try {
    const Places = await Place.find({});

    return res.status(200).json({
      success: true,
      count: Places.length,
      data: Places
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

exports.addPlace = async (req, res, next) => {
  try {
    const { name, adresse, description,ville, image } = req.body;
    const place = await Place.create(
      {
        name: name,
        adresse: adresse,
        description: description,
        ville: ville,
        image: image.image 

      }
    );
    return res.status(201).json({
      success: true,
      data: place
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });

    }
  }
}
exports.searchPlace = (req, res, next) => {
  Place.findOne({ '_id': id })
    .then(data =>
      res.status(200).json({
        count: data.length,
        data: data,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));

}

exports.deletePlace = async (req, res, next) => {
  try {
 
    const place = await Place.findOne({ _id: req.params.id });


    if (!place) {
      return res.status(404).json({
        success: false,
        error: 'No Place found'
      });
    }

    await place.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });


  }
}

exports.filterPlace = async(req, res, next) => {
  console.log(req.params.ville) 
  try{
  const Places=await Place.find({ville: req.params.ville });
  return res.status(200).json({
    success: true,
    count: Places.length,
    data: Places
  });
} catch (err) {
  return res.status(500).json({
    success: false,
    error: 'Server Error'
  });
}
}