const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all schools
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM schools");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new school
router.post("/", async (req, res) => {
  const { school_name, about_school, user_name, street_address, postal_code, city, contact, email } = req.body;
  
  if (!school_name || !user_name || !street_address || !postal_code || !city || !contact || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO schools (school_name, about_school, user_name, street_address, postal_code, city, contact, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [school_name, about_school, user_name, street_address, postal_code, city, contact, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a school by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM schools WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "School not found" });
    }
    res.json({ message: "School deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
