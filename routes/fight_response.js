var data = require("../data.json");
var index = require("./index.js");
var health = '100%';

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
    if(data.members[i].info.c_hp == data.members[i].info.m_hp){
        data.members[i].workout.PushUpsCurrent = 0;
        data.members[i].workout.JumpingJacksCurrent = 0;
        data.members[i].workout.SquatsCurrent = 0;
        data.members[i].workout.SitUpsCurrent = 0;
        data.members[i].info.calories_burnt_current = 0;
    }
    console.log(i);
    if( workout === 'PushUps'){
        damage = 10;
        data.members[i].workout.PushUpsCurrent += damage;
        data.members[i].info.calories_burnt_current += 7;
    }
    else if( workout === 'JumpingJacks' ){
        damage = 30;
        data.members[i].workout.JumpingJacksCurrent += damage;
        data.members[i].info.calories_burnt_current += 7;
    }

    else if( workout === 'Squats' ){
        damage = 30;
        data.members[i].workout.SquatsCurrent += damage;
        data.members[i].info.calories_burnt_current += 7;
    }

    else if( workout === 'SitUps' ){
        damage = 25;
        data.members[i].workout.SitUpsCurrent += damage;
        data.members[i].info.calories_burnt_current += 7;
    }
    data.members[i].info.c_hp  = data.members[i].info.c_hp - damage;

    var percent = (data.members[i].info.c_hp/data.members[i].info.m_hp)*100;
    if( data.members[i].info.c_hp <= 0){
        data.members[i].info.experience += data.members[i].info.experienceGain;
        if( data.members[i].info.experience >= data.members[i].info.experienceNextLevel){
            data.members[i].info.experience -= data.members[i].info.experienceNextLevel;
            data.members[i].info.experienceGain *= 2;
            data.members[i].info.experienceNextLevel *= 3;
            data.members[i].info.level += 1;
        }
        data.members[i].info.m_hp *= 2;
        data.members[i].info.c_hp = data.members[i].info.m_hp;
        data.members[i].info.calories_burnt_total += data.members[i].info.calories_burnt_current;
        data.members[i].workout.SitUpsTotal += data.members[i].workout.SitUpsCurrent;
        data.members[i].workout.SquatsTotal += data.members[i].workout.SquatsCurrent;
        data.members[i].workout.JumpingJacksTotal += data.members[i].workout.JumpingJacksCurrent;
        data.members[i].workout.PushUpsTotal += data.members[i].workout.PushUpsCurrent;
        percent = 0;
    }
    health = percent;
    var victory = false;

    if( percent === 0 ){
        victory = true;
        health = 100;
    }
    console.log( data.members[i].info);
    console.log( data.members[i].info.experience);
    console.log(data.members[i].workout);
    console.log(data.members[i].info.calories_burnt);
    var item = {
        'percent':percent.toString(10),
        'victory':victory,
        'workout':request.params.damage.toLowerCase()
    }
    console.log(item);
    response.json(item);
}

exports.dealDamage2 = function(request, response){
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
    health = percent;
    console.log( data.members[i].info.experience);
    var item = {
        'percent':percent.toString(10),
        'redirect':true,
        'workout':request.params.damage.toLowerCase()
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

    //Increment the XP of user
    data.members[i].info.experience += data.members[i].info.experienceGain;

    //Check if they can level up
    if(data.members[i].info.experience > data.members[i].info.experienceNextLevel){
        data.members[i].info.level++;
        data.members[i].info.experienceNextLevel += data.members.info.experienceGain;
    }

    var result = {
        'experience':data.members[i].info.experience,
        'level':data.members[i].info.level,
    }

    response.json(result);

  }

exports.getHealth = function(request, response){
    response.json({'health':health});
}
