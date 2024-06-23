import { Friend } from "./Friend";

export function FriendList({
  friends,
  selectedFriend,
  handleSelection,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          handleSelection={handleSelection}
        />
      ))}
    </ul>
  );
}
