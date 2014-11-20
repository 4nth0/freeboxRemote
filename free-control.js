var FreeControl = function(code){

    var path = 'http://hd1.freebox.fr/pub/remote_control?code={code}&key={key}&long={long}&repeat={repeat}';

    function sendCommand(key, long, repeat, callback){
        
        var xhr     = new XMLHttpRequest(),
            address = path
                        .replace('{code}'   , code)
                        .replace('{key}'    , key)
                        .replace('{long}'   , long)
                        .replace('{repeat}' , repeat);

        xhr.open('GET', address, true);
        
        xhr.onreadystatechange = function() {
            if(xhr.readyState==4){
                if( 'function' === typeof callback) callback();
            }
        }
        xhr.send();
    }

    function sendDigit(digit){
        var digit   = digit.toString(),
            length  = digit.length,
            current = 0;
        function _rec(key){
            sendCommand(key, false, false, function(){
                current++;
                if(current <= length){
                    rec(digit[current]);
                }
            });
        }

        _rec(digit[0]);

    }


    return {

        channel:function(channel){
            sendDigit(channel);
        }

    };
};




var command = new FreeControl(57823663);