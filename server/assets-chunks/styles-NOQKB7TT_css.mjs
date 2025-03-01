export default `@font-face{font-family:"Pixelated MS Sans Serif";font-style:normal;font-weight:400;src:url("./media/ms_sans_serif-PCDRTRLF.woff") format("woff");src:url("./media/ms_sans_serif-ICK36QUC.woff2") format("woff2")}@font-face{font-family:"Pixelated MS Sans Serif";font-style:normal;font-weight:700;src:url("./media/ms_sans_serif_bold-I32SPKRK.woff") format("woff");src:url("./media/ms_sans_serif_bold-DUFLVA7S.woff2") format("woff2")}body{color:#222;font-family:Arial;font-size:12px}.title-bar,.window,button,input,label,option,select,table,textarea,ul.tree-view{-webkit-font-smoothing:none;font-family:"Pixelated MS Sans Serif",Arial;font-size:11px}h1{font-size:5rem}h2{font-size:2.5rem}h3{font-size:2rem}h4{font-size:1.5rem}u{border-bottom:.5px solid #222;text-decoration:none}button,input[type=reset],input[type=submit]{border:none;border-radius:0;box-sizing:border-box;color:transparent;min-height:23px;min-width:75px;padding:0 12px;text-shadow:0 0 #222}.vertical-bar,button,input[type=reset],input[type=submit]{background:silver;box-shadow:inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px gray,inset 2px 2px #dfdfdf}.vertical-bar{height:20px;width:4px}button:not(:disabled):active,input[type=reset]:not(:disabled):active,input[type=submit]:not(:disabled):active{box-shadow:inset -1px -1px #fff,inset 1px 1px #0a0a0a,inset -2px -2px #dfdfdf,inset 2px 2px gray;text-shadow:1px 1px #222}@media (not(hover)){button:not(:disabled):hover,input[type=reset]:not(:disabled):hover,input[type=submit]:not(:disabled):hover{box-shadow:inset -1px -1px #fff,inset 1px 1px #0a0a0a,inset -2px -2px #dfdfdf,inset 2px 2px gray}}button:focus,input[type=reset]:focus,input[type=submit]:focus{outline:1px dotted #000;outline-offset:-4px}button::-moz-focus-inner,input[type=reset]::-moz-focus-inner,input[type=submit]::-moz-focus-inner{border:0}:disabled,:disabled+label,input[readonly],input[readonly]+label{color:gray}:disabled+label,button:disabled,input[type=reset]:disabled,input[type=submit]:disabled{text-shadow:1px 1px 0 #fff}.window{background:silver;box-shadow:inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px gray,inset 2px 2px #fff;padding:3px}.title-bar{align-items:center;background:linear-gradient(90deg,navy,#1084d0);display:flex;justify-content:space-between;padding:3px 2px 3px 3px}.title-bar.inactive{background:linear-gradient(90deg,gray,#b5b5b5)}.title-bar-text{color:#fff;font-weight:700;letter-spacing:0;margin-right:24px}.title-bar-controls{display:flex}.title-bar-controls button{display:block;min-height:14px;min-width:16px;padding:0}.title-bar-controls button:active{padding:0}.title-bar-controls button:focus{outline:none}.title-bar-controls button[aria-label=Minimize]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");background-position:bottom 3px left 4px;background-repeat:no-repeat}.title-bar-controls button[aria-label=Maximize]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");background-position:top 2px left 3px;background-repeat:no-repeat}.title-bar-controls button[aria-label=Restore]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M2 0h6v2H2zM7 2h1v4H7zM2 2h1v1H2zM6 5h1v1H6zM0 3h6v2H0zM5 5h1v4H5zM0 5h1v4H0zM1 8h4v1H1z'/%3E%3C/svg%3E");background-position:top 2px left 3px;background-repeat:no-repeat}.title-bar-controls button[aria-label=Help]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 1h2v2H0zM1 0h4v1H1zM4 1h2v2H4zM3 3h2v1H3zM2 4h2v2H2zM2 7h2v2H2z'/%3E%3C/svg%3E");background-position:top 2px left 5px;background-repeat:no-repeat}.title-bar-controls button[aria-label=Close]{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");background-position:top 3px left 4px;background-repeat:no-repeat;margin-left:2px}.status-bar{gap:1px;display:flex;margin:0 1px}.status-bar-field{box-shadow:inset -1px -1px #dfdfdf,inset 1px 1px gray;flex-grow:1;margin:0;padding:2px 3px}.window-body{margin:8px}fieldset{border-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;margin:0;padding:10px;padding-block-start:8px}legend{background:silver}.field-row{align-items:center;display:flex}[class^=field-row]+[class^=field-row]{margin-top:6px}.field-row>*+*{margin-left:6px}.field-row-stacked{display:flex;flex-direction:column}.field-row-stacked *+*{margin-top:6px}label{align-items:center;display:inline-flex}input[type=checkbox],input[type=radio]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background:0;border:none;margin:0;opacity:0;position:fixed}input[type=checkbox]+label,input[type=radio]+label{line-height:13px}input[type=radio]+label{margin-left:18px;position:relative}input[type=radio]+label:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z' fill='gray'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z' fill='%23fff'/%3E%3C/svg%3E");content:"";display:inline-block;height:12px;left:-18px;margin-right:6px;position:absolute;top:0;width:12px}input[type=radio]:active+label:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z' fill='gray'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z' fill='silver'/%3E%3C/svg%3E")}input[type=radio]:checked+label:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='4' height='4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 0H1v1H0v2h1v1h2V3h1V1H3V0z' fill='%23000'/%3E%3C/svg%3E");content:"";display:block;height:4px;left:-14px;position:absolute;top:4px;width:4px}input[type=checkbox]:focus+label,input[type=radio]:focus+label{outline:1px dotted #000}input[type=radio][disabled]+label:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z' fill='gray'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z' fill='silver'/%3E%3C/svg%3E")}input[type=radio][disabled]:checked+label:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='4' height='4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 0H1v1H0v2h1v1h2V3h1V1H3V0z' fill='gray'/%3E%3C/svg%3E")}input[type=checkbox]+label{margin-left:19px;position:relative}input[type=checkbox]+label:before{background:#fff;box-shadow:inset -1px -1px #fff,inset 1px 1px gray,inset -2px -2px #dfdfdf,inset 2px 2px #0a0a0a;content:"";display:inline-block;height:13px;left:-19px;margin-right:6px;position:absolute;width:13px}input[type=checkbox]:active+label:before{background:silver}input[type=checkbox]:checked+label:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='7' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 0H6v1H5v1H4v1H3v1H2V3H1V2H0v3h1v1h1v1h1V6h1V5h1V4h1V3h1V0z' fill='%23000'/%3E%3C/svg%3E");content:"";display:block;height:7px;left:-16px;position:absolute;top:3px;width:7px}input[type=checkbox][disabled]+label:before{background:silver}input[type=checkbox][disabled]:checked+label:after{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='7' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 0H6v1H5v1H4v1H3v1H2V3H1V2H0v3h1v1h1v1h1V6h1V5h1V4h1V3h1V0z' fill='gray'/%3E%3C/svg%3E")}input[type=email],input[type=number],input[type=password],input[type=text]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border-radius:0}input[type=email],input[type=number],input[type=password],input[type=text],select{background-color:#fff;box-shadow:inset -1px -1px #fff,inset 1px 1px gray,inset -2px -2px #dfdfdf,inset 2px 2px #0a0a0a;box-sizing:border-box;padding:3px 4px}select,textarea{border:none}textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:0;box-shadow:inset -1px -1px #fff,inset 1px 1px gray,inset -2px -2px #dfdfdf,inset 2px 2px #0a0a0a;box-sizing:border-box;padding:3px 4px}input[type=email],input[type=password],input[type=text],select{height:21px}input[type=number]{height:22px}input[type=email],input[type=number],input[type=password],input[type=text]{line-height:2}input[type=email]:disabled,input[type=email]:read-only,input[type=number]:disabled,input[type=number]:read-only,input[type=password]:disabled,input[type=password]:read-only,input[type=text]:disabled,input[type=text]:read-only,textarea:disabled{background-color:silver}select{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 6H4v1h1v1h1v1h1v1h1V9h1V8h1V7h1V6z' fill='%23000'/%3E%3C/svg%3E");background-position:top 2px right 2px;background-repeat:no-repeat;border-radius:0;padding-right:32px;position:relative}input[type=email]:focus,input[type=number]:focus,input[type=password]:focus,input[type=text]:focus,select:focus,textarea:focus{outline:none}input[type=range]{-webkit-appearance:none;background:transparent;width:100%}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0v16h2v2h2v2h1v-1H3v-2H1V1h9V0z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 1v15h1v1h1v1h1v1h2v-1h1v-1h1v-1h1V1z' fill='%23C0C7C8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 1h1v15H8v2H6v2H5v-1h2v-2h2z' fill='%2387888F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0h1v16H9v2H7v2H5v1h1v-2h2v-2h2z' fill='%23000'/%3E%3C/svg%3E");border:none;box-shadow:none;height:21px;transform:translateY(-8px);width:11px}input[type=range].has-box-indicator::-webkit-slider-thumb{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0v20h1V1h9V0z' fill='%23fff'/%3E%3Cpath fill='%23C0C7C8' d='M1 1h8v18H1z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 1h1v19H1v-1h8z' fill='%2387888F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0h1v21H0v-1h10z' fill='%23000'/%3E%3C/svg%3E");transform:translateY(-10px)}input[type=range]::-moz-range-thumb{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0v16h2v2h2v2h1v-1H3v-2H1V1h9V0z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 1v15h1v1h1v1h1v1h2v-1h1v-1h1v-1h1V1z' fill='%23C0C7C8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 1h1v15H8v2H6v2H5v-1h2v-2h2z' fill='%2387888F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0h1v16H9v2H7v2H5v1h1v-2h2v-2h2z' fill='%23000'/%3E%3C/svg%3E");border:0;border-radius:0;height:21px;transform:translateY(2px);width:11px}input[type=range].has-box-indicator::-moz-range-thumb{background:url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0v20h1V1h9V0z' fill='%23fff'/%3E%3Cpath fill='%23C0C7C8' d='M1 1h8v18H1z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 1h1v19H1v-1h8z' fill='%2387888F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0h1v21H0v-1h10z' fill='%23000'/%3E%3C/svg%3E");transform:translateY(0)}input[type=range]::-webkit-slider-runnable-track{background:#000;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow:1px 0 #fff,1px 1px #fff,0 1px #fff,-1px 0 #a9a9a9,-1px -1px #a9a9a9,0 -1px #a9a9a9,-1px 1px #fff,1px -1px #a9a9a9;box-sizing:border-box;height:2px;width:100%}input[type=range]::-moz-range-track{background:#000;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow:1px 0 #fff,1px 1px #fff,0 1px #fff,-1px 0 #a9a9a9,-1px -1px #a9a9a9,0 -1px #a9a9a9,-1px 1px #fff,1px -1px #a9a9a9;box-sizing:border-box;height:2px;width:100%}.is-vertical{display:inline-block;height:150px;transform:translateY(50%);width:4px}.is-vertical>input[type=range]{height:4px;margin:0 16px 0 10px;transform:rotate(270deg) translate(calc(-50% + 8px));transform-origin:left;width:150px}.is-vertical>input[type=range]::-webkit-slider-runnable-track{border-bottom:1px solid grey;border-left:1px solid grey;border-right:0;box-shadow:-1px 0 #fff,-1px 1px #fff,0 1px #fff,1px 0 #a9a9a9,1px -1px #a9a9a9,0 -1px #a9a9a9,1px 1px #fff,-1px -1px #a9a9a9}.is-vertical>input[type=range]::-moz-range-track{border-bottom:1px solid grey;border-left:1px solid grey;border-right:0;box-shadow:-1px 0 #fff,-1px 1px #fff,0 1px #fff,1px 0 #a9a9a9,1px -1px #a9a9a9,0 -1px #a9a9a9,1px 1px #fff,-1px -1px #a9a9a9}.is-vertical>input[type=range]::-webkit-slider-thumb{transform:translateY(-8px) scaleX(-1)}.is-vertical>input[type=range].has-box-indicator::-webkit-slider-thumb{transform:translateY(-10px) scaleX(-1)}.is-vertical>input[type=range]::-moz-range-thumb{transform:translateY(2px) scaleX(-1)}.is-vertical>input[type=range].has-box-indicator::-moz-range-thumb{transform:translateY(0) scaleX(-1)}select:focus{background-color:navy;color:#fff}select:focus option{background-color:#fff;color:#000}select:active{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h16v17H0V0zm1 16h14V1H1v15z' fill='gray'/%3E%3Cpath fill='silver' d='M1 1h14v15H1z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 7H5v1h1v1h1v1h1v1h1v-1h1V9h1V8h1V7z' fill='%23000'/%3E%3C/svg%3E")}a{color:#00f}a:focus{outline:1px dotted #00f}ul.tree-view{background:#fff;box-shadow:inset -1px -1px #fff,inset 1px 1px gray,inset -2px -2px #dfdfdf,inset 2px 2px #0a0a0a;display:block;margin:0;padding:6px}ul.tree-view li{list-style-type:none}ul.tree-view a{color:#000;text-decoration:none}ul.tree-view a:focus{background-color:navy;color:#fff}ul.tree-view li,ul.tree-view ul{margin-top:3px}ul.tree-view ul{border-left:1px dotted grey;margin-left:16px;padding-left:16px}ul.tree-view ul>li{position:relative}ul.tree-view ul>li:before{border-bottom:1px dotted grey;content:"";display:block;left:-16px;position:absolute;top:6px;width:12px}ul.tree-view ul>li:last-child:after{background:#fff;bottom:0;content:"";display:block;left:-20px;position:absolute;top:7px;width:8px}ul.tree-view details{margin-top:0}ul.tree-view details[open] summary{margin-bottom:0}ul.tree-view ul details>summary:before{margin-left:-22px;position:relative;z-index:1}ul.tree-view details>summary:before{background-color:#fff;border:1px solid grey;content:"+";display:block;float:left;height:9px;line-height:8px;margin-right:5px;padding-left:1px;text-align:center;width:8px}ul.tree-view details[open]>summary:before{content:"-"}ul.tree-view details>summary::-webkit-details-marker,ul.tree-view details>summary::marker{content:""}pre{background:#fff;box-shadow:inset -1px -1px #fff,inset 1px 1px gray,inset -2px -2px #dfdfdf,inset 2px 2px #0a0a0a;display:block;margin:0;padding:12px 8px}code,code *{font-family:monospace}summary:focus{outline:1px dotted #000}::-webkit-scrollbar{width:16px}::-webkit-scrollbar:horizontal{height:17px}::-webkit-scrollbar-corner{background:#dfdfdf}::-webkit-scrollbar-track{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='2' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 0H0v1h1v1h1V1H1V0z' fill='silver'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 0H1v1H0v1h1V1h1V0z' fill='%23fff'/%3E%3C/svg%3E")}::-webkit-scrollbar-thumb{background-color:#dfdfdf;box-shadow:inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px gray,inset 2px 2px #dfdfdf}::-webkit-scrollbar-button:horizontal:end:increment,::-webkit-scrollbar-button:horizontal:start:decrement,::-webkit-scrollbar-button:vertical:end:increment,::-webkit-scrollbar-button:vertical:start:decrement{display:block}::-webkit-scrollbar-button:vertical:start{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 6H7v1H6v1H5v1H4v1h7V9h-1V8H9V7H8V6z' fill='%23000'/%3E%3C/svg%3E");height:17px}::-webkit-scrollbar-button:vertical:end{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 6H4v1h1v1h1v1h1v1h1V9h1V8h1V7h1V6z' fill='%23000'/%3E%3C/svg%3E");height:17px}::-webkit-scrollbar-button:horizontal:start{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 4H8v1H7v1H6v1H5v1h1v1h1v1h1v1h1V4z' fill='%23000'/%3E%3C/svg%3E");width:16px}::-webkit-scrollbar-button:horizontal:end{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 4H6v7h1v-1h1V9h1V8h1V7H9V6H8V5H7V4z' fill='%23000'/%3E%3C/svg%3E");width:16px}.window[role=tabpanel]{position:relative;z-index:2}menu[role=tablist]{display:flex;list-style-type:none;margin:0 0 -2px;padding-left:3px;position:relative;text-indent:0}menu[role=tablist]>li{border-top-left-radius:3px;border-top-right-radius:3px;box-shadow:inset -1px 0 #0a0a0a,inset 1px 1px #dfdfdf,inset -2px 0 gray,inset 2px 2px #fff;z-index:1}menu[role=tablist]>li[aria-selected=true]{background-color:silver;margin-left:-3px;margin-top:-2px;padding-bottom:2px;position:relative;z-index:8}menu[role=tablist]>li>a{color:#222;display:block;margin:6px;text-decoration:none}menu[role=tablist]>li[aria-selected=true]>a:focus{outline:none}menu[role=tablist]>li>a:focus{outline:1px dotted #222}menu[role=tablist].multirows>li{flex-grow:1;text-align:center}.sunken-panel{border:2px groove transparent;border-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='gray' d='M0 0h4v1H0z'/%3E%3Cpath fill='gray' d='M0 0h1v4H0z'/%3E%3Cpath fill='%230a0a0a' d='M1 1h2v1H1z'/%3E%3Cpath fill='%230a0a0a' d='M1 1h1v2H1z'/%3E%3Cpath fill='%23fff' d='M0 4h5v1H0z'/%3E%3Cpath fill='%23fff' d='M4 0h1v5H4z'/%3E%3Cpath fill='%23dfdfdf' d='M3 1h1v3H3z'/%3E%3Cpath fill='%23dfdfdf' d='M1 3h3v1H1z'/%3E%3C/svg%3E") 2;box-sizing:border-box;overflow:auto}.sunken-panel,table{background-color:#fff}table{border-collapse:collapse;position:relative;text-align:left;white-space:nowrap}table>thead>tr>*{background:silver;box-shadow:inset -1px -1px #0a0a0a,inset 1px 1px #fff,inset -2px -2px gray,inset 2px 2px #dfdfdf;box-sizing:border-box;font-weight:400;height:17px;padding:0 6px;position:sticky;top:0}table.interactive>tbody>tr{cursor:pointer}table>tbody>tr.highlighted{background-color:navy;color:#fff}table>tbody>tr>*{height:14px;padding:0 6px}
`;