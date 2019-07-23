
 const data=[

    {
        q:'How r u?',
        a:'I am sexy and i know it'

    },
    {
        q:'am i good',
        a:'no..i hate u'
        
    },
    {
        q:'dont know',
        a:'Sorry I Dont Know This please Let Me Know'
    }
]
let b=true;

const btn= document.querySelector('.talk');

const SpeechRecognition =webkitSpeechRecognition;

const container= document.querySelector('.hide');

const h1 =document.querySelector('.cool');


const recognition = new SpeechRecognition();

recognition.onresult= function(event){

    console.log(data[0])
    h1.textContent='Ok..I am Done.'
    const  index = event.resultIndex;
    const transcript = event.results[index][0].transcript;
    document.querySelector('.content').textContent=transcript;
    let answer= getAnswer(transcript);
    if(answer)
    {
        readOutLoud(answer);

    }else{
        readOutLoud(data[data.length-1].a);
    }
    
    console.log(event);
}

function readOutLoud(m){
    const speech= new SpeechSynthesisUtterance();
    
    speech.text=m;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);

}

function toggle(){

    if(b){
        container.style.display='block';
        b=false;

    }else{
        container.style.display='none';
        b=true;


    }

}

function doToggle(){
    setInterval(toggle,5000);
}

function getAnswer(que){

    data.forEach((data)=>{

        let matchedWord= noOfMatchedWord(data,que);

        if(matchedWord>=3)
         {
             return data.a;
         }
    })

    return null;
}

function noOfMatchedWord(queU,dataAI){

    let cnt=0;
    let quearr= queU.toString().split(" ");
    let dataAIarr= dataAI.split(" ");
    for(let i=0;i<quearr.length;i++)
    {
        for(let k=0;k<dataAIarr.length;k++)
        {
            if(quearr[i]==dataAIarr[k]){
                cnt++;
            }
        }

    }

    return cnt;
}
btn.addEventListener('click',(e)=>{

    recognition.start();
     doToggle();

    

    
   // recog.onresult(e);
})
//console.log(SpeechRecog);