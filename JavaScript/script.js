const normalMenu = document.getElementById('navBar');
let variable = 0;
const Logo = document.getElementsByClassName('logo')[0]
const header = document.getElementsByTagName('header')[0];
document.getElementById('toggleMenu').onclick = function(){
    const Media = matchMedia('(min-width:660px)');
    Media.addEventListener('change',function(){
    if(Media.matches){
        document.getElementById('toggleMenu1').style.display="none";
    }
    else{
        document.getElementById('toggleMenu1').style.display="block";
    }
})
    if(variable == 0){
        normalMenu.className ='navigationBar active';
        let toggleMenu1 = document.createElement('a');
        toggleMenu1.id ='toggleMenu1';
        console.log(toggleMenu1)
        header.insertBefore(toggleMenu1,Logo)
        variable = 1;
        document.getElementsByClassName('navigationBar')[0].style.animationName ='toggleMenu';
        document.getElementById('unordered-list').style.animation ='none';
        const No1 = document.getElementsByClassName('nav-list');
        Array.from(No1).forEach(navlist1 => {
            navlist1.style.animation ='none';
        });
    }
    else{
        normalMenu.className ='navigationBar';
        variable = 0;
    }
    document.getElementById('toggleMenu1').onclick = function(){
        setTimeout(()=>{
            document.getElementById('toggleMenu1').remove()
        },150)
        document.getElementById('toggleMenu1').style.animation ='background2 0.2s';
        normalMenu.className ='navigationBar';
        const No1 = document.getElementsByClassName('nav-list');
        Array.from(No1).forEach(navlist1 => {
            navlist1.style.animation ='nav-list 0.5s';
        });
        document.getElementsByClassName('navigationBar')[0].style.animationName ='close';
        document.getElementsByClassName('navigationBar')[0].style.animationDuration ='0.5s';
        document.getElementById('unordered-list').style.animation ='list 0.5s';
        variable = 0;
    }
}