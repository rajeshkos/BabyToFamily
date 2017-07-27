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

           //console.log(fetch(`${url}`, settings));

          return fetch(`${url}`, settings);
        },

    makeImageUpload(method, url, params, data){

          const settings = {
               method:'POST',
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'multipart/form-data;',
              //   'Authorization': 'Bearer ' + 'SECRET_OAUTH2_TOKEN_IF_AUTH',
               },
             };
             if (params) {
                 settings.params = params;
             }
             if (data) {
                 settings.body = data;
             }
          //  console.log("from make upload",method, url, params, data);
              //  console.log( fetch(`${url}`, settings));
                  return fetch(`${url}`, settings);
        }




}
module.exports = Api;
