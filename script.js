function showSection(id, clickedButton) {

  document.querySelectorAll('.tab-btn').forEach(btn =>
    btn.classList.remove('active-tab')
  );
  clickedButton.classList.add('active-tab');

 
  ['info', 'projects', 'extras'].forEach(secId => {
    const sec = document.getElementById(secId);
    if (sec) sec.classList.add('hidden');
  });


  const active = document.getElementById(id);
  if (active) active.classList.remove('hidden');
}


function myFunction() {
  var popup = document.getElementById("myLangup");
  popup.classList.toggle("show");
}

