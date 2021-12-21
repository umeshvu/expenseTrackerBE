const queries = {
  ADD_FNA:
    "INSERT INTO fna_operations (`user_id`, `amount`, `description`, `type`, `date`) VALUES (?,?,?,?,?)",
  GET_ALL_FNA: "SELECT * FROM fna_operations",
  GET_FNA_BY_ID: "SELECT * FROM fna_operations WHERE id=?",
  GET_ALL_EXPENSE_FNA:
    "SELECT * FROM fna_operations WHERE user_id = ? and type = 'exp'",
  GET_ALL_INCOME_FNA:
    "SELECT * FROM fna_operations WHERE user_id = ? and type = 'inc'",
  UPDATE_FNA:
    "UPDATE fna_operations SET amount = ?,description = ?,date=? WHERE id = ?",
  DELETE_FNA_BY_ID: "DELETE FROM fna_operations WHERE id =?",
};

module.exports = queries;
