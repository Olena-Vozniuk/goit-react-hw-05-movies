"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[148],{854:function(e,n,t){var i=t(870),r=t(184);n.Z=function(){return(0,r.jsx)(i.g4,{height:"80",width:"80",radius:"9",color:"#000000",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},148:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var i,r,a,c,o,s,d,l,u,h,p=t(439),f=t(87),x=t(689),v=t(791),g=t(554),m=t(128),Z=t(184),j=function(e){var n=e.to,t=e.children;return(0,Z.jsxs)(f.rU,{to:n,children:[(0,Z.jsx)(m.jTe,{size:"22"}),t]})},w=t(854),b=t(168),y=t(444),_=y.ZP.div(i||(i=(0,b.Z)(["\npadding: 18px;\n"]))),k=y.ZP.img(r||(r=(0,b.Z)(["\n display: block;\n    width: 300px;\n    object-fit: contain;\n    float: left;\n    margin-right: 10px;\n    margin-bottom: 20px;\n"]))),P=y.ZP.div(a||(a=(0,b.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: column;\n"]))),C=y.ZP.h1(c||(c=(0,b.Z)(["\nmargin: 0px 0px 15px;\n"]))),M=y.ZP.h2(o||(o=(0,b.Z)(["\nmargin: 0px;\n"]))),S=y.ZP.h3(s||(s=(0,b.Z)(["\nmargin: 0px;\n"]))),U=y.ZP.ul(d||(d=(0,b.Z)(["\ndisplay: flex;\n"]))),R=y.ZP.li(l||(l=(0,b.Z)(["\nmargin-right: 8px;\nborder: 0.5px solid lightgray;\npadding: 5px;\nborder-radius: 3px;\n"]))),T=y.ZP.ul(u||(u=(0,b.Z)(["\nmargin: 85px 5px;\n"]))),D=y.ZP.h3(h||(h=(0,b.Z)(["\nmargin-bottom: 5px;\n"]))),G=function(){var e,n,t=(0,x.UO)().movieId,i=(0,v.useState)({}),r=(0,p.Z)(i,2),a=r[0],c=r[1],o=(0,v.useState)(!1),s=(0,p.Z)(o,2),d=s[0],l=s[1],u=(0,v.useState)(""),h=(0,p.Z)(u,2),m=h[0],b=h[1],y=(0,x.TH)(),G=(0,v.useRef)(null!==(e=null===(n=y.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,v.useEffect)((function(){l(!0),g.Z.fetchMovieDetails(t).then((function(e){c(e)})).catch((function(e){b(e),l(!1)})).finally((function(){l(!1)}))}),[t]);var O=(10*a.vote_average).toFixed(0);return(0,Z.jsxs)(_,{children:[(0,Z.jsx)(j,{to:G.current,children:"Go back"}),!m&&a?(0,Z.jsxs)("div",{children:[(0,Z.jsx)(k,{src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path),alt:"poster"}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(C,{children:[a.original_title,"(",a.release_date?a.release_date.slice(0,-6):"",")"]}),(0,Z.jsxs)("p",{children:["User score: ",O," %"]}),(0,Z.jsx)(M,{children:"Owerview"}),(0,Z.jsx)("p",{children:a.overview}),(0,Z.jsx)(S,{children:"Genres"}),(0,Z.jsx)(U,{children:a.genres&&a.genres.map((function(e){var n=e.name,t=e.id;return(0,Z.jsx)(R,{children:n},t)}))})]})]}):(0,Z.jsx)("p",{children:"We don't have any information for this movie"}),d&&(0,Z.jsx)(w.Z,{}),(0,Z.jsxs)(T,{children:[(0,Z.jsx)(D,{children:" Additional information"}),(0,Z.jsx)("li",{children:(0,Z.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)(x.j3,{})]})}},554:function(e,n,t){var i=t(243),r="https://api.themoviedb.org/3/",a="1633536a0456347d61753bdcd242ef29",c={fetchTrending:function(){return i.Z.get("".concat(r,"trending/movie/day?api_key=").concat(a)).then((function(e){return e.data.results}))},fetchSearchMovies:function(e){return i.Z.get("".concat(r,"search/movie?api_key=").concat(a,"&query=").concat(e,"&page=1")).then((function(e){return e.data.results}))},fetchMovieDetails:function(e){return i.Z.get("".concat(r,"movie/").concat(e,"?api_key=").concat(a)).then((function(e){return e.data}))},fetchMovieCredits:function(e){return i.Z.get("".concat(r,"movie/").concat(e,"/credits?api_key=").concat(a)).then((function(e){return e.data.cast}))},fetchMovieReviews:function(e){return i.Z.get("".concat(r,"movie/").concat(e,"/reviews?api_key=").concat(a)).then((function(e){return e.data.results}))}};n.Z=c}}]);
//# sourceMappingURL=148.8e646b5d.chunk.js.map