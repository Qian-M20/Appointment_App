(this.webpackJsonpappointment_scheduling_app=this.webpackJsonpappointment_scheduling_app||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/calendar.164a2078.svg"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),d=a.n(i),r=a(10),n=a.n(r),m=(a(18),a(2)),s=a(3),l=a(5),c=a(4),o=a(6),p=(a(19),a(20),a(21),function(e){function t(){return Object(m.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"dayRow"},this.props.timeLogs.map((function(e){return d.a.createElement("div",{className:"dayRow",key:e.id},e.day)}))),d.a.createElement("div",{className:"dateRow"},this.props.timeLogs.map((function(t){return d.a.createElement("div",{className:"dateRow",key:t.id},d.a.createElement("div",{className:!0===t.state?"dateGrid active":"dateGrid",onClick:e.props.toggleDayDisplay.bind(e,t.id)},t.date))}))))}}]),t}(i.Component)),u=function(e){function t(){return Object(m.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return d.a.createElement("header",null,d.a.createElement("div",{className:"topNav"},d.a.createElement("div",{className:"hamburgermenu"}),d.a.createElement("div",{className:"timeDisplay"},d.a.createElement("h2",null,T()),d.a.createElement("div",null,d.a.createElement("h2",{style:G},h()))),d.a.createElement("div",{className:"plusSign"})),d.a.createElement("div",{className:"bottomNav"},d.a.createElement(p,{timeLogs:this.props.timeLogs,toggleDayDisplay:this.props.toggleDayDisplay})))}}]),t}(i.Component),T=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()]},h=function(){return(new Date).getFullYear()},G={float:"left",marginLeft:"1vw"},y=u,v=a(8),g=(a(22),function(e){function t(){var e,i;Object(m.a)(this,t);for(var d=arguments.length,r=new Array(d),n=0;n<d;n++)r[n]=arguments[n];return(i=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).getClassName=function(e){return"confirmed"===e?"eventConfirmed":"rescheduled"===e?"eventRescheduled":"canceled"===e?"eventCanceled":"event"},i.getStyle=function(e){var t=a(23),i=t.utc(e.startTime,"HH:mm"),d=t.utc(e.endTime,"HH:mm");d.isBefore(i)&&d.add(1,"day");var r,n=t.duration(d.diff(i)),m=t.utc(+n).format("H:mm").split(/[:]/),s=120*(+m[0]+ +m[1]/60),l=e.startTime.split(/[:]/),c=(l[1]?parseInt(l[1],10):0)/60*120;return"confirmed"===e.action2?r="#482637":"rescheduled"===e.action2?r="#5E679E":"canceled"===e.action2&&(r="#383838"),{height:"".concat(s,"px"),backgroundColor:"".concat(r),display:"flex",alignItems:"center",marginTop:"".concat(c,"px"),position:"relative",width:"100%",borderRadius:"1rem"}},i}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"gridContainer"},d.a.createElement("p",{className:"title"},this.props.theSelectedApp.timeGrid),d.a.createElement("div",{className:"timeGrid",onClick:this.props.setAppointment},d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{style:this.getStyle(this.props.theSelectedApp),className:"eventGroup_".concat(this.props.theSelectedApp.date,"_").concat(this.props.theSelectedApp.id)},d.a.createElement("div",{className:this.props.theSelectedApp.name1?"eventGroup":"appNotCreated"},d.a.createElement("div",{className:"event name1"},d.a.createElement("span",{className:"name1"},this.props.theSelectedApp.name1)),d.a.createElement("div",{className:"event desc"},this.props.theSelectedApp.desc),d.a.createElement("div",{className:this.props.theSelectedApp.name1?"event time":"appNotCreated"},this.props.theSelectedApp.startTime," to ",this.props.theSelectedApp.endTime),d.a.createElement("div",{className:this.getClassName(this.props.theSelectedApp.action2)},d.a.createElement("span",{className:"name2"},this.props.theSelectedApp.name2)," ",this.props.theSelectedApp.action2))))))}}]),t}(i.Component)),E=a(11),f=(a(25),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.handleAppointment(a.state),a.props.exit()},a.onChange=function(e){a.setState(Object(E.a)({},e.target.id,e.target.value))},a.radioChange=function(e){a.setState({action2:e.target.value})},a.state={},a.setState(a.state=e.theSelectedApp),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("form",null,d.a.createElement("label",null,d.a.createElement("p",null,"Lesson:"),d.a.createElement("input",{id:"desc",value:this.state.desc,type:"text",onChange:this.onChange})),d.a.createElement("label",null,d.a.createElement("p",null,"Initiator:"),d.a.createElement("input",{id:"name1",type:"text",value:this.state.name1,onChange:this.onChange})),d.a.createElement("label",{className:"Date"},d.a.createElement("p",null,"Date:"),d.a.createElement("input",{type:"date",value:this.state.date,id:"date",name:"trip-start",min:"2020-01-01",max:"2020-12-31",onChange:this.onChange})),d.a.createElement("label",{className:"startTime"},d.a.createElement("p",null,"Start Time:"),d.a.createElement("input",{type:"time",value:this.state.startTime,id:"startTime",name:"trip-start",min:"12AM",max:"11PM",onChange:this.onChange})),d.a.createElement("label",null,d.a.createElement("p",null,"End Time:"),d.a.createElement("input",{type:"time",value:this.state.endTime,id:"endTime",name:"trip-start",min:"12AM",max:"11PM",onChange:this.onChange})),d.a.createElement("label",null,d.a.createElement("p",null,"Recipient:"),d.a.createElement("input",{id:"name2",value:this.state.name2,type:"text",onChange:this.onChange})),d.a.createElement("label",{id:"radioGroup"},d.a.createElement("label",null,d.a.createElement("input",{onChange:this.radioChange,type:"radio",id:"confirmed",name:"response",value:"confirmed"}),d.a.createElement("i",null,"Confirmed")),d.a.createElement("label",null,d.a.createElement("input",{onChange:this.radioChange,type:"radio",id:"rescheduled",name:"response",value:"rescheduled"}),d.a.createElement("i",null,"Rescheduled")),d.a.createElement("label",null,d.a.createElement("input",{onChange:this.radioChange,type:"radio",id:"canceled",name:"response",value:"canceled"}),d.a.createElement("i",null,"Canceled"))),d.a.createElement("div",{className:"buttonGroup"},d.a.createElement("button",{id:"saveBtn",className:"button",value:"Save",onClick:this.onSubmit},"Submit"),d.a.createElement("input",{id:"exitBtn",className:"button",value:"Exit",onClick:this.props.exit,readOnly:!0}))))}}]),t}(i.Component)),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var i=arguments.length,d=new Array(i),r=0;r<i;r++)d[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(d)))).setAppointment=function(e){var t=document.querySelectorAll(".TimeGridItem");Object(v.a)(t).forEach((function(e){e.style.display="none"})),document.querySelector(".appContainer_".concat(e.id)).style.display="block"},a.exit=function(e){var t=document.querySelectorAll(".TimeGridItem");Object(v.a)(t).forEach((function(e){e.style.display="block"})),document.querySelector(".appContainer_".concat(e.id)).style.display="none",document.querySelector("#name1").value="",document.querySelector("#endTime").value="",document.querySelector("#desc").value="",document.querySelector("#name2").value=""},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.timeLogs.map((function(t){if(!0===t.state)return t.appointments.map((function(t){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"TimeGridItem_".concat(t.id," TimeGridItem")},d.a.createElement(g,{key:t.id,setAppointment:e.setAppointment.bind(e,t),theSelectedApp:t})),d.a.createElement("div",{className:"appContainer_".concat(t.id," appContainer")},d.a.createElement(f,{key:t.id,handleAppointment:e.props.handleAppointment,theSelectedApp:t,exit:e.exit.bind(e,t)})))}))}))}}]),t}(i.Component),C=a(12),S=a.n(C),N=a(7),O=a(1),A=new Date,j=A.getDay(),D=A.getDate(),k=[],L=6e4*A.getTimezoneOffset(),w=[],x=function(){for(var e=0;e<=6;e++){var t=D-j+e,a=new Date(A.setDate(t)-L).toISOString().slice(0,10);w.push(a)}return w.forEach((function(e){k.push(e.slice(8))})),k}();var I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={timeLogs:[{id:0,day:"Sun",date:x[0],state:!1,appointments:[{id:1,date:w[0],timeGrid:"07:00",startTime:"07:00"},{id:2,date:w[0],timeGrid:"08:00",startTime:"08:00"},{id:3,date:w[0],timeGrid:"09:00",startTime:"09:00"},{id:4,date:w[0],timeGrid:"10:00",startTime:"10:00"},{id:5,date:w[0],timeGrid:"11:00",startTime:"11:00"},{id:6,date:w[0],timeGrid:"12:00",startTime:"12:00"},{id:7,date:w[0],timeGrid:"13:00",startTime:"13:00"},{id:8,date:w[0],timeGrid:"14:00",startTime:"14:00"},{id:9,date:w[0],timeGrid:"15:00",startTime:"15:00"},{id:10,date:w[0],timeGrid:"16:00",startTime:"16:00"},{id:11,date:w[0],timeGrid:"17:00",startTime:"17:00"},{id:12,date:w[0],timeGrid:"18:00",startTime:"18:00"},{id:13,date:w[0],timeGrid:"19:00",startTime:"19:00"},{id:14,date:w[0],timeGrid:"20:00",startTime:"20:00"},{id:15,date:w[0],timeGrid:"21:00",startTime:"21:00"},{id:16,date:w[0],timeGrid:"22:00",startTime:"22:00"},{id:16,date:w[0],timeGrid:"23:00",startTime:"23:00"}]},{id:1,day:"Mon",date:x[1],state:!1,appointments:[{id:1,date:w[1],timeGrid:"07:00",startTime:"07:00"},{id:2,date:w[1],timeGrid:"08:00",startTime:"08:00"},{id:3,date:w[1],timeGrid:"09:00",startTime:"09:00"},{id:4,date:w[1],timeGrid:"10:00",startTime:"10:00"},{id:5,date:w[1],timeGrid:"11:00",startTime:"11:00"},{id:6,date:w[1],timeGrid:"12:00",startTime:"12:00"},{id:7,date:w[1],timeGrid:"13:00",startTime:"13:00"},{id:8,date:w[1],timeGrid:"14:00",startTime:"14:00"},{id:9,date:w[1],timeGrid:"15:00",startTime:"15:00"},{id:10,date:w[1],timeGrid:"16:00",startTime:"16:00"},{id:11,date:w[1],timeGrid:"17:00",startTime:"17:00"},{id:12,date:w[1],timeGrid:"18:00",startTime:"18:00"},{id:13,date:w[1],timeGrid:"19:00",startTime:"19:00"},{id:14,date:w[1],timeGrid:"20:00",startTime:"20:00"},{id:15,date:w[1],timeGrid:"21:00",startTime:"21:00"},{id:16,date:w[1],timeGrid:"22:00",startTime:"22:00"},{id:16,date:w[1],timeGrid:"23:00",startTime:"23:00"}]},{id:2,day:"Tue",date:x[2],state:!1,appointments:[{id:1,date:w[2],timeGrid:"07:00",startTime:"07:00"},{id:2,date:w[2],timeGrid:"08:00",startTime:"08:00"},{id:3,date:w[2],timeGrid:"09:00",startTime:"09:00"},{id:4,date:w[2],timeGrid:"10:00",startTime:"10:00"},{id:5,date:w[2],timeGrid:"11:00",startTime:"11:00"},{id:6,date:w[2],timeGrid:"12:00",startTime:"12:00"},{id:7,date:w[2],timeGrid:"13:00",startTime:"13:00"},{id:8,date:w[2],timeGrid:"14:00",startTime:"14:00"},{id:9,date:w[2],timeGrid:"15:00",startTime:"15:00"},{id:10,date:w[2],timeGrid:"16:00",startTime:"16:00"},{id:11,date:w[2],timeGrid:"17:00",startTime:"17:00"},{id:12,date:w[2],timeGrid:"18:00",startTime:"18:00"},{id:13,date:w[2],timeGrid:"19:00",startTime:"19:00"},{id:14,date:w[2],timeGrid:"20:00",startTime:"20:00"},{id:15,date:w[2],timeGrid:"21:00",startTime:"21:00"},{id:16,date:w[2],timeGrid:"22:00",startTime:"22:00"},{id:16,date:w[2],timeGrid:"23:00",startTime:"23:00"}]},{id:3,day:"Wed",date:x[3],state:!1,appointments:[{id:1,date:w[3],timeGrid:"07:00",startTime:"07:00"},{id:2,date:w[3],timeGrid:"08:00",startTime:"08:00"},{id:3,date:w[3],timeGrid:"09:00",startTime:"09:00"},{id:4,date:w[3],timeGrid:"10:00",startTime:"10:00"},{id:5,date:w[3],timeGrid:"11:00",startTime:"11:00"},{id:6,date:w[3],timeGrid:"12:00",startTime:"12:00"},{id:7,date:w[3],timeGrid:"13:00",startTime:"13:00"},{id:8,date:w[3],timeGrid:"14:00",startTime:"14:00"},{id:9,date:w[3],timeGrid:"15:00",startTime:"15:00"},{id:10,date:w[3],timeGrid:"16:00",startTime:"16:00"},{id:11,date:w[3],timeGrid:"17:00",startTime:"17:00"},{id:12,date:w[3],timeGrid:"18:00",startTime:"18:00"},{id:13,date:w[3],timeGrid:"19:00",startTime:"19:00"},{id:14,date:w[3],timeGrid:"20:00",startTime:"20:00"},{id:15,date:w[3],timeGrid:"21:00",startTime:"21:00"},{id:16,date:w[3],timeGrid:"22:00",startTime:"22:00"},{id:16,date:w[3],timeGrid:"23:00",startTime:"23:00"}]},{id:4,day:"Thu",date:x[4],state:!1,appointments:[{id:1,date:w[4],timeGrid:"07:00",startTime:"07:00"},{id:2,date:w[4],timeGrid:"08:00",startTime:"08:00"},{id:3,date:w[4],timeGrid:"09:00",startTime:"09:00"},{id:4,date:w[4],timeGrid:"10:00",startTime:"10:00"},{id:5,date:w[4],timeGrid:"11:00",startTime:"11:00"},{id:6,date:w[4],timeGrid:"12:00",startTime:"12:00"},{id:7,date:w[4],timeGrid:"13:00",startTime:"13:00"},{id:8,date:w[4],timeGrid:"14:00",startTime:"14:00"},{id:9,date:w[4],timeGrid:"15:00",startTime:"15:00"},{id:10,date:w[4],timeGrid:"16:00",startTime:"16:00"},{id:11,date:w[4],timeGrid:"17:00",startTime:"17:00"},{id:12,date:w[4],timeGrid:"18:00",startTime:"18:00"},{id:13,date:w[4],timeGrid:"19:00",startTime:"19:00"},{id:14,date:w[4],timeGrid:"20:00",startTime:"20:00"},{id:15,date:w[4],timeGrid:"21:00",startTime:"21:00"},{id:16,date:w[4],timeGrid:"22:00",startTime:"22:00"},{id:16,date:w[4],timeGrid:"23:00",startTime:"23:00"}]},{id:5,day:"Fri",date:x[5],state:!1,appointments:[{id:1,date:w[5],timeGrid:"07:00",startTime:"07:00"},{id:2,date:w[5],timeGrid:"08:00",startTime:"08:00"},{id:3,date:w[5],timeGrid:"09:00",startTime:"09:00"},{id:4,date:w[5],timeGrid:"10:00",startTime:"10:00"},{id:5,date:w[5],timeGrid:"11:00",startTime:"11:00"},{id:6,date:w[5],timeGrid:"12:00",startTime:"12:00"},{id:7,date:w[5],timeGrid:"13:00",startTime:"13:00"},{id:8,date:w[5],timeGrid:"14:00",startTime:"14:00"},{id:9,date:w[5],timeGrid:"15:00",startTime:"15:00"},{id:10,date:w[5],timeGrid:"16:00",startTime:"16:00"},{id:11,date:w[5],timeGrid:"17:00",startTime:"17:00"},{id:12,date:w[5],timeGrid:"18:00",startTime:"18:00"},{id:13,date:w[5],timeGrid:"19:00",startTime:"19:00"},{id:14,date:w[5],timeGrid:"20:00",startTime:"20:00"},{id:15,date:w[5],timeGrid:"21:00",startTime:"21:00"},{id:16,date:w[5],timeGrid:"22:00",startTime:"22:00"},{id:16,date:w[5],timeGrid:"23:00",startTime:"23:00"}]},{id:6,day:"Sat",date:x[6],state:!1,appointments:[{id:1,date:w[6],timeGrid:"07:00",startTime:"07:00"},{id:2,date:w[6],timeGrid:"08:00",startTime:"08:00"},{id:3,date:w[6],timeGrid:"09:00",startTime:"09:00"},{id:4,date:w[6],timeGrid:"10:00",startTime:"10:00"},{id:5,date:w[6],timeGrid:"11:00",startTime:"11:00"},{id:6,date:w[6],timeGrid:"12:00",startTime:"12:00"},{id:7,date:w[6],timeGrid:"13:00",startTime:"13:00"},{id:8,date:w[6],timeGrid:"14:00",startTime:"14:00"},{id:9,date:w[6],timeGrid:"15:00",startTime:"15:00"},{id:10,date:w[6],timeGrid:"16:00",startTime:"16:00"},{id:11,date:w[6],timeGrid:"17:00",startTime:"17:00"},{id:12,date:w[6],timeGrid:"18:00",startTime:"18:00"},{id:13,date:w[6],timeGrid:"19:00",startTime:"19:00"},{id:14,date:w[6],timeGrid:"20:00",startTime:"20:00"},{id:15,date:w[6],timeGrid:"21:00",startTime:"21:00"},{id:16,date:w[6],timeGrid:"22:00",startTime:"22:00"},{id:16,date:w[6],timeGrid:"23:00",startTime:"23:00"}]}]},a.toggleDayDisplay=function(e){a.setState({timeLogs:a.state.timeLogs.map((function(t){return t.state=!1,t.id===e&&(t.state=!0),t}))})},a.handleAppointment=function(e){var t=e.date.slice(8,10),i=e.startTime.slice(0,2);document.querySelector(".TimeGridItem").style.display="block",document.querySelector(".appContainer").style.display="none",a.setState({timeLogs:a.state.timeLogs.map((function(a){return a.date===t&&a.appointments.map((function(t){t.startTime.slice(0,2)===i&&(t.name1=e.name1,t.startTime=e.startTime,t.endTime=e.endTime,t.desc=e.desc,t.name2=e.name2,t.action2=e.action2)})),a}))})},a.myTween=null,a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".mainContainer").style.opacity="0",this.myTween=N.a.fromTo(".slashPage",3,{opacity:0},{opacity:1}),this.myTween=N.a.to(".slashPage",1,{opacity:0,delay:3,display:"none",ease:O.b.easeInOut}),this.myTween=N.a.to(".mainContainer",3,{opacity:"1",delay:3,ease:O.b.easeInOut}),this.setState({timeLogs:this.state.timeLogs.map((function(e){return e.id===j&&(e.state=!0),e}))})}},{key:"render",value:function(){return d.a.createElement("div",{className:"App"},d.a.createElement("div",{className:"slashPage"},d.a.createElement("div",{className:"calendar"},d.a.createElement("img",{className:"calendarLogo","data-click-state":"1",src:S.a,alt:"calendar_logo"})),d.a.createElement("div",{className:"appDesc"},d.a.createElement("p",null,"Online Lesson Scheduling App"))),d.a.createElement("div",{className:"mainContainer"},d.a.createElement(y,{className:"mainHeader",timeLogs:this.state.timeLogs,toggleDayDisplay:this.toggleDayDisplay}),d.a.createElement("div",{className:"TimeGrids"},d.a.createElement(b,{timeLogs:this.state.timeLogs,handleAppointment:this.handleAppointment}))))}}]),t}(i.Component);n.a.render(d.a.createElement(I,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.84ed46f8.chunk.js.map