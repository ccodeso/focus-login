$(function(){

    var app = new Vue({
        el: '#app',        
        data: {
            currentComponent: 'signup'
        },
        template: /*html*/`
            <component :is="currentComponent"></component>
        `,
        methods:{
            changeComponent: function(compName){
                this.currentComponent = compName;
            }
        }
    });


    window.app = app;
})