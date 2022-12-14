import db from "../models/index";
import CRUDservices from "../services/CRUDservices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDservices.createNewUser(req.body);
  console.log(message);
  return res.send("test POST");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDservices.getAllUser();
  console.log("--------------------------------");
  console.log(data);
  console.log("--------------------------------");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
};
