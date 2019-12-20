(this["webpackJsonpredux-store"]=this["webpackJsonpredux-store"]||[]).push([[0],{29:function(e,t,n){e.exports=n(46)},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(8),i=n(10),u=(n(38),n(9)),s=(n(39),function(e){var t=e.numItems,n=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(i.b,{className:"logo text-dark",to:"/"},"ReStore"),r.a.createElement(i.b,{to:"/cart"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")")))}),m=n(11),d=n(12),E=n(19),f=n(18),p=n(20),b=(n(41),function(e){var t=e.book,n=e.onAddedToCart,a=t.title,o=t.author,c=t.price,l=t.coverImage;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:l,alt:"cover book"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("span",{className:"book-title"},a),r.a.createElement("div",{className:"book-author"},o),r.a.createElement("div",{className:"book-price"},c),r.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"Add to cart")))}),h=r.a.createContext(),O=h.Provider,v=h.Consumer,_=function(){return function(e){return function(t){return r.a.createElement(v,null,(function(n){return r.a.createElement(e,Object.assign({},t,{bookstoreService:n}))}))}}},g=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},k=function(e,t){return function(){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then((function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_BOOKS_FAILURE",payload:e})}))}},C=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},y=(n(42),n(43),function(){return r.a.createElement("div",null,"loading...")}),T=(n(44),function(){return r.a.createElement("div",null,"Error!")}),N=function(e){var t=e.books,n=e.onAddedToCart;return r.a.createElement("ul",{className:"book-list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(b,{onAddedToCart:function(){return n(e.id)},book:e}))})))},S=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,o=e.onAddedToCart;return n?r.a.createElement(y,null):a?r.a.createElement(T,null):r.a.createElement(N,{books:t,onAddedToCart:o})}}]),t}(a.Component),j=C(_(),Object(l.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){var n=t.bookstoreService;return{fetchBooks:k(n,e),onAddedToCart:function(t){return e(g(t))}}})))(S),R=(n(45),{onIncrease:g,onDecrease:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:e}}}),I=Object(l.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}),R)((function(e){var t=e.items,n=e.total,a=e.onIncrease,o=e.onDecrease,c=e.onDelete;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map((function(e,t){var n=e.id,l=e.title,i=e.count,u=e.total;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t+1),r.a.createElement("td",null,l),r.a.createElement("td",null,i),r.a.createElement("td",null,"$",u),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(n)},className:"btn btn-outline-danger btn-sm float-right"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){return a(n)},className:"btn btn-outline-success btn-sm float-right"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning btn-sm float-right"},r.a.createElement("i",{className:"fa fa-minus-circle"}))))})))),r.a.createElement("div",{className:"total"},"Total: $",n))})),A=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(I,null))},D=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Cart page"))},B=Object(l.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}))((function(e){var t=e.items,n=e.total;return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(s,{numItems:t.length,total:n}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:A,exact:!0}),r.a.createElement(u.a,{path:"/cart",component:D})))})),w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(T,null):this.props.children}}]),t}(a.Component),L=function(){function e(){Object(m.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(d.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){t(e.data)}),700)}))}}]),e}(),F=n(17),K=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},M=n(13),U=function(e,t,n){var a=e.bookList.books,r=e.shoppingCart.cartItems,o=a.find((function(e){return e.id===t})),c=r.findIndex((function(e){return e.id===t})),l=function(e,t,n){return 0===t.count?[].concat(Object(M.a)(e.slice(0,n)),Object(M.a)(e.slice(n+1))):-1===n?[].concat(Object(M.a)(e),[t]):[].concat(Object(M.a)(e.slice(0,n)),[t],Object(M.a)(e.slice(n+1)))}(r,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.count,c=void 0===o?0:o,l=t.title,i=void 0===l?e.title:l,u=t.total,s=void 0===u?0:u;return{id:r,title:i,count:c+n,total:s+n*e.price}}(o,r[c],n),c);return{cartItems:l,orderTotal:l.reduce((function(e,t){return e+t.total}),0)}},x=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADDED_TO_CART":return U(e,t.payload,1);case"BOOK_REMOVED_FROM_CART":return U(e,t.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return U(e,t.payload,-n.count);default:return e.shoppingCart}},V=function(e,t){return{bookList:K(e,t),shoppingCart:x(e,t)}},H=Object(F.b)(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),X=new L;c.a.render(r.a.createElement(l.a,{store:H},r.a.createElement(w,null,r.a.createElement(O,{value:X},r.a.createElement(i.a,null,r.a.createElement(B,null))))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a03d4a6a.chunk.js.map