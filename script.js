window.onload=function delayExec() {
      setTimeout('func();', 1500);
    }
function func() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}
