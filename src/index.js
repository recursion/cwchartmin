var header = document.getElementsByTagName('header');
//header.style.visibility = 'hidden';
document.body.removeChild(header[0]);

var footer = document.getElementsByTagName('footer');
//footer.style.visibility = 'hidden';
document.body.removeChild(footer[0]);

var sidebar = document.getElementById('sidebar__cols');
//sidebar.style.visibility = 'hidden';
sidebar.parentElement.removeChild(sidebar);

var marketOptions = document.getElementById('market');
marketOptions.mousemove = function(){};

/*

var interval = document.getElementById('interval');
listeners = chrome.getEventListeners();
interval.addEventListener('click', listeners.mousemove);
listeners.mousemove = function(){};
*/

