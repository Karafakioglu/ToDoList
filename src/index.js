import helloWorld from "./main";
import './styles/main.css'
import logo from './assets/logo.svg'

const logoImg = document.getElementById('logo');
logoImg.src = logo;

helloWorld();
