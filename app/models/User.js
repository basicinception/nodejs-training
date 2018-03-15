module.exports = Bookshelf.model("User", {
  tableName: "users",
  posts() {
    return this.hasMany("Post");
  }
});
