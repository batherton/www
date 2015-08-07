function UpdateInformation(){
 var url = "http://www.netmet.com/testform.asp";
 url=url+"?testfield="+document.getElementById('testfield').value;
 var xhr = new XMLHttpRequest();
 xhr.open('GET', url);
 xhr.responseType = 'blob';
 xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
	var strresults = xhr.responseText;
	ShowTempSuccessMess("Updated");
    }
 };
xhr.send();
}