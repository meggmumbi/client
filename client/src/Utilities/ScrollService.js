import { TOTAL_SCREENS } from "./commonUtis";
import {Subject} from 'rxjs'
import { onErrorResumeNext } from "rxjs/operators";

export default class ScrollService {
    static scrollHandler = new ScrollService();
    
    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = ()=>{
        let ContactMeScreen = document.getElementById("ContactMe");

        if(!ContactMeScreen) return;
        ContactMeScreen.scrollIntoView({behavior:"smooth"})
    };
    scrollToHome = ()=>{
        let homeScreen = document.getElementById("Home");

        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior:"smooth"})
    };
    btnClick=()=> {
        window.open("https://www.google.com","_blank");
    };

    isElementInView = (elem, type)=>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop <window.innerHeight && elementBottom >= 0;
        let completeVisible = elementTop >= 0 && elementBottom <=window.innerHeight;

        switch(type){
            case "partial":
                return partiallyVisible;

            case "complete":
                return completeVisible;
            
            default:
                return false
        }
    };

    checkCurrentScreenUnderViewport = (event)=>{
        if(!event || Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDom = document.getElementById(screen.screen_name);
            if(!screenFromDom)
            continue;

            let fullyVisisble = this.isElementInView(screenFromDom,"complete")
            let partiallyVisible = this.isElementInView(screenFromDom,"partial")

            if(fullyVisisble || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if(fullyVisisble){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }

        }
    };
}