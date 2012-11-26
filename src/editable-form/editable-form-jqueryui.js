/*
Editableform based on jQuery UI
*/
(function ($) {
    
    $.extend($.fn.editableform.Constructor.prototype, {
        initTemplate: function() {
            this.$form = $($.fn.editableform.template);

            //buttons
            this.$form.find('div.editable-buttons').append($.fn.editableform.buttons);                
            this.$form.find('button[type=submit]').button({
                icons: { primary: "ui-icon-check" },
                text: false
            }).removeAttr('title');
            this.$form.find('button[type=button]').button({
                icons: { primary: "ui-icon-cancel" },
                text: false
            }).removeAttr('title');

        }
    });
    
    //error classes
    $.fn.editableform.errorGroupClass = null;
    $.fn.editableform.errorBlockClass = 'ui-state-error';
    
}(window.jQuery));