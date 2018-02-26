var my_lookups = [
    "va.audiences.imsinc_main_154",
    "va.audiences.imsinc_main_155", 
    "va.audiences.imsinc_main_156",
    "va.audiences.imsinc_main_157",
    "va.audiences.imsinc_main_158"    
 
];

var my_audiences = [];
for (var keyname in utag.data) {
    if ( (my_lookups.toString()+",").indexOf(keyname + "," ) > -1) {
        my_audiences.push( utag.data[keyname] );
    }
}
utag.data.joined_audiences = my_audiences;