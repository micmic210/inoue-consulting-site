// .eleventy.js
module.exports = (cfg) => {
  cfg.addPassthroughCopy({ "src/assets": "assets" });

  cfg.addShortcode("year", () => new Date().getFullYear());

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk","md","html"]
  };
};