export let rotateWindow = {
  flipper: document.querySelector('.flipper'),
  rotateToLogin(){
    this.flipper.style.transform = 'rotateY(180deg)';
  },
  rotateToWelcome(){
    this.flipper.style.transform = 'rotateY(0deg)';
  },
};