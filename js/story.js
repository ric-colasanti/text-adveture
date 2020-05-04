class Facts{
    constructor(id,text,pic){
        this.id = id;
        this.text = text;
        this.pic = pic;
    }
}


class Section {
    constructor(id,html){
        this.id = id;
        this.html=html;
        this.links={};
        this.facts={}
    }
    addact(fact){
        this.facts[fact.id]=fact
    }
    addLink(link){
        this.links[link.id]=link
    }
    addText(txt){
        this.html+="<p>"+txt+"</p>"
    }
    addThought(txt){
        this.html+="<p><i>"+txt+"</i></p>"
    }
}

class Story{
    constructor(title){
        this.title = title;
        this.sections = {}
        this.start = null;
    }
    addSection(section){
        this.sections[section.id]=section
    }
}

var story = new Story("Choose your own lawsuit")
var id = "Last night on the sun-lounger"
var section = new Section(id);

section.addThought("I wish I could have my own room and stay in it, not keep moving all the time!");
section.addText("You’re thinking this as you stuff your clothes into a black bin bag - again! - and pack your rucksack with your few books and other things. You won’t miss this room. Its window lets in all the noise from the road, whether it’s open or closed, and the paint on the walls is a gloomy green like the water in a dead pond. There’s a lightbulb hanging from the ceiling, but it doesn’t work, and your bed is actually a sun-lounger, which was probably nicked from one of the better motels that has a pool. The one prized possession is the poster and you peel it carefully off the wall and roll it up safe. One last check of the cupboard, but there’s only the two metal hangers and the old abandoned cobwebs - even the spiders have moved out!")
html+="<p>There’s arguing outside the door, the same argument as last night about whether you should go and stay with Malcolm and Doris. They live miles away in a proper house with proper bedrooms and beds - you went there once and think maybe they were okay, but to stay there on your own for the whole summer, that’s something else.</p>"
html+="<p>The door opens and a jumble of voices fills your empty room.</p>"
html+="<p>‘Have you packed yet?’</p>"
html+="<p>‘I don’t want a child of mine living with strangers!’</p>"
html+="<p>‘Malcolm and Doris aren’t strangers - and what life is it here?’</p>"
html+="<p>Then they look at you as if they just realised you’re there and say:</p>"
html+="<p>‘You decide. Do you want to stay like this, moving from place to place, or do you want to be somewhere comfortable with meals from a kitchen instead of a vending machine?’</p>"
var section = new Section(id,html)
story.start = section;
var current = section;
let itm =  document.getElementById("story_card")
itm.innerHTML=current.html;