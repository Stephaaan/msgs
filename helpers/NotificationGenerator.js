module.exports = {
    generate: () => {
        const summaries = [
            "Warning", "Info", "Error"
        ]
        const severities = ["error", "warning", "info"]
        const details = ["Something happend", "Nothing happend", "Please reload page", "No error", "I really don't know"]

        const summaryId = Math.floor(Math.random() * summaries.length);

        console.log(summaryId);
        const generated =  {
        
            summary: summaries[Math.floor(Math.random() * summaries.length)],
            severity: severities[Math.floor(Math.random()* severities.length)],
            detail: details[Math.floor(Math.random() * details.length)],
        }
        console.log("generated: ", generated)
        return generated;
    }
}