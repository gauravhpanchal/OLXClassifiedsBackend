const { Router } = require("express");

const { OlxModel } = require("../models/olx.model");

const olxController = Router();

olxController.get("/", async (req, res) => {
  try {
    const products = await OlxModel.find();
    res.send(products);
  } catch (error) {
    res.status(500).send("Error fetching products");
  }
});

olxController.post("/create", async (req, res) => {
  const { name, description, category, image, location, postedAt, price } =
    req.body;

  try {
    const product = new OlxModel({
      name,
      description,
      category,
      image,
      location,
      postedAt,
      price,
    });

    await product.save();
    res.send("Product added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = { olxController };
