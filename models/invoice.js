const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // synopsis: String,
  date: { type: Date, default: Date.now },
  client: { type: String, required: true },
  description: String,
  quantity: String,
  price: String
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
