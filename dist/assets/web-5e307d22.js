import{W as o}from"./index-321df7d9.js";class e extends o{constructor(){super(),this._lastWindow=null}async open(s){this._lastWindow=window.open(s.url,s.windowName||"_blank")}async close(){return new Promise((s,n)=>{this._lastWindow!=null?(this._lastWindow.close(),this._lastWindow=null,s()):n("No active window to close!")})}}const i=new e;export{i as Browser,e as BrowserWeb};
