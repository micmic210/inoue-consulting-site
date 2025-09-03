// .eleventy.js
module.exports = (cfg) => {
  cfg.addPassthroughCopy({ "src/assets": "assets" });

  cfg.addShortcode("year", () => new Date().getFullYear());

  // Add blog 
  cfg.addCollection("blog_ja", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/ja/blog/*.md").sort((a, b) => {
      return b.date - a.date; 
    });
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk","md","html"]
  };
};