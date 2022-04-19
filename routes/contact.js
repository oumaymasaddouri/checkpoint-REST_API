const express = require("express");
const {
  Addcontact,
  Getcontact,
  Deletecontact,
  Updatecontact,
  Getonecontact,
} = require("../controllers/contact");
const contactRoutes = express.Router();

contactRoutes.post("/", Addcontact);
contactRoutes.get("/", Getcontact);
contactRoutes.delete("/:id", Deletecontact);
contactRoutes.put("/:id", Updatecontact);
contactRoutes.get("/:id", Getonecontact);

module.exports = contactRoutes;
