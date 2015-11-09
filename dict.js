import _ from 'lodash';

const dict = {
'A':'6B',
'B':'68',
'C':'69',
'D':'6E',
'E':'6F',
'F':'6C',
'G':'6D',
'H':'62',
'I':'63',
'J':'60',
'K':'61',
'L':'66',
'M':'67',
'N':'64',
'O':'65',
'P':'7A',
'Q':'7B',
'R':'78',
'S':'79',
'T':'7E',
'U':'7F',
'V':'7C',
'W':'7D',
'X':'72',
'Y':'73',
'Z':'70',
'a':'4B',
'b':'48',
'c':'49',
'd':'4E',
'e':'4F',
'f':'4C',
'g':'4D',
'h':'42',
'i':'43',
'j':'40',
'k':'41',
'l':'46',
'm':'47',
'n':'44',
'o':'45',
'p':'5A',
'q':'5B',
'r':'58',
's':'59',
't':'5E',
'u':'5F',
'v':'5C',
'w':'5D',
'x':'52',
'y':'53',
'z':'50',
'1':'1B',
'2':'18',
'3':'19',
'4':'1E',
'5':'1F',
'6':'1C',
'7':'1D',
'8':'12',
'9':'13',
'0':'1A',
' ':'0A',
'í':'C7',
'!':'0B',
"\n": '2720',
"-": '07',
",": '06',
"\n": '--'
};

let msg = "6B0A6F46484F584F5E420A6D43465E42454443C1462720594346435C584F440A5A4F44444B0A47C75843C1462720450A474F444F460A4B4D464B580A4F464F444B5E420B2720644B0749424B4F584F4E0A5A4B464B44074EC75843C1462720450A4D4B464B4E42584F474743440A4F444445584B5E420627206C4B445F43464559060A464F0A464344444B5E4245442720444F4C0A4B4F4B58060A59C70A444F4C0A4B4F4B5845440B";
let split = [];
let splitDecrypt = [];
let s = '';

// Basic CleanUP - thats a nasty one ;-)
msg = msg.replace(new RegExp("2720",'gi'), "--");

for (let i=0; i<msg.length; i++) {
	let char = msg.charAt(i);

	if (i%2!=0) {
		split.push(s+''+char);
		s='';
	} else {
		s=char;
	}
}

_.each(split, (pos)=>{
	_.forIn(dict, (value, key)=>{
		if (value === pos) {
			splitDecrypt.push(key);
		}
	});
});

let decryptMsg = splitDecrypt.join('');
console.log(decryptMsg);
