import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const conversations = await getConversations();

    return (
        <Sidebar>
            <ConversationList initialItems={conversations} />
            <div className="h-full">{children}</div>
        </Sidebar>
    );
}
