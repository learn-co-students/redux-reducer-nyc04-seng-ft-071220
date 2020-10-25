export function manageFriends(state = {friends: []}, action){

    switch (action.type) {
        case 'ADD_FRIEND':
            let copyOfFriends = [...state.friends, action.friend]
            return {friends: [...copyOfFriends]}
        case 'REMOVE_FRIEND':
            let removeFriendId = state.friends.findIndex(friend => friend.id === action.id)
            let newCopyOfFriends = [...state.friends.slice(0, removeFriendId), ...state.friends.slice(removeFriendId + 1)]
            return {friends: newCopyOfFriends}
        default:
            return state
    }
}
