/**
 * @type {import("@types/google-apps-script")}
 */
// ➫✉ MailMan
const onOpen = () =>{
  DocumentApp.getUi()
  .createMenu('➫✉ Ai-Docs')
  .addItem('Show Sidebar', 'showSidebar')
  .addSeparator()
  .addItem('OpenAI-Key','acceptOpenAIKey')
  .addToUi();
}

export default onOpen;