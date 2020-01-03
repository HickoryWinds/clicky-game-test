import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CurrentScore from "./components/CurrentScore";
import TopScore from "./components/TopScore";
import Message from "./components/Message";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    cscore: 0,
    tscore: 0,
    message: 'Here it goes again!'
  };

  reorderFriends = friends => {
    // this.setState({ friends });
    console.log('pre-reorder friends');
    // console.log(friends);
    const random1 = Math.floor(Math.random()* 12);
    console.log(random1);
    const tempFriend1 = friends[random1];
    friends.splice(random1, 1); 
    friends.unshift(tempFriend1);
    // console.log(friends);
    const random2 = Math.floor(Math.random()* 12);
    const tempFriend2 = friends[random2];
    friends.splice(random2, 1); 
    friends.unshift(tempFriend2);
    const random3 = Math.floor(Math.random()* 12);
    // console.log(random);
    const tempFriend3 = friends[random3];
    friends.splice(random3, 1); 
    friends.unshift(tempFriend3);
    // console.log(friends);
    this.setState(friends);
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ cscore: this.state.cscore + 1 });
    if (this.state.cscore >= this.state.tscore) {
      this.setState({tscore : this.state.cscore + 1})
      this.setState({message: 'Overloaded'});
      // this.setState({cscore: 0});
    }
  };


  removeFriend = (id, guessed) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    var friends = this.state.friends;
    var cscore = this.state.cscore;
    var tscore = this.state.tscore;
    console.log('cscore');
    console.log(cscore);
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
    console.log('id');
    console.log(id);
    // console.log(friends);
    if (guessed === 'true') {
      this.setState({message: "Game Over"});
      this.setState({cscore: 0});
      for (var j = 0; j < friends.length; j++) {
        friends[j].guessed = 'false';
      }
      console.log(friends);
      return
    }
        // console.log(guessed);
    // console.log(friends[id-1]);
    function checkId(id, friends) {
      for (var i = 0; i < friends.length; i++)
      if (friends[i].id === id){
      friends[i].guessed = "true";
      // We always use the setState method to update a component's state
      // this.setState({ cscore: this.state.cscore + 1 });
      // handleIncrement();
    }
  }
  checkId(id, friends);
  this.setState({ cscore: this.state.cscore + 1 });
  if (this.state.cscore >= this.state.tscore) {
    this.setState({tscore : this.state.cscore + 1})
    this.setState({message: 'Overloaded'});
    // this.setState({cscore: 0});
  }
    // friends.forEach(checkId);
    // var friend = friends.find((friend) => {
    //   return friend.id === id;
    // })
    // console.log('my friend is')
    // console.log(friend)
    // friends[id-1].guessed = 'true';

    // function handleIncrement () {
    //   // We always use the setState method to update a component's state
    //   this.setState({ cscore: this.state.cscore + 1 });
    //   if (this.state.cscore >= this.state.tscore) {
    //     this.setState({tscore : this.state.cscore + 1})
    //     this.setState({message: 'Overloaded'});
    //     // this.setState({cscore: 0});
    //   }
    // };
    // handleIncrement();
    this.setState ({ friends });
    console.log('friends')
    console.log(friends)
    
    // console.log('guessed again')
    // console.log(id);
    // console.log(guessed);
    // // console.log(friends[id-1].guessed);
    this.reorderFriends(friends);
    // console.log('removeFriend');
    // console.log(friends);
    
  };
    
  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ tscore: this.state.tscore - 1 });
    if (this.state.tscore <= -10) {
      this.setState({message: 'Underloaded'});
      this.setState({tscore: 0});
    }
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <CurrentScore>Current Score: {this.state.cscore}</CurrentScore>
        <TopScore>Top Score: {this.state.tscore}</TopScore>
        <Message>{this.state.message}</Message>
        {this.state.friends.map(friend => (
          <FriendCard
          removeFriend={this.removeFriend}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
          guessed={friend.guessed}
          />
          ))}
      </Wrapper>
    );
  }
}
export default App;
