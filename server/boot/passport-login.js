'use strict';

var PassportConfigurator = require('loopback-component-passport').PassportConfigurator;


module.exports= function(app){

    var passportConfigurator = new PassportConfigurator(app);

    passportConfigurator.setupModels({

        userModel: app.models.User,
        userIdentityModel: app.models.userIdentity,
        userCredentialModel: app.models.userCredential
    });


   var config = require('../providers.json');
   for(var s in config){

        var c = config[s];
        c.session = c.session !== false;
        //c.profileToUser = profileMappers[s];
        passportConfigurator.configureProvider(s, c);
   }

   app.get('/auth/account/fb',

       //cookieParser(),

       function(req, res){

           /*var at = req.cookies.access_token;
           var uid = req.cookies.userId;
           delete req.cookies.access_token;
           delete req.cookies.userId;

           var qs = '#!third_party/'+at+'/'+uid;
            */
           console.log(req);
           //res.redirect( app.get('clientProtocol')+'://'+app.get('clientHost')+':'+app.get('clientPort')+qs);
       }
   );
}
