
Vue.component('confirmation',{
    data: function(){
            return { 
                userData : {}   
            }
        
    },
    template: /*html*/`
        <div class="confirmation">
            <h3>Confirm your information</h3>
            
            <p>
                Username:<br>
                <strong>{{userData.username}}</strong>
            </p>
            <p>
                E-Mail:<br>
                <strong>{{userData.email}}</strong>
            </p>
            <br>
            <button @click="confirm()" class="btn btn-yellow "> Confirm</button>
            <a @click="toSignup()" class="btn btn-link text-dark" role="button"> Back to signup form</a>            
        </div>
    `,
    methods:{
        confirm: function(){
            this.$root.changeComponent('finish');
        },
        toSignup: function(){
            this.$root.changeComponent('signup');
        }
    },
    created: function(){
        this.userData = localStorage.getItem('formdata');
        this.userData = JSON.parse(this.userData);
    }
});