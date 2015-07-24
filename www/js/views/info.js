window.styleView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('info/colorsAndstyles'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.creditsView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('info/credits'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});
