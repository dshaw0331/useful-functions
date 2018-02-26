    var xyz = {
        counter: 0, 
        scrollVals: [],
        winheight : '',
        trackLength : '',
        docheight : ''
    };


        xyz.getDocHeight = function() {
            var D = document;
            return Math.max(
                D.body.scrollHeight, D.documentElement.scrollHeight,
                D.body.offsetHeight, D.documentElement.offsetHeight,
                D.body.clientHeight, D.documentElement.clientHeight
            )
        }
         
        xyz.getmeasurements = function(){
            xyz.winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
            xyz.docheight = xyz.getDocHeight();
            xyz.trackLength = xyz.docheight - xyz.winheight
        }
         

        xyz.amountScrolled = function(){
            xyz.getmeasurements();
            var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
            var pctScrolled = Math.floor(scrollTop/xyz.trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
            if(pctScrolled >= 50){
                xyz.scrollVals.push(pctScrolled);
            }
            return xyz.scrollVals;
        }     


        xyz.race = function(){
            var interval = setInterval(function() {
                xyz.counter++;
                if(xyz.amountScrolled() && xyz.amountScrolled().length){
                    if(xyz.amountScrolled().filter(function(n){return n >= 50}).length){
                        if(window.location.href == 'http://localhost:3000/cart'){
                            utag.view(utag.data, null, [114])
                        }
                        // console.log('SCROLL BEAT CLOCK');
                        clearInterval(interval)
                    }
                } else {
                    console.log(xyz.counter)
                }
                if (xyz.counter == 5) {
                    if(window.location.href === 'http://localhost:3000/cart'){
                        utag.view(utag.data, null, [114])
                    }
                    // console.log('CLOCK BEAT SCROLL')
                    clearInterval(interval);
                }

            }, 1000)
        }

if(window.location.href === 'http://localhost:3000/cart'){
    xyz.race();
}
