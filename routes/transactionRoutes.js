const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction
} = require("../controllers/transactionCtrl");
//router object
const router = express.Router();
//routes
//add transection POST MEthod
router.post("/add-transaction", addTransaction);

//edit transection POST MEthod
router.post("/edit-transaction", editTransaction);

//delete transection POST MEthod
router.post("/delete-transaction", deleteTransaction);

//get transections
router.post("/get-transaction", getAllTransaction);
module.exports = router;