import{_ as o,e as a,c,o as n}from"./index-aYW1Fugx.js";var r={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_API_NAME:"tinaweek2",BASE_URL:"/tina-week6/week6/dist/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:s,VITE_APP_API_NAME:i}=r,p={data(){return{products:[],temp:{}}},methods:{checkAdmin(){const t=`${s}v2/api/user/check`;this.$http.post(t).then(()=>{this.getData()}).catch(e=>{alert(e.response.data.message),a.push("/login")})},getData(){const t=`${s}v2/api/${i}/admin/products`;this.$http.get(t).then(e=>{this.products=e.data.products}).catch(e=>{alert(e.response.data.message)})},openProduct(t){this.temp=t}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)tinaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkAdmin()}};function d(t,e,h,u,_,m){return n(),c("h1",null,"產品檢視")}const P=o(p,[["render",d]]);export{P as default};
