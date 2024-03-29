export const dancin = [
    'No one is around to help',
    'Life is hard, life is stressful',
    'I need peace and tranquility',
    "I don't have to prove myself to anyone",
  ];
  
  let phraseIndex = 0;
  
  export const start = () => {
    const audio = document.createElement('audio');
    audio.src = '/dancin.mp3';
    audio.loop = true;
    document.querySelector('.container').appendChild(audio);
    audio.style = 'visibility: hidden;';
    audio.play();
  
    // toggle audio on click
    const toggleAudio = () => {
      audio.paused ? audio.play() : audio.pause();
    };
  
    document.querySelector('.begin').remove();
  
    document.querySelector('body').classList.add('colored-background');
  
    const danceImage = document.createElement('img');
    danceImage.src =
      'https://cloud-qttvokohb-hack-club-bot.vercel.app/0dino.gif';
    document.querySelector('.container').appendChild(danceImage);
  
    const phraseBox = document.createElement('p');
    phraseBox.classList.add('phrase-box');
    phraseBox.classList.add('flicker-text');
    document.querySelector('.container').appendChild(phraseBox);
    phraseBox.innerText = ' ';
  
    setTimeout(() => {
      phraseBox.innerText = dancin[phraseIndex];
      setInterval(updatePhrase, 6000);
    }, 2000);
  
    danceImage.onclick = toggleAudio;
  };
  
  export const updatePhrase = () => {
    phraseIndex = (phraseIndex + 1) % dancin.length;
    document.querySelector('.phrase-box').innerText = dancin[phraseIndex];
  };
  