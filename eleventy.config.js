import yaml from "js-yaml";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  // Rewrites root-absolute URLs when --pathprefix is set (e.g. GitHub project pages)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addFilter("dateDisplay", (value) =>
    new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(value)
  );
  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));
  eleventyConfig.addFilter("dateISO", (value) => value.toISOString().slice(0, 10));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
