import React from 'react';
import { useEffect } from 'react';

 // const sayText = (data) => {
 //        window.sayText(txt, voice, lang, engine);
 //      };

const SitePal = ({sayAudio, embed,  sayText}) => {

    useEffect(() => {
        function loadEmbedFile() {
            var sc = document.createElement('script');
            sc.type = "text/javascript";
            sc.src = "//vhss-d.oddcast.com/vhost_embed_functions_v4.php?acc=5626448&js=1";
            sc.onload = function () {
                console.log('first');
                // callEmebedFunction();
            }
            console.log('third');
            document.head.appendChild(sc);
        }
        function callEmebedFunction() {
            var interval = setInterval(() => {
                if (typeof AC_VHost_Embed == 'function') {
                    clearInterval(interval);
                    var script = document.createElement('script');
                    script.type = "text/javascript";
                    script.innerHTML = `AC_VHost_Embed(${embed})`;
                    document.getElementById('sp_embed').appendChild(script);
                }
            }, 10)
        }
        const scripts = document.head.getElementsByTagName('script');
        if (scripts.length > 0) {
               console.log('out',scripts);
            var alreadyAdded = false;
            for (var i = 0; i < scripts.length; i++) {

                if (scripts[i].src.includes("vhost_embed_functions_v4.php")) {
                    alreadyAdded = true;

                console.log('second');

                        callEmebedFunction();
                }
                if (scripts.length === i + 1 && !alreadyAdded) {
                    loadEmbedFile();
                }
            }
        }
        else {
            loadEmbedFile();
        }

        

    }, []);

     


   


    useEffect(()=>{
        if (sayAudio != null) {
            console.log('button clicked',typeof sayAudio)
            console.log(sayAudio);

            sayAudioFn(sayAudio[0])
        }
    }, [sayAudio])
    
     function sayAudioFn(data) {
         window.sayAudio(data);
      }


    useEffect(()=>{
        console.log(sayText);
        if (sayText != null) {

           
        console.log('button clicked',typeof sayText)
        console.log(sayText);
            sayTextFn(sayText[0],sayText[1],sayText[2],sayText[3])
        }
    }, [sayText])


     function sayTextFn(txt = '',voice = '', lang = '', engine = '') {

        console.log(txt,voice,lang,engine);
        window.sayText(txt,voice,lang,engine);
    }



    return (
        <div id="sp_embed" className="Comment"></div>
    );
}
export default SitePal;