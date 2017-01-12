function checkUsername() {
  var elMsg = document.getElementById('feedback');
  var elUsername = document.getElementById('username');
  if (elUsername.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}
<script> src="js/jquery.min.js"></script>
<script> src="js/bootstrap.min.js"></script>
<script>
  document.getElementById("username").value;
  alert(u);
</script>
<script type="text/javascript" src="js/event-attributes.js"></script>
