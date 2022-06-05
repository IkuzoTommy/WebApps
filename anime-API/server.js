const express = require ('express');
const app = express();
const cors = require ('cors');
const { json } = require('body-parser');
const PORT = 8000;

app.use(cors());

const animeTitle = {

    'codegeass':{
        'protag': 'Lelouch Lamerouge',
        'powerClass': 'Psychic',
        'ability': 'Power of Absolute Obedience',
        'descrip': 'allows him to plant commands within a person\'s mind upon direct eye contact',
        'antag': 'Charles zi Brittania',
        'antagpowerClass': 'Psychic',
        'antagability': 'Code of Immortality',
        'antagdescrip': 'allows him to freely alter an individual\'s memories'
    },
    'naruto':{
        'protag': 'MAIN: Naruto Izumaki',
        'powerClass': 'Sheer Will Power, Friendship',
        'ability': 'Nine-Tailed Fox, Sage of 6 Paths, Sage Mode ',
        'descrip': 'At full control, he is able to use Kurama (The Nine Tails)\'s chakra to use ninjutsu, Sage of Six Paths is a unique mode in which Naruto is able to access god level strength, and chakra control',
        'antag': 'Sasuke Uchiha',
        'antagpowerClass': 'Angst',
        'antagability': 'Mangekyo Sharingan , Rinnegan',
        'antagdescrip': 'While Sasuke is not the "true" antagonist of the series, he is Naruto\'s child/teenage rival. The Sharingan is an evolving visual prowess that allows the user to copy any jutsu that they see, while allowing them to almost see things in slow motion. This ability is native to the Uchiha clan. The most powerful users are Sasuke, Itachi, and Madura. They have all unlocked the Mangekyo Sharigan which only manifests after witnessing the death of someone close to you.'
    },
    'hunterxhunter':{
        'protag': 'Gon Freecss',
        'powerClass': 'Nen Enhancer',
        'ability': 'Enhanced Senses, Nen',
        'descrip': 'Gon has incredble senses and physical strength despite being a child. As a Nen User, he is able to manipulate the energy around him and even his aura. Gon is a Nen "Enhancer", he is able to use his energy/aura to further increase his speed and strength as well a strengthen objects that he is holding.',
        'antag': 'Hisoka Morow',
        'antagpowerClass': 'Nen Transmuter',
        'antagability': 'Genius, Enhanced Strength, Nen',
        'antagdescrip': 'Hisoka, while incredibly creepy, is incredibly analytical and able to act quickly. As a Nen User, he is able to manipulate the energy around him and even his aura. Hisoka is a Nen "Transmuter", he is able to freely change his aura\'s texture, shape, and size. "Bungee Gum" allows his aura to stretch while also being incredibly sticky.'
    },
    'myheroacademia':{
        'protag': 'Izuku Midoriya',
        'powerClass': 'Quirk User',
        'ability': 'All for One',
        'descrip': 'All for One, is an ability that allows the user to pass quirks and memories from user to user. This results in an immense bundle of abilities that continues to grow with each user. Midoriya, or "Deku", uses this ability to mainly enhance his physical abilities to the point where his body can not keep up with the amount of force that he is able to exert.',
        'antag': 'Tomura Shigaraki',
        'antagpowerClass': 'Quirk User',
        'antagability': 'Decay',
        'antagdescrip': 'Shigaraki is able to turn into dust anything that he is physically touching.'
    },
    // 'one punch man':{
    //     'charName': 'Lelouch Lamerouge',
    //     'powerClass': 'Psychic',
    //     'ability': 'Power of Absolute Obedience',
    //     'descrip': 'allows him to plant commands within a person\'s mind upon direct eye contact'
    // }
    'OnePiece':{
        'protag': 'Monkey D. Luffy',
        'powerClass': 'Devil Fruit',
        'ability': 'Stretch?',
        'descrip': 'He cant Swim....tl:dw'
        // 'antag': 'Tomura Shigaraki',
        // 'antagpowerClass': 'Quirk User',
        // 'antagability': 'Decay',
        // 'antagdescrip': 'Shigaraki is able to turn into dust anything that he is physically touching.'
    },

}


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')

})
app.get('/api/:anime', (req,res)=>{
    const anime = req.params.anime.toLowerCase();
    if(animeTitle[anime]){
        res.json(animeTitle[anime])
    } else{
        res.json(animeTitle['OnePiece'])
    }
})
app.listen(process.env.PORT || PORT, () => {
    console.log('We live baby')

})

