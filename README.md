# demo-pagespeed
Angular application that demos the Google PageSpeed API

## Installation
1. clone this repo
2. run `npm install`
3. get a valid PageSpeed API key from the [https://developers.google.com/speed/docs/insights/v2/first-app#APIKey](Google developer console)
3. update `options.key` in `src/js/app/services/pagespeedApi.service.js`
    * this is temporary until the API Key option field is implemented
3. run `grunt`
4. copy the contents of the `bin` folder to your webserver
