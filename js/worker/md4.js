importScripts("../lib/md4/md4.js","../enigmator.js");

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
	postMessage(Enigmator.md4(binary, data.hmac));
}, false)