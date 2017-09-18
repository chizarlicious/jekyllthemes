---
layout: post
title: Prime Time
image: "/assets/images/prime-time-thumb.png"
description: ""
---


I'm a newcomer to Modern. A few months ago, I would have called <a class="card">Death's Shadow</a> a bulk rare. But then Matthias[^0] lent me a deck, took me to a PPTQ, and I came away with an invite to the regional qualifier in November. So now I'm putting (probably too little) time into learning the format, and (probably too much) time into tweaking my decklist.

[^0]: Matthias Hunt, of of [Amulet Bloom](http://www.starcitygames.com/article/28042_Amulet-Combo-Primer.html) notoriety. 

The deck is [Titan Breach](https://www.mtggoldfish.com/deck/757022#paper), a less-played cousin of [Titan Shift](https://www.mtggoldfish.com/archetype/modern-titan-shift#paper). A good draw plays out about like this:

- T1: <a class="card">Stomping Ground</a>, suspend <a class="card">Search for Tomorrow</a>.
- T2: <a class="card">Mountain</a>, <a class="card">Sakura-Tribe Elder</a>, get a Mountain.
- T3: Cast Search from exile, get a Mountain. Mountain for turn. Cast <a class="card">Through the Breach</a>, dropping <a class="card">Primeval Titan</a>, searching up 2 <a class="card">Valakut, the Molten Pinnacle</a>. Then attack with Titan, searching up 2 more Mountains, triggering Valakut 4 times.

That's 6 damage from Titan and another 12 from Valakut, which is typically enough to close out the game[^1]. If not, it clears the opposing board, and from now on each land comes with a pair of free <a class="card">Lightning Bolt</a>s attached. It's rare to lose a game after making Titan on turn 3.

[^1]: Fetch lands (like <a class="card">Wooded Foothills</a>) and shock lands (like <a class="card">Stomping Ground</a>) are prevalent in Modern. It's typical for a player to deal themselves at least 2 damage in the first few turns of the game.

Zach Voss recently piloted Titan Breach to a [3rd place finish](https://www.mtggoldfish.com/deck/757022#paper) at SCG Modern IQ Columbia. When played perfectly, his list produces a turn-3 Titan in 22% of games on the play; on the draw, that number is 38%. 

The list I played was a bit different. Matthias pulled a pair of <a class="card">Lightning Bolt</a>s, a <a class="card">Chandra, Torch of Defiance</a>, and the <a class="card">Woodfall Primus</a> to add a set of <a class="card">Oath of Nissa</a>s. As Matthias puts it, this isn't a control deck, and it's not a <a class="card">Through the Breach</a> deck -- it's a <a class="card">Primeval Titan</a> deck. With perfect play, Matthias' list (below) makes a turn-3 Titan in 30% of games on the play, and 50% on the draw.

<table class="cardlist">
    <thead>
        <td colspan="3" class="deckname">Matthias Hunt's Titan Breach</td>
    </thead>
    <tr>
        <td>
            4 <a class="card">Primeval Titan</a><br>
            4 <a class="card">Sakura-Tribe Elder</a><br>
            4 <a class="card">Simian Spirit Guide</a><br>
        </td>
        <td>
            1 <a class="card">Chandra, Torch of Defiance</a><br>
            4 <a class="card">Farseek</a><br>
            2 <a class="card">Lightning Bolt</a><br>
            4 <a class="card">Oath of Nissa</a><br>
            4 <a class="card">Search for Tomorrow</a><br>
            4 <a class="card">Summoner's Pact</a><br>
            4 <a class="card">Through the Breach</a><br>
        </td>
        <td>
            2 <a class="card">Cinder Glade</a><br>
            2 <a class="card">Forest</a><br>
            6 <a class="card">Mountain</a><br>
            4 <a class="card">Stomping Ground</a><br>
            4 <a class="card">Valakut, the Molten Pinnacle</a><br>
            3 <a class="card">Windswept Heath</a><br>
            4 <a class="card">Wooded Foothills</a><br>
        </td>
    </tr>
</table>

To be clear, "perfect play" isn't hyperbolic. I coded up the deck in Python (you can check it out [here](https://github.com/charles-uno/valakut)). The program doesn't know anything about strategy or sequencing -- it just knows the rules. Any time there are multiple legal plays, it clones itself that many times and tries them all[^3]. For any given game state, it's guaranteed to find the fastest way to get Titan on the table[^4].

[^3]: This is called a [brute force](https://en.wikipedia.org/wiki/Proof_by_exhaustion) solution. It's guaranteed to find the right answer, but it's dreadfully inefficient. To solve [Storm](https://www.mtggoldfish.com/archetype/modern-u-r-gifts-storm-32901#paper) by brute force, you'd probably need a supercomputer. Titan Breach is solvable on a laptop because it makes relatively few choices. It rarely plays more than half a dozen spells over the course of the game, and there's always a best way to tap lands for mana.


[^4]: Shooting for Titan on turn 3 isn't an all-or-nothing deal. Zach's build is 85% to have Titan on the table by turn 4. Matthias' build, and the following tweaks, are over 90%.

### How Good is Oath?

Admittedly, it's not quite fair to compare Matthias' build to Zach's on the basis of how often they drop a Titan on turn 3. The program cares about nothing but getting Titan on the table. As far as it's concerned <a class="card">Lightning Bolt</a> and <a class="card">Woodfall Primus</a> are blank cards. When we swap them out for <a class="card">Oath of Nissa</a>, which has the potential to help drop a turn-3 Titan, it's no surprise that our numbers get better. 

So let's make an apples-to-apples comparison. Assuming it's safe to drop the deck down to 3 interactive cards (the 2 remaining <A class="card">Lightning Bolt</a>s and the <a class="card">Chandra, Torch of Defiance</a>), is <a class="card">Oath of Nissa</a> the best we can do?








### Farseek vs Explore

<a class="card">Farseek</a> is the worst ramp spell in the deck. It can't be played on turn 1 like <a class="card">Search for Tomorrow</a>, and it doesn't soak up damage like <a class="card">Sakura-Tribe Elder</a>.

---

---

---

<a class="card">Sakura-Tribe Elder</a> is better than <a class="card">Farseek</a>. Soaking up damage against [Burn](https://www.mtggoldfish.com/archetype/modern-burn-34574#paper) or [Affinity](https://www.mtggoldfish.com/archetype/modern-affinity-8972#paper) is far more important than the ability to grab <a class="card">Cinder Glade</a>. But the deck needs more than 4 2-cost ramp spells, and there just aren't that many options.

The selling point of <a class="card">Farseek</a> is that it ups our Mountain count (for Valakut) while also finding a second green source. The same can't be said for <a class="card">Rampant Growth</a>, <a class="card">Fertile Ground</a>, or <a class="card">Edge of Autumn</a>. There are also


We might also consider <a class="card">Khalni Heart Expedition</a>, <a class="card">Ordeal of Nylea</a>, <a class="card">Viridian Emissary</a>.

<a class="card">Viridian Emissary</a> acts like a second <a class="card">Sakura-Tribe Elder</a>,






But what about <a class="card">Explore</a>?







.






Explore feels worse. Doesn't always ramp you. If you don't have a land in your hand, or don't draw a second land, it's just a 2-mana cantrip. If you're stuck on 2 lands, you'd always rather have Farseek. Upside is that the additional land may be untapped (allowing you to play Oath or Bolt that same turn) and it can help you find Titan.

Farseek: 30% on the play, 50% on the draw

Explore: 36% on the play, 55% on the draw


---

---

---



### Oath vs Cantrip vs Wraith


## Land Count


-


https://magic.wizards.com/en/articles/archive/event-coverage/rookie-year-matthias-hunt-2011-11-19






```
[ 1 ] initial

TURN 1
HAND:  Titan ; Elder ; Titan ; Fetch ; Farseek ; Bolt ; *Valakut*
[ 5 ] playing Valakut
[ 7 ] passing turn
HAND:  Titan ; Elder ; Titan ; Fetch ; Farseek ; Bolt
BOARD: (Valakut)

TURN 2
HAND:  Titan ; Elder ; Titan ; Fetch ; Farseek ; Bolt ; *Search*
BOARD: Valakut
[ 15 ] playing Fetch, cracking for Stomp
[ 22 ] casting Farseek for Glade
[ 36 ] passing turn
HAND:  Titan ; Elder ; Titan ; Bolt ; Search
BOARD: (Glade) ; (Stomp) ; (Valakut)

TURN 3
HAND:  Titan ; Elder ; Titan ; Bolt ; Search ; *Fetch*
BOARD: Glade ; Stomp ; Valakut
[ 86 ] casting Search for Forest
[ 157 ] playing Fetch, cracking for Forest
[ 168 ] casting Elder, popping for Mountain
[ 203 ] passing turn
HAND:  Titan ; Titan ; Bolt
BOARD: (Forest) ; (Forest) ; (Glade) ; (Mountain) ; (Stomp) ; (Valakut)

TURN 4
HAND:  Titan ; Titan ; Bolt ; *Guide*
BOARD: Forest ; Forest ; Glade ; Mountain ; Stomp ; Valakut
[ 206 ] casting Titan
```