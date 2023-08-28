

const showSidebar = () => {
    const template = HtmlService.createTemplateFromFile('index');
    const personaOptions = ["Bank Manager", "CEO", "Designer", "Doctor", "Engineer", "Lawyer", "Marketer", "Musician", "Photographer", "Professor", "Salesperson", "Scientist", "Teacher", "Writer", "Artist", "Chef", "Journalist", "Athlete", "Entrepreneur", "Student"]
    const languageOptions = [
        "English",
        "Spanish",
        "French",
        "German",
        "Chinese (Simplified)",
        "Chinese (Traditional)",
        "Japanese",
        "Korean",
        "Russian",
        "Portuguese",
        "Italian",
        "Dutch",
        "Arabic",
        "Turkish",
        "Hindi",
        "Swedish",
        "Danish",
        "Norwegian",
        "Finnish",
        "Polish"
      ];
      
      const writingOptions = [
        "Academic Writing Style",
        "Business Writing Style",
        "Convincing Writing Style",
        "Creative Writing Style",
        "Enthusiastic Writing Style",
        "Journalism Writing Style",
        "Legal Writing Style",
        "Letter Writing Style",
        "Memoir Writing Style",
        "Persuasive Writing Style",
        "Technical Writing Style",
        "Scientific Writing Style",
        "Informal/Casual Writing Style",
        "Formal Writing Style",
        "Humorous Writing Style",
        "Informative Writing Style",
        "Narrative Writing Style",
        "Expository Writing Style",
        "Descriptive Writing Style",
        "Analytical Writing Style",
        "Argumentative Writing Style",
        "Satirical Writing Style",
        "Poetic Writing Style",
        "Dramatic Writing Style",
        "Instructional/How-To Writing Style",
        "Comparative Writing Style",
        "Reflective Writing Style",
        "Personal Anecdotal Writing Style",
        "Academic Research Writing Style",
        "Opinionated Writing Style"
      ];
      
    template.personaOptions = personaOptions;
    template.languageOptions = languageOptions;
    template.writingOptions = writingOptions;
    const RegisteredEmail = Session.getActiveUser().getEmail();
    template.loggedinEmail = RegisteredEmail;
    const html = template.evaluate().setTitle('Ai-Docs');
    DocumentApp.getUi().showSidebar(html);
}

export default showSidebar;