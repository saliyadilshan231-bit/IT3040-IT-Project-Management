const { test, expect } = require('@playwright/test');

const scenarios = [
    { 
        id: 'Neg_Fun_0001', 
        input: 'Adha udhee kandy road ekee loku traffic ekak thibunaa mokadha Kadugannawa paeththee loku naayayaeemak sidhdha velaa thiyena nisaa. Police ekakayen kiyanne maarga kotas 430k pamaNa vinaashaya velaa thiyenava kiyalayi. Mehema vunaa nisaa office yana aya saha school yana lamayi bohoo velaa balan hitiyaa. Ehenam, mahajanathava venath maarga paavichchi karanna kiyala  News team eken mathak karanavaa.', 
        expected: 'අද උදේ kandy road එකේ ලොකු traffic එකක් තිබුනා මොකද Kadugannawa පැත්තේ ලොකු නායයෑමක් සිද්ද වෙලා තියෙන නිසා. Police එකකයෙන් කියන්නෙ මාර්ග කොටස් 430ක් පමණ විනාශය වෙලා තියෙනව කියලයි. මෙහෙම වුනා නිසා office යන අය සහ school යන ලමයි බොහෝ වෙලා බලන් හිටියා. එහෙනම්, මහජනතව වෙනත් මාර්ග පාවිච්චි කරන්න කියල News team එකෙන් මතක් කරනවා' 
    },
    { 
        id: 'Neg_Fun_0002', 
        input: 'karuNaakaralaa mata kiyanna puluvandha doctor pereraa va miit venna appointment ekak ganna puluvandha kiyalaa? Mama iiyee call kalaa haebaeyi kavuruth answer kalee naehae. Mata heta udhaesana 9.00 AM vana kota hospital ekata enna baee. E nisaa 2026-02-15 dhina pasvaru 2.30 PM vagee velaavak dhenna puLuvannam loku udhavvak. Thank you!', 
        expected: 'කරුණාකරලා මට කියන්න පුලුවන්ද doctor පෙරෙරා ව මීට් වෙන්න appointment එකක් ගන්න පුලුවන්ද කියලා? මම ඊයේ call කලා හැබැයි කවුරුත් answer කලේ නැහැ. මට හෙට උදැසන 9.00 AM වන කොට hospital එකට එන්න බෑ. එ නිසා 2026-02-15 දින පස්වරු 2.30 PM වගේ වෙලාවක් දෙන්න පුළුවන්නම් ලොකු උදව්වක්. Thank you!   ' 
    },
    { 
        id: 'Pos_Fun_0001', 
        input: 'mama gedhara yanavaa kiyalaa hithaagena innakota, vaessa vahina nisaa saha traefik thiyena nisaa mama dhaenma yannee naehae kiyalaa thiiraNaya kaLaa. namuth ammaa mata bath ooneyi kiyalaa kivvoth, mama poddak kal balaagena hari gedhara yanna uthsaaha karanavaa kiyalaa hithaagena innavaa. mokadha kaeema kana eka dhavasakata eka vathaavak hari vatina dheyak nisaa.', 
        expected: 'මම ගෙදර යනවා කියලා හිතාගෙන ඉන්නකොට, වැස්ස වහින නිසා සහ ට්‍රැෆික් තියෙන නිසා මම දැන්ම යන්නේ නැහැ කියලා තීරණය කළා. නමුත් අම්මා මට බත් ඕනෙයි කියලා කිව්වොත්, මම පොඩ්ඩක් කල් බලාගෙන හරි ගෙදර යන්න උත්සාහ කරනවා කියලා හිතාගෙන ඉන්නවා. මොකද කෑම කන එක දවසකට එක වතාවක් හරි වටින දෙයක් නිසා.' 
    },
    { 
        id: 'Neg_Fun_0003', 
        input: 'mata nidhimathayi saha mata baya hithenavaa kiyala hithena velavata, mama TV eka off karala, lights poddak adu karala, phone eka side ekata daala nidi karanna try karanavaa, namuth vaessa vahina handa saha bahira saththu ge sabda nisaa nidi eka hariyata ennee naee kiyala mata therenavaa.', 
        expected: 'මට නිදිමතයි වගේම බය හිතෙනවා කියලා දැනෙන වෙලාවට, මම ටීවී එක ඕෆ් කරලා, ලයිට්ස් පොඩ්ඩක් අඩු කරලා, ෆෝන් එකත් පැත්තකින් තියලා නිදාගන්න උත්සාහ කරනවා. ඒත් වැස්ස වහින සද්දයයි, පිටත ඉන්න සත්තුන්ගේ සද්දයි නිසා නින්ද හරියට එන්නේ නැහැ කියලා මට තේරෙනවා' 
    },
    { 
        id: 'Neg_Fun_0004', 
        input: 'Lamayi school yannee vaeen ekee kiyala kiwwath, dhaen traffic hari loku nisaa parents la lamayiwa bus eke yawanne naee, namuth safety eka gana hithala ehema karanavaa kiyala mata therum ganna puluvan, mokadha lamayinta honda de karanna eka demaapiyage wagakeemak nisaa.', 
        expected: 'ළමයි ඉස්කෝලේ යන්නේ වෑන් එකේ කියලා කිව්වත්, දැන් වාහන තදබදය Traffic ගොඩක් වැඩි නිසා දෙමාපියන් ළමයින්ව බස් එකේ යවන්න කැමති නැහැ. නමුත් දරුවන්ගේ ආරක්ෂාව ගැන හිතලා ඔවුන් ඒ තීරණය ගන්නා බව මට තේරුම් ගන්න පුළුවන්. මොකද දරුවන්ට හොඳම දේ කරලා දෙන එක දෙමාපියන්ගේ වගකීමක් නිසා.' 
    },
    { 
        id: 'Neg_Fun_0005', 
        input: 'eeyi ooka dhiyan kiyala informal vidihata kiyanna puluvan unath, loku ayata hari teachers lata ehema kathaa karanna honda naee kiyala mama hithanavaa, ehema nisaa mama samaavenna kiyala patan ganna vidihata kathaa karanavaa, mokadha gauravaya saha honda sambandhaya thiyaganna eka hari wadagath deyak nisaa', 
        expected: 'ඒයි ඕක දියන් කියලා යාළුවන් අතරේ අවිධිමත් (Informal) විදිහට කියන්න පුළුවන් වුණත්, වැඩිහිටියන්ට හෝ ගුරුවරුන්ට ඒ වගේ කතා කරන එක සුදුසු නැහැ කියලා මම හිතනවා. ඒ නිසා මම සමාවෙන්න කියලා පටන් අරගෙන ගෞරවනීය විදිහට කතා කරනවා. මොකද අන්‍යෝන්‍ය ගෞරවය සහ හොඳ සම්බන්ධතාවයක් පවත්වා ගැනීම ඉතාමත් වැදගත් දෙයක් නිසා.' 
    },
    { 
        id: 'Pos_Fun_0002', 
        input: 'mama gedhara yanavaa heta', 
        expected: 'මම ගෙදර යනවා හෙට' 
    },
    { 
        id: 'Pos_Fun_0003', 
        input: 'WhatsApp karanna puLuvandha', 
        expected: 'WhatsApp කරන්න පුළුවන්ද' 
    },
    { 
        id: 'Pos_Fun_0004', 
        input: 'heta api yamu gedhara', 
        expected: 'හෙට අපි යමු ගෙදර' 
    },
    { 
        id: 'Pos_Fun_0005', 
        input: 'api trip eka Kandy valata plan kalaa', 
        expected: 'අපි trip එක Kandy වලට plan කලා' 
    },
    { 
        id: 'Pos_Fun_0006', 
        input: 'vaessa vahina nisaa api dhaen yanne naee', 
        expected: 'වැස්ස වහින නිසා අපි දැන් යන්නෙ නෑ' 
    },
    { 
        id: 'Pos_Fun_0007', 
        input: 'traffic nisaa office enna late vunaa', 
        expected: 'traffic නිසා office එන්න late වුනා' 
    },
    { 
        id: 'Pos_Fun_0008', 
        input: 'documents tika attach karala email ekak evanna', 
        expected: 'documents ටික attach කරල email එකක් එවන්න' 
    },

    { 
        id: 'Pos_Fun_0009', 
        input: 'mama iiyee maamalaage gedhara giyaa amma samaga', 
        expected: 'මම ඊයේ මාමලාගෙ ගෙදර ගියා අම්ම සමග' 
    },
    { 
        id: 'Pos_Fun_0010', 
        input: 'mata eeka hariyata therum ganna kalayak giyaa', 
        expected: 'මට ඒක හරියට තෙරුම් ගන්න කලයක් ගියා' 
    },
    { 
        id: 'Pos_Fun_0011', 
        input: 'api okkoma ekathu vela group work eka kalaa', 
        expected: 'අපි ඔක්කොම එකතු වෙල group work එක කලා' 
    },
    { 
        id: 'Pos_Fun_0012', 
        input: 'teacher lesson eka hariyata paehaedhili karala kivuvaa', 
        expected: 'teacher lesson එක හරියට පැහැදිලි කරල කිවුවා' 
    },

     { 
        id: 'Pos_Fun_0013', 
        input: 'mama udhee coffee biilaa passe vaeda patan gaththaa', 
        expected: 'මම උදේ coffee බීලා පස්සෙ වැඩ පටන් ගත්තා' 
    },
    { 
        id: 'Neg_Fun_0006', 
        input: 'api lunch eken passe podi break ekak aran lecture hall ekata ikmanata giyaa', 
        expected: 'අපි lunch එකෙන් පස්සෙ පොඩි break එකක් අරන් lecture hall එකට ඉක්මනට ගියාඅපි lunch එකෙන් පස්සෙ පොඩි break එකක් අරන් lecture hall එකට ඉක්මනට ගියා' 
    },
    { 
        id: 'Neg_Fun_0007', 
        input: 'phone ekea battery adu nisaa mama power bank eka use kalaa.', 
        expected: 'phone එකේ battery අඩු නිසා මම power bank, එක use කලා.' 
    },

     { 
        id: 'Pos_Fun_0014', 
        input: 'mama gedhara enakota amma kaema ready karalaa balagena sitiyaa.', 
        expected: 'මම ගෙදර එනකොට අම්ම කැම ready කරලා බලගෙන සිටියා.' 
    },
    { 
        id: 'Pos_Fun_0015', 
        input: 'teacher lesson eka explain kala vidhihata class eke lamayi okkoma hariyata therum gaththaa.', 
        expected: 'teacher lesson එක explain කල විදිහට class eke ලමයි ඔක්කොම හරියට තෙරුම් ගත්තා.' 
    },
    { 
        id: 'Pos_Fun_0016', 
        input: 'apita  bus eka miss vuna nisaa thava bus ekak enakam balagena inna sidhdha unaa.', 
        expected: 'අපිට  bus එක miss වුන නිසා තව bus එකක් එනකම් බලගෙන ඉන්න සිද්ද උනා.' 
    },
    { 
        id: 'Pos_Fun_0017', 
        input: 'lamayi school gihin avata passe homework karala TV balanna giyaa', 
        expected: 'ලමයි school ගිහින් අවට පස්සෙ homework කරල TV බලන්න ගියා' 
    },
    { 
        id: 'Pos_Fun_0018', 
        input: 'mama udhea phone eka on karadhdhi notification godak thibuna nisaa poddak kaalaya gaththaa balanna', 
        expected: 'මම උදේ phone එක on කරද්දි notification ගොඩක් තිබුන නිසා පොඩ්ඩක් කාලය ගත්තා බලන්න' 
    },
    { 
        id: 'Pos_Fun_0019', 
        input: 'api meeting eka patan gaththahama internet connection eka poddak slow unaa', 
        expected: 'අපි meeting එක පටන් ගත්තහම internet connection එක පොඩ්ඩක් slow උනා' 
    },
    { 
        id: 'Neg_Fun_0008', 
        input: 'office eke vaeda godak thibunu  nisaa lunch eka godaak late unaa ', 
        expected: 'office eke වැඩ ගොඩක් තිබුනු  නිසා lunch එක ගොඩාක් late උනා ' 
    },
    { 
        id: 'Pos_Fun_0020', 
        input: 'raeta  ahasee thaaraka balagena innakota loku sathutaak hithata avaa', 
        expected: 'රැට  අහසේ තාරක බලගෙන ඉන්නකොට ලොකු සතුටාක් හිතට අවා' 
    },

     { 
        id: 'Pos_Fun_0021', 
        input: 'api temple ekata gihin tikak kalaya shaanthiyen gatha kalaa', 
        expected: 'අපි temple එකට ගිහින් ටිකක් කලය ශාන්තියෙන් ගත කලා' 
    },
    { 
        id: 'Pos_Fun_0022', 
        input: 'phone eke app tikak update vunaata passe speed eka aduyi kiyala hithuna', 
        expected: 'phone eke app ටිකක් update වුනාට පස්සෙ speed එක අඩුයි කියල හිතුන' 
    },
    { 
        id: 'Pos_Fun_0023', 
        input: 'udhea kaalayedhi palathuru kanna eka shariirayata hodha dheyak kiyala kiwwaa', 
        expected: 'උදේ කාලයෙදි පලතුරු කන්න එක ශරීරයට හොද දෙයක් කියල කිwwආ' 
    },
    { 
        id: 'Pos_Fun_0024', 
        input: 'mata aluth pothak kiyavanna hithuna nisaa bookstore ekata gihin baeluvaa', 
        expected: 'මට අලුත් පොතක් කියවන්න හිතුන නිසා bookstore එකට ගිහින් බැලුවා' 
    },
    { 
        id: 'Neg_Fun_0009', 
        input: 'oyaata podi velaavak thibuNoth mata call ekak dhenna, haebaeyi busy nam passee kool kaLath kamak naehae', 
        expected: 'ඔයාට පොඩි වෙලාවක් තිබුණොත් මට call එකක් දෙන්න, හැබැයි busy නම් පස්සේ කෝල් කළත් කමක්, නැහැ' 
    },
    { 
        id: 'Neg_Fun_0010', 
        input: 'karuNaakaralaa mee form eka hariyata fil karalaa, oyaagee visthara pariikShaa karalaa balalaa sabmit karanna. mokadha podi vaeradhiimak vuNath prashna aethi venna puLuvan', 
        expected: 'කරුණාකරලා මේ form එක හරියට ෆිල් කරලා ඔයාගේ විස්තර පරීක්ෂා කරලා බලලා සබ්මිට් කරන්න. මොකද පොඩි වැරදීමක් වුණත් ප්‍රශ්න ඇති වෙන්න පුළුවන්' 
    },

    
];

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(2000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(5000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});