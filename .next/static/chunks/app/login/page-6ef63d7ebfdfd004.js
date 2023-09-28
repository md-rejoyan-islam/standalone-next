(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{4468:function(e,t,a){Promise.resolve().then(a.bind(a,7408))},3931:function(e,t,a){"use strict";a.d(t,{Al:function(){return i},DO:function(){return u},Gd:function(){return m},Kv:function(){return l},N$:function(){return n},OU:function(){return f},RJ:function(){return g},RZ:function(){return c},Zy:function(){return h},aT:function(){return x},kE:function(){return p},n$:function(){return d}});var r=a(1554),s=a(64),o=a(9222);let n=(0,s.hg)("auth/userRegister",async e=>{try{let t=await o.Z.post("".concat(r.Z,"/api/v1/auth/register"),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),d=(0,s.hg)("auth/userLogin",async e=>{let{router:t}=e;try{let a=await o.Z.post("".concat(r.Z,"/api/v1/auth/login"),{...e.data},{withCredentials:!0});return setTimeout(()=>{t.push("/profile")}),a.data}catch(e){throw Error(e.response.data.error.message)}}),l=(0,s.hg)("auth/userLogout",async()=>{try{let e=await o.Z.post("".concat(r.Z,"/api/v1/auth/logout"),{},{withCredentials:!0});return e.data}catch(e){throw Error(e.response.data.error.message)}}),c=(0,s.hg)("auth/loggedInUser",async()=>{try{let e=await o.Z.get("".concat(r.Z,"/api/v1/auth/me"),{withCredentials:!0});return e.data}catch(e){throw Error(e.response.data.error.message)}}),i=(0,s.hg)("auth/updateUserData",async e=>{try{let t=await o.Z.patch("".concat(r.Z,"/api/v1/users/").concat(e.id),e.data,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),u=(0,s.hg)("auth/updateUserPhoto",async e=>{let{userId:t}=Object.fromEntries(e);try{let a=await o.Z.patch("".concat(r.Z,"/api/v1/users/").concat(t),e,{withCredentials:!0});return a.data}catch(e){throw Error(e.response.data.error.message)}}),h=(0,s.hg)("auth/updateUserPassword",async e=>{try{let t=await o.Z.patch("".concat(r.Z,"/api/v1/users/password-update"),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),p=(0,s.hg)("auth/sendActiveCode",async e=>{try{let t=await o.Z.post("".concat(r.Z,"/api/v1/auth/resend-active-code"),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),m=(0,s.hg)("auth/activeAccount",async e=>{try{let t=await o.Z.post("".concat(r.Z,"/api/v1/auth/activate"),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),x=(0,s.hg)("auth/findAccount",async e=>{try{let t=await o.Z.post("".concat(r.Z,"/api/v1/auth/find-account"),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),g=(0,s.hg)("auth/passwordResetCodeSend",async e=>{try{let t=await o.Z.post("".concat(r.Z,"/api/v1/auth/password-reset-code"),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}}),f=(0,s.hg)("auth/passwordReset",async e=>{console.log(e);try{let t=await o.Z.post("".concat(r.Z,"/api/v1/auth/password-reset"),e,{withCredentials:!0});return t.data}catch(e){throw Error(e.response.data.error.message)}})},1210:function(e,t,a){"use strict";a.d(t,{Eo:function(){return l},nr:function(){return d}});var r=a(64),s=a(3931),o=a(7713);let n=(0,r.oM)({name:"auth",initialState:{user:null,error:null,message:null},reducers:{setMessageEmpty:e=>{e.message=null,e.error=null}},extraReducers:e=>{e.addCase(s.N$.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.N$.fulfilled,(e,t)=>{e.message=t.payload.message}).addCase(s.n$.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.n$.fulfilled,(e,t)=>{e.user=t.payload.data,e.message=t.payload.message,(0,o.setCookie)("token",t.payload.data.accessToken,{secure:!0,sameSite:"none"}),localStorage.setItem("user",JSON.stringify(t.payload.data))}).addCase(s.Kv.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.Kv.fulfilled,(e,t)=>{e.user=null,e.message=t.payload.message,localStorage.removeItem("user"),(0,o.deleteCookie)("token",{secure:!0,sameSite:"none"})}).addCase(s.RZ.rejected,e=>{e.user=null}).addCase(s.RZ.fulfilled,(e,t)=>{e.user=t.payload.data,localStorage.setItem("user",JSON.stringify(t.payload.data))}).addCase(s.Al.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.Al.fulfilled,(e,t)=>{e.user=t.payload.data,e.message=t.payload.message,localStorage.setItem("user",JSON.stringify(t.payload.data))}).addCase(s.DO.rejected,e=>{e.error="Something went wrong!."}).addCase(s.DO.fulfilled,(e,t)=>{e.user=t.payload.data,e.message="Photo updated successfully!",localStorage.setItem("user",JSON.stringify(t.payload.data))}).addCase(s.Zy.rejected,e=>{e.error="Something went wrong!."}).addCase(s.Zy.fulfilled,(e,t)=>{e.user=t.payload.data,e.message=t.payload.message}).addCase(s.kE.rejected,e=>{e.error="Something went wrong to send active code in your email!."}).addCase(s.kE.fulfilled,(e,t)=>{e.message=t.payload.message}).addCase(s.Gd.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.Gd.fulfilled,(e,t)=>{e.message=t.payload.message}).addCase(s.aT.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.aT.fulfilled,e=>{e.message="User found!"}).addCase(s.RJ.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.RJ.fulfilled,(e,t)=>{e.message=t.payload.message}).addCase(s.OU.rejected,(e,t)=>{e.error=t.error.message}).addCase(s.OU.fulfilled,(e,t)=>{e.message=t.payload.message})}}),d=e=>e.auth,{setMessageEmpty:l}=n.actions;t.ZP=n.reducer},7408:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(7437),s=a(2265),o=a(1396),n=a.n(o),d=a(3198),l=a(171),c=a(3931),i=a(4033),u=a(1210);function h(){let e=(0,d.I0)(),{message:t,error:a,user:o}=(0,d.v9)(e=>e.auth),h=(0,i.useRouter)(),[p,m]=(0,s.useState)(!1),[x,g]=(0,s.useState)(!1),[f,w]=(0,s.useState)({email:"",password:""}),v=e=>{w(t=>({...t,[e.target.name]:e.target.value}))},y=async t=>{t.preventDefault();let{email:a,password:r}=f;if(!a||!r)return l.Am.error("All field are required!");e((0,c.n$)({data:f,router:h}))};(0,s.useEffect)(()=>{t&&(l.Am.success(t),w({email:"",password:""})),a&&(l.Am.error(a),"Please active your account."==a&&g(!0)),e((0,u.Eo)())},[t,a,e]);let C=async()=>{g(!1),e((0,c.kE)({email:f.email})),setTimeout(()=>{h.push("/verify?email="+f.email)},500)};return(0,r.jsx)("section",{className:"py-24 bg-[#fff] px-4 dark:bg-[#0b192a]    dark:text-[#fff] ",children:(0,r.jsxs)("div",{className:"bg-[#f0f0f7] max-w-[450px] mx-auto border py-5 sm:px-8 px-4 rounded-md   dark:bg-[#161737] dark:border-[#6f5dbd29]  text-left",children:[(0,r.jsx)("h2",{className:"text-center text-2xl pt-1 pb-4 font-bold dark:text-white text-zinc-700",children:"Login"}),(0,r.jsxs)("form",{onSubmit:y,className:"dark:text-[#fff] z-10",children:[(0,r.jsxs)("div",{className:"my-4 flex items-center",children:[(0,r.jsx)("span",{className:"bg-[#506bc2cf] rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center",children:(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",className:"text-white",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})})}),(0,r.jsx)("input",{placeholder:"Type Your Email Address",className:" z-10 rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full ",value:f.email,onChange:v,name:"email"})]}),(0,r.jsxs)("div",{className:"mb-4 relative",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"bg-[#506bc2cf]  rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center",children:(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",className:" text-white",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"})})}),(0,r.jsx)("input",{placeholder:"Type Your Password",name:"password",className:"rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full  z-10",value:f.password,onChange:v,type:p?"text":"password"})]}),(0,r.jsx)("span",{className:"z-10 cursor-pointer absolute top-3 right-5",onClick:()=>{p?m(!1):m(!0)},children:f.password&&(p?(0,r.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",className:"text-[20px] dark:text-white text-violet-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{children:(0,r.jsx)("path",{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"})})}),(0,r.jsx)("path",{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}),(0,r.jsx)("path",{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"})]}):(0,r.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",className:"text-[20px] dark:text-white text-violet-600",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"})}))})]}),(0,r.jsx)("div",{className:"my-5 z-10",children:(0,r.jsxs)("span",{className:"text-sm flex justify-between",children:[x?(0,r.jsx)("button",{className:"z-10 block text-[17px] dark:text-red-400  text-red-400",onClick:C,children:"Active account?"}):(0,r.jsx)(n(),{className:"z-10 block text-[17px] text-red-400 hover:text-red-600 dark:text-red-400",href:"/find-account",children:"Forgot Password?"}),(0,r.jsx)(n(),{href:"/register",className:"z-10  text-blue-600 px-2 text-[17px] hover:text-violet-600",children:"Sign Up"})]})}),(0,r.jsx)("div",{className:" flex",children:(0,r.jsx)("button",{className:"z-10 py-2 rounded-md text-semibold font-semibold cursor-pointer bg-violet-500 hover:bg-violet-600 text-white border-none dark:bg-violet-600 dark:hover:bg-blue-600  w-full max-full    text-[17px]",type:"submit",children:"LOGIN"})})]})]})})}},1554:function(e,t,a){"use strict";a.d(t,{B:function(){return r}}),t.Z="https://kin-api.onrender.com";let r="https://www.kinsust.org"},2706:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return o}});let r=a(1024),s=r._(a(2265)),o=s.default.createContext(null)},1396:function(e,t,a){e.exports=a(6685)}},function(e){e.O(0,[3306,6566,6685,8427,2971,596,1744],function(){return e(e.s=4468)}),_N_E=e.O()}]);