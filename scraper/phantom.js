var webPage = require('webpage');
var page = webPage.create();

page.open('https://www.google.com/search?q=cricket+news', function(status) {
  if (status === "success") {
    page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {
      if (page.injectJs('do.js')) {
        var title = page.evaluate(function() {
          // returnTitle is a function loaded from our do.js file - see below
          return returnTitle();
        });
        console.log(title);
        phantom.exit();
      }
    });
  }
});