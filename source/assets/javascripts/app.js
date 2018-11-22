//= require jquery
//= require_tree

$(document).ready(function() {
  $(".slider").rangeslider({
    polyfill: false,
    onInit : function() {
      this.output = $('#priceValue').html( currency(this.$element.val(), { formatWithSymbol: true, precision: 0 }).format() );
      this.rebate = $('#savings').html( currency((this.$element.val() * 0.015), { formatWithSymbol: true, precision: 0 }).format() );
    },
    onSlide : function( position, value ) {
      this.output.html( currency(this.$element.val(), { formatWithSymbol: true, precision: 0 }).format() );
      this.rebate.html( currency((this.$element.val() * 0.015), { formatWithSymbol: true, precision: 0 }).format() );

    }
  })
});
