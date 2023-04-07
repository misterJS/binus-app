import {
    Avatar, ChatContainer, Conversation, ConversationHeader, ConversationList, InfoButton, MainContainer, Message,
    MessageInput, MessageList, Sidebar
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { IconButton, Paper } from "@mui/material";
import EmojiPicker, {
    EmojiClickData
} from "emoji-picker-react";
import { memo, useRef, useState } from "react";
import { Content } from "../../components";
import { useChatSetup } from "./Chat.utils";

const ChatMemo = () => {
    const [messageInputValue, setMessageInputValue] = useState("");
    const avatarIco =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUOHCyclYufmI0AECZvbGkAACCjm5AIGCoxOUIAEycAFSgLGisNHCwEFykDFyljY2N9enUlLjkACCKWkIc+Q0lmZmWIhH0bJjN/e3YVIjGSjYRAREpbXF0tND54dXGEgHpKTVFTVVcfARIMAAADVklEQVR4nO3ciXaiMABA0ZA4lhBEcV+r/v9PTtA6FUVGLXOyzLtf4DtktVghAAAAAAAAAAAAAAAAAAAAAABAuIwej9XAuP4Y/4xR5XY+6U11pI1GL4ZrmSQyGaXZIHf9cTqXa7Gt+ipSfqZ64PoTdcuoYjj56js3jtJxRM/RqMUwueo7Ny6nqohjPtr1Zbi+6Ts1JqNpFsGak2eLxr5z4zItAp+PRtfn313jaT66/pTvM2p1N//uGvv7YOdjNf/ant/VWJ3qABsv+/szzmtOWHtHrldP950a7XwM6QxglJk9Mz7rjcvpOJCxWs2/v60vzY37qc78b7R9s1fGZ60xWW58PwMYu7+/Oj5vGr0+A9yer99qrM4AheuSZnZ/n8kf9p0a7RnAyzVHly+vnw8bq/no3faYbd5dX5obe749xNy8s0G0NW6166a6bNttYJJMxq6b6lSv68L+L9dNdRRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FFJIoXsUUkihexRSSKF7FL5Oxl4oR8p1U13XhXJdevb6ZbeFUo5K396E7rJQyvlBfLguutVdoUyWB+PfO9BdFUopZztV+NfXUaHs749KebbCXHTwFrScfKbGs5e7r5iy/7M8uR7ulNe/0Bt//uTHQNXq6evwvMjz+buJMumlYw9Xz1sfi7cS7ePbikB+XJntXk+Uk9FmpT0fnt+K3frFxzeZpdrLze+RbPdKX39+XKmPkPqsLJ0825d82tUlmOH5LZs+k2gf37DMwlhd7mSbJx7f/mBXl8CG5x+5PvzlcCP3UxXi8Pymju17xjys1bOJaj2Ey6O/h+tnGT1s+38taaArzLU8m7Ukpt59P/GGvO0+HEWhMC13qTgKRV48TIykUBgxepAYS6Ew+b45MZpCu2k0XxfjKRRm1ZgYUaEoyqbEmArtjbjhv4FEVdh46Y+rsCkxskKhN7eX/tgKhTrEXmgTZeSFuap/rxFf4e33GjEW1i/9MRbWL/1RFopc9/pxF15/rxFpoR2ol0t/rIX2Rvx16Y+20F4Xz5f+eAvtUzxdFyMuFKaw10Xp2zuHnRqU8/5chf53mVaDxSHqRyiqgRp5IAAAAAAAAAAAAAAAAAAAAAAA/4Hf0gU2cK/EibwAAAAASUVORK5CYII=";
    const [showIcon, setShowIcon] = useState<boolean>(false)
    const [messages, setMessages] = useState<any>([])
    const { messageList, messagesLists, postMessageParam } = useChatSetup();

    const inputRef = useRef<any>(null);

    const onClickEmoji = (emojiData: EmojiClickData, event: MouseEvent) => {
        setMessageInputValue(messageInputValue => messageInputValue + emojiData.emoji)
        setShowIcon(false)
        inputRef?.current?.focus();
    }

    const onSendMessage = () => {
        setMessages([...messages, {
            message: messageInputValue,
        }])
        postMessageParam(messageInputValue)
        setMessageInputValue("")
    }

    const user = JSON.parse(localStorage.getItem('userData') as any)

    return (
        <Content>
            <Paper sx={{ marginTop: '-35px', marginLeft: '-50px', marginRight: '-46px' }}>
                <div
                    style={{
                        height: 850,
                        position: "relative"
                    }}
                >
                    <MainContainer responsive style={{ overflowX: "hidden" }}>
                        {user?.roleID === "1" &&
                            <Sidebar position="left" scrollable={false}>
                                <ConversationList>
                                    {messagesLists?.returnValue?.map((user: any) => <Conversation name={user.senderFullName}>
                                        <Avatar src="https://pixlr.com/images/index/remove-bg.webp" status="available" />
                                    </Conversation>)}
                                </ConversationList>
                            </Sidebar>
                        }
                        <ChatContainer>
                            <ConversationHeader>
                                <ConversationHeader.Back />
                                <Avatar src={messageList?.returnValue?.length > 0 && messageList?.returnValue[0]?.targetPhoto} name="Zoe" />
                                <ConversationHeader.Content
                                    userName={messageList?.returnValue?.length > 0 && messageList?.returnValue[0]?.targetFullName}
                                    info={messageList?.returnValue?.length > 0 && messageList?.returnValue[0]?.targetUsername}
                                />
                                <ConversationHeader.Actions>
                                    <InfoButton />
                                </ConversationHeader.Actions>
                            </ConversationHeader>
                            <MessageList
                            // typingIndicator={<TypingIndicator content="Zoe is typing" />}
                            >
                                {/* <MessageSeparator /> */}

                                {messageList?.returnValue?.map((message: any) =>
                                    <Message
                                        model={{
                                            message: message.message,
                                            sentTime: "15 mins ago",
                                            sender: "Patrik",
                                            direction: "outgoing",
                                            position: "single"
                                        }}
                                        avatarSpacer
                                    >
                                        <Avatar src={`https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg`} name={message.senderUsername} />
                                    </Message>
                                )}

                            </MessageList>
                            {/* 
                              // @ts-ignore */}
                            <div as="MessageInput" style={{ display: "flex", alignItems: "center", flexDirection: "row", width: '100%' }}>
                                <MessageInput
                                    placeholder="Type message here"
                                    attachButton={false}
                                    value={messageInputValue}
                                    color="#fff"
                                    onSend={onSendMessage}
                                    ref={inputRef}
                                    style={{ width: '97%', border: 'none' }}
                                    onChange={(e) => setMessageInputValue(e)}
                                />
                                <IconButton sx={{ padding: '0px' }} onClick={() => setShowIcon(!showIcon)}>
                                    <SentimentSatisfiedAltIcon fontSize="large" sx={{
                                        paddingTop: "0.2em",
                                        paddingBottom: "0.2em",
                                        color: "#6ea9d7",
                                        backgroundColor: 'transparent'
                                    }}
                                    />
                                </IconButton>
                            </div>
                        </ChatContainer>
                        {showIcon && <div style={{ position: 'absolute', right: 0, zIndex: 1, bottom: '53px' }}>
                            <EmojiPicker onEmojiClick={onClickEmoji} emojiVersion="0.6" />
                        </div>}
                    </MainContainer>
                </div>
            </Paper>
        </Content>
    );
}

export const Chat = memo(ChatMemo);