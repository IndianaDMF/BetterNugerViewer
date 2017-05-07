import Http from 'http';
import URL from 'url';

module.exports = (feedUrl, callback) => {
  function getData(url, fnc){
    let rawData = '';
    if(!url){
      url = 'http://dev-tfs-01.v.dom/Nuget/nuget/Packages';      
    }
    
    let options = URL.parse(url);
    options.callback = callback;
    
    Http.get(options, (res) => {
        const { statusCode } = res;

        let error;
        if (statusCode !== 200) {
           error = new Error(`Request Failed.\n` +
                            `Status Code: ${statusCode}`);
        } 

        if (error) {
          console.error(error.message);
          // consume response data to free up memory
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          fnc(rawData);
        });
    });
  };

  return getData(feedUrl, callback);
}