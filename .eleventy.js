module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("media");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addWatchTarget("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addWatchTarget("fonts");

    const {
        DateTime
      } = require("luxon");
    
        eleventyConfig.addFilter('htmlDateString', (dateObj) => {
          return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
          }).toFormat('yy-MM-dd');
        });
    
        eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {
          zone: 'utc'
        }).toFormat("dd-MM-yy");
      });
    
};