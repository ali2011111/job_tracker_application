
// Filen viser de forskjellige statusene som en jobbsøknad kan ha i applikasjonen. 
// Disse statusene brukes for å spore fremdriften til en jobbsøknad og gi brukeren informasjon om hvor de står i søknadsprosessen.

export const STATUS = {
  SENT: "SENT",
  INTERVIEW: "INTERVIEW",
  REJECTED: "REJECTED",
  OFFER: "OFFER"
}

export const STATUS_LABELS = {
  SENT: "Sendt",
  INTERVIEW: "Intervju",
  REJECTED: "Avslag",
  OFFER: "Tilbud"
}