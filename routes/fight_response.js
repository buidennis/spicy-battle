var data = require("../data.json");
var index = require("./index.js");

exports.dealDamage = function(request, response){
    console.log("Try to deal damage");
    var workout = request.params.damage;
    var damage = 0;
    var name = index.name;
    console.log(name);

    var i = 0;
    for(; i < data.members.length; i++){
        if(data.members[i].info.name === name){
            break;
        }
    }
    console.log(i);
    if( workout === 'PushUps'){
        damage = 10;
        data.members[i].workout.PushUps += damage;
        data.members[i].info.calories_burnt += 7;
    }
    else if( workout === 'JumpingJacks' ){
        damage = 30;
        data.members[i].workout.JumpingJacks += damage;
        data.members[i].info.calories_burnt += 7;
    }

    else if( workout === 'Squats' ){
        damage = 30;
        data.members[i].workout.Squats += damage;
        data.members[i].info.calories_burnt += 7;
    }

    else if( workout === 'SitUps' ){
        damage = 25;
        data.members[i].workout.SitUps += damage;
        data.members[i].info.calories_burnt += 7;
    }
    console.log(data.members[i].workout);
    console.log(data.members[i].info.calories_burnt);
    console.log( data.members[i].info);
    data.members[i].info.c_hp  = data.members[i].info.c_hp - damage;

    if( data.members[i].info.c_hp <= 0){
        data.members[i].info.experience += data.members[i].info.experienceGain;
        if( data.members[i].info.experience >= data.members[i].info.experienceNextLevel){
            data.members[i].info.experience -= data.members[i].info.experienceNextLevel;
            data.members[i].info.experienceGain *= 2;
            data.members[i].info.experienceNextLevel *= 2;
            data.members[i].level += 1;
        }
        data.members[i].info.m_hp *= 2;
        data.members[i].info.c_hp = data.members[i].info.m_hp;

    }
    var percent = (data.members[i].info.c_hp/data.members[i].info.m_hp)*100;

    console.log( data.members[i].info.experience);
    var item = {
        'percent':percent.toString(10),
        'redirect':true
    }
    console.log(item);
    response.json(item);
}

exports.modifyXP = function(request,response){
    console.log( "hard cap");
    var name = index.name;
    var i = 0;
    for(; i < data.members.length; i++){
        if(data.members[i].info.name === name){
            break;
        }
    }
<<<<<<< HEAD
        data.members[i].info.experience += data.members[i].info.experienceGain;
        if( data.members[i].info.experience >= data.members[i].info.experienceNextLevel){
            data.members[i].info.experience -= data.members[i].info.experienceNextLevel;
            data.members[i].info.experienceGain *= 2;
            data.members[i].info.experienceNextLevel *= 2;
            data.members[i].level += 1;
        }
        data.members[i].info.m_hp *= 2;
        data.members[i].info.c_hp = data.members[i].info.m_hp;
    }
=======

  }
>>>>>>> cce995db204d2df8eba72292513947d80aa9a6ec
