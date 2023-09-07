var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET all recipes */
router.get("/", async function (req, res) {
  db("SELECT * FROM recipes;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

//write get by ID function
router.get("/:id", async function (req, res) {
  let recipeID = req.params.id;

  try {
    // Does the recipe exist?
    let result = await db(`SELECT * FROM recipes WHERE id = ${recipeID}`);
    if (result.data.length === 1) {
      // recipe exists
      res.send(result.data[0]);
    } else {
      // recipe not found
      res.status(404).send({ error: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//write post
router.post("/", async function (req, res) {
  let { name, link, description, category } = req.body;
  console.log(req.body);
  let sql = `
    INSERT INTO recipes (name, link, description, category)
    VALUES ('${name}', '${link}', '${description}', '${category}')
  `;

  try {
    // Insert recipe, ignore the result
    await db(sql);
    // Return updated recipe list
    let result = await db("SELECT * FROM recipes");
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//write DELETE
router.delete("/:id", async function (req, res, next) {
  let recipeID = req.params.id;

  try {
    // Does the recipe exist?
    let result = await db(`SELECT * FROM recipes WHERE id = ${recipeID}`);
    if (result.data.length === 1) {
      // recipe exists; delete it and ignore result
      await db(`DELETE FROM recipes WHERE id = ${recipeID}`);
      // Return updated recipe list
      result = await db("SELECT * FROM recipes");
      res.send(result.data);
    } else {
      // recipe not found
      res.status(404).send({ error: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
