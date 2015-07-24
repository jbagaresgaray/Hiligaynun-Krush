window.blogView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/blog'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.blogpostView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/blogpost'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.chatView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/chat'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.dashboardView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/dashboard'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.galleryView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/gallery'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.mailIndoxView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/mail_box'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.productServicesView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/product_services'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.profileView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/profile'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.teamView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('pages/team'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});
