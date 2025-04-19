module.exports = function (eleventyConfig) {
  return {
    pathPrefix: "/connect4good", 
    dir: {
      input: ".",
      output: "docs",
      includes: "_includes"
    }
  };
};
