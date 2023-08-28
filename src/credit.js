

const acceptOpenAIKey = () => {
    const template = HtmlService.createTemplateFromFile('index-key');
    const RegisteredEmail = Session.getActiveUser().getEmail();
    const html = template.evaluate().setTitle('OpenAI-Key');
    DocumentApp.getUi().showSidebar(html);
}

export default acceptOpenAIKey;