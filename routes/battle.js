
/*
 * GET home page.
 */
//json.enemies.creature_1.current_hp
//json.enemies.creature_1.maximum_hp
//json.enemies.creature_1.hp_ratio
//json.enemies.creature_1.experience

//if condition -> if json.enemies.creature_1.current_hp <= 0 
//json.enemies.creature_1.maximum_hp *= 1.5
//json.enemies.creature_1.current_hp = json.enemies.creature_1.maximum_hp
//json.enemies.creature_1.hp_ratio = 1
//json.members.info.experience += json.enemies.creature_1.experience

//if json.members.info.experience >= json.members.info.experienceNextLevel
//json.members.info.level += 1
//json.members.info.experience = json.members.info.experience  % json.members.info.experienceNextLevel
//json.members.info.experienceNextLevel *= 1.5



/*
 * GET home page.
 */
var data = require('../data.json');
var json = JSON.parse(data);
exports.view = function(req, res){
  res.render('battle', data);
 };
