var FreeControl = function(code){

    var path = 'http://hd1.freebox.fr/pub/remote_control?code={code}&key={key}&long={long}&repeat={repeat}';

    function sendCommand(key, long, repeat){
        
        var xhr     = new XMLHttpRequest(),
            address = path
                        .replace('{code}'   , code)
                        .replace('{key}'    , key)
                        .replace('{long}'   , long)
                        .replace('{repeat}' , repeat);

        xhr.open('GET', address, true);
        
        xhr.onreadystatechange = function() {
            if(xhr.readyState==4){
                console.log('done');
            }
        }
        xhr.send();
    }

    return {

        channel:function(channel){
            sendCommand(channel);
        }

    };
};




var command = new FreeControl(57823663);