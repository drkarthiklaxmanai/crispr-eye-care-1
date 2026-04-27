
// .eleventy.js
export default function(eleventyConfig) {
  // Copy assets folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch Tailwind CSS changes
  eleventyConfig.addWatchTarget("./src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
