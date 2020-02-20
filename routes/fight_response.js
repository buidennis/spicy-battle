var data = require("../data.json");
exports.dealDamage = function(request, response){
    console.log("Try to deal damage");
    var workout = request.params.damage;
    var damage = 0;

    if( workout === 'PushUps'){
        damage = 10;
        data.members[0].workout.PushUps += damage;
        data.members[0].info.calories_burnt += 7;
    }
    else if( workout === 'JumpingJacks' ){
        damage = 30;
        data.members[0].workout.JumpingJacks += damage;
        data.members[0].info.calories_burnt += 7;
    }

    else if( workout === 'Squats' ){
        damage = 30;
        data.members[0].workout.Squats += damage;
        data.members[0].info.calories_burnt += 7;
    }

    else if( workout === 'SitUps' ){
        damage = 25;
        data.members[0].workout.SitUps += damage;
        data.members[0].info.calories_burnt += 7;
    }
    console.log(data.members[0].workout);
    console.log(data.members[0].info.calories_burnt);

    data.enemies[0].creature_1.current_hp -= damage; 
    var percent = (data.enemies[0].creature_1.current_hp/data.enemies[0].creature_1.maximum_hp)*100;
    var item = {
        'percent':percent.toString(10),
        'redirect':true
    }
    console.log(item);
    response.json(item);
}