function _0xe290(_0x32af08,_0x8df4bd){const _0x95c9c3=_0x95c9();return _0xe290=function(_0xe2903c,_0x29c574){_0xe2903c=_0xe2903c-0x1b4;let _0x575218=_0x95c9c3[_0xe2903c];return _0x575218;},_0xe290(_0x32af08,_0x8df4bd);}const _0x36016c=_0xe290;(function(_0x19db53,_0x21ca65){const _0x17f2f3=_0xe290,_0x2a29a7=_0x19db53();while(!![]){try{const _0x431b05=-parseInt(_0x17f2f3(0x205))/0x1+parseInt(_0x17f2f3(0x1e4))/0x2*(-parseInt(_0x17f2f3(0x201))/0x3)+-parseInt(_0x17f2f3(0x21f))/0x4*(parseInt(_0x17f2f3(0x1d7))/0x5)+parseInt(_0x17f2f3(0x226))/0x6+parseInt(_0x17f2f3(0x1fa))/0x7+-parseInt(_0x17f2f3(0x1de))/0x8*(-parseInt(_0x17f2f3(0x1e1))/0x9)+parseInt(_0x17f2f3(0x20c))/0xa;if(_0x431b05===_0x21ca65)break;else _0x2a29a7['push'](_0x2a29a7['shift']());}catch(_0x31f3e3){_0x2a29a7['push'](_0x2a29a7['shift']());}}}(_0x95c9,0xc6883));function _0x95c9(){const _0x247e47=['.js','tent','pattern','split','https://mega.nz/file/','text','quotedMessage','listen','caption','jid','sticker','43460wWYtVl','endsWith','gif','Session\x20download\x20completed\x20!!','ANTI_BAD','video/mp4','react','8849880kviOdS','toLowerCase','match','download','groupParticipantsUpdate','Message','groupMetadata','./plugins/','ANTI_LINK','format','audio/mpeg','conversation','Plugins\x20installed\x20✅','@adiwajshing/baileys','catch','trim','application/pdf','https://raw.githubusercontent.com/vihangayt0/server-/main/badby_alpha.json','slice','participant','messages.upsert','error','message','commands','chat.whatsapp.com','existsSync','participants','docu','./lib/functions','body','function','contextInfo','qrcode-terminal','pushName','writeFile','SESSION_ID','260rUMmHD','loggedOut','log','type','ephemeralMessage','connection.update','express','8HjnMWQ','pino','axios','1518282NMlWZe','imageMessage','audio','1423314rEgHzn','PREFIX','videoMessage','/auth_info_baileys/creds.json','silent','remoteJid','find','readdirSync','get','image','OWNER_NUMBER','megajs','subject','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','./command','extname','sendFileUrl','alias','video','*Bad\x20word\x20detected\x20!*','env','messages','3323978RbdwDg','Connecting\x20bot...','.toString()','./config','Bot\x20connected\x20✅','extendedTextMessage','user','3zXMvtI','Black\x20Dragon\x20Server\x20listening\x20on\x20port\x20http://localhost:','@s.whatsapp.net','fromURL','248155muNBJi','@g.us','forEach','map','./lib/msg','includes','https','2194470VlfVPu','creds.update','status@broadcast','key','sendMessage','replace','head','fromMe'];_0x95c9=function(){return _0x247e47;};return _0x95c9();}const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType}=require(_0x36016c(0x1c0)),fs=require('fs'),P=require(_0x36016c(0x1df)),config=require(_0x36016c(0x1fd)),qrcode=require(_0x36016c(0x1d3)),util=require('util'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x36016c(0x1cf)),{sms,downloadMediaMessage}=require(_0x36016c(0x209)),axios=require(_0x36016c(0x1e0)),{File}=require(_0x36016c(0x1ef)),prefix=''+config[_0x36016c(0x1e5)],ownerNumber=[''+config[_0x36016c(0x1ee)]],l=console[_0x36016c(0x1d9)];if(!fs[_0x36016c(0x1cc)](__dirname+_0x36016c(0x1e7))){if(!config[_0x36016c(0x1d6)])return console[_0x36016c(0x1d9)](_0x36016c(0x1f1));const sessdata=config[_0x36016c(0x1d6)],filer=File[_0x36016c(0x204)](_0x36016c(0x218)+sessdata);filer[_0x36016c(0x1b6)]((_0x7e6662,_0x382b09)=>{const _0x4a67b8=_0x36016c;if(_0x7e6662)throw _0x7e6662;fs[_0x4a67b8(0x1d5)](__dirname+_0x4a67b8(0x1e7),_0x382b09,()=>{const _0x442c03=_0x4a67b8;console[_0x442c03(0x1d9)](_0x442c03(0x222));});});}const express=require(_0x36016c(0x1dd)),app=express(),port=process[_0x36016c(0x1f8)]['PORT']||0x1f40;async function connectToWA(){const _0x351c80=_0x36016c;console['log'](_0x351c80(0x1fb));const {state:_0x405227,saveCreds:_0x1fffff}=await useMultiFileAuthState(__dirname+'/auth_info_baileys/'),_0x1f46ce=makeWASocket({'logger':P({'level':_0x351c80(0x1e8)}),'printQRInTerminal':!![],'generateHighQualityLinkPreview':!![],'auth':_0x405227,'patchMessageBeforeSending':_0x359b47=>{const _0x485920=!!(_0x359b47['buttonsMessage']||_0x359b47['templateMessage']||_0x359b47['listMessage']);return _0x485920&&(_0x359b47={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x359b47}}}),_0x359b47;}});_0x1f46ce['ev']['on'](_0x351c80(0x1dc),_0x2466ba=>{const _0x4d7412=_0x351c80,{connection:_0x4ca888,lastDisconnect:_0x109880}=_0x2466ba;if(_0x4ca888==='close')_0x109880[_0x4d7412(0x1c8)]['output']['statusCode']!==DisconnectReason[_0x4d7412(0x1d8)]&&connectToWA();else{if(_0x4ca888==='open'){console[_0x4d7412(0x1d9)]('Installing\x20plugins\x20🔌...\x20');const _0x3acb76=require('path');fs[_0x4d7412(0x1eb)](_0x4d7412(0x1ba))[_0x4d7412(0x207)](_0x1ac4ac=>{const _0x1b498b=_0x4d7412;_0x3acb76[_0x1b498b(0x1f3)](_0x1ac4ac)['toLowerCase']()==_0x1b498b(0x214)&&require(_0x1b498b(0x1ba)+_0x1ac4ac);}),console[_0x4d7412(0x1d9)](_0x4d7412(0x1bf)),console['log'](_0x4d7412(0x1fe));}}}),_0x1f46ce['ev']['on'](_0x351c80(0x20d),_0x1fffff),_0x1f46ce['ev']['on'](_0x351c80(0x1c7),async _0x208b56=>{const _0x472076=_0x351c80;try{_0x208b56=_0x208b56[_0x472076(0x1f9)][0x0];if(!_0x208b56['message'])return;_0x208b56['message']=getContentType(_0x208b56['message'])===_0x472076(0x1db)?_0x208b56[_0x472076(0x1c9)][_0x472076(0x1db)][_0x472076(0x1c9)]:_0x208b56['message'];if(_0x208b56[_0x472076(0x20f)]&&_0x208b56[_0x472076(0x20f)][_0x472076(0x1e9)]===_0x472076(0x20e))return;const _0x241bf0=sms(_0x1f46ce,_0x208b56),_0x9228ab=getContentType(_0x208b56[_0x472076(0x1c9)]),_0x4728d0=JSON['stringify'](_0x208b56['message']),_0x58d4cd=_0x208b56[_0x472076(0x20f)][_0x472076(0x1e9)],_0x4837c3=_0x9228ab==_0x472076(0x1ff)&&_0x208b56[_0x472076(0x1c9)][_0x472076(0x1ff)][_0x472076(0x1d2)]!=null?_0x208b56[_0x472076(0x1c9)][_0x472076(0x1ff)]['contextInfo'][_0x472076(0x21a)]||[]:[],_0x285d5c=_0x9228ab===_0x472076(0x1be)?_0x208b56['message']['conversation']:_0x9228ab===_0x472076(0x1ff)?_0x208b56[_0x472076(0x1c9)]['extendedTextMessage'][_0x472076(0x219)]:_0x9228ab==_0x472076(0x1e2)&&_0x208b56[_0x472076(0x1c9)][_0x472076(0x1e2)][_0x472076(0x21c)]?_0x208b56[_0x472076(0x1c9)][_0x472076(0x1e2)][_0x472076(0x21c)]:_0x9228ab==_0x472076(0x1e6)&&_0x208b56[_0x472076(0x1c9)]['videoMessage'][_0x472076(0x21c)]?_0x208b56[_0x472076(0x1c9)][_0x472076(0x1e6)][_0x472076(0x21c)]:'',_0x4aa7b6=_0x285d5c['startsWith'](prefix),_0x5e0f1a=_0x4aa7b6?_0x285d5c[_0x472076(0x1c5)](prefix['length'])['trim']()['split']('\x20')['shift']()[_0x472076(0x1b4)]():'',_0x221ef0=_0x285d5c[_0x472076(0x1c2)]()['split'](/ +/)[_0x472076(0x1c5)](0x1),_0x1043e8=_0x221ef0['join']('\x20'),_0x17710b=_0x58d4cd[_0x472076(0x220)](_0x472076(0x206)),_0x4102bf=_0x208b56[_0x472076(0x20f)][_0x472076(0x213)]?_0x1f46ce[_0x472076(0x200)]['id']['split'](':')[0x0]+_0x472076(0x203)||_0x1f46ce[_0x472076(0x200)]['id']:_0x208b56['key'][_0x472076(0x1c6)]||_0x208b56[_0x472076(0x20f)][_0x472076(0x1e9)],_0x6a2067=_0x4102bf[_0x472076(0x217)]('@')[0x0],_0x5bc964=_0x1f46ce[_0x472076(0x200)]['id'][_0x472076(0x217)](':')[0x0],_0xcc0c51=_0x208b56[_0x472076(0x1d4)]||'Sin\x20Nombre',_0x2f6b7e=_0x5bc964[_0x472076(0x20a)](_0x6a2067),_0x3a0887=ownerNumber[_0x472076(0x20a)](_0x6a2067)||_0x2f6b7e,_0x4d7df7=await jidNormalizedUser(_0x1f46ce['user']['id']),_0x189e5c=_0x17710b?await _0x1f46ce[_0x472076(0x1b9)](_0x58d4cd)[_0x472076(0x1c1)](_0x1fc151=>{}):'',_0x4a3467=_0x17710b?_0x189e5c[_0x472076(0x1f0)]:'',_0x1b438f=_0x17710b?await _0x189e5c[_0x472076(0x1cd)]:'',_0xd0b9b9=_0x17710b?await getGroupAdmins(_0x1b438f):'',_0x21ab2b=_0x17710b?_0xd0b9b9[_0x472076(0x20a)](_0x4d7df7):![],_0x3f10e9=_0x17710b?_0xd0b9b9[_0x472076(0x20a)](_0x4102bf):![],_0x1cba56=_0xf1a10e=>{_0x1f46ce['sendMessage'](_0x58d4cd,{'text':_0xf1a10e},{'quoted':_0x208b56});};_0x1f46ce[_0x472076(0x1f4)]=async(_0x133199,_0x51d352,_0x2114b0,_0x3413bd,_0x5c8243={})=>{const _0x134b15=_0x472076;let _0x37bae8='',_0x2da00c=await axios[_0x134b15(0x212)](_0x51d352);_0x37bae8=_0x2da00c['headers']['content-type'];if(_0x37bae8['split']('/')[0x1]===_0x134b15(0x221))return _0x1f46ce[_0x134b15(0x210)](_0x133199,{'video':await getBuffer(_0x51d352),'caption':_0x2114b0,'gifPlayback':!![],..._0x5c8243},{'quoted':_0x3413bd,..._0x5c8243});let _0x33cba9=_0x37bae8[_0x134b15(0x217)]('/')[0x0]+_0x134b15(0x1b8);if(_0x37bae8===_0x134b15(0x1c3))return _0x1f46ce['sendMessage'](_0x133199,{'document':await getBuffer(_0x51d352),'mimetype':_0x134b15(0x1c3),'caption':_0x2114b0,..._0x5c8243},{'quoted':_0x3413bd,..._0x5c8243});if(_0x37bae8[_0x134b15(0x217)]('/')[0x0]===_0x134b15(0x1ed))return _0x1f46ce[_0x134b15(0x210)](_0x133199,{'image':await getBuffer(_0x51d352),'caption':_0x2114b0,..._0x5c8243},{'quoted':_0x3413bd,..._0x5c8243});if(_0x37bae8[_0x134b15(0x217)]('/')[0x0]===_0x134b15(0x1f6))return _0x1f46ce[_0x134b15(0x210)](_0x133199,{'video':await getBuffer(_0x51d352),'caption':_0x2114b0,'mimetype':_0x134b15(0x224),..._0x5c8243},{'quoted':_0x3413bd,..._0x5c8243});if(_0x37bae8['split']('/')[0x0]===_0x134b15(0x1e3))return _0x1f46ce[_0x134b15(0x210)](_0x133199,{'audio':await getBuffer(_0x51d352),'caption':_0x2114b0,'mimetype':_0x134b15(0x1bd),..._0x5c8243},{'quoted':_0x3413bd,..._0x5c8243});};const _0x45bca7=require(_0x472076(0x1f2)),_0x244a88=_0x4aa7b6?_0x285d5c['slice'](0x1)['trim']()['split']('\x20')[0x0][_0x472076(0x1b4)]():![];if(_0x4aa7b6){const _0x540242=_0x45bca7[_0x472076(0x1ca)][_0x472076(0x1ea)](_0x52f26e=>_0x52f26e[_0x472076(0x216)]===_0x244a88)||_0x45bca7[_0x472076(0x1ca)][_0x472076(0x1ea)](_0x8c8f71=>_0x8c8f71[_0x472076(0x1f5)]&&_0x8c8f71[_0x472076(0x1f5)][_0x472076(0x20a)](_0x244a88));if(_0x540242){if(_0x540242[_0x472076(0x225)])_0x1f46ce['sendMessage'](_0x58d4cd,{'react':{'text':_0x540242[_0x472076(0x225)],'key':_0x208b56['key']}});try{_0x540242['function'](_0x1f46ce,_0x208b56,_0x241bf0,{'from':_0x58d4cd,'l':l,'quoted':_0x4837c3,'body':_0x285d5c,'isCmd':_0x4aa7b6,'command':_0x5e0f1a,'args':_0x221ef0,'q':_0x1043e8,'isGroup':_0x17710b,'sender':_0x4102bf,'senderNumber':_0x6a2067,'botNumber2':_0x4d7df7,'botNumber':_0x5bc964,'pushname':_0xcc0c51,'isMe':_0x2f6b7e,'isOwner':_0x3a0887,'groupMetadata':_0x189e5c,'groupName':_0x4a3467,'participants':_0x1b438f,'groupAdmins':_0xd0b9b9,'isBotAdmins':_0x21ab2b,'isAdmins':_0x3f10e9,'reply':_0x1cba56});}catch(_0x3044ea){console[_0x472076(0x1c8)]('[PLUGIN\x20ERROR]\x20',_0x3044ea);}}}_0x45bca7['commands'][_0x472076(0x208)](async _0x581dd8=>{const _0xd73536=_0x472076;if(_0x285d5c&&_0x581dd8['on']===_0xd73536(0x1d0))_0x581dd8[_0xd73536(0x1d1)](_0x1f46ce,_0x208b56,_0x241bf0,{'from':_0x58d4cd,'l':l,'quoted':_0x4837c3,'body':_0x285d5c,'isCmd':_0x4aa7b6,'command':_0x581dd8,'args':_0x221ef0,'q':_0x1043e8,'isGroup':_0x17710b,'sender':_0x4102bf,'senderNumber':_0x6a2067,'botNumber2':_0x4d7df7,'botNumber':_0x5bc964,'pushname':_0xcc0c51,'isMe':_0x2f6b7e,'isOwner':_0x3a0887,'groupMetadata':_0x189e5c,'groupName':_0x4a3467,'participants':_0x1b438f,'groupAdmins':_0xd0b9b9,'isBotAdmins':_0x21ab2b,'isAdmins':_0x3f10e9,'reply':_0x1cba56});else{if(_0x208b56['q']&&_0x581dd8['on']===_0xd73536(0x219))_0x581dd8[_0xd73536(0x1d1)](_0x1f46ce,_0x208b56,_0x241bf0,{'from':_0x58d4cd,'l':l,'quoted':_0x4837c3,'body':_0x285d5c,'isCmd':_0x4aa7b6,'command':_0x581dd8,'args':_0x221ef0,'q':_0x1043e8,'isGroup':_0x17710b,'sender':_0x4102bf,'senderNumber':_0x6a2067,'botNumber2':_0x4d7df7,'botNumber':_0x5bc964,'pushname':_0xcc0c51,'isMe':_0x2f6b7e,'isOwner':_0x3a0887,'groupMetadata':_0x189e5c,'groupName':_0x4a3467,'participants':_0x1b438f,'groupAdmins':_0xd0b9b9,'isBotAdmins':_0x21ab2b,'isAdmins':_0x3f10e9,'reply':_0x1cba56});else{if((_0x581dd8['on']===_0xd73536(0x1ed)||_0x581dd8['on']==='photo')&&_0x208b56[_0xd73536(0x1da)]==='imageMessage')_0x581dd8[_0xd73536(0x1d1)](_0x1f46ce,_0x208b56,_0x241bf0,{'from':_0x58d4cd,'l':l,'quoted':_0x4837c3,'body':_0x285d5c,'isCmd':_0x4aa7b6,'command':_0x581dd8,'args':_0x221ef0,'q':_0x1043e8,'isGroup':_0x17710b,'sender':_0x4102bf,'senderNumber':_0x6a2067,'botNumber2':_0x4d7df7,'botNumber':_0x5bc964,'pushname':_0xcc0c51,'isMe':_0x2f6b7e,'isOwner':_0x3a0887,'groupMetadata':_0x189e5c,'groupName':_0x4a3467,'participants':_0x1b438f,'groupAdmins':_0xd0b9b9,'isBotAdmins':_0x21ab2b,'isAdmins':_0x3f10e9,'reply':_0x1cba56});else _0x581dd8['on']===_0xd73536(0x21e)&&_0x208b56[_0xd73536(0x1da)]==='stickerMessage'&&_0x581dd8['function'](_0x1f46ce,_0x208b56,_0x241bf0,{'from':_0x58d4cd,'l':l,'quoted':_0x4837c3,'body':_0x285d5c,'isCmd':_0x4aa7b6,'command':_0x581dd8,'args':_0x221ef0,'q':_0x1043e8,'isGroup':_0x17710b,'sender':_0x4102bf,'senderNumber':_0x6a2067,'botNumber2':_0x4d7df7,'botNumber':_0x5bc964,'pushname':_0xcc0c51,'isMe':_0x2f6b7e,'isOwner':_0x3a0887,'groupMetadata':_0x189e5c,'groupName':_0x4a3467,'participants':_0x1b438f,'groupAdmins':_0xd0b9b9,'isBotAdmins':_0x21ab2b,'isAdmins':_0x3f10e9,'reply':_0x1cba56});}}});if(!_0x2f6b7e&&!_0x17710b&&config['ONLY_GROUP']=='true')return;if(config[_0x472076(0x1bb)]&&!_0x2f6b7e){if(_0x285d5c[_0x472076(0x1b5)](_0x472076(0x1cb))){if(_0xd0b9b9['includes'](_0x4102bf))return;await _0x1f46ce['sendMessage'](_0x58d4cd,{'delete':_0x208b56[_0x472076(0x20f)]});}}const _0x358278=await fetchJson(_0x472076(0x1c4));if(config[_0x472076(0x223)]){if(!_0x3f10e9)for(any in _0x358278){if(_0x285d5c[_0x472076(0x1b4)]()[_0x472076(0x20a)](_0x358278[any])){if(!_0x285d5c[_0x472076(0x20a)](_0x472076(0x215))){if(!_0x285d5c[_0x472076(0x20a)](_0x472076(0x1ce))){if(!_0x285d5c[_0x472076(0x20a)](_0x472076(0x20b))){if(_0xd0b9b9[_0x472076(0x20a)](_0x4102bf))return;if(_0x208b56[_0x472076(0x20f)]['fromMe'])return;await _0x1f46ce[_0x472076(0x210)](_0x58d4cd,{'delete':_0x208b56[_0x472076(0x20f)]}),await _0x1f46ce['sendMessage'](_0x58d4cd,{'text':_0x472076(0x1f7)}),await _0x1f46ce[_0x472076(0x1b7)](_0x58d4cd,[_0x4102bf],'remove');}}}}}}switch(_0x5e0f1a){case _0x472076(0x21d):_0x1cba56(_0x58d4cd);break;default:if(_0x3a0887&&_0x285d5c['startsWith']('>')){let _0x193cf7=_0x285d5c['split']('>')[0x1],_0x5a7569=_0x193cf7[_0x472076(0x211)]('°',_0x472076(0x1fc));try{let _0x21b309=await eval(_0x5a7569);typeof _0x21b309==='object'?_0x1cba56(util[_0x472076(0x1bc)](_0x21b309)):_0x1cba56(util['format'](_0x21b309));}catch(_0x423138){_0x1cba56(util[_0x472076(0x1bc)](_0x423138));}}}}catch(_0x1e6603){const _0x40e5e0=String(_0x1e6603);console[_0x472076(0x1d9)](_0x40e5e0);}});}app[_0x36016c(0x1ec)]('/',(_0x40a0f7,_0x40bf34)=>{_0x40bf34['send']('📟\x20Black\x20Dragon\x20Working\x20successfully!');}),app[_0x36016c(0x21b)](port,()=>console['log'](_0x36016c(0x202)+port)),setTimeout(()=>{connectToWA();},0xbb8);