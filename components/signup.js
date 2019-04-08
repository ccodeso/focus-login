
Vue.component('signup',{
    data: function(){
        return { 
            form: {},
        }
    },
    template: /*html*/`
        <div class="signup">
            <h3>Sign up for beta</h3>
            <form class="signup-form" @submit="submitForm">
                <div class="form-group">
                    <label>USERNAME</label>
                    <input type="text" class="form-control" required v-model="form.username">
                </div>
                <div class="form-group">
                    <label>PASSWORD</label>
                    <input type="password" class="form-control" required >
                </div>
                <div class="form-group">
                    <label>E-MAIL</label>
                    <input type="email" class="form-control" placeholder="your e-mail goes here..." required v-model="form.email">
                </div>                
                <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" required >
                    <label class="custom-control-label" for="customCheck">
                        I agree with statements included in <a href="#" class="text-dark text-underline">terms of service</a>
                    </label>
                </div>

                <div class="row">
                    <button class="btn btn-yellow" type="submit"> SIGN UP</button>
                    <a class="btn btn-link text-dark"> terms of service</a>
                </div>
            </form>
        </div>
    `,
    methods: {
        submitForm: function(){
            localStorage.setItem('formdata', JSON.stringify(this.form));
            this.$root.changeComponent('confirmation');
        }
    }

})