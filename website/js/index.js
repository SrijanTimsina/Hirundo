const embeddedLinkBtn = document.getElementById("embedded-link");
const dataSciBtn = document.getElementById("datasci-link");
const blockchainBtn = document.getElementById("blockchain-link");

const verticalLines = document.querySelectorAll(".vertical-line");
const horizontalLines = document.querySelectorAll(".horizontal-line");
const headingParagraphs = document.querySelectorAll(
	".main-page-heading"
);
let itaLanguage = true;

const languageBtn = document.querySelectorAll("#language-switch-btn");
const languageIcon = document.querySelectorAll("#language-icon");

const italian = [
	"Sistemi Embedded",
	`L'utilizzo di sistemi embedded sta crescendo
esponenzialmente, soprattutto negli ultimi anni. La loro
funzione è quella di collegare dispositivi elettronici a
quelli informatici, trovando una infinita applicazione nei
casi d'uso.<br /> <br /> Il nostro team non è solo specializzato nella
progettazione e sviluppo di sistemi embedded
personalizzati per ogni caso d'uso (dal settore
industriale per automatizzare processi meccanici a sistemi
di sicurezza intelligenti, al settore residenziale con la
domotica), ma grazie alle nostre conoscenze nel campo
della Blockchain e della Data Science, siamo capaci di
potenziare ed ottimizzare le nostre soluzioni, rendendole
idonee a qualsiasi richiesta.`,
	`L'Intelligenza Artificiale si concentra sulla creazione di
sistemi capaci di eseguire compiti che richiederebbero
intelligenza umana. Questi compiti possono includere
apprendimento, ragionamento, problem-solving, comprensione
del linguaggio naturale e interazione uomo-macchina.
Invece la Data Science si focalizza sull’estrazione e
sullo sviluppo di modelli matematici che utilizzano i dati
raccolti per migliorare, ottimizzare o analizzare un
determinato evento. <br /><br /> Il nostro team è specializzato nello sviluppo di soluzioni
personalizzate basate su Intelligenza Artificiale o Data
Science, in base alla richiesta dell’utente, come modelli
predittivi, chatbot o funzioni obiettivo. Il nostro scopo
è quello di applicare questi modelli ai lavori a noi
commissionati al fine di migliorare, ottimizzare o
analizzare un determinato processo o evento.`,
	`La blockchain è una tecnologia di registrazione digitale
che permette di memorizzare dati in modo sicuro,
trasparente e immutabile. Essa è strutturata come una
catena di blocchi, ognuno dei quali contiene un insieme di
transazioni o dati. Ogni blocco è collegato al blocco
precedente attraverso una funzione crittografica, creando
così una catena ininterrotta che è praticamente
impossibile da alterare. La caratteristica distintiva
della blockchain è il suo meccanismo di consenso
decentralizzato. Invece di affidare la validazione delle
transazioni a una singola entità centrale (come una banca
o un governo), la blockchain utilizza una rete di nodi
(computer) che collaborano per convalidare e registrare le
transazioni. Questo rende il sistema estremamente
resistente a frodi, attacchi e manipolazioni. <br /><br /> Il nostro team ha un forte background nello sviluppo di
applicativi blockchain con cui abbiamo realizzato app
decentralizzate, sistemi di supply chain e applicazioni
ibride di blockchain e Data Analysis.`,
	"contatti",
	"Clicca su una voce per saperne di più.",
];
const english = [
	"EMBEDDED SYSTEMS",
	`The use of embedded systems is growing exponentially, especially in recent years. Their function is to connect electronic devices with computer systems, finding endless applications in use cases.

<br /><br />

Our team is not only specialized in the design and development of custom embedded systems for every use case (from the industrial sector for automating mechanical processes to intelligent security systems, to the residential sector with home automation), but thanks to our expertise in the field of Blockchain and Data Science, we are able to enhance and optimize our solutions, making them suitable for any request.`,
	`Artificial Intelligence focuses on the creation of systems capable of performing tasks that would require human intelligence. These tasks can include learning, reasoning, problem-solving, understanding natural language, and human-machine interaction. On the other hand, Data Science focuses on the extraction and development of mathematical models that use collected data to improve, optimize, or analyze a specific event.

	<br /><br />

	Our team specializes in the development of custom solutions based on Artificial Intelligence or Data Science, depending on the user's request. Our aim is to apply these models to the projects commissioned to us in order to improve, optimize, or analyze a specific process or event.`,
	`Blockchain is a digital ledger technology that allows for the secure, transparent, and immutable storage of data. It is structured as a chain of blocks, each of which contains a set of transactions or data. Each block is linked to the previous block through a cryptographic function, creating an unbroken chain that is virtually impossible to alter. The distinctive feature of blockchain is its decentralized consensus mechanism. Instead of entrusting the validation of transactions to a single central entity (such as a bank or government), blockchain uses a network of nodes (computers) that collaborate to validate and record transactions. This makes the system extremely resistant to fraud, attacks, and manipulation.
	<br /><br />


	Our team has a strong background in the development of blockchain applications, with which we have created decentralized apps, supply chain systems, and hybrid applications of blockchain and Data Analysis.`,
	"contacts",
	"Click to know more.",
];

const translationEl = [
	embeddedLinkBtn,
	document.getElementById("embedded-paragraph"),
	document.getElementById("datasci-paragraph"),
	document.getElementById("blockchain-paragraph"),
	document.getElementById("menu-contact"),
	document.getElementById("fourth-title"),
];

languageBtn.forEach((el) =>
	el.addEventListener("click", () => {
		itaLanguage = !itaLanguage;
		if (itaLanguage) {
			languageIcon.forEach((el) => el.classList.remove("eng"));
			for (let i = 0; i < translationEl.length; i++) {
				translationEl[i].innerHTML = italian[i];
			}
		} else {
			languageIcon.forEach((el) => el.classList.add("eng"));
			for (let i = 0; i < translationEl.length; i++) {
				translationEl[i].innerHTML = english[i];
			}
		}
	})
);
embeddedLinkBtn.addEventListener("click", () => {
	elementsDisplay("none");
	paragraphShow("first-heading");
});
dataSciBtn.addEventListener("click", () => {
	elementsDisplay("none");
	paragraphShow("second-heading");
});
blockchainBtn.addEventListener("click", () => {
	elementsDisplay("none");
	paragraphShow("third-heading");
});
const elementsDisplay = (input) => {
	verticalLines.forEach((el) => {
		el.style.display = input;
	});
	horizontalLines.forEach((el) => {
		el.style.display = input;
	});
	headingParagraphs.forEach((el) => {
		el.style.display = input;
	});
};
const paragraphShow = (paragraphInput) => {
	document.getElementById("menu-container").style.display = "none";
	document.getElementById("back-desc").style.display = "block";
	document.getElementById(paragraphInput).classList.add("show");
	document.getElementById(paragraphInput).style.display = "block";
	setTimeout(() => {
		document
			.getElementById(paragraphInput)
			.classList.add("desc-show");
	}, 1000);
};

document.getElementById("back-desc").addEventListener("click", () => {
	document.querySelector(".show").classList.remove("show");
	document.querySelector(".desc-show").classList.remove("desc-show");
	document.getElementById("menu-container").style.display = "block";
	document.getElementById("back-desc").style.display = "none";
	elementsDisplay("block");
});
