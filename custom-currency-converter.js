var order_total_LC=0;
var order_subtotal_LC=0;
var order_total_Conv=0;
var order_subtotal_Conv=0;
var order_shipping_fee_Conv=0;
try {
  // run once
  if (!window.currency_converter_flag) {

  // set converted currency code ==> ##### Update for each profile #####
    b.site_converted_currency_code="EUR";

    // order_total = sum of all product_net (includes taxes in all countries except US/CA)
    for (i=0;i<b.product_net.length;i++){
      order_total_LC+=parseFloat(b.product_net[i]);
    }
    // order_subtotal = order_total excluding VAT
    order_subtotal_LC=order_total_LC/parseFloat(b.site_country_tax_rate);
    // Convert to site_converted_currency_code
    order_subtotal_Conv=parseFloat(tealiumiq_currency.convert([order_subtotal_LC],b.site_currency_code,b.site_converted_currency_code)[0]);
    order_total_Conv=parseFloat(tealiumiq_currency.convert([order_total_LC],b.site_currency_code,b.site_converted_currency_code)[0]);
    b.order_shipping_fee = b.order_shipping_fee || 0.00;
    order_shipping_fee_Conv=parseFloat(tealiumiq_currency.convert([b.order_shipping_fee],b.site_currency_code,b.site_converted_currency_code)[0]);
    // Format numbers
    b.order_total_LC=order_total_LC.toFixed(2).toString();
    b.order_subtotal_LC=order_subtotal_LC.toFixed(2).toString();
    b.order_subtotal_converted=order_subtotal_Conv.toFixed(2).toString();
    b.order_total_converted=order_total_Conv.toFixed(2).toString();
    b.order_shipping_fee_converted=order_shipping_fee_Conv.toFixed(2).toString();
  }
  // Set flag to only run once
  window.currency_converter_flag = 1;
}
catch(e) {
  // For debugging
  utag.DB(e);
}