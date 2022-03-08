console.log("Do you believe in magic?");
console.log("------------------------");

//This code is taking all the spells and separating them into a good spell book and an evil spell book.
//Then the code displays the spells from the good book, puts a break line in, then displays the evil book.

List<Spell> allSpells = getAllSpells();
SpellBook goodBook = MakeGoodSpellBook(allSpells);
SpellBook evilBook = MakeEvilSpellBook(allSpells);

const getAllSpells = () => {
    let goodBook = makeGoodSpellBook(allSpells)
    let evilBook = makeEvilSpellBook(allSpells)
}

// DisplaySpellBook(goodBook);
// console.log();
// DisplaySpellBook(evilBook);

//This code is a function called displaySpellBook. This function console logs the title (good book or evil book) and then makes a foreach loop to show each spell in the book
//then console logs the spell name.

// void DisplaySpellBook(SpellBook book)
// {
//     Console.WriteLine(book.Title);
//     foreach (Spell aSpell in book.Spells)
//     {
//         Console.WriteLine($"  {aSpell.Name}");
//     }
// }

//This code creates an evil spell book.

// SpellBook MakeEvilSpellBook(List<Spell> allSpells)
// {
//     SpellBook evilBook = new SpellBook();
//     evilBook.Title = "Evil Book";
//     evilBook.Spells = allSpells.Where(spell => spell.IsEvil).ToList();

//     return evilBook;
// }

//This code creates a good spell book.

// SpellBook MakeGoodSpellBook(List<Spell> allSpells)
// {
//     SpellBook goodBook = new SpellBook();
//     goodBook.Title = "Good Book";
//     goodBook.Spells = allSpells.Where(spell => !spell.IsEvil).ToList();

//     return goodBook;
// }



//This is an array called allSpells of spell objects.
allSpells =  [

    {
        Name = "Turn enemy into a newt",
        IsEvil = true,
        EnergyReqired = 5.1
    },
    {
        Name = "Conjure some gold for a local charity",
        IsEvil = false,
        EnergyReqired = 2.99
    },
    {
        Name = "Give a deaf person the ability to heal",
        IsEvil = false,
        EnergyReqired = 12.2
    },
    {
        Name = "Make yourself emperor of the universe",
        IsEvil = true,
        EnergyReqired = 100.0
    },
    {
        Name = "Convince your relatives your political views are correct",
        IsEvil = false,
        EnergyReqired = 2921.5
    }
]

return allSpells;


//This code is used to define and create a new spellbook object. 
//Use constructor method.

// public class SpellBook
// {
//     public string Title { get; set; }
//     public List<Spell> Spells { get; set; }
// }

//This code is used to define and create a new spellbook object. 
//Use constructor method.

//public class Spell
// {
//     public string Name { get; set; }
//     public bool IsEvil { get; set; }
//     public double EnergyReqired { get; set; }
// }