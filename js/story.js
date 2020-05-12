class Fact{
    constructor(id,text,pic){
        this.id = id;
        this.text = text;
        this.pic = pic;
    }
    show(){
        itm = document.getElementById("info")
        itm.innerHTML+="<div class='card card_side'><div class='card__wrapper_side'><p>"+this.text+"</p></div></div>";
    }
}


class Section {
    constructor(id){
        this.id = id;
        this.html="";
        this.links={};
        this.facts={}
    }
    addFact(fact){
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
    show(){
        let itm =  document.getElementById("story_card")
        itm.innerHTML=this.html;
        itm = document.getElementById("info")
        itm.innerHTML="";
        for (var key in this.facts) {
            console.log(this.facts)
            this.facts[key].show();
        }
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
    show(){
        this.current.show()
    }

}

var story = new Story("Choose your own lawsuit")
var id = "Last night on the sun-lounger"
var section = new Section(id);

section.addThought("I wish I could have my own room and stay in it, not keep moving all the time!");
section.addText("You’re thinking this as you stuff your clothes into a black bin bag - again! - and pack your rucksack with your few books and other things. You won’t miss this room. Its window lets in all the noise from the road, whether it’s open or closed, and the paint on the walls is a gloomy green like the water in a dead pond. There’s a lightbulb hanging from the ceiling, but it doesn’t work, and your bed is actually a sun-lounger, which was probably nicked from one of the better motels that has a pool. The one prized possession is the poster and you peel it carefully off the wall and roll it up safe. One last check of the cupboard, but there’s only the two metal hangers and the old abandoned cobwebs - even the spiders have moved out!")
section.addText("There’s arguing outside the door, the same argument as last night about whether you should go and stay with Malcolm and Doris. They live miles away in a proper house with proper bedrooms and beds - you went there once and think maybe they were okay, but to stay there on your own for the whole summer, that’s something else")
section.addText("The door opens and a jumble of voices fills your empty room");
section.addText("‘Have you packed yet?’")
section.addText("‘I don’t want a child of mine living with strangers!’")
section.addText("‘Malcolm and Doris aren’t strangers - and what life is it here?’")
section.addText("Then they look at you as if they just realised you’re there and say:");
section.addText("‘You decide. Do you want to stay like this, moving from place to place, or do you want to be somewhere comfortable with meals from a kitchen instead of a vending machine?’")
//var section = new Section(id,html)
var fact = new Fact(1,"Test",null)
section.addFact(fact);
story.addSection(section);
story.start = section;
var current = section;



// SECTION Meeting Doris and Malcolm
var id = "Meeting Doris and Malcolm"
var section = new Section(id);


//var section = new Section(id,html)
story.addSection(section);
var id = "Meeting Doris and Malcolm"
var section = new Section(id);
section.addText("Doris grips your arm and whispers ‘Very thin,’ to Malcolm, but she doesn’t whisper it quietly enough because you hear her and it reminds you of the witch in a picture book you had when you were very young. The witch had trapped two children and was planning to eat them once they were fat enough. The children managed to escape by tricking her, poking a stick through the bars of their cage which she thought was one of their skinny arms. ")

section.addText("Your bedroom for the next six weeks is a clean, shiny space, that’s been painted white on the walls, ceiling, windowsill and door so that you feel like you’re inside a fridge. There’s a white plastic thing on your white bedside table and it smells like a public toilet although it’s called Spring Breeze.")
section.addText("You had hoped that Malcolm would be the sort of person to make things and teach you how to make things too, but he spends all day writing by hand in a spiral-bound notebook. Doris says it’s his magnum opus, but you don’t know what that means.")
section.addText("This afternoon, Malcolm has been called away to a ‘lawnmower emergency’ and has left his notebook open on the table. You look at the page and read")
section.addThought("Dear sir")
section.addThought("This letter is in response to your feature on local history, asking for readers to write to the Gazette with memories of street parties for the coronation or jubilee celebrations.")
section.addThought("This story took place during the Silver Jubilee of 1977 in Maple Close, when residents decided to light a bonfire to coincide with the beacons being lit across the country. It’s a story that’s stayed with me all these years, but which I want to tell now in honour of a very special person whose fine intelligence understood events that left everyone else baffled at the time. I shall tell the story, not with the benefit of hindsight, but how it happened, over 40 years ago, including my own inglorious part in events.")
var init = function(){
    story.current = story.start;
    story.show();
}
