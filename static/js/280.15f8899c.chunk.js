"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[280],{854:function(t,e,n){var r=n(870),a=n(184);e.Z=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#000000",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},280:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r,a,c,i=n(433),o=n(439),u=n(791),s=n(87),f=n(554),h=n(689),l=n(168),d=n(444),p=d.ZP.ul(r||(r=(0,l.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 5px;\n"]))),v=d.ZP.li(a||(a=(0,l.Z)(["\nwidth: 100px;\n"]))),m=n(184),g=function(t){var e=t.movies,n=(0,h.TH)();return(0,m.jsx)(p,{children:e&&e.map((function(t){var e=t.title,r=t.id,a=t.release_date,c=t.poster_path;return(0,m.jsxs)(s.rU,{to:"/movies/".concat(r),state:{from:n},children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:"poster",width:100}),(0,m.jsxs)(v,{children:[e," (",a.slice(0,-6),")"]})]},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}())}))})},Z=n(854),y=d.ZP.div(c||(c=(0,l.Z)(["\npadding: 16px;\n"]))),x=function(){var t,e=(0,u.useState)([]),n=(0,o.Z)(e,2),r=n[0],a=n[1],c=(0,u.useState)(""),h=(0,o.Z)(c,2),l=h[0],d=h[1],p=(0,u.useState)(!1),v=(0,o.Z)(p,2),x=v[0],w=v[1],j=(0,s.lr)(),_=(0,o.Z)(j,2),k=_[0],b=_[1],S=null!==(t=k.get("query"))&&void 0!==t?t:"";(0,u.useEffect)((function(){f.Z.fetchSearchMovies(S).then((function(t){""!==S&&0===t.length?(d("We don't have any reviews for this movie"),a()):a((function(e){return[].concat((0,i.Z)(e),(0,i.Z)(t))}))})).catch((function(t){d(t),w(!1)})).finally((function(){w(!1)})),d("")}),[S]);return(0,m.jsxs)(y,{children:[(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target.elements.query.value;if(""===e.trim())return b({});b({query:e})},children:[(0,m.jsx)("input",{type:"text",name:"query"}),(0,m.jsx)("button",{type:"submit",children:"Search"})]}),(0,m.jsx)(g,{movies:r}),x&&(0,m.jsx)(Z.Z,{}),l&&(0,m.jsxs)("p",{children:[" ",l]})]})}},554:function(t,e,n){var r=n(243),a="https://api.themoviedb.org/3/",c="1633536a0456347d61753bdcd242ef29",i={fetchTrending:function(){return r.Z.get("".concat(a,"trending/movie/day?api_key=").concat(c)).then((function(t){return t.data.results}))},fetchSearchMovies:function(t){return r.Z.get("".concat(a,"search/movie?api_key=").concat(c,"&query=").concat(t,"&page=1")).then((function(t){return t.data.results}))},fetchMovieDetails:function(t){return r.Z.get("".concat(a,"movie/").concat(t,"?api_key=").concat(c)).then((function(t){return t.data}))},fetchMovieCredits:function(t){return r.Z.get("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.data.cast}))},fetchMovieReviews:function(t){return r.Z.get("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.data.results}))}};e.Z=i}}]);
//# sourceMappingURL=280.15f8899c.chunk.js.map