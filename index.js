function formValidation()
{
  var uname = document.registration.username;
  var passid = document.registration.passid;
  var cid = document.registration.cid;
  if(allLetter(uname))
  {
    if(passid_validation(passid,7,12))
    {
      if(cid_validation(cid,7,12)) {

      }
    }
  }
  return false;
}
function passid_validation(passid,mx,my)
{
  var passid_len = passid.value.length;
  if (passid_len == 0 ||passid_len >= my || passid_len < mx)
  {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    passid.focus();
    return false;
  }
  return true;
}
function cid_validation(cid,mx,my)
{
  var cid_len = cid.value.length;
  if (cid_len == 0 ||cid_len >= my || cid_len < mx)
  {
    alert("Confirm Password should not be empty / length be between "+mx+" to "+my);
    cid.focus();
    return false;
  }
  return true;
}
function allLetter(uname)
{
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters))
  {
    return true;
  }
  else
  {
    alert('Username must have alphabet characters only');
    uname.focus();
    return false;
  }
}
