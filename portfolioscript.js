function titleExpand () {
  document.getElementById("hdrtitle").innerHTML = "Landon McConnell";
}

function titleRetract () {
    document.getElementById("hdrtitle").innerHTML = "Landon M."
}

function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    
    // hide tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // remove active tabs
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // show current tab and add active
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function setActive() {
    document.getElementById("tabButton1").className += " active";
    document.getElementById("tabContent1").style.display = "block";
}