const ContactSchema = require("../models/contact");

exports.Addcontact = async (req, res) => {
  const { email } = req.body;
  try {
    const conte = new ContactSchema(req.body);
    const found = await ContactSchema.findOne({ email });
    if (found) {
      return res.status(400).send("contact already exists");
    }
    await conte.save();
    res.status(200).send({ msg: "contact is added", conte });
  } catch (error) {
    res.status(500).send({ msg: "could not add user", error });
  }
};

exports.Getcontact = async (req, res) => {
  try {
    const conts = await ContactSchema.find();
    res.status(200).send({ msg: "your contact list", conts });
  } catch (error) {
    res.status(500).send("could not get contact list");
  }
};

exports.Deletecontact = async (req, res) => {
  try {
    const cont = await ContactSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "Contact deleted" });
  } catch (error) {
    res.status(500).send({ msg: "could not delete", error });
  }
};

exports.Updatecontact = async (req, res) => {
  try {
    const cont = await ContactSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).send("contact updated");
  } catch (error) {
    res.status(500).send("could not update");
  }
};

exports.Getonecontact = async (req, res) => {
  try {
    const cont = await ContactSchema.findById(req.params.id);
    res.status(200).send({ msg: "your contact is", cont });
  } catch (error) {
    res.status(500).send("could not get ure contact");
  }
};
