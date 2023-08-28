//Created new Google Doc: https://drive.google.com/open?id=1xrVUep92mVFc7Q7Z5v7kkKM02JHZ8RyEPZaxI4Wti3Y
//Created new Google Docs Add-on script: https://script.google.com/d/12v8-trUDKkDTg6bid_uapkKTq6vZJ6iWO0TAO5X7Be3tRWRPrWH3pvgi/edit
// ➫✉ MailMan
/**
 * @type {import("@types/google-apps-script")}
 */
import onOpen from "./onOpen";
import showSidebar from "./sidebar";
import acceptOpenAIKey from "./credit";




global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.acceptOpenAIKey = acceptOpenAIKey;
