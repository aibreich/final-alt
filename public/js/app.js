function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (pageID == "") {
    model.placholder("home");
    console.log("Grabbing:" + pageID);
  } else {
    model.placholder(pageID);
    console.log("Grabbing:" + pageID);
  }
}

$(document).ready(function () {
  route();
  model.placholder("home");
});
