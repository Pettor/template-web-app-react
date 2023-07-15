const path = require("path");

const FILTER_STORIES = [`${path.sep}Storybook${path.sep}`, "Button.stories"];

module.exports = (testPaths) => {
  const allowedPaths = testPaths
    .filter((fileName) => {
      for (const filter of FILTER_STORIES) {
        if (fileName.includes(filter)) {
          return false;
        }
      }

      return true;
    })
    .map((test) => ({ test }));

  return {
    filtered: allowedPaths,
  };
};
