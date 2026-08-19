import { SubscribeBtn } from "./Button"
import './userDetails.css'
export const UserDetails = ((
    {
        name, 
        isOnline, 
        hideOffline, 
        isPremium, 
        isNewUser, 
        role
    }) => {
    if(hideOffline && !isOnline){
        return null
    }

    let roleBadge = null;

    if(role === "admin")roleBadge = <span>🗝️ Admin</span>
    else if(role === "moderator") roleBadge = <span>👮‍♂️ Moderator</span>
    else if (role === "vip") roleBadge = <span>💎 VIP</span>
    return(
        <div id="user-details">
            {isPremium && <span>✨</span>}
            {isNewUser && <span>🎉</span>}
            {roleBadge}
            <h3>{ name }</h3>
            <p>Status: { isOnline ? "Online" : "Offline" }</p>
            <p>{ isOnline ? 'Available for chat' : "Not Available" }</p>
            <SubscribeBtn />
            {
                isOnline ? (
                    <button>Send message</button>
                ) : <small>Check back later</small>
            }
        </div>
    )
})