(function() {
    // your page initialization code here
    // the DOM will be available here
    document.addEventListener("DOMContentLoaded", () => {
        function createNewElement(elementName, attrList, contentList) {
            if (attrList == null) {
                return document.createTextNode(elementName);
            }
            const element = document.createElement(elementName);
            attrList.forEach((attr) => {
                // element.setAttribute(attr[0], attr[1]);
                element.setAttribute(...attr);
            });
            contentList.forEach((content) => {
                if (content.length === 1) {
                    element.appendChild(document.createTextNode(content[0]));
                } else {
                    element.appendChild(createNewElement(...content));
                }
            });
            return element;
        }

        document.body.appendChild(createNewElement("header", [], [
            ["h1", [], [
                ["CSS1K"]
            ]],
            ["nav", [], [
                ["h2", [], [
                    ["Select a design"]
                ]],
                ["ul", [], [
                    ["li", [], [
                        ["a", [["href", "./"]], [["Default"]]],
                        ["a", [["href", "http://twitter.com/jacobrask"]], [["Jacob Rask"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#stripes"]], [["Stripes"]]],
                        ["a", [["href", "http://vasilis.nl"]], [["Vasilis van Gemert"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#notepad"]], [["Notepad"]]],
                        ["a", [["href", "http://twitter.com/eworm_"]], [["Wout Mager"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#gardenof3den"]], [["Garden of CSS-3Den"]]],
                        ["a", [["href", "http://designfestival.com"]], [["Alex Walker"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#bbubles"]], [["Bbubles"]]],
                        ["a", [["href", "http://cssing.org.ua"]], [["akella & Genn"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#swiss"]], [["Swiss"]]],
                        ["a", [["href", "http://chrsl.net"]], [["Chris Lee"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#turnaround"]], [["Turn around"]]],
                        ["a", [["href", "http://www.basvandorst.nl"]], [["Bas van Dorst"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#whirl"]], [["Whirl"]]],
                        ["a", [["href", "https://twitter.com/iamvdo"]], [["Vincent De Oliveira"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#bundler_inspired"]], [["BundlerInspired"]]],
                        ["a", [["href", "https://github.com/PhilG"]], [["PhilG"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#oldie"]], [["Oldie"]]],
                        ["a", [["href", "http://pointlessone.org"]], [["Alexander Mankuta"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#typhon"]], [["Typhon"]]],
                        ["a", [["href", "http://eswat.ca"]], [["ESWAT"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#cube"]], [["Cube"]]],
                        ["a", [["href", "http://be.net/iurevych"]], [["Sergii Iurevych"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#northern-lights"]], [["Northern Lights"]]],
                        ["a", [["href", "http://potapoff.org"]], [["Igor «SkAZi» Potapov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#skewed"]], [["Skewed"]]],
                        ["a", [["href", "http://twitter.com/sntxrrr"]], [["Paul Steffens"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#moonlight"]], [["Moonlight"]]],
                        ["a", [["href", "http://twitter.com/derSchepp"]], [["Christian \"Schepp\" Schaefer"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#typewriter"]], [["Typewriter"]]],
                        ["a", [["href", "http://thisbythem.com"]], [["Lance Alton Troxel"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#oldschool"]], [["Old School"]]],
                        ["a", [["href", "http://romanliutikov.com"]], [["Roman Liutikov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#butchery"]], [["Butchery"]]],
                        ["a", [["href", "http://vibby.fr"]], [["Vibby"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#m6tt"]], [["m6tt"]]],
                        ["a", [["href", "http://m6tt.com"]], [["Matt Woodfield"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#1024-bytes"]], [["1024-bytes"]]],
                        ["a", [["href", "http://github.com/faisalman"]], [["Faisalman"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#molokai"]], [["Molokai"]]],
                        ["a", [["href", "http://designtomarkup.com"]], [["Kien Nguyen"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#android"]], [["Android"]]],
                        ["a", [["href", "http://agat.in"]], [["Aleksej Romanovskij"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#bookshelf"]], [["Bookshelf"]]],
                        ["a", [["href", "https://github.com/SelenIT"]], [["SelenIT"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#geocities"]], [["GeoCities"]]],
                        ["a", [["href", "https://github.com/asavartsov/"]], [["Alexey Savartsov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#imbatman"]], [["I'm Batman"]]],
                        ["a", [["href", "#"]], [["Paul Reid"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#ebhoren"]], [["Ebhoren"]]],
                        ["a", [["href", "http://www.dominic-mercier.com"]], [["Dominic Mercier"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#facetime"]], [["Facetime"]]],
                        ["a", [["href", "http://twitter.com/bnijenhuis"]], [["Bernard Nijenhuis"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#cloudy"]], [["Cloudy"]]],
                        ["a", [["href", "http://twitter.com/putnik"]], [["Sergey Leschina"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#greymatter"]], [["Grey Matter"]]],
                        ["a", [["href", "http://pepelsbey.net"]], [["Vadim Makeev"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#blue_square"]], [["Blue square"]]],
                        ["a", [["href", "http://twitter.com/hsablonniere"]], [["Hubert Sablonnière"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#helvetipink"]], [["HelvetiPink"]]],
                        ["a", [["href", "http://billkeller.name"]], [["Bill Keller"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#summersun"]], [["Summer Sun"]]],
                        ["a", [["href", "http://twitter.com/tanya_peasgood"]], [["Tanya Peasgood"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#lessismore"]], [["Less is More"]]],
                        ["a", [["href", "http://twitter.com/rob_balfre"]], [["Rob Balfre"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#inset"]], [["Inset"]]],
                        ["a", [["href", "http://www.hachemuda.com"]], [["Guillermo Latorre"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#legible"]], [["Legible"]]],
                        ["a", [["href", "http://lumens.se"]], [["Reimund Trost"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#greenlemon"]], [["Green Lemon"]]],
                        ["a", [["href", "http://twitter.com/d_radunz"]], [["Dirk Radunz"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#wired"]], [["Wired"]]],
                        ["a", [["href", "http://www.digitalwaxworks.com"]], [["Brett DeWoody"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#narcissist"]], [["Narcissist"]]],
                        ["a", [["href", "http://jackiebalzer.com"]], [["Jackie Balzer"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#juizstar"]], [["Juiz Star"]]],
                        ["a", [["href", "http://www.creativejuiz.fr"]], [["Geoffrey Crofte"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#wolfr"]], [["Wolfr"]]],
                        ["a", [["href", "http://twitter.com/wolfr_"]], [["Johan Ronsse"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#fortyeight1k"]], [["fortyeight1k"]]],
                        ["a", [["href", "http://michael.haschke.biz"]], [["Michael Haschke"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#columns"]], [["Columns"]]],
                        ["a", [["href", "http://rmcreative.ru"]], [["Alexander Makarov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#trainspotting"]], [["Trainspotting"]]],
                        ["a", [["href", "http://www.hboaventura.com"]], [["Henrique Boaventura"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#ribbon"]], [["ribbon"]]],
                        ["a", [["href", "http://oodavid.com"]], [["David King"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#solarized"]], [["Solarized"]]],
                        ["a", [["href", "http://twitter.com/heirenton"]], [["heirenton"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#openwater"]], [["Open Water"]]],
                        ["a", [["href", "https://github.com/gilmoreorless"]], [["Gilmore Davidson"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#html5colors"]], [["HTML5 Colors"]]],
                        ["a", [["href", "http://www.theweblife.com"]], [["Michael Garrett Jones"]]],
                    ]],
                    ["li", [], [
                        ["a", [["href", "#heart_css"]], [["heart css"]]],
                        ["a", [["href", "https://github.com/kjchoy"]], [["Choy Kum Jin"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#sourcy"]], [["Sourcy"]]],
                        ["a", [["href", "http://kizu.ru/en/"]], [["Roman Komarov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#terminal"]], [["Terminal"]]],
                        ["a", [["href", "http://twitter.com/PanyaKor"]], [["Mikhail Korepanov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#goodnight_moon"]], [["Goodnight Moon"]]],
                        ["a", [["href", "http://livingcode.org"]], [["Dethe Elza"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#fancy"]], [["Fancy"]]],
                        ["a", [["href", "http://www.trustweb.it"]], [["Michele Cipriani"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#textlevels"]], [["Text Levelss"]]],
                        ["a", [["href", "http://www.patrickmann.com"]], [["Patrick Mann"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#yelo"]], [["Yelo"]]],
                        ["a", [["href", "http://bartdebruin.nl"]], [["Bart de Bruin"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#spartan"]], [["Spartan"]]],
                        ["a", [["href", "http://trentm.com"]], [["Trent Mick"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#paper"]], [["paper"]]],
                        ["a", [["href", "http://daniel-rauber.de"]], [["Daniel Rauber"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#lucuma"]], [["Lúcuma"]]],
                        ["a", [["href", "http://twitter.com/germanmartinez"]], [["Germán Martínez"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#freshsoda"]], [["Fresh Soda"]]],
                        ["a", [["href", "http://jungundwillich.de"]], [["Jan Ortgies"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#ev"]], [["Ev"]]],
                        ["a", [["href", "http://evangeneer.net"]], [["Mathieu Rochette"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#b4ya11y"]], [["B4y & A11y"]]],
                        ["a", [["href", "http://twitter.com/etBen"]], [["Benoit Klein"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#adaptype"]], [["Adaptype"]]],
                        ["a", [["href", "http://vasilis.nl"]], [["Vasilis van Gemert"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#bleubleu"]], [["BleuBleu"]]],
                        ["a", [["href", "http://www.leightonrodney.com"]], [["Leighton Rodney"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#simpl"]], [["Simpl"]]],
                        ["a", [["href", "http://www.neofyt.com"]], [["Neofyt"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#mitchiru"]], [["Mitchiru"]]],
                        ["a", [["href", "http://banquo.de"]], [["Michael Fritz"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#casoy"]], [["Casoy"]]],
                        ["a", [["href", "http://twitter.com/robertboloc"]], [["Robert Boloc"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#thesimpleswede"]], [["The Simple Swede"]]],
                        ["a", [["href", "http://www.tobiasphoto.com"]], [["Tobias Akeblom"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#photobox"]], [["PhotoBox"]]],
                        ["a", [["href", "http://stinkyinkshop.co.uk"]], [["Stinkyink"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#desktop"]], [["Desktop"]]],
                        ["a", [["href", "http://webmolot.com"]], [["Webmolot"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#monochrome"]], [["Monochrome"]]],
                        ["a", [["href", "http://tamerayd.in"]], [["Tamer Aydin"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#expandable"]], [["Expandable"]]],
                        ["a", [["href", "http://twitter.com/curlybrace"]], [["Dennis Madvedovsky"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#bluebrush"]], [["BlueBrush"]]],
                        ["a", [["href", "https://twitter.com/jennyhao"]], [["Jenny Hao"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#noticeboard"]], [["Notice Board"]]],
                        ["a", [["href", "http://www.about.me/niharsawant"]], [["Nihar Sawant"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#triangulate"]], [["Triangulate"]]],
                        ["a", [["href", "http://jumplinkdesign.co.vu"]], [["Sebastien Paquet"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#aapl"]], [["AAPL"]]],
                        ["a", [["href", "http://twitter.com/joffreyjaffeux"]], [["Joffrey Jaffeux"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#yollaw"]], [["Yollaw"]]],
                        ["a", [["href", "http://franzose.in"]], [["Yan Ivanov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#stretchy"]], [["Stretchy"]]],
                        ["a", [["href", "http://twitter.com/mistadikay"]], [["Denis Koltsov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#smile"]], [["smile"]]],
                        ["a", [["href", "http://twitter.com/realmuecke"]], [["Michael Scharnagl"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#toolbar"]], [["Toolbar"]]],
                        ["a", [["href", "http://chervonny.ru/en/"]], [["Maxim Chervonny"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#roundrect"]], [["Round Rect"]]],
                        ["a", [["href", "http://www.bitstorm.org"]], [["Edwin Martin"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#therhythm"]], [["The Rhythm"]]],
                        ["a", [["href", "http://kizu.ru/en/"]], [["Roman Komarov"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#simplebox"]], [["SimpleBox"]]],
                        ["a", [["href", "http://raelmax.com"]], [["Rael Max"]]]
                    ]],
                    ["li", [], [
                        ["a", [["href", "#crawl"]], [["Crawl"]]],
                        ["a", [["href", "http://atelierbramdehaan.nl"]], [["Bram de Haan"]]]
                    ]]                    
                ]]
            ]]            
        ]));

        document.body.appendChild(createNewElement("article", [["role", "main"]], [
            ["header", [], [
                ["h2", [], [
                    ["The Beauty in "],
                    ["abbr", [], [["CSS"]]],
                    [" Design"]
                ]],
                ["p", [], [
                    ["A demonstration of what can be accomplished with only 1 "],
                    ["abbr", [["title", "Kibibyte"]], [["K"]]],
                    [" ("],
                    ["dfn", [["title", "1024 bytes"]], [["Kibibyte"]]],
                    [") of "],
                    ["abbr", [], [["CSS"]]],
                    [". Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys."]
                ]]
            ]],
            ["section", [], [
                ["h2", [], [
                    ["So What is This About?"]
                ]],
                ["p", [], [
                    ["Back in 2003 (that's "],
                    ["span", [["id", "zengarden-age"]], [["a lot of"]]],
                    [" years ago!) "],
                    ["a", [["href", "http://mezzoblue.com"]], [["Dave Shea"]]],
                    [" launched the "],
                    ["a", [["href", "http://www.csszengarden.com"]], [
                        ["cite", [], [
                            ["abbr", [], [["CSS"]]],
                            [" Zen Garden"]
                        ]]
                    ]],
                    [". It showcased what was possible with "],
                    ["abbr", [], [["CSS"]]],
                    ["-based designs, leading to an explosion in the use of CSS on the web. Then, "],
                    ["a", [["href", "http://qfox.nl"]], [["Peter van der Zee"]]],
                    [" created "],
                    ["a", [["href", "http://js1k.com"]], [["JS1k"]]],
                    [" in 2010, a competition to build cool applications with no more than 1 "],
                    ["abbr", [], [["K"]]],
                    [" of JavaScript."]
                ]],
                ["p", [], [
                    ["A lot has happened since the Zen Garden days, and today you can do almost anything with only "],
                    ["abbr", [], [["CSS"]]],
                    [". As "],
                    ["abbr", [], [["CSS"]]],
                    ["use is growing, so is the average "],
                    ["abbr", [], [["CSS"]]],
                    [" file size. Popular sites have in average "],
                    ["a", [["href", "http://httparchive.org/interesting.php#bytesperpage"]], [
                        ["75 "],
                        ["abbr", [], [["K"]]],
                        [" of "],
                        ["abbr", [], [["CSS"]]]
                    ]],
                    [", but some use up to a megabyte of style sheets!"]
                ]],
                ["p", [], [
                    ["Do we need that much? "],
                    ["b", [], [["CSS1K"]]],
                    [" invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity."]
                ]]
            ]],
            ["section", [], [
                ["h2", [], [["Participation"]]],
                ["ol", [], [
                    ["li", [], [
                        ["Submissions must consist of only "],
                        ["abbr", [], [["CSS"]]]
                    ]],
                    ["li", [], [
                        ["Submissions may be up to 1 "],
                        ["abbr", [["title", "Kibibyte"]], [["K"]]],
                        [" (1024 bytes) minified"]
                    ]],
                    ["li", [], [
                        ["Vendor prefixes are "],
                        ["em", [], [["not"]]],
                        [" counted to the total number of bytes – submit your code unprefixed and "],
                        ["a", [["href", "https://leaverou.github.io/prefixfree/"]], [["PrefixFree"]]],
                        [" will add necesssary prefixes"]
                    ]],
                    ["li", [], [
                        ["Any external resources and images, including "],
                        ["code", [], [["data"]]],
                        [" "],
                        ["abbr", [], [["URI"]]],
                        ["'s, "],
                        ["code", [], [["@font-face"]]],
                        [" and "],
                        ["code", [], [["@import"]]],
                        ["'s, are forbidden"]
                    ]],
                    ["li", [], [
                        ["The page "],
                        ["a", [["href", "http://dowebsitesneedtolookexactlythesameineverybrowser.com"]], [["does not"]]],
                        [" have to look the same in every browser, but graceful degradation is encouraged"]
                    ]],
                    ["li", [], [
                        ["The submitted code is licensed under the "],
                        ["a", [["href", "http://www.opensource.org/licenses/mit-license.php"]], [["MIT License"]]]
                    ]]
                ]],
                ["p", [], [
                    ["To participate, fork "],
                    ["a", [["href", "https://github.com/selfthinker/CSS1K/"]], [["CSS1K"]]],
                    [" at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage)."]
                ]]
            ]]
        ]));

        document.body.appendChild(createNewElement("footer", [], [
            ["p", [], [
                ["Licensed under the "],
                ["a", [["href", "http://www.opensource.org/licenses/mit-license.php"], ["rel", "license"]], [["MIT license"]]],
                ["."],
                ["Hosted and managed at "],
                ["a", [["href", "https://github.com/selfthinker/CSS1K"]], [["GitHub"]]],
                ["."]
            ]]
        ]));

    });
})();
