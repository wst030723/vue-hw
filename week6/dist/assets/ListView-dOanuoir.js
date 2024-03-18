import{_ as m,o as l,c as n,a as t,t as i,h as r,g as v,v as f,F as y,i as k,b as P,r as I,n as M,d as g}from"./index-aYW1Fugx.js";const $={props:{product:{type:Object,default(){return{}}}},data(){return{qty:1,modal:""}},mounted(){this.modal=new bootstrap.Modal(this.$refs.modal,{keyboard:!1,backdrop:"static"})},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}}},C={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},x={class:"modal-dialog modal-xl",role:"document"},A={class:"modal-content border-0"},S={class:"modal-header bg-dark text-white"},T={class:"modal-title",id:"exampleModalLabel"},E=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),V={class:"modal-body"},w={class:"row"},L={class:"col-sm-6"},U=["src"],N={class:"col-sm-6"},D={class:"badge bg-primary rounded-pill"},R={key:0,class:"h5"},q={key:1,class:"h6"},B={key:2,class:"h5"},O={class:"input-group"};function z(d,a,e,_,s,c){return l(),n("div",null,[t("div",C,[t("div",x,[t("div",A,[t("div",S,[t("h5",T,[t("span",null,i(e.product.title),1)]),E]),t("div",V,[t("div",w,[t("div",L,[t("img",{class:"img-fluid",src:e.product.imagesUrl,alt:""},null,8,U)]),t("div",N,[t("span",D,i(e.product.category),1),t("p",null,"商品描述："+i(e.product.description),1),t("p",null,"商品內容："+i(e.product.content),1),e.product.price?r("",!0):(l(),n("div",R,i(e.product.origin_price)+" 元 ",1)),e.product.price?(l(),n("del",q,"原價 "+i(e.product.origin_price)+" 元",1)):r("",!0),e.product.price?(l(),n("div",B," 現在只要 "+i(e.product.price)+" 元 ",1)):r("",!0),t("div",null,[t("div",O,[v(t("input",{type:"number",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=u=>s.qty=u),min:"1"},null,512),[[f,s.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=u=>d.$emit("add-to-cart",e.product.id,s.qty))}," 加入購物車 ")])])])])])])])],512)])}const F=m($,[["render",z]]);var j={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"tinaweek2",BASE_URL:"/tina-week6/week6/dist/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:h,VITE_APP_API_NAME:p}=j,G={components:{UserProductModal:F},data(){return{products:[],product:{},loadingStatus:{loadingItem:""}}},methods:{get(){this.$http.get(`${h}v2/api/${p}/products/all`).then(d=>{console.log(d),this.products=d.data.products}).catch(d=>{console.error("Error fetching products:",d)})},getProduct(d){this.$http.get(`${h}v2/api/${p}/product/${d}`).then(a=>{this.loadingStatus.loadingItem="",this.product=a.data.product,this.$refs.userProductModal.openModal()}).catch(a=>{alert(a.response.data.message)})},addToCart(d,a=1){const e=`${h}v2/api/${p}/cart`;this.loadingStatus.loadingItem=d;const _={product_id:d,qty:a};this.$refs.userProductModal.hideModal(),this.$http.post(e,{data:_}).then(s=>{alert(s.data.message),this.loadingStatus.loadingItem="",this.getCart()}).catch(s=>{alert(s.response.data.message)})}},mounted(){this.get()}},H=t("h1",null,"This is List Page.",-1),J={class:"table align-middle"},K=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),Q={style:{width:"200px"}},W={key:0,class:"h6"},X={key:1,class:"h5"},Y={class:"btn-group btn-group-sm"},Z=["onClick","disabled"],tt={key:0,class:"fas fa-spinner fa-pulse"},et=["onClick","disabled"],ot={key:0,class:"fas fa-spinner fa-pulse"};function st(d,a,e,_,s,c){const u=I("user-product-modal");return l(),n("div",null,[H,t("table",J,[K,t("tbody",null,[(l(!0),n(y,null,k(s.products,o=>(l(),n("tr",{key:o.id},[t("td",Q,[t("div",{style:M([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o.imageUrl})`}])},null,4)]),t("td",null,i(o.title),1),t("td",null,[o.price?(l(),n("del",W," 原價 "+i(o.origin_price)+" 元 ",1)):r("",!0),o.price?(l(),n("div",X,"現在只要 "+i(o.price)+" 元",1)):r("",!0)]),t("td",null,[t("div",Y,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:b=>c.getProduct(o.id),disabled:s.loadingStatus.loadingItem===o.id||!o.is_enabled},[s.loadingStatus.loadingItem===o.id?(l(),n("i",tt)):r("",!0),g(" 查看更多 ")],8,Z),t("button",{type:"button",class:"btn btn-outline-danger",onClick:b=>c.addToCart(o.id),disabled:s.loadingStatus.loadingItem===o.id||!o.is_enabled},[s.loadingStatus.loadingItem===o.id?(l(),n("i",ot)):r("",!0),g(" 加到購物車 ")],8,et)])])]))),128))])]),P(u,{ref:"userProductModal",product:s.product,onAddToCart:c.addToCart},null,8,["product","onAddToCart"])])}const at=m(G,[["render",st]]);export{at as default};
