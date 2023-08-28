

const showSidebar = () => {
    const template = HtmlService.createTemplateFromFile('index');
    const html = template.evaluate().setTitle('Ai-Docs');
    DocumentApp.getUi().showSidebar(html);
}

export default showSidebar;