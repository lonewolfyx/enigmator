importScripts("../lib/cryptojs/rollups/sha1.js","../lib/cryptojs/rollups/hmac-sha1.js","../enigmator.js");

function arrayBufferToStr(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}

self.addEventListener('message', function(e){
	var data = e.data;
	var binary = "";
	var reader = new FileReaderSync();
	binary = arrayBufferToStr(reader.readAsArrayBuffer(data.input));
	postMessage(Enigmator.sha1(binary, data.hmac));
}, false)