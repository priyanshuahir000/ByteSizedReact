import { useState } from "react";
import { FriendList } from "./FriendList";
import { FormAddFriend } from "./FormAddFriend";
import { Button } from "./Button";
import { FormSplitBill } from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelection(friend) {
    setSelectedFriend(selectedFriend == friend ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <>
      <h1>Bill Splitter</h1>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            selectedFriend={selectedFriend}
            handleSelection={handleSelection}
          />
          {showAddFriend && (
            <FormAddFriend setFriends={setFriends} friends={friends} />
          )}
          <Button
            onClick={() => {
              setShowAddFriend(!showAddFriend);
              setSelectedFriend(null);
            }}
          >
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}
