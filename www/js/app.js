var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home"
    },

    initialize: function() {
        // Handle back button throughout the application
        $('.back').on('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home: function() {
        console.log('#home');
        this.changePage(new HomeView());
    },

    /*text: function() {
        console.log('#text');
        this.changePage(new Page1View());
    },

    page2: function() {
        console.log('#page2');
        this.changePage(new Page2View());
    },*/

    changePage: function(page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {
            changeHash: false,
            transition: transition
        });
    }

});

$(document).ready(function() {
    console.log('document ready');
    tpl.loadTemplates(['main'],
        function() {
            app = new AppRouter();
            Backbone.history.start();
        });
});
