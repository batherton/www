function ShowTempErrorMess(str){
	document.getElementById('eMess').className="eMessErr";
	document.getElementById('eMess').innerHTML = str;
    setTimeout(function () {
	document.getElementById('eMess').className="eMess";
	document.getElementById('eMess').innerHTML = "&nbsp;";
    }, 3000);
    return false;
}

function ShowTempSuccessMess(str){
	document.getElementById('eMess').className="eMessGood";
	document.getElementById('eMess').innerHTML = str;
    setTimeout(function () {
	document.getElementById('eMess').className="eMess";
	document.getElementById('eMess').innerHTML = "&nbsp;";
    }, 3000);
    return false;
}