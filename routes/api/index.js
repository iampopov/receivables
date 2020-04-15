const router = require("express").Router();
const bookRoutes = require("./invoices");

// Invoices routes
router.use("/invoices", bookRoutes);

module.exports = router;
