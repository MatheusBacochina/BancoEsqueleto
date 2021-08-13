var bg = document.getElementsByClassName('alert-bg')[0];


const removeBG = () => {
    style(bg);
}

const style = (bg) => {
    bg.style.display = 'none';
}