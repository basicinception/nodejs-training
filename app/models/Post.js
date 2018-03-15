module.exports = Bookshelf.model("Post", {
  tableName: "users",
  posts() {
    return this.hasMany("Post");
  }
});
