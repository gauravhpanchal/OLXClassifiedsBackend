const mongoose = require("mongoose");

const olxSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Clothing", "Electronics", "Furniture", "Other"],
  },
  image: { type: String, required: true },
  location: { type: String, required: true },
  postedAt: { type: Date, required: true },
  price: { type: Number, required: true },
});

const OlxModel = mongoose.model("product", olxSchema);

module.exports = { OlxModel };
