
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var battle = require('./routes/battle');
var login = require('./routes/login');
var loginAlt = require('./routes/loginAlt');
var add = require('./routes/add');
var profile = require('./routes/profile');
var pushups = require('./routes/pushups');
var situps = require('./routes/situps');
var jumpingjacks = require('./routes/jumpingjacks');
var squats = require('./routes/squats');
var fight_response = require('./routes/fight_response');
var victory = require('./routes/victory');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
// app.get('/', loginAlt.view);
app.get('/index', index.view);
app.get('/index1', index.getName);
app.get('/battle', battle.view);
app.get('/health',fight_response.getHealth);
app.get('/profile', profile.view);
app.get('/pushups', pushups.view);
app.get('/situps', situps.view);
app.get('/jumpingjacks', jumpingjacks.view);
app.get('/squats', squats.view);
app.get('/add/:name', add.SignIn);
app.get('/dealDamage/:damage', fight_response.dealDamage);
app.get('/dealDamage2/:damage', fight_response.dealDamage2);
app.get('/changeWeight/:variable', profile.changeWeight);
app.get('/changeHeight/:variable', profile.changeHeight);
app.get('/changeAge/:variable', profile.changeAge);
app.get('/changeSex/:variable', profile.changeSex);
app.get('/changeWeight2/:variable', profile.changeWeight2);
app.get('/changeHeight2/:variable', profile.changeHeight2);
app.get('/changeAge2/:variable', profile.changeAge2);
app.get('/changeSex2/:variable', profile.changeSex2);
app.get('/modifyXP', fight_response.modifyXP);
app.get('/login',login.login);
app.get('/loginAlt', loginAlt.login);
app.get('/victory', victory.view);
app.get('/victoryInfo/:name', victory.victoryInfo);
app.get('/profileAlt', profile.viewAlt);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
