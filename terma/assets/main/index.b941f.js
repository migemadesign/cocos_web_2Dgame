System.register("chunks:///_virtual/Common.ts",["cc"],(function(n){"use strict";var e,o,t,c;return{setters:[function(n){e=n.cclegacy,o=n.find,t=n.Node,c=n.EventTarget}],execute:function(){n({EventEnum_Scene:void 0,common_bind_touch_start:function(n,e,c){var _=o(n);_?(_.off(t.EventType.TOUCH_START,e,c),_.on(t.EventType.TOUCH_START,e,c)):console.log("common_bind_touch_start: node not found -> "+n)},common_getEventTarget:function(){null===r&&(r=new c,console.log("new eventTarget"));return r}}),e._RF.push({},"66411VlY7JNr68oNjtgIo3V","Common",void 0);var _,r=null;!function(n){n[n.Go_main_scene=1e3]="Go_main_scene",n[n.Go_Art_scene_NoAn=1001]="Go_Art_scene_NoAn"}(_||(_=n("EventEnum_Scene",{}))),e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Common.ts","./Proc_Art_scene_NoAn.ts","./Proc_main_scene.ts","./main.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Proc_main_scene.ts"],(function(e){"use strict";var n,t,o,i,r,a,c,u,l,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,c=e.AudioSource,u=e.game,l=e.Component},function(e){s=e.getProc_main_scene}],execute:function(){var p,f,m,d,y,g,_;r._RF.push({},"bc474fl3ARN6b5aq+lmuHvi","main",void 0);var b=a.ccclass,h=a.property;e("main",(p=b("main"),f=h({type:String}),m=h(c),p((g=n((y=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,o(n,"playname",g,i(n)),o(n,"_audioSource",_,i(n)),n}t(n,e);var r=n.prototype;return r.onLoad=function(){console.log("main onLoad");var e=this.node;u.addPersistRootNode(e)},r.start=function(){console.log("main start"),console.log(this.playname),s().init()},r.update=function(e){},n}(l)).prototype,"playname",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),_=n(y.prototype,"_audioSource",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=y))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/Proc_Art_scene_NoAn.ts",["cc","./Common.ts"],(function(n){"use strict";var t,e,o,c;return{setters:[function(n){t=n.cclegacy},function(n){e=n.common_bind_touch_start,o=n.common_getEventTarget,c=n.EventEnum_Scene}],execute:function(){n("getProc_Art_scene_NoAne",(function(){null===r&&(r=new _,console.log("new Proc_Art_scene_NoAn"));return r})),t._RF.push({},"350d01HWL9O27Q2trwAmYS4","Proc_Art_scene_NoAn",void 0);var _=function(){function n(){}var t=n.prototype;return t.init=function(){console.log("Proc_Art_scene_NoAn init"),e("Canvas/超能學習/主頁設計_遊戲icon_超能學習_一般-07",(function(){o().emit(c.Go_main_scene,"Art_scene_NoAn")}),this)},t.update=function(){},n}(),r=null;t._RF.pop()}}}));

System.register("chunks:///_virtual/Proc_main_scene.ts",["cc","./Common.ts"],(function(n){"use strict";var t,e,i,s;return{setters:[function(n){t=n.cclegacy,e=n.find,i=n.Animation},function(n){s=n.common_bind_touch_start}],execute:function(){n("getProc_main_scene",(function(){null===o&&(o=new a,console.log("new Proc_main_scene"));return o})),t._RF.push({},"ddb9fQUhAxGKLvCp1ub/FHk","Proc_main_scene",void 0);var a=function(){function n(){this.page_nodes=[],this.strPagePath=["Canvas/mask-001","Canvas/mask"]}var t=n.prototype;return t.init=function(){console.log("Proc_main_scene init");for(var n=0;n<this.strPagePath.length;n++)this.page_nodes.push(e(this.strPagePath[n]));this.switchPage(1),s("Canvas/mask-001/主頁設計_異界解密/異界解密/主頁設計_遊戲icon_超能學習_一般-11",(function(){this.switchPage(2)}),this),s("Canvas/mask/超能學習/主頁設計_遊戲icon_超能學習_一般-07",(function(){this.switchPage(1)}),this),s("Canvas/mask-001/主頁設計_異界解密/異界解密/主頁設計_PLAY_異界解密",(function(){window.location.href="../ccg2022/index.html"}),this),s("Canvas/mask/超能學習/主頁設計_PLAY_超能學習",(function(){window.location.href="../termagame2022/index.html"}),this)},t.switchPage=function(n){for(var t=0;t<this.page_nodes.length;t++)t==n-1?(this.page_nodes[t].active=!0,this.page_nodes[t].getComponent(i).play()):this.page_nodes[t].active=!1},t.update=function(){},n}(),o=null;t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map