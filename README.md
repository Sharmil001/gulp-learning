# gulp-learning

What is GULP?
Consider a situation where you have 10 .js file and 10 .css file. Gulp will hlep to conver into one combile file and you can use that one file into your .html file and also for production.

** File Structuring **

public/
|- build/
   |- js/
      |- bundle-{hash}.js
   |- css/
      |- stylesheet-{hash}.css
assets/
|- js/
   |- vendor/
   |- jquery.js
   |- site.js
   |- module1.js
   |- module2.js
|- css/
   |- main.css
   |- custom.css
gulpfile.js
package.json
