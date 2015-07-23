window.HomeView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('main'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});
