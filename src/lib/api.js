let Api={



        makeRequest(method, url, params, data) {

          let settings = {
            method: method,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          };
          if (params) {
              settings.params = params;
          }
          if (data) {
              settings.body = JSON.stringify(data);
          }
               //console.log(fetch(`${url}`, settings));
          return fetch(`${url}`, settings);
        },

    makeImageUpload(method, url, params, data){
        console.log("data",data);
          const settings = {
               method:method,
               headers: {
                 'Accept': 'application/json',
                
                     }
             };
             if (params) {
                 settings.params = params;
             }
             if (data) {
                 settings.body = data;
             }
            console.log("from make upload",method, url, params, data);

                  return fetch(`${url}`, settings);
        }




}
module.exports = Api;
