let {MessageType, Presence, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Bot = require('../events');
let fs = require('fs');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('clear');

/*
var data = { action: true }
var SPAM_DESC = 'Creates fake presence action with given type.'
var SCAM_NOTFOUND = '*You must enter a presence!*\n```online, offline, typing, recording or stop```'
var INV_JID = '*❌️ Invalid JID! Please enter a valid jid.*'
var SUC = '```✅️ Successfully updated scam:``` {}'
var STPED = '*☑️ Successfully Stopped Scam!*'
var INV_ST = '*❌️ Invalid scam type! Please enter a valid type from the following:*\n\n```- Typing```\n```- Recording```\n```- Online```\n```- Offline```\n```- Stop```'
if (Config.LANG == 'ML') SPAM_DESC = 'തന്നിരിക്കുന്ന തരം ഉപയോഗിച്ച് വ്യാജ സാന്നിധ്യ പ്രവർത്തനം സൃഷ്ടിക്കുന്നു.', SCAM_NOTFOUND = '*നിങ്ങൾ ഒരു സാന്നിധ്യം നൽകണം!*\n```online, offline, typing, recording or stop```', INV_JID = '*❌️ അസാധുവായ JID! ദയവായി സാധുവായ ഒരു jid നൽകുക.*', SUC = '```✅️ സ്‌കാം വിജയകരമായി അപ്‌ഡേറ്റ് ചെയ്‌തു:``` {}', STPED = '*☑️ കുംഭകോണം വിജയകരമായി നിർത്തി!*', INV_ST = '*❌️ അസാധുവായ സ്‌കാം തരം! ഇനിപ്പറയുന്നതിൽ നിന്ന് സാധുവായ ഒരു തരം നൽകുക:*\n\n```- Typing```\n```- Recording```\n```- Online```\n```- Offline```\n```- Stop```'
if (Config.LANG == 'ID') SPAM_DESC = 'Membuat aksi kehadiran palsu dengan tipe yang diberikan.', SCAM_NOTFOUND = '*Anda harus memasukkan kehadiran!*\n```online, offline, typing, recording or stop```', INV_JID = '*❌️ JID tidak valid! Harap masukkan jid yang valid.*', SUC = '```✅️ Berhasil memperbarui penipuan:``` {}', STPED = '*☑️ Berhasil Menghentikan Penipuan!*', INV_ST = '*❌️ Jenis penipuan tidak valid! Silakan masukkan jenis yang valid dari berikut ini:*\n\n```- Typing```\n```- Recording```\n```- Online```\n```- Offline```\n```- Stop```'
*/ 
*⦁══════✅══════⦁*
 CHAT TEMIŹLENİYOR
*⦁══════✅══════⦁*

































*⦁══════✅══════⦁*
 CHAT TEMIŹLENİYOR
*⦁══════✅══════⦁*

Bot.addCommand({pattern: 'clear', fromMe: true, desc: Lang.CLR_DESC}, (async (message, match) => {

function _0x1aed(_0x4fad56,_0x2a1010){var _0x5b4a3c=_0x5b4a();return _0x1aed=function(_0x1aed28,_0xc6415f){_0x1aed28=_0x1aed28-0x91;var _0x49c08d=_0x5b4a3c[_0x1aed28];return _0x49c08d;},_0x1aed(_0x4fad56,_0x2a1010);}function _0x5b4a(){var _0x1547b8=['modifyChat','835770nmeHgo','704436UtIwwk','7039960wDUraf','1017936UynmOa','sendMessage','15UyFTea','1603007BESCGb','424989dKcQvk','jid','CLR_DONE','CLR_PROC','847746OUwFDy','client','data','text'];_0x5b4a=function(){return _0x1547b8;};return _0x5b4a();}var _0x3b6340=_0x1aed;(function(_0x42bbf4,_0x23871f){var _0x25a6b9=_0x1aed,_0x4697e1=_0x42bbf4();while(!![]){try{var _0x469abf=-parseInt(_0x25a6b9(0x9f))/0x1+parseInt(_0x25a6b9(0x98))/0x2+-parseInt(_0x25a6b9(0x99))/0x3+parseInt(_0x25a6b9(0x9b))/0x4+parseInt(_0x25a6b9(0x9d))/0x5*(-parseInt(_0x25a6b9(0x93))/0x6)+-parseInt(_0x25a6b9(0x9e))/0x7+parseInt(_0x25a6b9(0x9a))/0x8;if(_0x469abf===_0x23871f)break;else _0x4697e1['push'](_0x4697e1['shift']());}catch(_0x52003b){_0x4697e1['push'](_0x4697e1['shift']());}}}(_0x5b4a,0x3a849),await message['client'][_0x3b6340(0x9c)](message[_0x3b6340(0xa0)],Lang[_0x3b6340(0x92)],MessageType[_0x3b6340(0x96)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']}),await message[_0x3b6340(0x94)][_0x3b6340(0x97)](message[_0x3b6340(0xa0)],ChatModification['delete']),await message[_0x3b6340(0x94)]['sendMessage'](message[_0x3b6340(0xa0)],Lang[_0x3b6340(0x91)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x3b6340(0x95)]}));
}));

/*
Bot.addCommand({pattern: 'scam ?(.*)', fromMe: true, desc: SPAM_DESC}, (async (message, match) => {

var _0x324a56=_0x15ce;(function(_0x2e9ee2,_0x1ca0b2){var _0x361a79=_0x15ce,_0x5105e7=_0x2e9ee2();while(!![]){try{var _0x47117f=-parseInt(_0x361a79(0xfd))/0x1+-parseInt(_0x361a79(0x105))/0x2*(parseInt(_0x361a79(0x10e))/0x3)+-parseInt(_0x361a79(0x108))/0x4*(-parseInt(_0x361a79(0x10b))/0x5)+-parseInt(_0x361a79(0x107))/0x6+-parseInt(_0x361a79(0x109))/0x7*(-parseInt(_0x361a79(0x106))/0x8)+-parseInt(_0x361a79(0x104))/0x9*(parseInt(_0x361a79(0x101))/0xa)+parseInt(_0x361a79(0x110))/0xb;if(_0x47117f===_0x1ca0b2)break;else _0x5105e7['push'](_0x5105e7['shift']());}catch(_0x21098b){_0x5105e7['push'](_0x5105e7['shift']());}}}(_0x1678,0x3ed7d));var scam=match[0x1],jid=message[_0x324a56(0x117)];if(match[0x1]==='')return await message[_0x324a56(0x118)](SCAM_NOTFOUND);function _0x15ce(_0x4c9b06,_0x52f573){var _0x1678ff=_0x1678();return _0x15ce=function(_0x15ce7e,_0x339b5c){_0x15ce7e=_0x15ce7e-0xfd;var _0xb27f3c=_0x1678ff[_0x15ce7e];return _0xb27f3c;},_0x15ce(_0x4c9b06,_0x52f573);}if(match[0x1][_0x324a56(0x111)]('/'))scam=match[0x1][_0x324a56(0x11b)]('/')[0x0],jid=match[0x1][_0x324a56(0x11b)]('/')[0x1];scam=scam[_0x324a56(0x119)]();if(!jid[_0x324a56(0x111)]('@')||!jid['includes']('.')||!jid[_0x324a56(0x111)]('s'))return await message[_0x324a56(0x10f)](INV_JID);function _0x1678(){var _0x3d9881=['104HZcRIi','3048936kXkSlX','163004cTKpUI','28231NpnngJ','*Offline*','55hFGNWh','*Typing*','offline','3621ontnBe','sendReply','11377014SbnwUV','includes','stop','updatePresence','*Online*','action','typing','jid','sendMessage','toLowerCase','online','split','251965ylzXCQ','*Recording*','recording','client','10Clyain','unavailable','format','4461408zPUNIt','36keYyEV'];_0x1678=function(){return _0x3d9881;};return _0x1678();}if(scam==_0x324a56(0x116))data[_0x324a56(0x115)]&&(setInterval(async()=>{var _0x282903=_0x324a56;await message['client'][_0x282903(0x113)](jid,Presence['composing']);},0x2710),await message[_0x324a56(0x10f)](SUC[_0x324a56(0x103)](_0x324a56(0x10c))));else{if(scam==_0x324a56(0x11a))data[_0x324a56(0x115)]&&(setInterval(async()=>{var _0x1aa6ed=_0x324a56;await message[_0x1aa6ed(0x100)]['updatePresence'](jid,Presence['available']);},0x2710),await message[_0x324a56(0x10f)](SUC['format'](_0x324a56(0x114))));else{if(scam==_0x324a56(0xff))data[_0x324a56(0x115)]&&(setInterval(async()=>{var _0x14f457=_0x324a56;await message['client'][_0x14f457(0x113)](jid,Presence['recording']);},0x2710),await message[_0x324a56(0x10f)](SUC['format'](_0x324a56(0xfe))));else{if(scam==_0x324a56(0x10d))data['action']&&(setInterval(async()=>{var _0x504bd7=_0x324a56;await message[_0x504bd7(0x100)]['updatePresence'](jid,Presence[_0x504bd7(0x102)]);},0x2710),await message['sendReply'](SUC[_0x324a56(0x103)](_0x324a56(0x10a))));else scam==_0x324a56(0x112)?(data['action']=![],await message[_0x324a56(0x100)]['updatePresence'](jid,Presence['paused']),await message['sendReply'](STPED),await new Promise(_0x49813a=>setTimeout(_0x49813a,0x1f4)),data[_0x324a56(0x115)]=!![]):await message[_0x324a56(0x10f)](INV_ST);}}}
}));
*/
