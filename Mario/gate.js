// ===== GORDON'S GATE SCRIPT =====
(function() {
  var SECRET_CODE = "G0RD0N";
  var gate    = document.getElementById('gg-gate');
  var input   = document.getElementById('gg-input');
  var btn     = document.getElementById('gg-btn');
  var box     = document.getElementById('gg-box');
  var denied  = document.getElementById('gg-denied');
  var granted = document.getElementById('gg-granted');
  var active  = false, t;
  function attempt() {
    var val = input.value.toUpperCase().trim();
    if (val === SECRET_CODE) {
      denied.classList.remove('show');
      granted.classList.add('show');
      input.disabled = true;
      btn.disabled = true;
      setTimeout(function() {
        gate.classList.add('gg-unlock');
        setTimeout(function() { gate.style.display = 'none'; }, 900);
      }, 600);
    } else {
      if (active) return;
      active = true;
      denied.classList.add('show');
      box.classList.add('gg-shake');
      gate.classList.add('gg-glitch');
      input.value = '';
      clearTimeout(t);
      t = setTimeout(function() {
        denied.classList.remove('show');
        box.classList.remove('gg-shake');
        gate.classList.remove('gg-glitch');
        active = false;
      }, 1200);
    }
  }
  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', function(e) { if (e.key === 'Enter') attempt(); });
  window.addEventListener('load', function() { setTimeout(function() { input.focus(); }, 150); });
})();
