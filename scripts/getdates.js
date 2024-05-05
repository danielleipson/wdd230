//Last Modified Document Date
const d = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = d;

//Copyright get Full Year
const c = new Date();
document.getElementById("fullYear").innerHTML = c.getFullYear();