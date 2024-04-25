



function nextQuestion() {
    var Organisatie = document.querySelector('input[name="Organisatie"]:checked').value;
    switch (Organisatie) {
        case "MKB":
            document.getElementById("question").innerHTML = "De IT-dienstverlening binnen mijn organisatie:";
            document.getElementById("answer").innerHTML = '<input type="radio" name="activity" value="uitgegroeid"> Is uit zijn jasje gegroeid<br>\
                                                           <input type="radio" name="activity" value="hoger_niveau"> Kan naar een hoger niveau<br>\
                                                           <input type="radio" name="activity" value="wet_en_regelgeving"> Heeft te maken met (nieuwe) wet- en regelgeving<br>\
                                                           <input type="radio" name="activity" value="goed"> Is goed zoals het is<br>';
            break;
        case "Groot":
            document.getElementById("question").innerHTML = "De IT-dienstverlening binnen mijn organisatie:";
            document.getElementById("answer").innerHTML = '<input type="radio" name="activity" value="uitgegroeid"> Is uit zijn jasje gegroeid<br>\
                                                           <input type="radio" name="activity" value="hoger_niveau"> Kan naar een hoger niveau<br>\
                                                           <input type="radio" name="activity" value="wet_en_regelgeving"> Heeft te maken met (nieuwe) wet- en regelgeving<br>\
                                                           <input type="radio" name="activity" value="goed"> Is goed zoals het is<br>';
            break;
        case "XL":
            document.getElementById("question").innerHTML = "De IT-dienstverlening binnen mijn organisatie:";
            document.getElementById("answer").innerHTML = '<input type="radio" name="activity" value="uitgegroeid"> Is uit zijn jasje gegroeid<br>\
                                                           <input type="radio" name="activity" value="hoger_niveau"> Kan naar een hoger niveau<br>\
                                                           <input type="radio" name="activity" value="wet_en_regelgeving"> Heeft te maken met (nieuwe) wet- en regelgeving<br>\
                                                           <input type="radio" name="activity" value="goed"> Is goed zoals het is<br>';
            break;
    }
    document.getElementById("answer").style.display = "block";
    document.getElementById("button").setAttribute("onclick", "nextQuestion2()");
}

function nextQuestion2() {
    var activity = document.querySelector('input[name="activity"]:checked').value;
    switch (activity) {
        case "uitgegroeid":
            document.getElementById("question").innerHTML = "Dit komt door";
            document.getElementById("answer").innerHTML = '<input type="radio" name="reason" value="organisatie_groei"> Organisatie groei<br>\
                                                           <input type="radio" name="reason" value="fusie"> Fusie<br>';
            break;
        case "hoger_niveau":
            document.getElementById("question").innerHTML = "Wij willen graag";
            document.getElementById("answer").innerHTML = '<input type="radio" name="desire" value="wendbaarheid_en_innovatie"> Vergroten van wendbaarheid en beter inspelen op innovatie en technische verandering<br>\
                                                           <input type="radio" name="desire" value="herstructureren"> (Her)structureren van bedrijfsprocessen<br>\
                                                           <input type="radio" name="desire" value="klantvraag"> Met dienstverlening beter inspelen op klantvraag<br>';
            break;
        case "wet_en_regelgeving":
            document.getElementById("question").innerHTML = "En willen dit";
            document.getElementById("answer").innerHTML = '<input type="radio" name="intention" value="automatiseren"> Inrichten <br>\
                                                           <input type="radio" name="intention" value="verbeteren"> Automatiseren<br>';
            break;
        case "goed":
            document.getElementById("question").innerHTML = "Want (Vink aan wat van toepassing)";
            document.getElementById("answer").innerHTML = '<input type="radio" name="need" value="automatiseren"> Alle koppelingen met serviceproviders zijn geautomatiseerd<br>\
                                                           <input type="radio" name="need" value="klanttevredenheid"> Er wordt snel en adequaat ingespeeld op de klant<br>\
                                                           <input type="radio" name="need" value="samenwerking"> Optimale samenwerking met serviceproviders en vendoren<br>';
            break;
    }
    document.getElementById("answer").style.display = "block";
    document.getElementById("button").setAttribute("onclick", "nextQuestion3()");
}

function nextQuestion3() {
    var lastQuestion = document.querySelector('input[name="reason"]:checked, input[name="desire"]:checked, input[name="intention"]:checked, input[name="need"]:checked');
    if (lastQuestion) {
        lastQuestion = lastQuestion.value;
        switch (lastQuestion) {
            case "organisatie_groei":
                document.getElementById("question").innerHTML = "Organisatie groei";
                document.getElementById("answer").innerHTML = '<input type="radio" name="growth" value="use_cases"> Door gebruik te maken van use cases en het leggen van verbindingen tussen verschillende afdelingen op basis van werkelijke gebeurtenissen, kan RTOM de samenwerking en communicatie tussen teams verbeteren. Het helpt bij het begrijpen van onderlinge afhankelijkheden en bevordert een holistische benadering van operaties.<br>';
                break;
            case "fusie":
                document.getElementById("question").innerHTML = "Fusie";
                document.getElementById("answer").innerHTML = '<input type="radio" name="fusion" value="transformatie"> RTOM is ontworpen voor de volledige transformatie van het IT-landschap. Het biedt een gestructureerde aanpak om organisatorische transformatie te faciliteren, inclusief veranderingen in het Target Operating Model en de aanbesteding van kavels.<br>';
                break;
            case "wendbaarheid_en_innovatie":
                document.getElementById("question").innerHTML = "Vergroten van wendbaarheid en beter inspelen op innovatie en technische verandering";
                document.getElementById("answer").innerHTML = '<input type="radio" name="agility" value="use_cases"> Door te werken met use cases en een agnostische benadering te hanteren, kan RTOM organisaties helpen om wendbaarder en aanpasbaarder te zijn. Het stelt hen in staat om snel te reageren op veranderingen in de bedrijfsomgeving en nieuwe technologische ontwikkelingen.<br>';
                break;
            case "herstructureren":
                document.getElementById("question").innerHTML = "(Her)structureren van bedrijfsprocessen";
                document.getElementById("answer").innerHTML = '<input type="radio" name="restructuring" value="best_practices"> RTOM streeft naar de integratie van diverse best practices en benaderingen binnen de organisatie. Het maakt het mogelijk om waardevolle elementen van verschillende frameworks te combineren en te harmoniseren, waardoor een samenhangend geheel ontstaat.<br>';
                break;
            case "klantvraag":
                document.getElementById("question").innerHTML = "Met dienstverlening beter inspelen op klantvraag";
                document.getElementById("answer").innerHTML = '<input type="radio" name="service_improvement" value="use_cases"> Door te werken met use cases en een agnostische benadering te hanteren, kan RTOM organisaties helpen om wendbaarder en aanpasbaarder te zijn. Het stelt hen in staat om snel te reageren op veranderingen in de bedrijfsomgeving en nieuwe technologische ontwikkelingen.<br>';
                break;
            case "automatiseren":
                document.getElementById("question").innerHTML = "Inrichten";
                document.getElementById("answer").innerHTML = '<input type="radio" name="set_up" value="lifecycle"> Door de focus op de volledige levenscyclus van IT-processen en het gebruik van best practices en frameworks als Cobit en ISO 27001 kan RTOM organisaties helpen bij het optimaliseren van hun IT-processen. Dit kan leiden tot verbeterde efficiëntie, aantoonbaar in controle en een hogere kwaliteit van IT-diensten.<br>';
                break;
            case "klanttevredenheid":
                document.getElementById("question").innerHTML = "Automatiseren";
                document.getElementById("answer").innerHTML = '<input type="radio" name="automation" value="standards"> Om optimale samenwerking en communicatie tussen partijen te faciliteren, maakt het RTOM gebruik van standaarden met betrekking tot informatie-uitwisseling en proces-integraties, die inzichtelijk zijn gemaakt en vertaald zijn naar API’s.<br>';
                break;
            case "samenwerking":
                document.getElementById("question").innerHTML = "Samenwerking";
                document.getElementById("answer").innerHTML = '<input type="radio" name="collaboration" value="partnerships"> Door partnerschappen aan te gaan en effectieve communicatiekanalen te creëren, streeft RTOM naar optimale samenwerking tussen serviceproviders en vendoren, wat resulteert in een naadloze en efficiënte dienstverlening aan klanten.<br>';
                break;
        }
        document.getElementById("answer").style.display = "block";
        document.getElementById("button").setAttribute("onclick", "submitForm()");
    }
}

function submitForm() {
    alert("Bedankt voor het invullen van de vragenlijst!");
}