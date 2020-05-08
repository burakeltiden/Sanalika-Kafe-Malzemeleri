function compute() {
	var appQ = form1.txtAppleQ.value;
	appQ = parseInt(appQ);
	if ((isNaN(appQ)) || (appQ == "") || (appQ < 0)) {
		appQ = 0;
		form1.txtAppleQ.value = 0;
	}
	var appT = appQ * 190;
	form1.txtAppleT.value = appT.toFixed(2);
	var peaQ = form1.txtPearsQ.value;
	peaQ = parseInt(peaQ);
	if ((isNaN(peaQ)) || (peaQ == "") || (peaQ < 0)) {
		peaQ = 0;
		form1.txtPearsQ.value = 0;
	}
	var peaT = peaQ * 155;
	form1.txtPearsT.value = peaT.toFixed(2);
	var graQ = form1.txtGrapesQ.value;
	graQ = parseInt(graQ);
	if ((isNaN(graQ)) || (graQ == "") || (graQ < 0)) {
		graQ = 0;
		form1.txtGrapesQ.value = 0;
	}
	var graT = graQ * 90;
	form1.txtGrapesT.value = graT.toFixed(2);
	var menemQ = form1.txtMenemenQ.value;
	menemQ = parseInt(menemQ);
	if ((isNaN(menemQ)) || (menemQ == "") || (menemQ < 0)) {
		menemQ = 0;
		form1.txtMenemenQ.value = 0;
	}
	var menT = menemQ * 180;
	form1.txtMenemenT.value = menT.toFixed(2);
	var samTatliQ = form1.txtSamTatliQ.value;
	samTatliQ = parseInt(samTatliQ);
	if ((isNaN(samTatliQ)) || (samTatliQ == "") || (samTatliQ < 0)) {
		samTatliQ = 0;
		form1.txtSamTatliQ.value = 0;
	}
	var samT = samTatliQ * 145;
	form1.txtSamTatliT.value = samT.toFixed(2);
	var karisikPizzaQ = form1.txtKarisikPizzaQ.value;
	karisikPizzaQ = parseInt(karisikPizzaQ);
	if ((isNaN(karisikPizzaQ)) || (karisikPizzaQ == "") || (karisikPizzaQ < 0)) {
		karisikPizzaQ = 0;
		form1.txtKarisikPizzaQ.value = 0;
	}
	var karpT = karisikPizzaQ * 150;
	form1.txtKarisikPizzaT.value = karpT.toFixed(2);

	var italyanPizzaQ = form1.txtitalyanPizzaQ.value;
	italyanPizzaQ = parseInt(italyanPizzaQ);
	if ((isNaN(italyanPizzaQ)) || (italyanPizzaQ == "") || (italyanPizzaQ < 0)) {
		italyanPizzaQ = 0;
		form1.txtitalyanPizzaQ.value = 0;
	}
	var italT = italyanPizzaQ * 160;
	form1.txtitalyanPizzaT.value = italT.toFixed(2);
	var humusQ = form1.txtHumusQ.value;
	humusQ = parseInt(humusQ);
	if ((isNaN(humusQ)) || (humusQ == "") || (humusQ < 0)) {
		humusQ = 0;
		form1.txtHumusQ.value = 0;
	}
	var humT = humusQ * 110;
	form1.txtHumusT.value = humT.toFixed(2);

	var totalQ = appQ + peaQ + graQ + menemQ + samTatliQ + karisikPizzaQ + italyanPizzaQ + humusQ;
	form1.txtQuantity.value = totalQ;
	var subT = appT + peaT + graT + menT + samT + karpT + italT + humT;
	form1.txtSubT.value = subT.toFixed(2);

	var tax = subT * 0.45;
	form1.txtTax.value = tax.toFixed(2);

	var total = subT + tax;
	form1.txtTotal.value = total.toFixed(2);



	var malzemeler = [["zeytinYag", 0],
	["yogurt", 0], ["kiyma", 0], ["bulgur", 0], ["un", 0], ["nohut", 0], ["hamur", 0], ["maydanoz", 0],
	["sogan", 0], ["burgerKofte", 0], ["burgerEkmek", 0], ["domates", 0], ["yumurta", 0], ["biber", 0],
	["fistik", 0], ["irmik", 0], ["seker", 0], ["peynir", 0], ["sucuk", 0], ["su", 0], ["tahin", 0], ["limon", 0]];

	var secilenMalzemeler = [[]];

	if (appQ >= 1) {
		malzemeler[0][1] += appQ;
		malzemeler[1][1] += appQ;
		malzemeler[2][1] += appQ;
		malzemeler[3][1] += appQ;
		malzemeler[4][1] += appQ;
	}

	if (peaQ >= 1) {
		malzemeler[5][1] += peaQ;
		malzemeler[6][1] += peaQ;
		malzemeler[0][1] += peaQ;
		malzemeler[7][1] += peaQ;
		malzemeler[8][1] += peaQ * 2;
	}

	if (graQ >= 1) {
		malzemeler[9][1] += graQ;
		malzemeler[10][1] += graQ;
		malzemeler[11][1] += graQ;
	}

	if (menemQ >= 1) {
		malzemeler[12][1] += menemQ;
		malzemeler[0][1] += menemQ;
		malzemeler[13][1] += menemQ;
		malzemeler[11][1] += menemQ;
	}

	if (samTatliQ >= 1) {
		malzemeler[1][1] += samTatliQ;
		malzemeler[14][1] += samTatliQ;
		malzemeler[15][1] += samTatliQ;
		malzemeler[16][1] += samTatliQ * 2;
	}

	if (karisikPizzaQ >= 1) {
		malzemeler[17][1] += karisikPizzaQ;
		malzemeler[6][1] += karisikPizzaQ;
		malzemeler[18][1] += karisikPizzaQ;
	}

	if (italyanPizzaQ >= 1) {
		malzemeler[17][1] += italyanPizzaQ;
		malzemeler[6][1] += italyanPizzaQ;
		malzemeler[13][1] += italyanPizzaQ;
	}

	if (humusQ >= 1) {
		malzemeler[5][1] += humusQ;
		malzemeler[19][1] += humusQ;
		malzemeler[20][1] += humusQ;
		malzemeler[21][1] += humusQ;
	}

	for (var i = 0; i < malzemeler.length; i++) {
		if (malzemeler[i][1] > 0) {
			var secilen = [malzemeler[i][0], malzemeler[i][1]];
			secilenMalzemeler.push(secilen);
		}
	}
	var HTML = "<table border=0 width=100%><tr>";
	for (var i = 1; i < secilenMalzemeler.length; i++) {
		console.log(secilenMalzemeler[i][0] + ", " + secilenMalzemeler[i][1]);//ismi
		HTML += "</tr></table>";
		document.getElementById("demo").innerHTML += HTML + secilenMalzemeler[i][0] + ", " + secilenMalzemeler[i][1];
	}
}
