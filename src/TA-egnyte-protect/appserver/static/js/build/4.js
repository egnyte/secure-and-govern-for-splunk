(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{464:function(e,a,t){"use strict";t.r(a);var n,c=t(63),r=t.n(c),l=t(13),i=t.n(l),u=t(0),m=t.n(u),s=t(6),o=t(459),d=t.n(o),b=t(264),p=t.n(b),v=t(1),f=t(284),E=t(40),g=t(280),O=t(324),j=t(3),h=t.n(j),y=t(30),k=t.n(y),N=t(67),w=t.n(N),S=t(288),T=t(257),R=t(256),x=t(68),C=t(43),_=v.default.div(n||(n=i()(["\n    margin-left: 270px !important;\n    width: 150px;\n\n    .save_btn {\n        width: 100%;\n    }\n"])));function q(e){var a=e.serviceName,t=Object(u.useRef)(),n=Object(u.useState)(null),c=r()(n,2),l=c[0],i=c[1],o=Object(u.useState)(!1),d=r()(o,2),b=d[0],p=d[1],v=Object(u.useState)({}),f=r()(v,2),E=f[0],g=f[1];Object(u.useEffect)((function(){Object(T.a)({serviceName:"settings/".concat(a),handleError:!0,callbackOnError:function(e){e.uccErrorCode="ERR0005",i(e)}}).then((function(e){g(e.data.entry[0].content)}))}),[a]);if(null!=l&&l.uccErrorCode)throw l;return Object.keys(E).length?m.a.createElement(m.a.Fragment,null,m.a.createElement(S.a,{ref:t,page:C.a,stanzaName:a,serviceName:"settings",mode:R.b,currentServiceState:E,handleFormSubmit:function(e){p(e)}}),m.a.createElement(_,null,m.a.createElement(k.a,{className:"saveBtn",appearance:"primary",label:b?m.a.createElement(w.a,null):Object(s._)("Save"),onClick:function(){t.current.handleSubmit()},disabled:b}))):m.a.createElement(x.d,null)}q.propTypes={serviceName:h.a.string.isRequired};var F=q,I=t(308),J=t.n(I),z=t(255),A=t(323),B=t(285);function D(e){var a=e.serviceName,t=e.serviceTitle,n=Object(u.useState)(!1),c=r()(n,2),l=c[0],i=c[1],s="Add ".concat(t),o=function(){i(!1)};return m.a.createElement(m.a.Fragment,null,m.a.createElement(z.a,{value:null},m.a.createElement(A.a,{page:C.a,serviceName:a,handleRequestModalOpen:function(){i(!0)}}),m.a.createElement(J.a,{position:"top-right"}),l?m.a.createElement(B.a,{page:C.a,open:l,handleRequestClose:o,handleSaveData:function(){},serviceName:a,mode:R.c,formLabel:s}):null))}D.propTypes={serviceName:h.a.string.isRequired,serviceTitle:h.a.string.isRequired};var L,M=Object(u.memo)(D),G=Object(v.default)(p.a.Row)(L||(L=i()(["\n    padding: 5px 0px;\n\n    .dropdown {\n        text-align: right;\n    }\n\n    .input_button {\n        text-align: right;\n        margin-right: 0px;\n    }\n"])));a.default=function(){var e=Object(E.d)().pages.configuration,a=e.title,t=e.description,n=e.tabs,c=n.map((function(e){return e.name})),l=Object(u.useState)(n[0].name),i=r()(l,2),o=i[0],b=i[1],v=Object(f.a)();Object(u.useEffect)((function(){v&&c.includes(v.get("tab"))&&v.get("tab")!==o&&b(v.get("tab"))}),[]);var j=Object(u.useCallback)((function(e,a){var t=a.selectedTabId;b(t)}),[o]);return m.a.createElement(O.a,null,m.a.createElement(p.a,{gutter:8},m.a.createElement(G,null,m.a.createElement(p.a.Column,{span:9},m.a.createElement(g.b,null,Object(s._)(a)),m.a.createElement(g.a,null,Object(s._)(t||""))))),m.a.createElement(d.a,{activeTabId:o,onChange:j},n.map((function(e){return m.a.createElement(d.a.Tab,{key:e.name,label:Object(s._)(e.title),tabId:e.name})}))),n.map((function(e){return e.table?m.a.createElement("div",{key:e.name,style:e.name!==o?{display:"none"}:{display:"block"},id:"".concat(e.name,"Tab")},m.a.createElement(M,{key:e.name,serviceName:e.name,serviceTitle:e.title})):m.a.createElement("div",{key:e.name,style:e.name!==o?{display:"none"}:{display:"block"},id:"".concat(e.name,"Tab")},m.a.createElement(F,{key:e.name,serviceName:e.name}))})))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50cy9Db25maWd1cmF0aW9uRm9ybVZpZXcuanN4Iiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnRzL0NvbmZpZ3VyYXRpb25UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL3BhZ2VzL0NvbmZpZ3VyYXRpb24vQ29uZmlndXJhdGlvblBhZ2UuanN4Il0sIm5hbWVzIjpbIkJ1dHRvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDb25maWd1cmF0aW9uRm9ybVZpZXciLCJzZXJ2aWNlTmFtZSIsImZvcm0iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJjdXJyZW50U2VydmljZVN0YXRlIiwic2V0Q3VycmVudFNlcnZpY2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zQ2FsbFdyYXBwZXIiLCJoYW5kbGVFcnJvciIsImNhbGxiYWNrT25FcnJvciIsImVyciIsInVjY0Vycm9yQ29kZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlbnRyeSIsImNvbnRlbnQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiQmFzZUZvcm1WaWV3IiwicmVmIiwicGFnZSIsIlBBR0VfQ09ORiIsInN0YW56YU5hbWUiLCJtb2RlIiwiTU9ERV9DT05GSUciLCJoYW5kbGVGb3JtU3VibWl0Iiwic2V0IiwiY2xhc3NOYW1lIiwiYXBwZWFyYW5jZSIsImxhYmVsIiwiXyIsIm9uQ2xpY2siLCJjdXJyZW50IiwiaGFuZGxlU3VibWl0IiwiZGlzYWJsZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiQ29uZmlndXJhdGlvblRhYmxlIiwic2VydmljZVRpdGxlIiwib3BlbiIsInNldE9wZW4iLCJzZXJ2aWNlTGFiZWwiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJUYWJsZUNvbnRleHQiLCJ2YWx1ZSIsIlRhYmxlV3JhcHBlciIsImhhbmRsZVJlcXVlc3RNb2RhbE9wZW4iLCJwb3NpdGlvbiIsIkVudGl0eU1vZGFsIiwiaGFuZGxlU2F2ZURhdGEiLCJNT0RFX0NSRUFURSIsImZvcm1MYWJlbCIsIm1lbW8iLCJSb3ciLCJDb2x1bW5MYXlvdXQiLCJDb25maWd1cmF0aW9uUGFnZSIsImdldFVuaWZpZWRDb25maWdzIiwicGFnZXMiLCJjb25maWd1cmF0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhYnMiLCJwZXJtaXR0ZWRUYWJOYW1lcyIsIm1hcCIsInRhYiIsIm5hbWUiLCJhY3RpdmVUYWJJZCIsInNldEFjdGl2ZVRhYklkIiwicXVlcnkiLCJ1c2VRdWVyeSIsImluY2x1ZGVzIiwiZ2V0IiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwic2VsZWN0ZWRUYWJJZCIsIkVycm9yQm91bmRhcnkiLCJndXR0ZXIiLCJDb2x1bW4iLCJzcGFuIiwib25DaGFuZ2UiLCJUYWIiLCJrZXkiLCJ0YWJJZCIsInRhYmxlIiwic3R5bGUiLCJkaXNwbGF5IiwiaWQiXSwibWFwcGluZ3MiOiIyVUFjTUEsRUFBZ0JDLFVBQU9DLElBQVYsMkhBU25CLFNBQVNDLEVBQVQsR0FBZ0QsSUFBZkMsRUFBZSxFQUFmQSxZQUN2QkMsRUFBT0MsbUJBRCtCLEVBRWxCQyxtQkFBUyxNQUZTLFdBRXJDQyxFQUZxQyxLQUU5QkMsRUFGOEIsT0FHSkYsb0JBQVMsR0FITCxXQUdyQ0csRUFIcUMsS0FHdkJDLEVBSHVCLE9BSVVKLG1CQUFTLElBSm5CLFdBSXJDSyxFQUpxQyxLQUloQkMsRUFKZ0IsS0FNNUNDLHFCQUFVLFdBQ05DLFlBQWlCLENBQ2JYLFlBQWEsWUFBRixPQUFjQSxHQUN6QlksYUFBYSxFQUNiQyxnQkFBaUIsU0FBQ0MsR0FFZEEsRUFBSUMsYUFBZSxVQUNuQlYsRUFBU1MsTUFFZEUsTUFBSyxTQUFDQyxHQUNMUixFQUF1QlEsRUFBU0MsS0FBS0MsTUFBTSxH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T0FBT0EsRUFBSW9CLE1BQ1AseUJBQ0lGLElBQUtsQixFQUFJQyxLQUNUb0IsTUFDSXJCLEVBQUlDLE9BQVNDLEVBQWMsQ0FBRW9CLFFBQVMsUUFBVyxDQUFFQSxRQUFTLFNBRWhFQyxHQUFFLFVBQUt2QixFQUFJQyxLQUFULFFBRUYsa0JBQUMsRUFBRCxDQUNJaUIsSUFBS2xCLEVBQUlDLEtBQ1R6RSxZQUFhd0UsRUFBSUMsS0FDakIzQixhQUFjMEIsRUFBSUwsU0FJMUIseUJBQ0l1QixJQUFLbEIsRUFBSUMsS0FDVG9CLE1BQ0lyQixFQUFJQyxPQUFTQyxFQUFjLENBQUVvQixRQUFTLFFBQVcsQ0FBRUEsUUFBUyxTQUVoRUMsR0FBRSxVQUFLdkIsRUFBSUMsS0FBVCxRQUVGLGtCQUFDLEVBQUQsQ0FBdUJpQixJQUFLbEIsRUFBSUMsS0FBTXpFLFlBQWF3RSxFQUFJQyIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IF8gfSBmcm9tICdAc3BsdW5rL3VpLXV0aWxzL2kxOG4nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAc3BsdW5rL3JlYWN0LXVpL0J1dHRvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBXYWl0U3Bpbm5lciBmcm9tICdAc3BsdW5rL3JlYWN0LXVpL1dhaXRTcGlubmVyJztcblxuaW1wb3J0IEJhc2VGb3JtVmlldyBmcm9tICcuL0Jhc2VGb3JtVmlldyc7XG5pbXBvcnQgeyBheGlvc0NhbGxXcmFwcGVyIH0gZnJvbSAnLi4vdXRpbC9heGlvc0NhbGxXcmFwcGVyJztcbmltcG9ydCB7IE1PREVfQ09ORklHIH0gZnJvbSAnLi4vY29uc3RhbnRzL21vZGVzJztcbmltcG9ydCB7IFdhaXRTcGlubmVyV3JhcHBlciB9IGZyb20gJy4vdGFibGUvQ3VzdG9tVGFibGVTdHlsZSc7XG5pbXBvcnQgeyBQQUdFX0NPTkYgfSBmcm9tICcuLi9jb25zdGFudHMvcGFnZXMnO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tbGVmdDogMjcwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTUwcHg7XG5cbiAgICAuc2F2ZV9idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5gO1xuXG5mdW5jdGlvbiBDb25maWd1cmF0aW9uRm9ybVZpZXcoeyBzZXJ2aWNlTmFtZSB9KSB7XG4gICAgY29uc3QgZm9ybSA9IHVzZVJlZigpOyAvLyBub3NlbWdyZXA6IHR5cGVzY3JpcHQucmVhY3Quc2VjdXJpdHkuYXVkaXQucmVhY3Qtbm8tcmVmcy5yZWFjdC1uby1yZWZzXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjdXJyZW50U2VydmljZVN0YXRlLCBzZXRDdXJyZW50U2VydmljZVN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zQ2FsbFdyYXBwZXIoe1xuICAgICAgICAgICAgc2VydmljZU5hbWU6IGBzZXR0aW5ncy8ke3NlcnZpY2VOYW1lfWAsXG4gICAgICAgICAgICBoYW5kbGVFcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrT25FcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgIGVyci51Y2NFcnJvckNvZGUgPSAnRVJSMDAwNSc7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50U2VydmljZVN0YXRlKHJlc3BvbnNlLmRhdGEuZW50cnlbMF0uY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtzZXJ2aWNlTmFtZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBmb3JtLmN1cnJlbnQuaGFuZGxlU3VibWl0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoc2V0KSA9PiB7XG4gICAgICAgIHNldElzU3VibWl0dGluZyhzZXQpO1xuICAgIH07XG5cbiAgICBpZiAoZXJyb3I/LnVjY0Vycm9yQ29kZSkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICAvLyBSZWYgaXMgdXNlZCBoZXJlIHRvIGNhbGwgc3VibWl0IG1ldGhvZCBvZiBmb3JtIG9ubHlcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY3VycmVudFNlcnZpY2VTdGF0ZSkubGVuZ3RoID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJhc2VGb3JtVmlldyAvLyBub3NlbWdyZXA6IHR5cGVzY3JpcHQucmVhY3Quc2VjdXJpdHkuYXVkaXQucmVhY3Qtbm8tcmVmcy5yZWFjdC1uby1yZWZzXG4gICAgICAgICAgICAgICAgcmVmPXtmb3JtfVxuICAgICAgICAgICAgICAgIHBhZ2U9e1BBR0VfQ09ORn1cbiAgICAgICAgICAgICAgICBzdGFuemFOYW1lPXtzZXJ2aWNlTmFtZX1cbiAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZT1cInNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICBtb2RlPXtNT0RFX0NPTkZJR31cbiAgICAgICAgICAgICAgICBjdXJyZW50U2VydmljZVN0YXRlPXtjdXJyZW50U2VydmljZVN0YXRlfVxuICAgICAgICAgICAgICAgIGhhbmRsZUZvcm1TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzYXZlQnRuXCJcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17aXNTdWJtaXR0aW5nID8gPFdhaXRTcGlubmVyIC8+IDogXygnU2F2ZScpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgICAgPFdhaXRTcGlubmVyV3JhcHBlciAvPlxuICAgICk7XG59XG5cbkNvbmZpZ3VyYXRpb25Gb3JtVmlldy5wcm9wVHlwZXMgPSB7XG4gICAgc2VydmljZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb25Gb3JtVmlldztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUb2FzdE1lc3NhZ2VzIGZyb20gJ0BzcGx1bmsvcmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucy9Ub2FzdE1lc3NhZ2VzJztcblxuaW1wb3J0IHsgVGFibGVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1RhYmxlQ29udGV4dCc7XG5pbXBvcnQgVGFibGVXcmFwcGVyIGZyb20gJy4vdGFibGUvVGFibGVXcmFwcGVyJztcbmltcG9ydCBFbnRpdHlNb2RhbCBmcm9tICcuL0VudGl0eU1vZGFsJztcbmltcG9ydCB7IE1PREVfQ1JFQVRFIH0gZnJvbSAnLi4vY29uc3RhbnRzL21vZGVzJztcbmltcG9ydCB7IFBBR0VfQ09ORiB9IGZyb20gJy4uL2NvbnN0YW50cy9wYWdlcyc7XG5cbmZ1bmN0aW9uIENvbmZpZ3VyYXRpb25UYWJsZSh7IHNlcnZpY2VOYW1lLCBzZXJ2aWNlVGl0bGUgfSkge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXJ2aWNlTGFiZWwgPSBgQWRkICR7c2VydmljZVRpdGxlfWA7XG5cbiAgICBjb25zdCBoYW5kbGVSZXF1ZXN0T3BlbiA9ICgpID0+IHtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUmVxdWVzdENsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGdlbmVyYXRlTW9kYWxEaWFsb2cgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxFbnRpdHlNb2RhbFxuICAgICAgICAgICAgICAgICAgICBwYWdlPXtQQUdFX0NPTkZ9XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlcXVlc3RDbG9zZT17aGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlRGF0YT17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPXtzZXJ2aWNlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbW9kZT17TU9ERV9DUkVBVEV9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1MYWJlbD17c2VydmljZUxhYmVsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUYWJsZUNvbnRleHRQcm92aWRlciB2YWx1ZT17bnVsbH0+XG4gICAgICAgICAgICAgICAgPFRhYmxlV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICBwYWdlPXtQQUdFX0NPTkZ9XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPXtzZXJ2aWNlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVxdWVzdE1vZGFsT3Blbj17KCkgPT4gaGFuZGxlUmVxdWVzdE9wZW4oKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUb2FzdE1lc3NhZ2VzIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICB7Z2VuZXJhdGVNb2RhbERpYWxvZygpfVxuICAgICAgICAgICAgPC9UYWJsZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuQ29uZmlndXJhdGlvblRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICBzZXJ2aWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNlcnZpY2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb25maWd1cmF0aW9uVGFibGUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNwbHVuay91aS11dGlscy9pMThuJztcbmltcG9ydCBUYWJCYXIgZnJvbSAnQHNwbHVuay9yZWFjdC11aS9UYWJCYXInO1xuaW1wb3J0IENvbHVtbkxheW91dCBmcm9tICdAc3BsdW5rL3JlYWN0LXVpL0NvbHVtbkxheW91dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHVzZVF1ZXJ5IGZyb20gJy4uLy4uL2hvb2tzL3VzZVF1ZXJ5JztcbmltcG9ydCB7IGdldFVuaWZpZWRDb25maWdzIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50LCBTdWJUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4uL0lucHV0L0lucHV0UGFnZVN0eWxlJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgQ29uZmlndXJhdGlvbkZvcm1WaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29uZmlndXJhdGlvbkZvcm1WaWV3JztcbmltcG9ydCBDb25maWd1cmF0aW9uVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db25maWd1cmF0aW9uVGFibGUnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQoQ29sdW1uTGF5b3V0LlJvdylgXG4gICAgcGFkZGluZzogNXB4IDBweDtcblxuICAgIC5kcm9wZG93biB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIC5pbnB1dF9idXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuYDtcblxuZnVuY3Rpb24gQ29uZmlndXJhdGlvblBhZ2UoKSB7XG4gICAgY29uc3QgdW5pZmllZENvbmZpZ3MgPSBnZXRVbmlmaWVkQ29uZmlncygpO1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YWJzIH0gPSB1bmlmaWVkQ29uZmlncy5wYWdlcy5jb25maWd1cmF0aW9uO1xuICAgIGNvbnN0IHBlcm1pdHRlZFRhYk5hbWVzID0gdGFicy5tYXAoKHRhYikgPT4ge1xuICAgICAgICByZXR1cm4gdGFiLm5hbWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBbYWN0aXZlVGFiSWQsIHNldEFjdGl2ZVRhYklkXSA9IHVzZVN0YXRlKHRhYnNbMF0ubmFtZSk7XG5cbiAgICBjb25zdCBxdWVyeSA9IHVzZVF1ZXJ5KCk7XG5cbiAgICAvLyBSdW4gaW5pdGlhbGx5IGFuZCB3aGVuIHF1ZXJ5IGlzIHVwZGF0ZWQgdG8gc2V0IGFjdGl2ZSB0YWIgYmFzZWQgb24gaW5pdGlhbCBVUkxcbiAgICAvLyBvciB3aGlsZSBuYXZpZ2F0aW5nIGJyb3dzZXIgaGlzdG9yeVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIE9ubHkgY2hhbmdlIGFjdGl2ZSB0YWIgd2hlbiBwcm92aWRlZCB0YWIgaW4gcXVlcnkgaXMgc3BlY2lmaWVkIGluIGdsb2JhbENvbmZpZ1xuICAgICAgICAvLyBhbmQgaWYgdGhlIGN1cnJlbnQgYWN0aXZlIHRhYiBpcyBub3Qgc2FtZSBhcyBwcm92aWRlZCBpbiBxdWVyeVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBxdWVyeSAmJlxuICAgICAgICAgICAgcGVybWl0dGVkVGFiTmFtZXMuaW5jbHVkZXMocXVlcnkuZ2V0KCd0YWInKSkgJiZcbiAgICAgICAgICAgIHF1ZXJ5LmdldCgndGFiJykgIT09IGFjdGl2ZVRhYklkXG4gICAgICAgICkge1xuICAgICAgICAgICAgc2V0QWN0aXZlVGFiSWQocXVlcnkuZ2V0KCd0YWInKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZSwgeyBzZWxlY3RlZFRhYklkIH0pID0+IHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVRhYklkKHNlbGVjdGVkVGFiSWQpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgICAgIFthY3RpdmVUYWJJZF1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICA8Q29sdW1uTGF5b3V0IGd1dHRlcj17OH0+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkxheW91dC5Db2x1bW4gc3Bhbj17OX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVDb21wb25lbnQ+e18odGl0bGUpfTwvVGl0bGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ViVGl0bGVDb21wb25lbnQ+e18oZGVzY3JpcHRpb24gfHwgJycpfTwvU3ViVGl0bGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sdW1uTGF5b3V0LkNvbHVtbj5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uTGF5b3V0PlxuICAgICAgICAgICAgPFRhYkJhciBhY3RpdmVUYWJJZD17YWN0aXZlVGFiSWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJCYXIuVGFiIGtleT17dGFiLm5hbWV9IGxhYmVsPXtfKHRhYi50aXRsZSl9IHRhYklkPXt0YWIubmFtZX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFiQmFyPlxuICAgICAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiLnRhYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5uYW1lICE9PSBhY3RpdmVUYWJJZCA/IHsgZGlzcGxheTogJ25vbmUnIH0gOiB7IGRpc3BsYXk6ICdibG9jaycgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3RhYi5uYW1lfVRhYmB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb25maWd1cmF0aW9uVGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPXt0YWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlVGl0bGU9e3RhYi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFiLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLm5hbWUgIT09IGFjdGl2ZVRhYklkID8geyBkaXNwbGF5OiAnbm9uZScgfSA6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7dGFiLm5hbWV9VGFiYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpZ3VyYXRpb25Gb3JtVmlldyBrZXk9e3RhYi5uYW1lfSBzZXJ2aWNlTmFtZT17dGFiLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb25QYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==